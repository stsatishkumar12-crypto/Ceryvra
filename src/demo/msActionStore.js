// Mock state for the scope's bounded Microsoft action (Step 9–11, R-010/R-011/R-014/R-020).
// Shared by Recovery, Verification and Audit History; kept in sessionStorage for the demo.
import { useSyncExternalStore } from 'react';

const KEY = 'ceryvra-demo-ms-action';

export const MS_STATUS = {
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVED: 'APPROVED',
  EXECUTING: 'EXECUTING',
  EXECUTION_FAILED: 'EXECUTION_FAILED',
  AWAITING_VERIFICATION: 'AWAITING_VERIFICATION',
  VERIFYING: 'VERIFYING',
  VERIFICATION_FAILED: 'VERIFICATION_FAILED',
  VERIFIED: 'VERIFIED',
  CLOSED: 'CLOSED',
};

export const MS_ACTION = {
  id: 'ACT-03',
  caseId: 'REC-2024-9942-R01',
  decision: 'DEC-14820',
  group: 'SG-Flight-Override-Operators',
  groupId: '7c1e5a2d-41f0-4b8e-9a3c-55d2e0f1a9b4',
  members: ['j.okafor@defensecorp.global', 'r.lindqvist@defensecorp.global', 't.nakamura@defensecorp.global'],
  approver: 'Dir. Sarah Sterling (Reviewer / Approver)',
  executor: 'Col. Marcus Vance (Authorized Executor)',
  verifier: 'Dr. Elena Rostova (Independent Verifier)',
};

const initial = () => ({ status: MS_STATUS.PENDING_APPROVAL, attempts: 0, events: [] });

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : initial();
  } catch {
    return initial();
  }
}

function save() {
  try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

function set(patch, event) {
  const events = event
    ? [...state.events, { at: new Date().toISOString(), ...event }]
    : state.events;
  state = { ...state, ...patch, events };
  save();
  listeners.forEach((l) => l());
}

export const msActions = {
  approve() {
    set({ status: MS_STATUS.APPROVED }, { kind: 'APPROVAL', actor: MS_ACTION.approver, text: `Approved bounded Microsoft action ${MS_ACTION.id} for case ${MS_ACTION.caseId}.` });
  },
  startExecution() {
    set({ status: MS_STATUS.EXECUTING, attempts: state.attempts + 1 }, {
      kind: 'EXECUTION_STARTED', actor: MS_ACTION.executor,
      text: `Attempt #${state.attempts + 1}: DELETE /groups/${MS_ACTION.groupId}/members/{id}/$ref × ${MS_ACTION.members.length} via Microsoft Graph.`,
    });
  },
  executionFailed() {
    set({ status: MS_STATUS.EXECUTION_FAILED }, {
      kind: 'EXECUTION_FAILED', actor: 'Microsoft Graph',
      text: '403 Authorization_RequestDenied: insufficient privileges (GroupMember.ReadWrite.All not consented). No members were changed.',
    });
  },
  executionSucceeded() {
    set({ status: MS_STATUS.AWAITING_VERIFICATION }, {
      kind: 'EXECUTION_COMPLETED', actor: MS_ACTION.executor,
      text: `Graph returned 204 × ${MS_ACTION.members.length}. Executor self-report recorded; case moved to AWAITING_VERIFICATION (cannot self-certify).`,
    });
  },
  startVerification() {
    set({ status: MS_STATUS.VERIFYING }, {
      kind: 'VERIFICATION_STARTED', actor: MS_ACTION.verifier,
      text: `Fresh independent read-back: GET /groups/${MS_ACTION.groupId}/members (separate verifier identity).`,
    });
  },
  verificationFailed() {
    set({ status: MS_STATUS.VERIFICATION_FAILED }, {
      kind: 'VERIFICATION_FAILED', actor: MS_ACTION.verifier,
      text: `Observed state mismatch: ${MS_ACTION.members[2]} is still a member. Recovery reopened.`,
    });
  },
  verificationPassed() {
    set({ status: MS_STATUS.VERIFIED }, {
      kind: 'VERIFIED', actor: MS_ACTION.verifier,
      text: `Observed state matches expected target: 0 of ${MS_ACTION.members.length} removed members present.`,
    });
  },
  close() {
    set({ status: MS_STATUS.CLOSED }, {
      kind: 'CLOSED', actor: MS_ACTION.verifier,
      text: `Recovery case ${MS_ACTION.caseId} closed on the strength of the independent verification record.`,
    });
  },
  reopen() {
    set({ status: MS_STATUS.APPROVED }, { kind: 'REOPENED', actor: 'Ceryvra', text: 'Recovery reopened for re-execution after failed verification.' });
  },
  reset() {
    state = initial();
    save();
    listeners.forEach((l) => l());
  },
};

export function useMsAction() {
  return useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    () => state,
  );
}
