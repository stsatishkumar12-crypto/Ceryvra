// Shared sidebar, recreated from the most complete client sidebar (Consequence Graph page:
// icons on top-level items, nested Evidence & Proofs group).
// The client pages each had a slightly different sidebar; this one unifies them so every page
// is reachable. "Targeted Revalidation" and "Governance Notes" were added because those
// screens exist in the client files but had no sidebar entry.
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { ROLE_ICON, ROLE_LABEL, canAccess } from '../roles';
import WorkflowGuide from './WorkflowGuide';
import { TenantSwitcher } from './extensions/Tenancy';

const IDLE = 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface';
const ACTIVE = 'bg-primary-container text-on-primary font-semibold shadow-sm';

const BADGE = {
  neutral: 'px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm',
  secondary: 'px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm',
  error: 'px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm',
  live: 'px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm',
  neutralSecondary: 'px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm',
};

const TOP = [
  { to: '/dashboard', icon: 'dashboard', label: 'Overview / Dashboard' },
  { to: '/governance-inventory', icon: 'rule_folder', label: 'Governed Use Cases' },
  { to: '/decision-record', icon: 'fact_check', label: 'Decision Registry' },
];
const EVIDENCE = { to: '/missing-evidence', icon: 'fingerprint', label: 'Evidence & Proofs', badge: ['4', 'neutral'] };
const EVIDENCE_CHILDREN = [
  { to: '/missing-evidence', label: 'Completeness & Obligations', badge: ['3 Missing', 'error'] },
  { to: '/change-detection', label: 'Change Detection & Impact', badge: ['Live', 'live'] },
  { to: '/revalidation', label: 'Targeted Revalidation' },
  { to: '/consequence-graph', label: 'Consequence & Dependency' },
  { to: '/recovery', label: 'Recovery Planning', badge: ['Active', 'secondary'] },
];
const BOTTOM = [
  { to: '/verification', icon: 'verified', label: 'Approvals & Verification', badge: ['2', 'neutralSecondary'] },
  { to: '/governed-chat', icon: 'terminal', label: 'Governed Chat / Copilot' },
  { to: '/notes', icon: 'edit_note', label: 'Governance Notes' },
  { to: '/audit-history', icon: 'history_edu', label: 'Audit Log & History' },
  { to: '/admin/rules', icon: 'policy', label: 'Compliance & Policies' },
  { to: '/admin/tenants', icon: 'tune', label: 'Settings & Tenancy' },
];

function Item({ item, child = false, highlight = true }) {
  const cls = ({ isActive }) => {
    const layout = child || item.badge ? 'justify-between' : 'gap-space-sm';
    return `flex items-center ${layout} px-space-sm py-space-xs rounded-lg transition-colors ${isActive && highlight ? ACTIVE : IDLE}`;
  };
  const badge = item.badge && <span className={BADGE[item.badge[1]]}>{item.badge[0]}</span>;
  if (child) {
    return (
      <NavLink to={item.to} end className={cls}>
        <span className="font-body-sm text-body-sm truncate">{item.label}</span>
        {badge}
      </NavLink>
    );
  }
  const icon = <span className="material-symbols-outlined text-[18px]">{item.icon}</span>;
  return (
    <NavLink to={item.to} end className={cls}>
      {item.badge ? (
        <>
          <div className="flex items-center gap-space-sm">
            {icon}
            <span className="font-label-md text-label-md">{item.label}</span>
          </div>
          {badge}
        </>
      ) : (
        <>
          {icon}
          <span className="font-label-md text-label-md flex-1">{item.label}</span>
        </>
      )}
    </NavLink>
  );
}

const STATES = [
  ['', 'Live screen', 'visibility'],
  ['loading', 'Loading', 'hourglass_empty'],
  ['empty', 'Empty', 'inbox'],
  ['error', 'Error', 'error'],
  ['denied', 'Permission denied', 'gpp_bad'],
];

// Previews the standard app-shell states (scope §8) on the current screen.
function StateMenu() {
  const [open, setOpen] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const current = new URLSearchParams(search).get('preview') || '';
  const pick = (kind) => {
    setOpen(false);
    navigate(kind ? `${pathname}?preview=${kind}` : pathname);
  };
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface">
        <span className="material-symbols-outlined text-[16px]">layers</span>
        <span className="font-label-sm text-label-sm">States</span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 w-48 bg-surface-container-lowest rounded-lg shadow-xl p-space-xs flex flex-col gap-0.5 z-50">
          <span className="px-space-xs pt-1 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Preview screen state</span>
          {STATES.map(([kind, label, icon]) => (
            <button key={label} type="button" onClick={() => pick(kind)} className={`text-left px-space-xs py-1 rounded flex items-center gap-space-xs font-label-md text-label-md ${current === kind ? 'bg-primary-fixed text-on-primary-fixed' : 'text-on-surface hover:bg-surface-container-low'}`}>
              <span className="material-symbols-outlined text-[16px]">{icon}</span>{label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ open = false, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const allowed = (item) => canAccess(user.role, item.to);

  const signOut = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      aria-label="Main navigation"
    >
      <div className="flex flex-col min-h-0 flex-1">
        <div className="px-space-md py-space-md flex items-center justify-between bg-surface-container">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">shield_with_house</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-primary">Ceryvra</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">AI GOVERNANCE ENGINE</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-[18px] hidden lg:inline">verified_user</span>
          <button type="button" onClick={onClose} className="lg:hidden p-1 rounded text-on-surface-variant hover:bg-surface-container-high" aria-label="Close navigation">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="px-space-md py-space-sm bg-surface-container-high/60">
          <TenantSwitcher />
        </div>
        <nav className="flex-1 overflow-y-auto px-space-sm py-space-sm flex flex-col gap-space-xs">
          {TOP.filter(allowed).map((item) => <Item key={item.to} item={item} />)}
          {EVIDENCE_CHILDREN.some(allowed) && (
            <div className="flex flex-col gap-space-xs">
              {allowed(EVIDENCE) && <Item item={EVIDENCE} highlight={false} />}
              <div className="pl-space-lg flex flex-col gap-space-xs">
                {EVIDENCE_CHILDREN.filter(allowed).map((item) => <Item key={item.to + item.label} item={item} child />)}
              </div>
            </div>
          )}
          {BOTTOM.filter(allowed).map((item) => <Item key={item.to} item={item} />)}
        </nav>
      </div>
      <div className="p-space-sm bg-surface-container flex flex-col gap-space-xs">
        <WorkflowGuide />
        <div className="p-space-xs rounded bg-surface-container-lowest flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-tertiary-container text-[18px]">lock</span>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">FIPS 140-2 Enforced</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">All Nodes Cryptographically Healthy</span>
          </div>
        </div>
        <div className="p-space-xs rounded bg-surface-container-lowest flex items-center gap-space-xs">
          <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">{ROLE_ICON[user.role]}</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">{user.name}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate" title={user.email}>
              {ROLE_LABEL[user.role]}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-space-xs px-space-xs">
          <a className="flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface" href="#">
            <span className="material-symbols-outlined text-[16px]">help_outline</span>
            <span className="font-label-sm text-label-sm">Help &amp; Docs</span>
          </a>
          <StateMenu />
          <button type="button" onClick={signOut} className="flex items-center gap-space-xs text-on-surface-variant hover:text-error">
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span className="font-label-sm text-label-sm">Sign out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
