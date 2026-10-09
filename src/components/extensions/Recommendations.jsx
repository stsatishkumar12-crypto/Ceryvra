// R-008: explainable governed next actions for the items in the consequence graph, each with
// rationale, evidence and the authority required. Objects are the client's graph nodes.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth';
import { CAP, ROLE_LABEL } from '../../roles';
import { store } from '../../demo/store';
import { BTN_PRIMARY, BTN_SECONDARY, CARD, CHIP, GatedButton, Icon, PanelHeader } from '../ui';

const TYPE_STYLE = {
  Keep: 'bg-tertiary-container text-on-tertiary-container',
  Change: 'bg-primary-fixed text-on-primary-fixed',
  Replace: 'bg-secondary-container text-on-secondary-container',
  Restrict: 'bg-error-container text-on-error-container',
  Consolidate: 'bg-amber-100 text-amber-900',
  Integrate: 'bg-surface-container-highest text-on-surface',
};

const RECOMMENDATIONS = [
  { id: 'REC-01', node: 'DEC-14820', label: 'Flight Envelope Override Policy v2.4', type: 'Change', affected: true,
    rationale: 'The revoked transit key (EVT-9041) breaks the assumption behind Rule #804. Change the decision to bind the renewed certificate and re-run the latency threshold.',
    evidence: ['EVT-9041 · CRL #991 revocation', 'OBL-804B · Subcontractor transit key escrow'], authority: 'Reviewer / Approver + Decision Owner' },
  { id: 'REC-02', node: 'RULE-804-v3', label: 'Rule #804 v3.1 transit key binding', type: 'Replace', affected: true,
    rationale: 'Replace the revoked RSA transit certificate with the renewed v4 bundle. Without it the rule cannot evaluate.',
    evidence: ['raytheon-transit-ca-v4.pem (FIPS 140-3)', 'SharePoint › Vendor Attestations v4.0'], authority: 'Reviewer / Approver, then Authorized Executor' },
  { id: 'REC-03', node: 'AGT-4402', label: 'Flight Trajectory Realtime Optimizer', type: 'Restrict', affected: true,
    rationale: 'Keep autonomy suspended and remove operator group access until independent verification passes.',
    evidence: ['Hardware gate PCR[14] standby', 'ACT-03 bounded Entra action'], authority: 'Reviewer / Approver, then Authorized Executor' },
  { id: 'REC-04', node: 'GATE-SIGN-02', label: 'Dual-key signoff gate', type: 'Integrate', affected: true,
    rationale: 'Integrate the independent verifier signoff into the gate so the recovery cannot close on the execution result alone.',
    evidence: ['R-020 verification asymmetry', 'VRF-2024-9942-V05'], authority: 'Tenant Administrator (rule change) + Reviewer / Approver' },
  { id: 'REC-05', node: 'DEC-4402 + DEC-14820', label: 'Two decisions governing AGT-4402', type: 'Consolidate', affected: true,
    rationale: 'Both decisions set override limits for the same agent. Consolidate them into one revalidated version to avoid conflicting thresholds.',
    evidence: ['Conflicting threshold: 12ms vs 15ms', 'Decision Registry lineage'], authority: 'Decision Owner + Reviewer / Approver' },
  { id: 'REC-06', node: 'SYS-7719', label: 'Telemetry Anomaly Auto-Classifier', type: 'Keep', affected: false,
    rationale: 'Reachable in the graph but provably decoupled from the revoked key branch (prune hash 0x11ce…99a). No action needed.',
    evidence: ['Merkle branch unchanged', '4,200 inference cycles verified'], authority: 'None (no change)' },
  { id: 'REC-07', node: 'UC-8821', label: 'Avionics Cold-Chain Supply Telemetry', type: 'Keep', affected: false,
    rationale: 'Its Merkle root sha256(root_41) does not intersect EVT-9041. Left unchanged, with this rationale recorded.',
    evidence: ['Prune hash 0x8a9f…e01'], authority: 'None (no change)' },
];

export function RecommendationsPanel() {
  const { user } = useAuth();
  const [decided, setDecided] = useState({});
  const actor = `${user.name} (${ROLE_LABEL[user.role]})`;
  const decide = (r, outcome) => {
    setDecided((d) => ({ ...d, [r.id]: outcome }));
    store.log('RECOMMENDATION_' + outcome.toUpperCase(), `${r.id} ${r.type} ${r.node}: ${outcome.toLowerCase()}.`, actor);
  };

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="recommend" title="Governed Recommendations (Explainable Next Actions)">
        <span className="font-label-sm text-label-sm text-on-surface-variant">{RECOMMENDATIONS.filter((r) => r.affected).length} affected · {RECOMMENDATIONS.filter((r) => !r.affected).length} unaffected</span>
      </PanelHeader>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-space-sm">
        {RECOMMENDATIONS.map((r) => (
          <div key={r.id} className={`rounded-lg p-space-sm flex flex-col gap-space-xs ${r.affected ? 'bg-surface-container-low' : 'bg-surface-container-low/60'}`}>
            <div className="flex items-start justify-between gap-space-sm">
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-primary font-semibold">{r.id} · {r.node}</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">{r.label}</span>
              </div>
              <span className={`${CHIP} ${TYPE_STYLE[r.type]}`}>{r.type}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">{r.rationale}</p>
            <div className="font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-0.5">
              <span><Icon name="description" className="text-[14px] align-middle" /> Evidence: {r.evidence.join(' · ')}</span>
              <span><Icon name="badge" className="text-[14px] align-middle" /> Authority required: {r.authority}</span>
            </div>
            {r.affected ? (
              decided[r.id] ? (
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className={`font-label-sm text-label-sm font-semibold ${decided[r.id] === 'Accepted' ? 'text-tertiary-container' : 'text-on-surface-variant'}`}>{decided[r.id]} by {user.name}</span>
                  {decided[r.id] === 'Accepted' && <Link to="/recovery" className="font-label-sm text-label-sm text-primary hover:underline">Open in Recovery Plan →</Link>}
                </div>
              ) : (
                <div className="flex gap-space-xs flex-wrap">
                  <GatedButton cap={CAP.APPROVE} className={`${BTN_PRIMARY} !py-1 !px-2`} onClick={() => decide(r, 'Accepted')}><Icon name="check" className="text-[16px]" />Accept</GatedButton>
                  <GatedButton cap={CAP.APPROVE} className={`${BTN_SECONDARY} !py-1 !px-2`} onClick={() => decide(r, 'Dismissed')}>Dismiss</GatedButton>
                </div>
              )
            ) : (
              <span className="font-label-sm text-label-sm text-tertiary-container font-semibold flex items-center gap-1"><Icon name="check_circle" className="text-[16px]" />Unaffected · remains unchanged</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
