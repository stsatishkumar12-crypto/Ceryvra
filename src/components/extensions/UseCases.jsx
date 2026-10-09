// Scope §5 step 1 / R-003: create a governed AI use case (with supporting chat/notes) and
// review it. Records are tenant-scoped (R-001).
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../auth';
import { CAP, ROLE_LABEL, can } from '../../roles';
import { scoped, store, useStore } from '../../demo/store';
import {
  BTN_DANGER, BTN_PRIMARY, BTN_SECONDARY, CARD, Chip, EmptyState, Field, GatedButton, Icon, Modal,
  PanelHeader, Select, TextArea, TextInput, formatTime,
} from '../ui';

export const APPROVED_MODELS = ['Claude (AWS Bedrock)', 'Titan Text (AWS Bedrock)'];
const KINDS = ['Use Case', 'AI System', 'Agent', 'Model', 'Vendor'];
const RISKS = ['Low', 'Medium', 'High', 'Critical'];

export const OPEN_USE_CASE_FORM = 'ceryvra:open-use-case-form';

function UseCaseForm({ onClose, fromChat }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: fromChat ? 'Subcontractor logistics routing assessment' : '',
    kind: 'Use Case',
    vendor: 'Anthropic via AWS Bedrock',
    model: APPROVED_MODELS[0],
    owner: user.name,
    risk: 'Medium',
    description: fromChat ? 'Created from a governed chat thread on ITAR-Reg-774 vendor routing.' : '',
    linkChat: fromChat,
    linkNotes: false,
  });
  const [error, setError] = useState('');
  const [created, setCreated] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim()) {
      setError('Name and description are required.');
      return;
    }
    const supporting = [form.linkChat && 'Governed chat thread', form.linkNotes && 'Governance note'].filter(Boolean);
    setCreated(store.createUseCase({ ...form, supporting }, `${user.name} (${ROLE_LABEL[user.role]})`));
  };

  if (created) {
    return (
      <Modal title="Use Case Submitted for Review" icon="task_alt" onClose={onClose} footer={<button type="button" className={BTN_PRIMARY} onClick={onClose}>Done</button>}>
        <div className="bg-tertiary-container/15 rounded-lg p-space-sm flex items-start gap-space-sm" role="status">
          <Icon name="check_circle" className="text-tertiary-container text-[22px]" fill />
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md text-on-surface font-semibold">{created.id} · {created.name}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Status: Under Review. A Reviewer / Approver can now review it in the Governance Inventory, then record a decision for it.</span>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      title="Create Governed AI Use Case"
      icon="add_box"
      onClose={onClose}
      wide
      footer={(
        <>
          <button type="button" className={BTN_SECONDARY} onClick={onClose}>Cancel</button>
          <button type="submit" form="use-case-form" className={BTN_PRIMARY}><Icon name="send" />Submit for Review</button>
        </>
      )}
    >
      <form id="use-case-form" onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-space-md" noValidate>
        <div className="md:col-span-2">
          <Field label="Use case name" htmlFor="uc-name"><TextInput id="uc-name" value={form.name} onChange={set('name')} placeholder="e.g. Vendor contract summarizer" /></Field>
        </div>
        <Field label="Inventory type" htmlFor="uc-kind"><Select id="uc-kind" value={form.kind} onChange={set('kind')} options={KINDS} /></Field>
        <Field label="Risk assessment" htmlFor="uc-risk"><Select id="uc-risk" value={form.risk} onChange={set('risk')} options={RISKS} /></Field>
        <Field label="Vendor" htmlFor="uc-vendor"><TextInput id="uc-vendor" value={form.vendor} onChange={set('vendor')} /></Field>
        <Field label="Model" hint="Approved models only" htmlFor="uc-model"><Select id="uc-model" value={form.model} onChange={set('model')} options={APPROVED_MODELS} /></Field>
        <Field label="Business owner" htmlFor="uc-owner"><TextInput id="uc-owner" value={form.owner} onChange={set('owner')} /></Field>
        <Field label="Initial status" hint="Set by workflow"><TextInput value="Under Review" readOnly /></Field>
        <div className="md:col-span-2">
          <Field label="Purpose and scope" htmlFor="uc-desc"><TextArea id="uc-desc" value={form.description} onChange={set('description')} placeholder="What the AI does, for whom, and with which data." /></Field>
        </div>
        <fieldset className="md:col-span-2 flex flex-col gap-space-xs">
          <legend className="font-label-md text-label-md text-on-surface font-medium pb-1">Supporting context</legend>
          <label className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface"><input type="checkbox" className="accent-primary" checked={form.linkChat} onChange={set('linkChat')} />Link the current governed chat thread</label>
          <label className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface"><input type="checkbox" className="accent-primary" checked={form.linkNotes} onChange={set('linkNotes')} />Link a governance note</label>
        </fieldset>
        {error && <div className="md:col-span-2 bg-error-container text-on-error-container rounded-lg p-space-sm font-body-sm text-body-sm" role="alert">{error}</div>}
      </form>
    </Modal>
  );
}

// Opens the form from ?new=usecase or from the client's "+ Create Governed Use Case" button.
export function useUseCaseForm() {
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState(null);
  const { user } = useAuth();
  const allowed = can(user.role, CAP.CREATE_USE_CASE);

  useEffect(() => {
    if (params.get('new') === 'usecase') {
      if (allowed) setOpen({ fromChat: params.get('from') === 'chat' });
      setParams({}, { replace: true });
    }
  }, [params, setParams, allowed]);

  useEffect(() => {
    const onOpen = () => setOpen({ fromChat: false });
    window.addEventListener(OPEN_USE_CASE_FORM, onOpen);
    return () => window.removeEventListener(OPEN_USE_CASE_FORM, onOpen);
  }, []);

  const form = open ? <UseCaseForm fromChat={open.fromChat} onClose={() => setOpen(null)} /> : null;
  return [form, () => setOpen({ fromChat: false })];
}

export function UseCasePanel() {
  const s = useStore();
  const { user } = useAuth();
  const [form, openForm] = useUseCaseForm();
  const items = scoped(s, 'useCases');
  const actor = `${user.name} (${ROLE_LABEL[user.role]})`;

  return (
    <div className={`${CARD} mb-space-md`}>
      <PanelHeader icon="rule_folder" title="Governed Use Cases Submitted in this Workspace">
        <GatedButton cap={CAP.CREATE_USE_CASE} onClick={openForm}><Icon name="add" />Create Governed Use Case</GatedButton>
      </PanelHeader>
      {items.length === 0 ? (
        <EmptyState icon="inventory_2" title="No use cases submitted yet">
          Create a governed AI use case to start the workflow. It will appear here for review.
        </EmptyState>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead>
              <tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-2 pr-space-sm">ID / Name</th><th className="py-2 pr-space-sm">Type</th><th className="py-2 pr-space-sm">Owner</th>
                <th className="py-2 pr-space-sm">Model</th><th className="py-2 pr-space-sm">Risk</th><th className="py-2 pr-space-sm">Status</th><th className="py-2">Review</th>
              </tr>
            </thead>
            <tbody>
              {items.map((u) => (
                <tr key={u.id} className="border-t border-surface-container align-top">
                  <td className="py-2 pr-space-sm">
                    <div className="font-mono text-[11px] text-primary font-semibold">{u.id}</div>
                    <div className="text-on-surface font-semibold">{u.name}</div>
                    <div className="text-on-surface-variant">{u.description}</div>
                    {u.supporting?.length > 0 && <div className="text-on-surface-variant font-label-sm text-label-sm pt-0.5">Linked: {u.supporting.join(', ')}</div>}
                  </td>
                  <td className="py-2 pr-space-sm text-on-surface">{u.kind}</td>
                  <td className="py-2 pr-space-sm text-on-surface">{u.owner}<div className="text-on-surface-variant font-label-sm text-label-sm">{formatTime(u.createdAt)}</div></td>
                  <td className="py-2 pr-space-sm text-on-surface">{u.model}</td>
                  <td className="py-2 pr-space-sm"><Chip value={u.risk} /></td>
                  <td className="py-2 pr-space-sm"><Chip value={u.status} />{u.reviewedBy && <div className="text-on-surface-variant font-label-sm text-label-sm pt-0.5">by {u.reviewedBy}</div>}</td>
                  <td className="py-2">
                    {u.status === 'Under Review' ? (
                      <div className="flex flex-wrap gap-1">
                        <GatedButton cap={CAP.APPROVE} className={`${BTN_PRIMARY} !py-1 !px-2`} onClick={() => store.reviewUseCase(u.id, 'Approved', actor)}>Approve</GatedButton>
                        <GatedButton cap={CAP.APPROVE} className={`${BTN_SECONDARY} !py-1 !px-2`} onClick={() => store.reviewUseCase(u.id, 'Restricted', actor)}>Restrict</GatedButton>
                        <GatedButton cap={CAP.APPROVE} className={`${BTN_DANGER} !py-1 !px-2`} onClick={() => store.reviewUseCase(u.id, 'Rejected', actor)}>Reject</GatedButton>
                      </div>
                    ) : u.status === 'Approved' && can(user.role, CAP.RECORD_DECISION) ? (
                      <Link to={`/decision-record?new=decision&useCase=${u.id}`} className="font-label-sm text-label-sm text-primary hover:underline">Record decision →</Link>
                    ) : (
                      <span className="text-on-surface-variant font-label-sm text-label-sm">Reviewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {form}
    </div>
  );
}
