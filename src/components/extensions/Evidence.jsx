// Scope §5 steps 3–4, §6 evidence storage, R-011 read side: decisions stay PROVISIONAL until
// their completeness rule passes; evidence can be uploaded or read from an approved
// Microsoft 365 source, and is stored with source, scope, version and integrity metadata.
import { createContext, useContext, useState } from 'react';
import { useAuth } from '../../auth';
import { CAP, ROLE_LABEL } from '../../roles';
import { demoHash, evaluateCompleteness, scoped, store, useStore } from '../../demo/store';
import { CompletenessBar } from './Decisions';
import {
  BTN_PRIMARY, BTN_SECONDARY, CARD, Chip, EmptyState, Field, GatedButton, Icon, Modal, PanelHeader, Select, formatTime,
} from '../ui';

// Approved-source list for the tenant (scope §7 "authorized source boundaries").
export const M365_SOURCES = [
  {
    id: 'sp-vendor', name: 'SharePoint › Vendor Attestations', kind: 'SharePoint document library', approved: true,
    path: '/sites/governance/drives/vendor-attestations/root/children',
    docs: [
      { name: 'Anthropic-SOC2-TypeII-2026.pdf', version: '3.0', modified: '2026-09-14', size: '2.4 MB' },
      { name: 'AWS-BAA-Executed-2026.pdf', version: '1.0', modified: '2026-08-02', size: '640 KB' },
      { name: 'Raytheon-HSM-Transit-Cert-v4.pem', version: '4.0', modified: '2026-10-09', size: '6 KB' },
    ],
  },
  {
    id: 'sp-certs', name: 'SharePoint › Security Certifications', kind: 'SharePoint document library', approved: true,
    path: '/sites/security/drives/certifications/root/children',
    docs: [
      { name: 'ISO-27001-Certificate-2026.pdf', version: '2.1', modified: '2026-09-30', size: '410 KB' },
      { name: 'FIPS-140-3-Validation-Letter.pdf', version: '1.0', modified: '2026-07-21', size: '220 KB' },
    ],
  },
  { id: 'od-personal', name: 'OneDrive › Personal files', kind: 'OneDrive', approved: false, path: '/me/drive/root/children', docs: [] },
  { id: 'teams-general', name: 'Teams › General channel files', kind: 'Teams files', approved: false, path: '/teams/{id}/channels/general/filesFolder', docs: [] },
];

// Lets the Microsoft 365 panel hand a document to the attach dialog on the same page.
const AttachContext = createContext(() => {});

function AttachEvidenceModal({ target, onClose }) {
  const s = useStore();
  const { user } = useAuth();
  const decisions = scoped(s, 'decisions').filter((d) => d.obligations.some((o) => !o.satisfied));
  const [decisionId, setDecisionId] = useState(target.decisionId || decisions[0]?.id || '');
  const decision = decisions.find((d) => d.id === decisionId);
  const open = decision?.obligations.filter((o) => !o.satisfied) || [];
  const [obligationId, setObligationId] = useState(target.obligationId || open[0]?.id || '');
  const [file, setFile] = useState(target.doc ? { name: target.doc.name, size: target.doc.size, source: target.source } : null);
  const [error, setError] = useState('');

  const submit = () => {
    if (!decisionId || !obligationId || !file) {
      setError('Choose a decision, an open obligation and an evidence file.');
      return;
    }
    store.attachEvidence(decisionId, obligationId, {
      name: file.name,
      source: file.source || 'Approved upload',
      scope: `${decisionId} ${decision.version}`,
      version: target.doc?.version || '1.0',
      hash: demoHash(`${file.name}:${file.size}`),
    }, `${user.name} (${ROLE_LABEL[user.role]})`);
    onClose();
  };

  return (
    <Modal
      title="Attach Evidence to Obligation"
      icon="cloud_upload"
      onClose={onClose}
      footer={(
        <>
          <button type="button" className={BTN_SECONDARY} onClick={onClose}>Cancel</button>
          <button type="button" className={BTN_PRIMARY} onClick={submit}><Icon name="verified" />Attach & Re-evaluate</button>
        </>
      )}
    >
      {decisions.length === 0 ? (
        <EmptyState icon="task_alt" title="No open obligations">Every recorded decision in this workspace has its evidence.</EmptyState>
      ) : (
        <>
          <Field label="Decision" htmlFor="ev-dec">
            <Select id="ev-dec" value={decisionId} onChange={(e) => { setDecisionId(e.target.value); setObligationId(''); }} options={decisions.map((d) => ({ value: d.id, label: `${d.id} · ${d.title}` }))} />
          </Field>
          <Field label="Obligation (exact binding)" htmlFor="ev-ob">
            <Select id="ev-ob" value={obligationId} onChange={(e) => setObligationId(e.target.value)} options={[{ value: '', label: 'Select an open obligation' }, ...open.map((o) => ({ value: o.id, label: `${o.id} · ${o.requirement}` }))]} />
          </Field>
          {target.doc ? (
            <div className="bg-surface-container-low rounded-lg p-space-sm font-body-sm text-body-sm text-on-surface">
              <Icon name="description" className="text-primary text-[18px] align-middle" /> {target.doc.name} · v{target.doc.version} · from {target.source}
            </div>
          ) : (
            <Field label="Evidence file" hint="Approved document upload" htmlFor="ev-file">
              <input id="ev-file" type="file" className="font-body-sm text-body-sm text-on-surface" onChange={(e) => {
                const f = e.target.files?.[0];
                setFile(f ? { name: f.name, size: `${Math.max(1, Math.round(f.size / 1024))} KB`, source: 'Approved upload' } : null);
              }} />
            </Field>
          )}
          <p className="font-body-sm text-body-sm text-on-surface-variant">Stored as a new evidence version with source, scope and SHA-256 integrity metadata. The decision's completeness rule is re-evaluated immediately.</p>
          {error && <div className="bg-error-container text-on-error-container rounded-lg p-space-sm font-body-sm text-body-sm" role="alert">{error}</div>}
        </>
      )}
    </Modal>
  );
}

export function EvidenceProvider({ children }) {
  const [target, setTarget] = useState(null);
  return (
    <AttachContext.Provider value={setTarget}>
      {children}
      {target && <AttachEvidenceModal target={target} onClose={() => setTarget(null)} />}
    </AttachContext.Provider>
  );
}

export function DecisionEvidencePanel() {
  const s = useStore();
  const openAttach = useContext(AttachContext);
  const items = scoped(s, 'decisions').filter((d) => d.obligations.length > 0);

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="fact_check" title="Evidence Completeness · Decisions Recorded in this Workspace">
        <GatedButton cap={CAP.ATTACH_EVIDENCE} onClick={() => openAttach({})}><Icon name="cloud_upload" />Attach Evidence</GatedButton>
      </PanelHeader>
      {items.length === 0 ? (
        <EmptyState icon="fact_check" title="No decisions with evidence obligations yet">Record a decision with obligations; it appears here until its completeness rule passes.</EmptyState>
      ) : (
        <ul className="flex flex-col gap-space-xs">
          {items.map((d) => {
            const c = evaluateCompleteness(d);
            return (
              <li key={d.id} className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-primary font-semibold">{d.id} · {d.version} · {d.ruleVersion}</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{d.title}</span>
                  </div>
                  <Chip value={d.status} />
                </div>
                <CompletenessBar decision={d} />
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {c.passes ? `Rule ${c.rule} satisfied. No false "complete" state: every obligation below shows its own status.` : `Rule ${c.rule} not yet satisfied, so the decision remains PROVISIONAL.`}
                </span>
                <div className="flex flex-col gap-1">
                  {d.obligations.map((o) => {
                    const ev = d.evidence.find((e) => e.id === o.evidenceId);
                    return (
                      <div key={o.id} className="bg-surface-container-lowest rounded p-space-xs flex items-start justify-between gap-space-sm font-body-sm text-body-sm">
                        <span className="min-w-0">
                          <span className="font-mono text-[11px] text-primary">{o.id}</span> <span className="text-on-surface">{o.requirement}</span>
                          <span className="block text-on-surface-variant font-label-sm text-label-sm">{o.type} · {o.condition} · bound to {o.binding.version}/{o.binding.branch}/{o.boundTo}</span>
                          {ev && <span className="block text-on-surface-variant font-label-sm text-label-sm">{ev.id}: {ev.name} · {ev.source} · {ev.hash} · {formatTime(ev.at)}</span>}
                        </span>
                        {o.satisfied ? (
                          <span className="font-label-sm text-label-sm font-semibold text-tertiary-container whitespace-nowrap">SATISFIED</span>
                        ) : (
                          <GatedButton cap={CAP.ATTACH_EVIDENCE} className={`${BTN_SECONDARY} !py-1 !px-2 whitespace-nowrap`} onClick={() => openAttach({ decisionId: d.id, obligationId: o.id })}>
                            <span className="text-amber-700 font-semibold">MISSING</span> · Attach
                          </GatedButton>
                        )}
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Microsoft365SourcesPanel() {
  const { user } = useAuth();
  const openAttach = useContext(AttachContext);
  const [results, setResults] = useState({});
  const [busy, setBusy] = useState(null);

  const read = (src) => {
    setBusy(src.id);
    window.setTimeout(() => {
      setBusy(null);
      setResults((r) => ({ ...r, [src.id]: src.approved ? { ok: true } : { ok: false } }));
      store.log(src.approved ? 'M365_READ' : 'M365_READ_BLOCKED',
        src.approved ? `Read ${src.docs.length} documents from ${src.name} via Microsoft Graph (GET ${src.path}).` : `Blocked read of ${src.name}: not on the tenant's approved source list.`,
        `${user.name} (${ROLE_LABEL[user.role]})`);
    }, 900);
  };

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="cloud_sync" title="Approved Microsoft 365 Sources (Read via Microsoft Graph)">
        <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">R-011 · Read-only</span>
      </PanelHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-sm">
        {M365_SOURCES.map((src) => {
          const res = results[src.id];
          return (
            <div key={src.id} className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{src.name}</span>
                  <span className="font-mono text-[11px] text-on-surface-variant truncate">GET {src.path}</span>
                </div>
                <span className={`px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold whitespace-nowrap ${src.approved ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-error-container text-on-error-container'}`}>
                  {src.approved ? 'Approved source' : 'Not approved'}
                </span>
              </div>
              <button type="button" className={`${BTN_SECONDARY} self-start !py-1`} onClick={() => read(src)} disabled={busy === src.id}>
                <Icon name={busy === src.id ? 'progress_activity' : 'sync'} className={`text-[16px] ${busy === src.id ? 'animate-spin' : ''}`} />
                {busy === src.id ? 'Reading…' : 'Read source'}
              </button>
              {res && !res.ok && (
                <div className="bg-error-container text-on-error-container rounded p-space-xs font-body-sm text-body-sm" role="alert">
                  Blocked: this location is not on the tenant's approved source list. Nothing was read.
                </div>
              )}
              {res?.ok && (
                <ul className="flex flex-col gap-1">
                  {src.docs.map((doc) => (
                    <li key={doc.name} className="bg-surface-container-lowest rounded p-space-xs flex items-center justify-between gap-space-sm font-body-sm text-body-sm">
                      <span className="min-w-0">
                        <span className="text-on-surface block truncate">{doc.name}</span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm">v{doc.version} · modified {doc.modified} · {doc.size} · {demoHash(doc.name).slice(0, 22)}…</span>
                      </span>
                      <GatedButton cap={CAP.ATTACH_EVIDENCE} className={`${BTN_PRIMARY} !py-1 !px-2 whitespace-nowrap`} onClick={() => openAttach({ doc, source: src.name })}>Use as evidence</GatedButton>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
