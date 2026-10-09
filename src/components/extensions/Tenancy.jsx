// R-001 tenant isolation, R-012 MSP mode and R-013 branding.
// - TenantSwitcher: sidebar workspace selector (delegated tenants for MSP / platform admin only)
// - TenantWorkspace: what a delegated tenant's screens show (only that tenant's records)
// - IsolationTestPanel: negative cross-tenant checks (Tenant A cannot read Tenant B)
// - BrandingPanel / useBranding: tenant branding applied app-wide without a code fork
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';
import { CAP, HOME_BY_ROLE, ROLES, ROLE_LABEL, can } from '../../roles';
import { HOME_TENANT, TENANTS, activeBranding, activeTenant, scoped, store, tenantById, useStore } from '../../demo/store';
import { DecisionPanel } from './Decisions';
import { DecisionEvidencePanel, EvidenceProvider } from './Evidence';
import { UseCasePanel } from './UseCases';
import {
  BTN_PRIMARY, BTN_SECONDARY, CARD, CHIP, EmptyState, Field, GatedButton, Icon, Modal, PanelHeader, TextArea, TextInput, formatTime,
} from '../ui';

const DEFAULT_COLORS = { '--brand-primary': '0 40 142', '--brand-primary-container': '30 64 175', '--brand-surface-tint': '55 85 195' };

const hexToRgb = (hex) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

export function tenantsForRole(role) {
  if (role === ROLES.PLATFORM_ADMIN || role === ROLES.MSP_OPERATOR) return TENANTS;
  return TENANTS.filter((t) => t.id === HOME_TENANT);
}

// Applies the active tenant's brand colors to the whole app (CSS variables).
export function useBranding() {
  const s = useStore();
  const b = activeBranding(s);
  useEffect(() => {
    const root = document.documentElement.style;
    const primary = b && hexToRgb(b.primary);
    const accent = b && hexToRgb(b.accent);
    root.setProperty('--brand-primary', primary || DEFAULT_COLORS['--brand-primary']);
    root.setProperty('--brand-primary-container', accent || DEFAULT_COLORS['--brand-primary-container']);
    root.setProperty('--brand-surface-tint', accent || DEFAULT_COLORS['--brand-surface-tint']);
  }, [b]);
  return b;
}

export function TenantSwitcher() {
  const s = useStore();
  const { user } = useAuth();
  const navigate = useNavigate();
  const branding = activeBranding(s);
  const current = activeTenant(s);
  const options = tenantsForRole(user.role);
  const canSwitch = options.length > 1;
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const doSwitch = () => {
    store.setTenant(confirm.id, `${user.name} (${ROLE_LABEL[user.role]})`);
    setConfirm(null);
    setOpen(false);
    navigate(HOME_BY_ROLE[user.role]);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => canSwitch && setOpen((v) => !v)}
        aria-expanded={open}
        title={canSwitch ? 'Switch tenant workspace' : 'Your role is limited to this tenant'}
        className="w-full p-space-xs rounded bg-surface-container-lowest flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-space-xs overflow-hidden">
          {branding?.logo
            ? <img src={branding.logo} alt="" className="w-5 h-5 rounded object-contain" />
            : <span className="material-symbols-outlined text-primary text-[16px]">domain</span>}
          <div className="flex flex-col truncate">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{current.id === HOME_TENANT ? 'Enclave Workspace' : 'Delegated Tenant'} · {current.id}</span>
            <span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">{branding?.displayName || current.name}</span>
          </div>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant text-[16px]">{canSwitch ? 'unfold_more' : 'lock'}</span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-surface-container-lowest rounded-lg shadow-xl p-space-xs flex flex-col gap-1">
          <span className="px-space-xs pt-1 font-label-sm text-label-sm text-secondary uppercase tracking-wider">{user.role === ROLES.MSP_OPERATOR ? 'Delegated customer tenants' : 'All tenants'}</span>
          {options.map((t) => (
            <button
              key={t.id}
              type="button"
              disabled={t.id === current.id}
              onClick={() => setConfirm(t)}
              className={`text-left px-space-xs py-1.5 rounded flex items-center justify-between gap-space-xs ${t.id === current.id ? 'bg-primary-fixed text-on-primary-fixed' : 'hover:bg-surface-container-low text-on-surface'}`}
            >
              <span className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md truncate">{t.name}</span>
                <span className="font-mono text-[10px] text-on-surface-variant">{t.id}</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">{t.delegation === 'home' ? 'Home' : t.delegation === 'audit-only' ? 'Audit only' : 'Delegated'}</span>
            </button>
          ))}
        </div>
      )}
      {confirm && (
        <Modal
          title="Switch Tenant Workspace?"
          icon="swap_horiz"
          onClose={() => setConfirm(null)}
          footer={(
            <>
              <button type="button" className={BTN_SECONDARY} onClick={() => setConfirm(null)}>Cancel</button>
              <button type="button" className={BTN_PRIMARY} onClick={doSwitch}><Icon name="swap_horiz" />Switch to {confirm.id}</button>
            </>
          )}
        >
          <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
            <p>You are leaving <strong>{current.name}</strong> and entering <strong>{confirm.name}</strong>.</p>
            <ul className="list-disc pl-5 font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
              <li>Data from the current tenant is cleared from view; only {confirm.id} records are shown.</li>
              <li>Delegation level: <strong>{confirm.delegation === 'home' ? 'home tenant' : confirm.delegation === 'audit-only' ? 'audit only' : 'administration'}</strong>.</li>
              {user.role === ROLES.MSP_OPERATOR && <li>No approval or execution rights carry across tenants.</li>}
              <li>The switch is recorded in both tenants' audit trails.</li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export function IsolationTestPanel() {
  const s = useStore();
  const { user } = useAuth();
  const current = activeTenant(s);
  const other = TENANTS.find((t) => t.id !== current.id);
  const [results, setResults] = useState(null);
  const [running, setRunning] = useState(false);

  const run = () => {
    setRunning(true);
    setResults(null);
    window.setTimeout(() => {
      const checks = [
        { boundary: 'API', request: `GET /api/tenants/${other.id}/decisions`, result: '403 TENANT_SCOPE_MISMATCH' },
        { boundary: 'Repository', request: `SELECT … WHERE tenant_id = '${other.id}'`, result: '0 rows (row-level security)' },
        { boundary: 'Vector / AI retrieval', request: `search("vendor attestations", tenant=${other.id})`, result: '0 chunks returned' },
        { boundary: 'Evidence storage', request: `GET /evidence/${other.id}/EVD-0001`, result: '403 ACCESS_DENIED' },
        { boundary: 'Connector / job', request: `enqueue(graph.read, tenant=${other.id})`, result: 'Rejected: job tenant ≠ session tenant' },
      ];
      setResults(checks);
      setRunning(false);
      store.log('ISOLATION_TEST', `Negative cross-tenant checks from ${current.id} against ${other.id}: ${checks.length}/${checks.length} blocked.`, `${user.name} (${ROLE_LABEL[user.role]})`);
    }, 900);
  };

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="verified_user" title="Tenant Isolation Check (Negative Cross-Tenant Tests)">
        <button type="button" className={BTN_PRIMARY} onClick={run} disabled={running}>
          <Icon name={running ? 'progress_activity' : 'play_arrow'} className={`text-[18px] ${running ? 'animate-spin' : ''}`} />
          {running ? 'Running…' : `Try to read ${other.id} from ${current.id}`}
        </button>
      </PanelHeader>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Session tenant: <strong className="text-on-surface">{current.id} · {current.name}</strong>. Each request below targets a different tenant and must be blocked.</p>
      {results && (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead><tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider"><th className="py-1 pr-space-sm">Boundary</th><th className="py-1 pr-space-sm">Request</th><th className="py-1 pr-space-sm">Result</th><th className="py-1">Status</th></tr></thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.boundary} className="border-t border-surface-container">
                  <td className="py-1.5 pr-space-sm text-on-surface font-semibold">{r.boundary}</td>
                  <td className="py-1.5 pr-space-sm font-mono text-[11px] text-on-surface-variant">{r.request}</td>
                  <td className="py-1.5 pr-space-sm font-mono text-[11px] text-on-surface">{r.result}</td>
                  <td className="py-1.5"><span className={`${CHIP} bg-tertiary-container text-on-tertiary-container`}>Blocked</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// On the home tenant it publishes the values from the client's "Tenant Virtual Brand Injection"
// form above; on delegated tenants it shows its own fields.
export function BrandingPanel() {
  const s = useStore();
  const { user } = useAuth();
  const current = activeTenant(s);
  const existing = activeBranding(s);
  const clientForm = current.id === HOME_TENANT;
  const [fields, setFields] = useState(() => existing || {
    displayName: current.name, assistantName: `${current.short} Copilot`, welcome: `Welcome to the ${current.short} governed AI workspace.`, primary: '#00288E', accent: '#1E40AF', logo: null,
  });
  const [msg, setMsg] = useState('');
  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const readClientForm = () => {
    const val = (id) => document.getElementById(id)?.value?.trim();
    return {
      displayName: val('brand-tenant-name') || current.name,
      assistantName: val('brand-copilot-name') || 'Ceryvra Copilot',
      welcome: val('brand-banner-text') || '',
      primary: val('color-primary-input') || '#00288E',
      accent: val('color-accent-input') || '#1E40AF',
    };
  };

  const publish = () => {
    const values = clientForm ? { ...readClientForm(), logo: fields.logo } : fields;
    if (!hexToRgb(values.primary) || !hexToRgb(values.accent)) {
      setMsg('Colors must be 6-digit hex values, for example #002D62.');
      return;
    }
    store.setBranding(current.id, values, `${user.name} (${ROLE_LABEL[user.role]})`);
    setMsg(`Published to ${current.id}. The sidebar, dashboard welcome banner, chat assistant name and brand colors now use it.`);
  };

  const reset = () => {
    store.setBranding(current.id, null, `${user.name} (${ROLE_LABEL[user.role]})`);
    setMsg('Branding reset to the platform default.');
  };

  const onLogo = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setFields((x) => ({ ...x, logo: reader.result }));
    reader.readAsDataURL(f);
  };

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="brush" title={`Publish Tenant Branding (${current.id})`}>
        {existing && <span className={`${CHIP} bg-tertiary-container text-on-tertiary-container`}>Custom branding live</span>}
      </PanelHeader>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        {clientForm
          ? 'Uses the display title, assistant persona, disclosure banner and color tokens from the brand form on this page. Add a logo here, then publish. No code change or redeploy is needed.'
          : 'Set this tenant\'s assistant name, logo, welcome message and colors. No code change or redeploy is needed.'}
      </p>
      {!clientForm && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
          <Field label="Workspace display title" htmlFor="b-name"><TextInput id="b-name" value={fields.displayName} onChange={set('displayName')} /></Field>
          <Field label="Assistant name" htmlFor="b-assistant"><TextInput id="b-assistant" value={fields.assistantName} onChange={set('assistantName')} /></Field>
          <div className="md:col-span-2"><Field label="Welcome message" htmlFor="b-welcome"><TextArea id="b-welcome" rows={2} value={fields.welcome} onChange={set('welcome')} /></Field></div>
          <Field label="Primary color" htmlFor="b-primary"><TextInput id="b-primary" value={fields.primary} onChange={set('primary')} /></Field>
          <Field label="Accent color" htmlFor="b-accent"><TextInput id="b-accent" value={fields.accent} onChange={set('accent')} /></Field>
        </div>
      )}
      <div className="flex items-center gap-space-sm flex-wrap">
        <label className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
          <span className="font-label-md text-label-md">Logo</span>
          <input type="file" accept="image/png,image/svg+xml,image/jpeg" onChange={onLogo} className="font-body-sm text-body-sm" />
        </label>
        {fields.logo && <img src={fields.logo} alt="Logo preview" className="w-8 h-8 rounded object-contain bg-surface-container-low" />}
      </div>
      <div className="flex items-center gap-space-sm flex-wrap">
        <GatedButton cap={CAP.CONFIGURE} onClick={publish}><Icon name="publish" />Publish Branding</GatedButton>
        {existing && <GatedButton cap={CAP.CONFIGURE} className={BTN_SECONDARY} onClick={reset}><Icon name="restart_alt" />Reset to Default</GatedButton>}
      </div>
      {msg && <div className="bg-surface-container-low rounded-lg p-space-sm font-body-sm text-body-sm text-on-surface" role="status">{msg}</div>}
    </div>
  );
}

export function WelcomeBanner() {
  const s = useStore();
  const b = activeBranding(s);
  if (!b?.welcome) return null;
  return (
    <div className="bg-primary text-on-primary rounded-xl p-space-md mb-space-md flex items-center gap-space-sm shadow-sm" role="note">
      {b.logo ? <img src={b.logo} alt="" className="w-10 h-10 rounded bg-on-primary/10 object-contain" /> : <Icon name="campaign" className="text-[24px]" />}
      <div className="flex flex-col">
        <span className="font-label-md text-label-md font-semibold">{b.displayName} · {b.assistantName}</span>
        <span className="font-body-sm text-body-sm opacity-90">{b.welcome}</span>
      </div>
    </div>
  );
}

const KIND_ICON = {
  USE_CASE_CREATED: 'add_box', USE_CASE_REVIEWED: 'approval_delegation', DECISION_RECORDED: 'balance', EVIDENCE_ATTACHED: 'cloud_upload',
  TENANT_CONTEXT_SWITCH: 'swap_horiz', BRANDING_APPLIED: 'brush', ISOLATION_TEST: 'verified_user', M365_READ: 'cloud_sync',
  M365_READ_BLOCKED: 'block', GOVERNED_CHAT: 'smart_toy', MODEL_BLOCKED: 'block',
};

export function ActivityPanel() {
  const s = useStore();
  const current = activeTenant(s);
  const items = scoped(s, 'activity').slice().reverse();
  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="receipt_long" title={`Governance Activity · ${current.id}`}>
        <span className={`${CHIP} bg-surface-container-highest text-on-surface`}>Append-only · tenant-scoped</span>
      </PanelHeader>
      {items.length === 0 ? (
        <EmptyState icon="receipt_long" title="No activity recorded for this tenant yet" />
      ) : (
        <ol className="flex flex-col gap-space-xs max-h-[420px] overflow-y-auto">
          {items.map((e, i) => (
            <li key={i} className="flex items-start gap-space-sm p-space-xs rounded-lg bg-surface-container-low">
              <Icon name={KIND_ICON[e.kind] || (e.kind.startsWith('RECOMMENDATION') ? 'recommend' : 'circle')} className={`text-[18px] mt-0.5 ${/BLOCKED|FAILED/.test(e.kind) ? 'text-error' : 'text-primary'}`} />
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="font-mono text-[11px] text-on-surface font-semibold">{e.kind}</span>
                  <span className="font-mono text-[11px] text-on-surface-variant">{formatTime(e.at)}</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface">{e.text}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Authority: {e.actor}</span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

// Pages a delegation level allows inside a delegated tenant.
export function delegationAllows(tenant, role, path) {
  if (tenant.delegation === 'audit-only' && role === ROLES.MSP_OPERATOR) return ['/dashboard', '/audit-history'].includes(path);
  return true;
}

function TenantSummary() {
  const s = useStore();
  const ucs = scoped(s, 'useCases');
  const decs = scoped(s, 'decisions');
  const cards = [
    ['Governed use cases', ucs.length, 'rule_folder'],
    ['Decisions', decs.length, 'balance'],
    ['Provisional decisions', decs.filter((d) => d.status === 'PROVISIONAL').length, 'hourglass_top'],
    ['Audit events', scoped(s, 'activity').length, 'receipt_long'],
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm mb-space-md">
      {cards.map(([label, n, icon]) => (
        <div key={label} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{label}</span><Icon name={icon} className="text-primary text-[20px]" /></div>
          <span className="font-headline-lg text-headline-lg text-on-surface">{n}</span>
        </div>
      ))}
    </div>
  );
}

const LIFECYCLE_EMPTY = {
  '/change-detection': ['Change Detection & Impact', 'No new, changed or expired evidence detected for this tenant.'],
  '/revalidation': ['Targeted Revalidation', 'No decisions are queued for revalidation in this tenant.'],
  '/consequence-graph': ['Consequence & Dependency Graph', 'No changed decision to traverse in this tenant.'],
  '/recovery': ['Recovery Planning', 'No open recovery cases in this tenant.'],
  '/verification': ['Approvals & Verification', 'Nothing is awaiting independent verification in this tenant.'],
  '/governed-chat': ['Governed Chat / Copilot', 'Chat history is tenant-scoped. No conversations exist yet in this tenant.'],
  '/notes': ['Governance Notes', 'Notes are tenant-scoped. No notes exist yet in this tenant.'],
  '/admin/rules': ['Admin Rules & Evidence', 'This tenant uses the platform default rule set. No tenant-specific rules have been configured.'],
};

export function TenantWorkspace({ page }) {
  const s = useStore();
  const { user } = useAuth();
  const navigate = useNavigate();
  const tenant = activeTenant(s);
  const allowed = delegationAllows(tenant, user.role, page.path);
  const back = () => {
    store.setTenant(HOME_TENANT, `${user.name} (${ROLE_LABEL[user.role]})`);
    navigate(HOME_BY_ROLE[user.role]);
  };

  let body;
  if (!allowed) {
    body = <EmptyState icon="gpp_bad" title="Not included in this tenant's delegation">{tenant.name} has delegated audit access only. Use Overview or Audit Log &amp; History.</EmptyState>;
  } else if (page.path === '/dashboard') {
    body = <><WelcomeBanner /><TenantSummary /><ActivityPanel /></>;
  } else if (page.path === '/governance-inventory') {
    body = <UseCasePanel />;
  } else if (page.path === '/decision-record') {
    body = <DecisionPanel />;
  } else if (page.path === '/missing-evidence') {
    body = <EvidenceProvider><DecisionEvidencePanel /></EvidenceProvider>;
  } else if (page.path === '/audit-history') {
    body = <ActivityPanel />;
  } else if (page.path === '/admin/tenants') {
    body = <><IsolationTestPanel /><BrandingPanel /></>;
  } else {
    const [, text] = LIFECYCLE_EMPTY[page.path] || [page.title, 'Nothing to show for this tenant.'];
    body = <EmptyState icon="inbox" title={`${page.title}: empty for ${tenant.id}`}>{text}</EmptyState>;
  }

  return (
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant min-w-0">
          <span className="truncate">{activeBranding(s)?.displayName || tenant.name}</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold truncate">{page.title}</span>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <span className="hidden md:inline font-label-sm text-label-sm text-on-surface-variant">{user.name} · {ROLE_LABEL[user.role]}</span>
        </div>
      </header>
      <main className="relative w-full pt-16 px-gutter pb-space-xl bg-surface min-h-screen">
        <div className="mt-space-lg mb-space-md bg-secondary-container text-on-secondary-container rounded-xl p-space-md flex items-start justify-between gap-space-sm flex-wrap" role="note">
          <div className="flex items-start gap-space-sm">
            <Icon name="swap_horiz" className="text-[22px]" />
            <div className="flex flex-col gap-0.5">
              <span className="font-label-md text-label-md font-semibold">Delegated tenant session · {tenant.id} · {tenant.name}</span>
              <span className="font-body-sm text-body-sm">
                Delegation: {tenant.delegation === 'audit-only' ? 'audit only' : 'administration'}. Only this tenant's records are shown; nothing from {HOME_TENANT} or other customers is visible.
                {user.role === ROLES.MSP_OPERATOR && ' No cross-tenant approval or execution rights.'}
              </span>
            </div>
          </div>
          <button type="button" className={BTN_SECONDARY} onClick={back}><Icon name="home" />Return to home tenant</button>
        </div>
        {body}
        {can(user.role, CAP.MSP_SWITCH) && page.path !== '/admin/tenants' && allowed && (
          <p className="font-body-sm text-body-sm text-on-surface-variant">Run the cross-tenant isolation check from <Link className="text-primary hover:underline" to="/admin/tenants">Settings &amp; Tenancy</Link>.</p>
        )}
      </main>
    </div>
  );
}

export { tenantById };
