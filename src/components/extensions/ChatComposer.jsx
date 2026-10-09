// R-002 / scope §2: employee chat routed only to approved models through the platform's model
// adapter, with source-backed answers. Hooks into the client's composer (#governed-prompt-input,
// #send-prompt-btn) and appends messages to the client's thread (#view-active-chat). Mocked.
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../../auth';
import { ROLE_LABEL } from '../../roles';
import { activeBranding, store, useStore } from '../../demo/store';
import { Icon } from '../ui';

const MODELS = [
  { id: 'claude-bedrock', label: 'Claude · AWS Bedrock', approved: true },
  { id: 'titan-bedrock', label: 'Titan Text · AWS Bedrock', approved: true },
  { id: 'gpt-external', label: 'GPT-4o · external API', approved: false },
];

const SOURCES = {
  vendor: { id: 'SRC-02', name: 'Vendor-Audit-Ledger-2024', where: 'SharePoint › Vendor Attestations' },
  itar: { id: 'SRC-01', name: 'ITAR-Reg-774', where: '@ITAR-Knowledge-Base (v4.2)' },
  soc2: { id: 'SRC-05', name: 'Anthropic-SOC2-TypeII-2026.pdf', where: 'SharePoint › Vendor Attestations' },
  iso: { id: 'SRC-06', name: 'ISO-27001-Certificate-2026.pdf', where: 'SharePoint › Security Certifications' },
  policy: { id: 'SRC-07', name: 'AI Vendor Policy v3.2', where: 'Governance rules library' },
  dec: { id: 'SRC-08', name: 'DEC-14820 Decision Genome v2.4', where: 'Decision Registry' },
};

// Canned, source-backed answers keyed by topic (demo only).
function answerFor(q) {
  const t = q.toLowerCase();
  if (/soc ?2|audit report|attestation/.test(t)) return { text: 'The vendor\'s SOC 2 Type II report is on file and valid until September 2027. It covers security and availability, and it satisfies the continuing evidence obligation on the vendor approval.', cite: ['soc2', 'policy'] };
  if (/iso|certif/.test(t)) return { text: 'An ISO 27001 certificate dated 30 September 2026 is in the approved Security Certifications library. Decisions that require it as future evidence can bind to this version.', cite: ['iso', 'policy'] };
  if (/decision|dec-|revalidat|obligation/.test(t)) return { text: 'DEC-14820 is under targeted revalidation after the subcontractor transit key was revoked. The original v1.0 genesis record is preserved, and the revalidated state is tracked separately for side-by-side comparison.', cite: ['dec', 'policy'] };
  if (/itar|export|routing|logistic/.test(t)) return { text: 'Under ITAR-Reg-774, domestic hub handoffs remain compliant. Tier-2 transit nodes need re-attested chain-of-custody evidence before the routing decision can leave PROVISIONAL status.', cite: ['itar', 'vendor'] };
  return { text: 'I can only answer from the sources approved for this workspace. The closest approved material is the AI Vendor Policy and the vendor audit ledger. Ask about vendors, evidence, certifications, decisions or export rules for a sourced answer.', cite: ['policy', 'vendor'] };
}

function UserMessage({ m, user }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center gap-space-sm">
        <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md font-bold">
          {user.name.split(' ').filter((p) => /^[A-Z]/.test(p)).slice(-2).map((p) => p[0]).join('')}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-label-md text-label-md text-on-surface font-semibold">{user.name}</span>
            <span className="px-1.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">{ROLE_LABEL[user.role]}</span>
          </div>
          <span className="font-body-sm text-body-sm text-outline">{m.time} • Model requested: {m.model.label}</span>
        </div>
      </div>
      <p className="font-body-md text-body-md text-on-surface pl-10 pr-2 whitespace-pre-wrap">{m.text}</p>
    </div>
  );
}

function AssistantMessage({ m, assistant }) {
  if (m.blocked) {
    return (
      <div className="bg-error-container p-space-md rounded-lg shadow-sm flex items-start gap-space-sm" role="alert">
        <Icon name="block" className="text-on-error-container text-[20px]" />
        <div className="flex flex-col gap-0.5">
          <span className="font-label-md text-label-md text-on-error-container font-semibold">Request blocked by the model allow-list</span>
          <span className="font-body-sm text-body-sm text-on-error-container">{m.model.label} is not approved for this tenant. Nothing was sent to it. Choose an approved model and ask again.</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-sm py-1.5 rounded">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold">
            <Icon name="verified" className="text-[14px]" />Governed &amp; Source-Backed
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{assistant} · {m.model.label} (approved)</span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{m.time}</span>
      </div>
      {m.pending ? (
        <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm" role="status">
          <Icon name="progress_activity" className="text-[18px] animate-spin" />Routing through the model adapter and retrieving approved sources…
        </div>
      ) : (
        <>
          <p className="font-body-md text-body-md text-on-surface">
            {m.text}{' '}
            {m.cite.map((k) => (
              <span key={k} className="inline-flex items-center px-1.5 py-0.5 mr-1 rounded bg-secondary-container text-on-secondary-fixed font-mono font-label-sm text-label-sm">[{SOURCES[k].id}: {SOURCES[k].name}]</span>
            ))}
          </p>
          <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Sources used (approved only)</span>
            {m.cite.map((k) => (
              <span key={k} className="font-body-sm text-body-sm text-on-surface"><span className="font-mono text-[11px] text-primary">{SOURCES[k].id}</span> {SOURCES[k].name} <span className="text-on-surface-variant">· {SOURCES[k].where}</span></span>
            ))}
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <Icon name="key_off" className="text-[14px]" />Model credentials stay inside the platform adapter and are never sent to the browser. Prompts are not used for model training.
          </span>
        </>
      )}
    </div>
  );
}

export function ChatComposer() {
  const { user } = useAuth();
  const s = useStore();
  const assistant = activeBranding(s)?.assistantName || 'Ceryvra Copilot';
  const [messages, setMessages] = useState([]);
  const [model, setModel] = useState(MODELS[0].id);
  const [hosts, setHosts] = useState(null);
  const modelRef = useRef(model);
  useEffect(() => { modelRef.current = model; }, [model]);
  const timers = useRef([]);

  // Attach to the client's composer and thread.
  useEffect(() => {
    const thread = document.getElementById('view-active-chat');
    const input = document.getElementById('governed-prompt-input');
    const sendBtn = document.getElementById('send-prompt-btn');
    if (!thread || !input || !sendBtn) return undefined;
    const threadHost = document.createElement('div');
    threadHost.className = 'flex flex-col gap-space-md';
    thread.appendChild(threadHost);
    const modelHost = document.createElement('div');
    input.parentNode.insertBefore(modelHost, input);
    setHosts({ thread: threadHost, model: modelHost });

    const send = () => {
      const text = input.value.trim();
      if (!text) { input.focus(); return; }
      const chosen = MODELS.find((m) => m.id === modelRef.current);
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const id = Date.now();
      input.value = '';
      const actor = `${user.name} (${ROLE_LABEL[user.role]})`;
      if (!chosen.approved) {
        setMessages((ms) => [...ms, { id, role: 'user', text, time, model: chosen }, { id: id + 1, role: 'assistant', blocked: true, model: chosen, time }]);
        store.log('MODEL_BLOCKED', `Chat request to unapproved model ${chosen.label} blocked by allow-list.`, actor);
        return;
      }
      setMessages((ms) => [...ms, { id, role: 'user', text, time, model: chosen }, { id: id + 1, role: 'assistant', pending: true, model: chosen, time }]);
      const { text: answer, cite } = answerFor(text);
      timers.current.push(window.setTimeout(() => {
        setMessages((ms) => ms.map((m) => (m.id === id + 1 ? { ...m, pending: false, text: answer, cite } : m)));
        store.log('GOVERNED_CHAT', `Governed answer via ${chosen.label} citing ${cite.map((k) => SOURCES[k].id).join(', ')}.`, actor);
        threadHost.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1100));
      requestAnimationFrame(() => threadHost.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
    };
    const onKey = (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } };
    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', onKey);
    const pending = timers.current;
    return () => {
      sendBtn.removeEventListener('click', send);
      input.removeEventListener('keydown', onKey);
      pending.forEach((t) => window.clearTimeout(t));
      threadHost.remove();
      modelHost.remove();
    };
  }, [user]);

  if (!hosts) return null;
  return (
    <>
      {createPortal(
        <div className="flex items-center gap-space-xs flex-wrap pb-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Model (tenant allow-list):</span>
          {MODELS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setModel(m.id)}
              aria-pressed={model === m.id}
              className={`px-2 py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1 ${model === m.id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              <Icon name={m.approved ? 'verified' : 'block'} className="text-[14px]" />
              {m.label}{!m.approved && ' (not approved)'}
            </button>
          ))}
        </div>,
        hosts.model,
      )}
      {createPortal(
        messages.map((m) => (m.role === 'user' ? <UserMessage key={m.id} m={m} user={user} /> : <AssistantMessage key={m.id} m={m} assistant={assistant} />)),
        hosts.thread,
      )}
    </>
  );
}
