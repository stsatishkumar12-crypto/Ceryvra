// Scope §5 steps 2–3 (R-004, R-005, R-015, R-018): a reviewer records a decision with
// evidence, authority, assumptions, rule version and exact obligations; the decision stays
// PROVISIONAL until its completeness rule (ALL / ANY / K-of-N) passes.
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../auth';
import { CAP, ROLE_LABEL, can } from '../../roles';
import { HOME_TENANT, demoHash, evaluateCompleteness, scoped, store, useStore } from '../../demo/store';
import {
  BTN_PRIMARY, BTN_SECONDARY, CARD, Chip, EmptyState, Field, GatedButton, Icon, Modal, PanelHeader,
  Select, TextArea, TextInput, formatTime,
} from '../ui';

// Governed assets that already exist in the client's home-tenant inventory screen.
const HOME_ASSETS = [
  { id: 'UC-8821', name: 'Avionics Cold-Chain Supply Telemetry' },
  { id: 'SYS-7719', name: 'Telemetry Anomaly Auto-Classifier' },
  { id: 'AGT-4402', name: 'Flight Trajectory Realtime Optimizer' },
];
export const RULE_VERSIONS = ['Rule #804 v3.1 (PII/CUI Redaction & Zero-Trust Transit)', 'AI Vendor Policy v3.2', 'Export Control Rule v1.4'];
const OUTCOMES = ['Approve', 'Approve with conditions', 'Restrict', 'Reject'];
const OBLIGATION_TYPES = ['Continuing', 'Future', 'One-time'];
const COMPLETENESS = [
  { value: 'ALL', label: 'ALL – every obligation must be satisfied' },
  { value: 'ANY', label: 'ANY – one satisfied obligation is enough' },
  { value: 'K_OF_N', label: 'K-of-N – at least K obligations satisfied' },
];

const blankObligation = () => ({ requirement: '', type: 'Continuing', condition: '', boundTo: 'Rule condition', expires: '', providedNow: false });

function DecisionForm({ onClose, preset }) {
  const s = useStore();
  const { user } = useAuth();
  const assets = [...(s.activeTenant === HOME_TENANT ? HOME_ASSETS : []), ...scoped(s, 'useCases').map((u) => ({ id: u.id, name: u.name }))];
  const [form, setForm] = useState({
    useCaseId: preset.useCase || assets[0]?.id || '',
    title: preset.from === 'notes' ? 'Elevated from governance note: logistics routing assessment' : preset.from === 'chat' ? 'Decision from governed chat: ITAR-Reg-774 vendor routing' : '',
    outcome: 'Approve with conditions',
    rationale: '',
    approvalAuthority: 'Single approver',
    ruleVersion: RULE_VERSIONS[1],
    assumptions: ['Data is processed in approved US regions only'],
    completeness: { mode: 'ALL', k: 2 },
    obligations: [
      { ...blankObligation(), requirement: 'Vendor SOC 2 Type II report', condition: 'Report valid and not older than 12 months', expires: '' , providedNow: true },
      { ...blankObligation(), requirement: 'Signed Business Associate Agreement (BAA)', type: 'One-time', condition: 'Executed before production use' },
      { ...blankObligation(), requirement: 'ISO 27001 certificate', type: 'Future', condition: 'Renewed certificate on file before expiry', boundTo: 'Threshold' },
    ],
  });
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setOb = (i, k, v) => setForm((f) => ({ ...f, obligations: f.obligations.map((o, j) => (j === i ? { ...o, [k]: v } : o)) }));
  const setAssumption = (i, v) => setForm((f) => ({ ...f, assumptions: f.assumptions.map((a, j) => (j === i ? v : a)) }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.rationale.trim() || !form.useCaseId) {
      setError('Linked use case, decision title and rationale are required.');
      return;
    }
    if (form.obligations.some((o) => !o.requirement.trim() || !o.condition.trim())) {
      setError('Every evidence obligation needs a requirement and a condition.');
      return;
    }
    const asset = assets.find((a) => a.id === form.useCaseId);
    // eslint-disable-next-line no-unused-vars
    const obligations = form.obligations.map(({ providedNow, ...o }) => ({ ...o, satisfied: false }));
    const decision = store.recordDecision({
      ...form,
      assetName: asset?.name,
      assumptions: form.assumptions.filter((a) => a.trim()),
      obligations,
      authority: `${user.name} (${ROLE_LABEL[user.role]}) · ${form.approvalAuthority}`,
    }, `${user.name} (${ROLE_LABEL[user.role]})`);
    // Evidence supplied while recording satisfies its obligation immediately.
    decision.obligations.forEach((o, i) => {
      if (form.obligations[i].providedNow) {
        store.attachEvidence(decision.id, o.id, { name: o.requirement, source: 'Provided at recording', scope: `${decision.id} v1.0`, hash: demoHash(`${decision.id}:${o.id}`) }, `${user.name} (${ROLE_LABEL[user.role]})`);
      }
    });
    setSaved(decision.id);
  };

  if (saved) {
    const d = s.decisions.find((x) => x.id === saved);
    const c = d ? evaluateCompleteness(d) : null;
    return (
      <Modal title="Decision Recorded" icon="task_alt" onClose={onClose} footer={(
        <>
          {d?.status === 'PROVISIONAL' && <Link to="/missing-evidence#decision-evidence" className={BTN_SECONDARY} onClick={onClose}><Icon name="fact_check" />Resolve Missing Evidence</Link>}
          <button type="button" className={BTN_PRIMARY} onClick={onClose}>Done</button>
        </>
      )}>
        <div className={`rounded-lg p-space-sm flex items-start gap-space-sm ${d?.status === 'PROVISIONAL' ? 'bg-amber-500/10' : 'bg-tertiary-container/15'}`} role="status">
          <Icon name={d?.status === 'PROVISIONAL' ? 'hourglass_top' : 'check_circle'} className="text-[22px] text-on-surface" />
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md text-on-surface font-semibold">{saved} v1.0 · {d?.status}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Completeness rule {c?.rule}: {c?.satisfied} of {c?.required} obligations satisfied.
              {d?.status === 'PROVISIONAL' ? ' The decision stays PROVISIONAL until the rule passes.' : ' The rule passes, so the decision is approved.'}
            </span>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      title="Record Governance Decision"
      icon="balance"
      onClose={onClose}
      wide
      footer={(
        <>
          <button type="button" className={BTN_SECONDARY} onClick={onClose}>Cancel</button>
          <button type="submit" form="decision-form" className={BTN_PRIMARY}><Icon name="verified" />Record Decision v1.0</button>
        </>
      )}
    >
      <form id="decision-form" onSubmit={submit} className="flex flex-col gap-space-md" noValidate>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <Field label="Governed use case" htmlFor="dec-uc">
            <Select id="dec-uc" value={form.useCaseId} onChange={set('useCaseId')} options={assets.map((a) => ({ value: a.id, label: `${a.id} · ${a.name}` }))} />
          </Field>
          <Field label="Outcome" htmlFor="dec-outcome"><Select id="dec-outcome" value={form.outcome} onChange={set('outcome')} options={OUTCOMES} /></Field>
          <div className="md:col-span-2"><Field label="Decision title" htmlFor="dec-title"><TextInput id="dec-title" value={form.title} onChange={set('title')} placeholder="e.g. Approve vendor summarizer for Tier-2 analysts" /></Field></div>
          <div className="md:col-span-2"><Field label="Rationale" htmlFor="dec-rationale"><TextArea id="dec-rationale" value={form.rationale} onChange={set('rationale')} placeholder="Why this decision was made and on what basis." /></Field></div>
          <Field label="Recording authority" hint="From your role"><TextInput value={`${user.name} (${ROLE_LABEL[user.role]})`} readOnly /></Field>
          <Field label="Approval authority required" htmlFor="dec-auth"><Select id="dec-auth" value={form.approvalAuthority} onChange={set('approvalAuthority')} options={['Single approver', 'Dual-key (two approvers)']} /></Field>
          <div className="md:col-span-2"><Field label="Rule version" htmlFor="dec-rule"><Select id="dec-rule" value={form.ruleVersion} onChange={set('ruleVersion')} options={RULE_VERSIONS} /></Field></div>
        </section>

        <section className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface font-semibold">Assumptions</span>
            <button type="button" className="font-label-sm text-label-sm text-primary hover:underline" onClick={() => setForm((f) => ({ ...f, assumptions: [...f.assumptions, ''] }))}>+ Add assumption</button>
          </div>
          {form.assumptions.map((a, i) => (
            <TextInput key={i} aria-label={`Assumption ${i + 1}`} value={a} onChange={(e) => setAssumption(i, e.target.value)} placeholder="Assumption the decision depends on" />
          ))}
        </section>

        <section className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface font-semibold">Evidence obligations (continuing / future)</span>
            <button type="button" className="font-label-sm text-label-sm text-primary hover:underline" onClick={() => setForm((f) => ({ ...f, obligations: [...f.obligations, blankObligation()] }))}>+ Add obligation</button>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Each obligation is bound to this decision, version v1.0, branch "main" and the selected rule version.</p>
          {form.obligations.map((o, i) => (
            <div key={i} className="bg-surface-container-low rounded-lg p-space-sm grid grid-cols-1 md:grid-cols-6 gap-space-xs">
              <div className="md:col-span-3"><TextInput aria-label="Evidence requirement" value={o.requirement} onChange={(e) => setOb(i, 'requirement', e.target.value)} placeholder="Evidence requirement" /></div>
              <div className="md:col-span-1"><Select aria-label="Obligation type" value={o.type} onChange={(e) => setOb(i, 'type', e.target.value)} options={OBLIGATION_TYPES} /></div>
              <div className="md:col-span-2"><Select aria-label="Bound to" value={o.boundTo} onChange={(e) => setOb(i, 'boundTo', e.target.value)} options={['Rule condition', 'Assumption', 'Threshold']} /></div>
              <div className="md:col-span-4"><TextInput aria-label="Condition or threshold" value={o.condition} onChange={(e) => setOb(i, 'condition', e.target.value)} placeholder="Condition / threshold that must stay true" /></div>
              <label className="md:col-span-2 flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
                <input type="checkbox" className="accent-primary" checked={o.providedNow} onChange={(e) => setOb(i, 'providedNow', e.target.checked)} />
                Evidence provided now
              </label>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="md:col-span-2">
            <Field label="Completeness rule" htmlFor="dec-comp">
              <Select id="dec-comp" value={form.completeness.mode} onChange={(e) => setForm((f) => ({ ...f, completeness: { ...f.completeness, mode: e.target.value } }))} options={COMPLETENESS} />
            </Field>
          </div>
          {form.completeness.mode === 'K_OF_N' && (
            <Field label="K (required)" htmlFor="dec-k">
              <input id="dec-k" type="number" min={1} max={form.obligations.length} value={form.completeness.k} onChange={(e) => setForm((f) => ({ ...f, completeness: { ...f.completeness, k: Number(e.target.value) || 1 } }))} className="w-full px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </Field>
          )}
        </section>
        {error && <div className="bg-error-container text-on-error-container rounded-lg p-space-sm font-body-sm text-body-sm" role="alert">{error}</div>}
      </form>
    </Modal>
  );
}

export function useDecisionForm() {
  const [params, setParams] = useSearchParams();
  const [preset, setPreset] = useState(null);
  const { user } = useAuth();
  const allowed = can(user.role, CAP.RECORD_DECISION);
  useEffect(() => {
    if (params.get('new') === 'decision') {
      if (allowed) setPreset({ from: params.get('from'), useCase: params.get('useCase') });
      setParams({}, { replace: true });
    }
  }, [params, setParams, allowed]);
  const form = preset ? <DecisionForm preset={preset} onClose={() => setPreset(null)} /> : null;
  return [form, () => setPreset({})];
}

export function CompletenessBar({ decision }) {
  const c = evaluateCompleteness(decision);
  const pct = c.required ? Math.round((c.satisfied / c.required) * 100) : 100;
  return (
    <div className="flex items-center gap-space-sm">
      <div className="flex-1 h-1.5 rounded-full bg-surface-container overflow-hidden">
        <div className={`h-full ${c.passes ? 'bg-tertiary-container' : 'bg-amber-500'}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">{c.rule}: {c.satisfied}/{c.required}</span>
    </div>
  );
}

export function DecisionGenome({ d }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-sm font-body-sm text-body-sm">
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Rationale & authority</span>
        <span className="text-on-surface">{d.rationale}</span>
        <span className="text-on-surface-variant">Authority: {d.authority || d.recordedBy}</span>
        <span className="text-on-surface-variant">Rule version: {d.ruleVersion}</span>
        {d.assumptions?.length > 0 && <span className="text-on-surface-variant">Assumptions: {d.assumptions.join('; ')}</span>}
      </div>
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Obligations (exact binding)</span>
        {d.obligations.length === 0 && <span className="text-on-surface-variant">No continuing obligations.</span>}
        {d.obligations.map((o) => (
          <div key={o.id} className="flex items-start justify-between gap-space-sm">
            <span className="text-on-surface">
              <span className="font-mono text-[11px] text-primary">{o.id}</span> {o.requirement}
              <span className="block text-on-surface-variant font-label-sm text-label-sm">{o.type} · {o.condition} · bound to {o.binding.decision} {o.binding.version} / {o.binding.branch} / {o.boundTo}</span>
            </span>
            <span className={`font-label-sm text-label-sm font-semibold ${o.satisfied ? 'text-tertiary-container' : 'text-amber-700'}`}>{o.satisfied ? 'SATISFIED' : 'MISSING'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecisionPanel() {
  const s = useStore();
  const [form, openForm] = useDecisionForm();
  const [expanded, setExpanded] = useState(null);
  const items = scoped(s, 'decisions');

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="balance" title="Decisions Recorded in this Workspace">
        <GatedButton cap={CAP.RECORD_DECISION} onClick={openForm}><Icon name="add" />Record New Decision</GatedButton>
      </PanelHeader>
      {items.length === 0 ? (
        <EmptyState icon="balance" title="No decisions recorded yet">Record a decision with evidence, authority, assumptions, rule version and obligations.</EmptyState>
      ) : (
        <ul className="flex flex-col gap-space-xs">
          {items.map((d) => (
            <li key={d.id} className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
              <button type="button" className="flex items-start justify-between gap-space-sm text-left" onClick={() => setExpanded(expanded === d.id ? null : d.id)} aria-expanded={expanded === d.id}>
                <span className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-primary font-semibold">{d.id} · {d.version} · {d.useCaseId}</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{d.title}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{d.outcome} · recorded by {d.recordedBy} · {formatTime(d.recordedAt)}</span>
                </span>
                <span className="flex items-center gap-space-xs shrink-0">
                  <Chip value={d.status} />
                  <Icon name={expanded === d.id ? 'expand_less' : 'expand_more'} className="text-on-surface-variant text-[20px]" />
                </span>
              </button>
              <CompletenessBar decision={d} />
              {expanded === d.id && <DecisionGenome d={d} />}
            </li>
          ))}
        </ul>
      )}
      {form}
    </div>
  );
}
