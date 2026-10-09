// Scope §5 steps 9–11 and R-010 / R-011 / R-014 / R-020: one bounded Microsoft Entra action,
// approved, executed, independently verified by a fresh Graph read-back, and audited.
// All behaviour is mocked for the clickable prototype; no Microsoft API is called.
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MS_ACTION, MS_STATUS, msActions, useMsAction } from '../../demo/msActionStore';

const CARD = 'bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm mb-space-md';
const BTN_PRIMARY = 'py-2 px-space-md rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
const BTN_SECONDARY = 'py-2 px-space-md rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
const CHIP = 'px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase tracking-wider';

const STATUS_STYLE = {
  [MS_STATUS.PENDING_APPROVAL]: ['bg-surface-container-highest text-on-surface', 'Pending Approval'],
  [MS_STATUS.APPROVED]: ['bg-secondary-container text-on-secondary-container', 'Approved • Armed'],
  [MS_STATUS.EXECUTING]: ['bg-primary-fixed text-on-primary-fixed', 'Executing'],
  [MS_STATUS.EXECUTION_FAILED]: ['bg-error-container text-on-error-container', 'Execution Failed'],
  [MS_STATUS.AWAITING_VERIFICATION]: ['bg-amber-100 text-amber-900', 'Awaiting Verification'],
  [MS_STATUS.VERIFYING]: ['bg-primary-fixed text-on-primary-fixed', 'Verifying'],
  [MS_STATUS.VERIFICATION_FAILED]: ['bg-error-container text-on-error-container', 'Verification Failed'],
  [MS_STATUS.VERIFIED]: ['bg-tertiary-container text-on-tertiary-container', 'Verified'],
  [MS_STATUS.CLOSED]: ['bg-tertiary text-on-tertiary', 'Closed • Verified'],
};

function StatusChip({ status }) {
  const [cls, label] = STATUS_STYLE[status];
  return <span className={`${CHIP} ${cls}`}>{label}</span>;
}

function Row({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-space-sm py-1 font-body-sm text-body-sm">
      <span className="text-on-surface-variant shrink-0">{label}</span>
      <span className="text-on-surface text-right">{children}</span>
    </div>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant cursor-pointer select-none">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="accent-primary" />
      {label}
    </label>
  );
}

// Runs fn after a short simulated latency; cancelled if the panel unmounts.
function useDelay() {
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return (fn, ms = 1300) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(fn, ms);
  };
}

const Pipeline = ({ status }) => {
  const steps = [
    ['Approval', [MS_STATUS.APPROVED, MS_STATUS.EXECUTING, MS_STATUS.EXECUTION_FAILED, MS_STATUS.AWAITING_VERIFICATION, MS_STATUS.VERIFYING, MS_STATUS.VERIFICATION_FAILED, MS_STATUS.VERIFIED, MS_STATUS.CLOSED]],
    ['Execution', [MS_STATUS.AWAITING_VERIFICATION, MS_STATUS.VERIFYING, MS_STATUS.VERIFICATION_FAILED, MS_STATUS.VERIFIED, MS_STATUS.CLOSED]],
    ['Independent Verification', [MS_STATUS.VERIFIED, MS_STATUS.CLOSED]],
    ['Closure', [MS_STATUS.CLOSED]],
  ];
  return (
    <div className="grid grid-cols-4 gap-space-xs">
      {steps.map(([label, doneIn], i) => {
        const done = doneIn.includes(status);
        return (
          <div key={label} className={`p-space-xs rounded-lg flex items-center gap-space-xs ${done ? 'bg-tertiary-container/15' : 'bg-surface-container-low'}`}>
            <span className={`material-symbols-outlined text-[18px] ${done ? 'text-tertiary-container' : 'text-outline'}`} style={{ fontVariationSettings: done ? "'FILL' 1" : undefined }}>
              {done ? 'check_circle' : 'radio_button_unchecked'}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">{i + 1}. {label}</span>
          </div>
        );
      })}
    </div>
  );
};

export function MsExecutionPanel() {
  const ms = useMsAction();
  const delay = useDelay();
  const [simulateFailure, setSimulateFailure] = useState(false);
  const s = ms.status;

  const execute = () => {
    msActions.startExecution();
    delay(() => (simulateFailure ? msActions.executionFailed() : msActions.executionSucceeded()));
  };

  return (
    <div className={CARD}>
      <div className="flex items-center justify-between gap-space-sm flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
          <span className="font-label-lg text-label-lg text-on-surface font-bold">{MS_ACTION.id} · Bounded Microsoft 365 Action</span>
          <span className={`${CHIP} bg-primary-fixed text-on-primary-fixed`}>Entra ID via Microsoft Graph</span>
        </div>
        <StatusChip status={s} />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Restrict access while {MS_ACTION.decision} is revalidated: remove {MS_ACTION.members.length} operators from the Entra security group
        {' '}<span className="font-mono text-on-surface">{MS_ACTION.group}</span>. The action is bounded to this one group and these members only.
      </p>
      <Pipeline status={s} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-sm">
        <div className="bg-surface-container-low rounded-lg p-space-sm">
          <Row label="Operation"><span className="font-mono">DELETE /groups/&#123;id&#125;/members/&#123;id&#125;/$ref</span></Row>
          <Row label="Group ID"><span className="font-mono">{MS_ACTION.groupId}</span></Row>
          <Row label="Members in scope">{MS_ACTION.members.length} (max bound: 3)</Row>
          <Row label="Approved source read">SharePoint › Vendor Attestations (read-only)</Row>
        </div>
        <div className="bg-surface-container-low rounded-lg p-space-sm">
          <Row label="Approval required">{MS_ACTION.approver}</Row>
          <Row label="Authorized executor">{MS_ACTION.executor}</Row>
          <Row label="Independent verifier">{MS_ACTION.verifier}</Row>
          <Row label="Execution attempts">{ms.attempts}</Row>
        </div>
      </div>

      {s === MS_STATUS.EXECUTION_FAILED && (
        <div className="bg-error-container p-space-sm rounded-lg flex items-start gap-space-sm" role="alert">
          <span className="material-symbols-outlined text-on-error-container text-[20px]">error</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md text-on-error-container font-semibold">Microsoft Graph returned 403 Authorization_RequestDenied</span>
            <span className="font-body-sm text-body-sm text-on-error-container">Insufficient privileges (GroupMember.ReadWrite.All not consented). No members were changed. The failure is logged; you can retry after permissions are fixed.</span>
          </div>
        </div>
      )}
      {s === MS_STATUS.AWAITING_VERIFICATION && (
        <div className="bg-amber-500/10 p-space-sm rounded-lg flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-amber-700 text-[20px]">gavel</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md text-on-surface font-semibold">Execution recorded. The recovery is not closed.</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">The executor cannot set VERIFIED or CLOSED. An independent verifier must read the group back from Microsoft Graph first.</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
        {s === MS_STATUS.PENDING_APPROVAL && (
          <button type="button" className={BTN_PRIMARY} onClick={msActions.approve}>
            <span className="material-symbols-outlined text-[18px]">approval_delegation</span>
            Approve Action (Approver)
          </button>
        )}
        {[MS_STATUS.APPROVED, MS_STATUS.EXECUTION_FAILED, MS_STATUS.EXECUTING].includes(s) && (
          <>
            <button type="button" className={BTN_PRIMARY} onClick={execute} disabled={s === MS_STATUS.EXECUTING}>
              <span className={`material-symbols-outlined text-[18px] ${s === MS_STATUS.EXECUTING ? 'animate-spin' : ''}`}>
                {s === MS_STATUS.EXECUTING ? 'progress_activity' : s === MS_STATUS.EXECUTION_FAILED ? 'replay' : 'play_circle'}
              </span>
              {s === MS_STATUS.EXECUTING ? 'Executing via Microsoft Graph…' : s === MS_STATUS.EXECUTION_FAILED ? 'Retry Execution' : 'Execute via Microsoft Graph (Executor)'}
            </button>
            <Toggle checked={simulateFailure} onChange={setSimulateFailure} label="Simulate permission failure" />
          </>
        )}
        {[MS_STATUS.AWAITING_VERIFICATION, MS_STATUS.VERIFICATION_FAILED, MS_STATUS.VERIFIED, MS_STATUS.VERIFYING].includes(s) && (
          <Link to="/verification#ms-verification" className={BTN_PRIMARY}>
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            Go to Independent Verification
          </Link>
        )}
        {s === MS_STATUS.CLOSED && (
          <Link to="/audit-history#ms-audit" className={BTN_PRIMARY}>
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
            View Audit Lifecycle
          </Link>
        )}
        {s !== MS_STATUS.PENDING_APPROVAL && (
          <button type="button" className={BTN_SECONDARY} onClick={msActions.reset}>
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            Reset Demo
          </button>
        )}
      </div>
    </div>
  );
}

export function MsVerificationPanel() {
  const ms = useMsAction();
  const delay = useDelay();
  const [simulateMismatch, setSimulateMismatch] = useState(false);
  const s = ms.status;
  const notExecuted = [MS_STATUS.PENDING_APPROVAL, MS_STATUS.APPROVED, MS_STATUS.EXECUTING, MS_STATUS.EXECUTION_FAILED].includes(s);
  const observed = s === MS_STATUS.VERIFICATION_FAILED ? [MS_ACTION.members[2]] : [];

  const verify = () => {
    msActions.startVerification();
    delay(() => (simulateMismatch ? msActions.verificationFailed() : msActions.verificationPassed()));
  };

  return (
    <div className={CARD}>
      <div className="flex items-center justify-between gap-space-sm flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
          <span className="font-label-lg text-label-lg text-on-surface font-bold">Independent Read-Back · {MS_ACTION.id} (Microsoft Graph)</span>
        </div>
        <StatusChip status={s} />
      </div>

      {notExecuted ? (
        <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between gap-space-sm flex-wrap">
          <span className="font-body-sm text-body-sm text-on-surface-variant">No executed Microsoft action is awaiting verification yet. Approve and execute {MS_ACTION.id} in Recovery first.</span>
          <Link to="/recovery#ms-action" className={BTN_SECONDARY}>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Open Recovery
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-sm">
            <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Expected target state</span>
              <span className="font-body-sm text-body-sm text-on-surface">{MS_ACTION.members.length} members absent from <span className="font-mono">{MS_ACTION.group}</span></span>
            </div>
            <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Executor claim (non-binding)</span>
              <span className="font-body-sm text-body-sm text-on-surface">“Removed {MS_ACTION.members.length} members, Graph 204 ×{MS_ACTION.members.length}”</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{MS_ACTION.executor}</span>
            </div>
            <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Independently observed</span>
              {[MS_STATUS.VERIFIED, MS_STATUS.CLOSED, MS_STATUS.VERIFICATION_FAILED].includes(s) ? (
                <span className="font-body-sm text-body-sm text-on-surface">
                  {observed.length === 0 ? '0 of 3 members present ✓' : <>Still present: <span className="font-mono">{observed[0]}</span></>}
                </span>
              ) : (
                <span className="font-body-sm text-body-sm text-on-surface-variant">Not yet observed</span>
              )}
              <span className="font-label-sm text-label-sm text-on-surface-variant">Fresh GET by verifier identity (not the executor's)</span>
            </div>
          </div>

          {s === MS_STATUS.VERIFICATION_FAILED && (
            <div className="bg-error-container p-space-sm rounded-lg flex items-start gap-space-sm" role="alert">
              <span className="material-symbols-outlined text-on-error-container text-[20px]">crisis_alert</span>
              <span className="font-body-sm text-body-sm text-on-error-container">Observed state does not match the expected target. Recovery cannot close and has been flagged for re-execution.</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            {[MS_STATUS.AWAITING_VERIFICATION, MS_STATUS.VERIFYING].includes(s) && (
              <>
                <button type="button" className={BTN_PRIMARY} onClick={verify} disabled={s === MS_STATUS.VERIFYING}>
                  <span className={`material-symbols-outlined text-[18px] ${s === MS_STATUS.VERIFYING ? 'animate-spin' : ''}`}>{s === MS_STATUS.VERIFYING ? 'progress_activity' : 'sync'}</span>
                  {s === MS_STATUS.VERIFYING ? 'Reading group from Microsoft Graph…' : 'Obtain Fresh Read-Back (Verifier)'}
                </button>
                <Toggle checked={simulateMismatch} onChange={setSimulateMismatch} label="Simulate state mismatch" />
              </>
            )}
            {s === MS_STATUS.VERIFIED && (
              <button type="button" className={BTN_PRIMARY} onClick={msActions.close}>
                <span className="material-symbols-outlined text-[18px]">task_alt</span>
                Close Recovery Case (Verified)
              </button>
            )}
            {s === MS_STATUS.VERIFICATION_FAILED && (
              <button type="button" className={BTN_PRIMARY} onClick={msActions.reopen}>
                <span className="material-symbols-outlined text-[18px]">replay</span>
                Reopen Recovery for Re-execution
              </button>
            )}
            {s === MS_STATUS.VERIFICATION_FAILED && (
              <Link to="/recovery#ms-action" className={BTN_SECONDARY}>Open Recovery</Link>
            )}
            {s === MS_STATUS.CLOSED && (
              <Link to="/audit-history#ms-audit" className={BTN_PRIMARY}>
                <span className="material-symbols-outlined text-[18px]">history_edu</span>
                View Audit Lifecycle
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const EVENT_ICON = {
  APPROVAL: ['approval_delegation', 'text-primary'],
  EXECUTION_STARTED: ['play_circle', 'text-primary'],
  EXECUTION_FAILED: ['error', 'text-error'],
  EXECUTION_COMPLETED: ['hourglass_top', 'text-amber-700'],
  VERIFICATION_STARTED: ['sync', 'text-primary'],
  VERIFICATION_FAILED: ['crisis_alert', 'text-error'],
  VERIFIED: ['verified', 'text-tertiary-container'],
  CLOSED: ['task_alt', 'text-tertiary-container'],
  REOPENED: ['replay', 'text-secondary'],
};

export function MsAuditPanel() {
  const ms = useMsAction();
  return (
    <div className={CARD}>
      <div className="flex items-center justify-between gap-space-sm flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-[20px]">receipt_long</span>
          <span className="font-label-lg text-label-lg text-on-surface font-bold">Recovery Lifecycle · {MS_ACTION.caseId} / {MS_ACTION.id}</span>
          <span className={`${CHIP} bg-surface-container-highest text-on-surface`}>Append-only</span>
        </div>
        <StatusChip status={ms.status} />
      </div>
      {ms.events.length === 0 ? (
        <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between gap-space-sm flex-wrap">
          <span className="font-body-sm text-body-sm text-on-surface-variant">No lifecycle events recorded in this session yet. Run the Microsoft action from Recovery to see approval, execution, failures, retries, verification and closure here.</span>
          <Link to="/recovery#ms-action" className={BTN_SECONDARY}>Open Recovery</Link>
        </div>
      ) : (
        <ol className="flex flex-col gap-space-xs">
          {ms.events.map((e, i) => {
            const [icon, color] = EVENT_ICON[e.kind] || ['circle', 'text-outline'];
            return (
              <li key={i} className="flex items-start gap-space-sm p-space-xs rounded-lg bg-surface-container-low">
                <span className={`material-symbols-outlined text-[18px] mt-0.5 ${color}`}>{icon}</span>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-space-sm">
                    <span className="font-mono text-[11px] text-on-surface font-semibold">#{String(i + 1).padStart(2, '0')} {e.kind}</span>
                    <span className="font-mono text-[11px] text-on-surface-variant">{new Date(e.at).toISOString().replace('T', ' ').slice(0, 19)} UTC</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface">{e.text}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Authority: {e.actor}</span>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
