// The scope document's §5 "Mandatory workflow demonstration", mapped to prototype screens.
// `to` may carry a hash; PageExtension scrolls to the matching panel.
export const WORKFLOW = [
  { n: 1, to: '/governance-inventory', title: 'Create governed use case', detail: 'User creates a governed AI use case, with supporting chat and notes.', also: [['Governed Chat', '/governed-chat'], ['Notes', '/notes']], reqs: 'R-002, R-003' },
  { n: 2, to: '/decision-record', title: 'Record the decision', detail: 'Reviewer records decision, evidence, authority, assumptions, rule version and exact obligations.', reqs: 'R-004, R-005, R-015' },
  { n: 3, to: '/missing-evidence', title: 'Decision stays provisional', detail: 'Required evidence is incomplete, so the decision stays PROVISIONAL (ALL / ANY / K-of-N rules).', reqs: 'R-018' },
  { n: 4, to: '/change-detection', title: 'Evidence changes', detail: 'New, expired or revised evidence arrives and is linked to the right decision branch.', reqs: 'R-005, R-015' },
  { n: 5, to: '/change-detection', title: 'Materiality gate', detail: 'Material changes are separated from non-material ones; non-material matches are only logged.', reqs: 'R-016' },
  { n: 6, to: '/revalidation', title: 'Targeted revalidation', detail: 'Only affected decisions are revalidated; the original state stays immutable and comparable side by side.', reqs: 'R-006, R-017' },
  { n: 7, to: '/consequence-graph', title: 'Consequence graph', detail: 'Downstream affected and unaffected items are identified.', reqs: 'R-007, R-008' },
  { n: 8, to: '/recovery', title: 'Minimum recovery plan', detail: 'Planner calculates the minimum sufficient recovery actions under rules, constraints and approvals.', reqs: 'R-009, R-019' },
  { n: 9, to: '/recovery#ms-action', title: 'Bounded Microsoft action', detail: 'After approval, the authorized executor runs one bounded Entra ID action via Microsoft Graph.', reqs: 'R-011' },
  { n: 10, to: '/verification#ms-verification', title: 'Independent verification', detail: 'Verifier obtains fresh source evidence; execution alone cannot close recovery.', reqs: 'R-010, R-020' },
  { n: 11, to: '/audit-history#ms-audit', title: 'Audit record', detail: 'The audit shows the whole lifecycle: authority, provenance, failures, retries and verified closure.', reqs: 'R-014' },
];

const pathOf = (to) => to.split('#')[0];

// Picks the step for the current location; `preferred` keeps the user's last step when
// several steps share a page (e.g. steps 4 & 5, or 8 & 9).
export function stepForPath(pathname, preferred) {
  if (preferred && pathOf(WORKFLOW[preferred - 1].to) === pathname) return preferred;
  const direct = WORKFLOW.find((s) => pathOf(s.to) === pathname);
  if (direct) return direct.n;
  const extra = WORKFLOW.find((s) => s.also?.some(([, to]) => to === pathname));
  return extra ? extra.n : null;
}
