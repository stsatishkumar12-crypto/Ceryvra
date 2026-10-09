// The nine roles from the scope document §7, with page access and action capabilities.
// Every grant below is traced to a scope statement (section noted in the comment).

export const ROLES = {
  PLATFORM_ADMIN: 'platform_admin',
  TENANT_ADMIN: 'tenant_admin',
  DECISION_OWNER: 'decision_owner',
  APPROVER: 'reviewer_approver',
  EXECUTOR: 'authorized_executor',
  VERIFIER: 'independent_verifier',
  STANDARD_USER: 'standard_user',
  AUDITOR: 'auditor',
  MSP_OPERATOR: 'msp_operator',
};

export const ROLE_LABEL = {
  [ROLES.PLATFORM_ADMIN]: 'Platform Administrator',
  [ROLES.TENANT_ADMIN]: 'Tenant Administrator',
  [ROLES.DECISION_OWNER]: 'Decision Owner',
  [ROLES.APPROVER]: 'Reviewer / Approver',
  [ROLES.EXECUTOR]: 'Authorized Executor',
  [ROLES.VERIFIER]: 'Independent Verifier',
  [ROLES.STANDARD_USER]: 'Standard User',
  [ROLES.AUDITOR]: 'Auditor',
  [ROLES.MSP_OPERATOR]: 'Delegated MSP Operator',
};

export const ROLE_ICON = {
  [ROLES.PLATFORM_ADMIN]: 'admin_panel_settings',
  [ROLES.TENANT_ADMIN]: 'domain',
  [ROLES.DECISION_OWNER]: 'person_check',
  [ROLES.APPROVER]: 'approval_delegation',
  [ROLES.EXECUTOR]: 'play_circle',
  [ROLES.VERIFIER]: 'verified_user',
  [ROLES.STANDARD_USER]: 'person',
  [ROLES.AUDITOR]: 'history_edu',
  [ROLES.MSP_OPERATOR]: 'hub',
};

// Login page grouping: the "Admin Login" tab holds the administrative roles,
// the "User Login" tab holds the workflow roles.
export const ADMIN_ROLES = [ROLES.PLATFORM_ADMIN, ROLES.TENANT_ADMIN, ROLES.MSP_OPERATOR];
export const USER_ROLES = [ROLES.STANDARD_USER, ROLES.DECISION_OWNER, ROLES.APPROVER, ROLES.EXECUTOR, ROLES.VERIFIER, ROLES.AUDITOR];

// Action capabilities (scope §7 "Role/authority segregation ... approval gates").
export const CAP = {
  CREATE_USE_CASE: 'create_use_case', // §5.1 user creates governed AI use case
  RECORD_DECISION: 'record_decision', // §5.2 reviewer records decision, evidence, obligations
  ATTACH_EVIDENCE: 'attach_evidence', // §6 approved document upload / versioned evidence
  APPROVE: 'approve',                 // §5.6, §5.8, §5.9 approvals
  EXECUTE: 'execute',                 // §5.9 authorized executor
  VERIFY: 'verify',                   // §5.10 independent verifier, R-020
  CONFIGURE: 'configure',             // §4 admin configuration of policies / evidence; R-013 branding
  MSP_SWITCH: 'msp_switch',           // R-012 delegated management of customer tenants
};

export const CAP_LABEL = {
  [CAP.CREATE_USE_CASE]: 'Standard User, Decision Owner or Platform Administrator',
  [CAP.RECORD_DECISION]: 'Decision Owner or Reviewer / Approver',
  [CAP.ATTACH_EVIDENCE]: 'Decision Owner or Reviewer / Approver',
  [CAP.APPROVE]: 'Reviewer / Approver',
  [CAP.EXECUTE]: 'Authorized Executor',
  [CAP.VERIFY]: 'Independent Verifier',
  [CAP.CONFIGURE]: 'Tenant Administrator, Platform Administrator or a delegated MSP Operator',
  [CAP.MSP_SWITCH]: 'Delegated MSP Operator or Platform Administrator',
};

const CAPS = {
  // Platform-wide administration; no approval/execution/verification authority (§7 segregation).
  [ROLES.PLATFORM_ADMIN]: [CAP.CREATE_USE_CASE, CAP.CONFIGURE, CAP.MSP_SWITCH],
  [ROLES.TENANT_ADMIN]: [CAP.CONFIGURE],
  [ROLES.DECISION_OWNER]: [CAP.CREATE_USE_CASE, CAP.RECORD_DECISION, CAP.ATTACH_EVIDENCE],
  [ROLES.APPROVER]: [CAP.RECORD_DECISION, CAP.ATTACH_EVIDENCE, CAP.APPROVE],
  [ROLES.EXECUTOR]: [CAP.EXECUTE],
  [ROLES.VERIFIER]: [CAP.VERIFY],
  [ROLES.STANDARD_USER]: [CAP.CREATE_USE_CASE],
  [ROLES.AUDITOR]: [], // read-only
  // §7: MSP administers assigned tenants only with delegation; no cross-tenant approval/execution.
  [ROLES.MSP_OPERATOR]: [CAP.CONFIGURE, CAP.MSP_SWITCH],
};

export function can(role, cap) {
  return (CAPS[role] || []).includes(cap);
}

// Which screens each role can open (navigation is filtered from this).
const P = {
  dashboard: '/dashboard', inventory: '/governance-inventory', chat: '/governed-chat', notes: '/notes',
  decision: '/decision-record', evidence: '/missing-evidence', change: '/change-detection',
  revalidation: '/revalidation', graph: '/consequence-graph', recovery: '/recovery',
  verification: '/verification', audit: '/audit-history', rules: '/admin/rules', tenants: '/admin/tenants',
};
const LIFECYCLE = [P.decision, P.evidence, P.change, P.revalidation, P.graph, P.recovery, P.verification, P.audit];

export const PAGE_ACCESS = {
  [ROLES.PLATFORM_ADMIN]: Object.values(P),
  // §4 rules/evidence configuration, R-013 branding, governance inventory, audit
  [ROLES.TENANT_ADMIN]: [P.dashboard, P.inventory, P.chat, P.notes, P.decision, P.evidence, P.audit, P.rules, P.tenants],
  // Owns decisions through their whole lifecycle
  [ROLES.DECISION_OWNER]: [P.dashboard, P.inventory, P.chat, P.notes, ...LIFECYCLE],
  // §5.2 records decisions, §5.6/5.8/5.9 approvals
  [ROLES.APPROVER]: [P.dashboard, P.inventory, P.chat, P.notes, ...LIFECYCLE],
  // §5.9 performs the approved action; sees the plan it executes and its verification status
  [ROLES.EXECUTOR]: [P.dashboard, P.decision, P.graph, P.recovery, P.verification],
  // §5.10 independent verification with fresh source evidence
  [ROLES.VERIFIER]: [P.dashboard, P.decision, P.evidence, P.graph, P.recovery, P.verification, P.audit],
  // §2 employee-facing AI chat and internal notes; §5.1 creates governed use cases
  [ROLES.STANDARD_USER]: [P.dashboard, P.chat, P.notes, P.inventory],
  // §5.11 audit record of the whole lifecycle (read-only)
  [ROLES.AUDITOR]: [P.dashboard, P.inventory, ...LIFECYCLE],
  // R-012 delegated tenant management, §7 explicit delegation
  [ROLES.MSP_OPERATOR]: [P.dashboard, P.inventory, P.audit, P.rules, P.tenants],
};

export function canAccess(role, path) {
  return (PAGE_ACCESS[role] || []).includes(path);
}

export function rolesWithAccess(path) {
  return Object.keys(PAGE_ACCESS).filter((r) => PAGE_ACCESS[r].includes(path)).map((r) => ROLE_LABEL[r]);
}

// Where each role lands after sign-in: the screen where its own work starts.
export const HOME_BY_ROLE = {
  [ROLES.PLATFORM_ADMIN]: P.dashboard,
  [ROLES.TENANT_ADMIN]: P.rules,
  [ROLES.DECISION_OWNER]: P.dashboard,
  [ROLES.APPROVER]: P.dashboard,
  [ROLES.EXECUTOR]: P.recovery,
  [ROLES.VERIFIER]: P.verification,
  [ROLES.STANDARD_USER]: P.dashboard,
  [ROLES.AUDITOR]: P.audit,
  [ROLES.MSP_OPERATOR]: P.tenants,
};

// Buttons in the client screens that need a capability. Matched by visible text.
export const GATED_ACTIONS = {
  '*': [{ text: 'New Decision', cap: CAP.RECORD_DECISION }],
  '/dashboard': [
    { text: 'Register Governed Use Case', cap: CAP.CREATE_USE_CASE },
    { text: 'Record Policy Decision', cap: CAP.RECORD_DECISION },
    { text: 'Resolve Conflict', cap: CAP.APPROVE },
  ],
  '/governance-inventory': [
    { text: 'Create Governed Use Case', cap: CAP.CREATE_USE_CASE },
    { text: 'Cryptographically Seal & Commit', cap: CAP.APPROVE },
  ],
  '/governed-chat': [
    { text: 'Convert to Use Case', cap: CAP.CREATE_USE_CASE },
    { text: 'Save to Decision Ledger', cap: CAP.RECORD_DECISION },
    { text: 'Submit for Multi-Sig Verification', cap: CAP.RECORD_DECISION },
    { text: 'Attach Evidence File', cap: CAP.ATTACH_EVIDENCE },
  ],
  '/notes': [
    { text: 'Elevate to Decision', cap: CAP.RECORD_DECISION },
    { text: 'Link Decision Proof', cap: CAP.RECORD_DECISION },
  ],
  '/missing-evidence': [
    { text: 'Attach Evidence', cap: CAP.ATTACH_EVIDENCE },
    { text: 'Cryptographically Attest & Ingest', cap: CAP.ATTACH_EVIDENCE },
    { text: 'Trigger Re-verification', cap: CAP.ATTACH_EVIDENCE },
  ],
  '/revalidation': [
    { text: 'Approve & Mint Revalidated Version', cap: CAP.APPROVE },
    { text: 'Request Additional Evidence', cap: CAP.APPROVE },
    { text: 'Reject Proposed Revalidation Draft', cap: CAP.APPROVE },
  ],
  '/recovery': [
    { text: 'Countersign', cap: CAP.APPROVE },
    { text: 'Attest & Sign', cap: CAP.APPROVE },
    { text: 'Execute Key Injection', cap: CAP.EXECUTE },
    { text: 'Execute Re-run #804', cap: CAP.EXECUTE },
    { text: 'Execute Minimum Recovery Plan', cap: CAP.EXECUTE },
  ],
  '/verification': [
    { text: 'Attest & Issue Verification Certificate', cap: CAP.VERIFY },
    { text: 'Reject Verification & Reopen Plan', cap: CAP.VERIFY },
    { text: 'Trigger Independent Re-Sampling Probe', cap: CAP.VERIFY },
  ],
  '/admin/rules': [
    { text: 'Create New Policy Rule', cap: CAP.CONFIGURE },
    { text: 'Add Evidence Leaf', cap: CAP.CONFIGURE },
    { text: 'Promote & Enforce', cap: CAP.CONFIGURE },
  ],
  '/admin/tenants': [
    { text: 'Switch Active Tenant Workspace', cap: CAP.MSP_SWITCH },
    { text: 'Sign with PIV-CAC & Switch', cap: CAP.MSP_SWITCH },
    { text: 'Request MSP Tenant Delegation', cap: CAP.MSP_SWITCH },
  ],
};
