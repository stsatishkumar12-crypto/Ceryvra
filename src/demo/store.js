// Tenant-scoped mock data for the clickable prototype (no backend). Every record carries a
// tenantId and every read filters by the active tenant, which is how the demo shows R-001
// tenant isolation and R-012 MSP context switching. State lives in sessionStorage.
import { useSyncExternalStore } from 'react';

const KEY = 'ceryvra-demo-store-v1';

export const HOME_TENANT = 'TEN-US-0841';

// Home tenant = the client screens' "Global Aerospace & Defense (US-Gov)" workspace (TEN-US-0841
// in the branding panel). The delegated tenants are the ones in the client's MSP roster.
export const TENANTS = [
  { id: 'TEN-US-0841', name: 'Global Aerospace & Defense (US-Gov)', short: 'Global Aerospace & Defense', delegation: 'home' },
  { id: 'TEN-US-1029', name: 'Northrop Grumman Cyber Systems', short: 'Northrop Grumman Cyber', delegation: 'admin' },
  { id: 'TEN-US-0472', name: 'General Dynamics Mission Systems', short: 'General Dynamics Mission', delegation: 'admin' },
  { id: 'TEN-US-0914', name: 'Raytheon Space', short: 'Raytheon Space', delegation: 'audit-only' },
];

export const tenantById = (id) => TENANTS.find((t) => t.id === id);

const now = () => new Date().toISOString();
const daysAgo = (d) => new Date(Date.now() - d * 86400000).toISOString();

const SEED_USE_CASES = [
  { id: 'UC-NG-0311', tenantId: 'TEN-US-1029', name: 'Threat-Intel Summarizer', kind: 'AI System', vendor: 'Anthropic via AWS Bedrock', model: 'Claude (Bedrock)', owner: 'R. Alvarez', risk: 'High', status: 'Approved', description: 'Summarizes vendor threat bulletins for Tier-2 SOC analysts.', createdAt: daysAgo(40), createdBy: 'R. Alvarez' },
  { id: 'UC-NG-0318', tenantId: 'TEN-US-1029', name: 'SOC Ticket Triage Agent', kind: 'Agent', vendor: 'Internal', model: 'Claude (Bedrock)', owner: 'M. Chen', risk: 'Medium', status: 'Under Review', description: 'Classifies inbound SOC tickets and proposes routing.', createdAt: daysAgo(6), createdBy: 'M. Chen' },
  { id: 'UC-GD-0102', tenantId: 'TEN-US-0472', name: 'Maintenance Manual Q&A', kind: 'Use Case', vendor: 'Anthropic via AWS Bedrock', model: 'Claude (Bedrock)', owner: 'S. Patel', risk: 'Low', status: 'Approved', description: 'Answers technician questions from approved maintenance manuals.', createdAt: daysAgo(90), createdBy: 'S. Patel' },
  { id: 'UC-RS-0007', tenantId: 'TEN-US-0914', name: 'Orbital Telemetry Anomaly Notes', kind: 'Use Case', vendor: 'Internal', model: 'Claude (Bedrock)', owner: 'K. Osei', risk: 'High', status: 'Restricted', description: 'Drafts anomaly notes from telemetry summaries for engineers.', createdAt: daysAgo(20), createdBy: 'K. Osei' },
];

const SEED_DECISIONS = [
  { id: 'DEC-NG-2201', tenantId: 'TEN-US-1029', useCaseId: 'UC-NG-0311', title: 'Approve Threat-Intel Summarizer for Tier-2 analysts', outcome: 'Approve with conditions', status: 'APPROVED', version: 'v1.0', ruleVersion: 'AI Vendor Policy v3.2', recordedBy: 'J. Moore (Reviewer / Approver)', recordedAt: daysAgo(38), rationale: 'Vendor BAA and SOC 2 report on file; data stays in US region.', assumptions: ['Data processed in US regions only'], completeness: { mode: 'ALL', k: 2 }, obligations: [] , evidence: [] },
  { id: 'DEC-GD-0450', tenantId: 'TEN-US-0472', useCaseId: 'UC-GD-0102', title: 'Approve Maintenance Manual Q&A', outcome: 'Approve', status: 'PROVISIONAL', version: 'v1.0', ruleVersion: 'AI Vendor Policy v3.2', recordedBy: 'L. Grant (Reviewer / Approver)', recordedAt: daysAgo(12), rationale: 'Low risk; awaiting renewed ISO 27001 certificate.', assumptions: ['Manuals contain no export-controlled data'], completeness: { mode: 'ALL', k: 2 }, obligations: [], evidence: [] },
  { id: 'DEC-RS-0091', tenantId: 'TEN-US-0914', useCaseId: 'UC-RS-0007', title: 'Restrict telemetry notes to engineering group', outcome: 'Restrict', status: 'APPROVED', version: 'v2.0', ruleVersion: 'Export Control Rule v1.4', recordedBy: 'D. Hale (Reviewer / Approver)', recordedAt: daysAgo(18), rationale: 'Outputs may reference controlled orbital parameters.', assumptions: [], completeness: { mode: 'ALL', k: 1 }, obligations: [], evidence: [] },
];

const SEED_ACTIVITY = [
  { tenantId: 'TEN-US-1029', at: daysAgo(38), kind: 'DECISION_RECORDED', actor: 'J. Moore (Reviewer / Approver)', text: 'DEC-NG-2201 recorded (v1.0).' },
  { tenantId: 'TEN-US-1029', at: daysAgo(6), kind: 'USE_CASE_CREATED', actor: 'M. Chen (Standard User)', text: 'UC-NG-0318 SOC Ticket Triage Agent created.' },
  { tenantId: 'TEN-US-0472', at: daysAgo(12), kind: 'DECISION_RECORDED', actor: 'L. Grant (Reviewer / Approver)', text: 'DEC-GD-0450 recorded as PROVISIONAL (1 evidence item missing).' },
  { tenantId: 'TEN-US-0914', at: daysAgo(18), kind: 'DECISION_RECORDED', actor: 'D. Hale (Reviewer / Approver)', text: 'DEC-RS-0091 v2.0 recorded (Restrict).' },
];

const initial = () => ({
  activeTenant: HOME_TENANT,
  useCases: SEED_USE_CASES,
  decisions: SEED_DECISIONS,
  activity: SEED_ACTIVITY,
  branding: {},
  counters: { uc: 900, dec: 15000, ev: 100 },
});

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? { ...initial(), ...JSON.parse(raw) } : initial();
  } catch {
    return initial();
  }
}

function commit(next) {
  state = next;
  try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

function logActivity(s, entry) {
  return [...s.activity, { tenantId: s.activeTenant, at: now(), ...entry }];
}

// Simple deterministic short hash for evidence integrity metadata (demo only).
export function demoHash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  const hex = (h >>> 0).toString(16).padStart(8, '0');
  return `sha256:${hex}${hex.split('').reverse().join('')}`;
}

// Completeness evaluation (R-018) for the decisions recorded in the prototype.
export function evaluateCompleteness(decision) {
  const required = decision.obligations.length;
  const satisfied = decision.obligations.filter((o) => o.satisfied).length;
  const { mode, k } = decision.completeness;
  let passes;
  if (required === 0) passes = true;
  else if (mode === 'ALL') passes = satisfied === required;
  else if (mode === 'ANY') passes = satisfied >= 1;
  else passes = satisfied >= Math.min(k, required); // K-of-N
  const rule = mode === 'K_OF_N' ? `${Math.min(k, required)}-of-${required}` : mode;
  return { required, satisfied, passes, rule };
}

export const store = {
  setTenant(tenantId, actor) {
    const t = tenantById(tenantId);
    commit({
      ...state,
      activeTenant: tenantId,
      activity: [...state.activity, { tenantId, at: now(), kind: 'TENANT_CONTEXT_SWITCH', actor, text: `Session context switched to ${t.id} (${t.name}). Prior tenant data purged from view.` }],
    });
  },

  createUseCase(data, actor) {
    const n = state.counters.uc + 1;
    const uc = { id: `UC-${n}`, tenantId: state.activeTenant, status: 'Under Review', createdAt: now(), createdBy: actor, ...data };
    commit({
      ...state,
      counters: { ...state.counters, uc: n },
      useCases: [...state.useCases, uc],
      activity: logActivity(state, { kind: 'USE_CASE_CREATED', actor, text: `${uc.id} ${uc.name} created (risk ${uc.risk}); submitted for review.` }),
    });
    return uc;
  },

  reviewUseCase(id, status, actor) {
    commit({
      ...state,
      useCases: state.useCases.map((u) => (u.id === id ? { ...u, status, reviewedBy: actor } : u)),
      activity: logActivity(state, { kind: 'USE_CASE_REVIEWED', actor, text: `${id} review outcome: ${status}.` }),
    });
  },

  recordDecision(data, actor) {
    const n = state.counters.dec + 1;
    const id = `DEC-${n}`;
    const obligations = data.obligations.map((o, i) => ({
      id: `OBL-${n}-${String.fromCharCode(65 + i)}`,
      binding: { decision: id, version: 'v1.0', branch: 'main', rule: data.ruleVersion },
      satisfied: false,
      ...o,
    }));
    const decision = { id, tenantId: state.activeTenant, version: 'v1.0', recordedAt: now(), recordedBy: actor, evidence: [], ...data, obligations };
    decision.status = evaluateCompleteness(decision).passes ? 'APPROVED' : 'PROVISIONAL';
    commit({
      ...state,
      counters: { ...state.counters, dec: n },
      decisions: [...state.decisions, decision],
      activity: logActivity(state, { kind: 'DECISION_RECORDED', actor, text: `${id} v1.0 recorded under ${data.ruleVersion} with ${obligations.length} obligation(s); status ${decision.status}.` }),
    });
    return decision;
  },

  attachEvidence(decisionId, obligationId, evidence, actor) {
    const n = state.counters.ev + 1;
    const ev = { id: `EVD-${n}`, at: now(), by: actor, ...evidence };
    let status = null;
    const decisions = state.decisions.map((d) => {
      if (d.id !== decisionId) return d;
      const obligations = d.obligations.map((o) => (o.id === obligationId ? { ...o, satisfied: true, evidenceId: ev.id } : o));
      const next = { ...d, obligations, evidence: [...d.evidence, ev] };
      const result = evaluateCompleteness(next);
      status = result.passes ? 'APPROVED' : 'PROVISIONAL';
      return { ...next, status };
    });
    commit({
      ...state,
      counters: { ...state.counters, ev: n },
      decisions,
      activity: logActivity(state, { kind: 'EVIDENCE_ATTACHED', actor, text: `${ev.id} (${ev.name}, ${ev.source}) satisfies ${obligationId} on ${decisionId}; decision now ${status}.` }),
    });
  },

  log(kind, text, actor) {
    commit({ ...state, activity: logActivity(state, { kind, actor, text }) });
  },

  setBranding(tenantId, branding, actor) {
    commit({
      ...state,
      branding: { ...state.branding, [tenantId]: branding },
      activity: [...state.activity, { tenantId, at: now(), kind: 'BRANDING_APPLIED', actor, text: branding ? `Branding published: assistant "${branding.assistantName}", colors ${branding.primary} / ${branding.accent}.` : 'Branding reset to platform default.' }],
    });
  },

  reset() { commit(initial()); },
};

export function useStore() {
  return useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    () => state,
  );
}

// Tenant-scoped selectors: nothing outside the active tenant is ever returned.
export const scoped = (s, key) => s[key].filter((r) => r.tenantId === s.activeTenant);
export const activeTenant = (s) => tenantById(s.activeTenant);
export const activeBranding = (s) => s.branding[s.activeTenant] || null;
