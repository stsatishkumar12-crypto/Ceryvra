// Small UI kit for the panels and forms added to the prototype. Everything uses the client's
// design tokens and the same card / button / chip patterns as the client screens.
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../auth';
import { CAP_LABEL, can } from '../roles';

export const CARD = 'bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm';
export const BTN_PRIMARY = 'py-2 px-space-md rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
export const BTN_SECONDARY = 'py-2 px-space-md rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
export const BTN_DANGER = 'py-2 px-space-md rounded bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
export const CHIP = 'px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase tracking-wider whitespace-nowrap';
const INPUT = 'w-full px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all';

export const STATUS_CHIP = {
  APPROVED: 'bg-tertiary-container text-on-tertiary-container',
  PROVISIONAL: 'bg-amber-100 text-amber-900',
  Approved: 'bg-tertiary-container text-on-tertiary-container',
  'Under Review': 'bg-secondary-container text-on-secondary-container',
  Draft: 'bg-surface-container-highest text-on-surface',
  Restricted: 'bg-error-container text-on-error-container',
  Rejected: 'bg-error-container text-on-error-container',
  Low: 'bg-surface-container-highest text-on-surface',
  Medium: 'bg-secondary-container text-on-secondary-container',
  High: 'bg-amber-100 text-amber-900',
  Critical: 'bg-error-container text-on-error-container',
};

export function Chip({ value, className = '' }) {
  return <span className={`${CHIP} ${STATUS_CHIP[value] || 'bg-surface-container-highest text-on-surface'} ${className}`}>{value}</span>;
}

export function Icon({ name, className = 'text-[18px]', fill = false }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>
      {name}
    </span>
  );
}

export function PanelHeader({ icon, title, children }) {
  return (
    <div className="flex items-center justify-between gap-space-sm flex-wrap">
      <div className="flex items-center gap-1.5 min-w-0">
        <Icon name={icon} className="text-primary text-[20px]" />
        <h2 className="font-label-lg text-label-lg text-on-surface font-bold">{title}</h2>
      </div>
      {children && <div className="flex items-center gap-space-xs flex-wrap">{children}</div>}
    </div>
  );
}

export function Field({ label, hint, children, htmlFor }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="font-label-md text-label-md text-on-surface font-medium flex items-center justify-between gap-space-sm">
        <span>{label}</span>
        {hint && <span className="font-label-sm text-label-sm text-secondary font-normal">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

export const TextInput = (props) => <input type="text" className={INPUT} {...props} />;
export const TextArea = (props) => <textarea rows={3} className={`${INPUT} resize-none`} {...props} />;
export function Select({ options, ...props }) {
  return (
    <select className={INPUT} {...props}>
      {options.map((o) => (typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>))}
    </select>
  );
}

// Button usable only by roles with the capability (scope §7 role/authority segregation).
export function GatedButton({ cap, onClick, className = BTN_PRIMARY, disabled, children, type = 'button' }) {
  const { user } = useAuth();
  const allowed = can(user.role, cap);
  return (
    <button
      type={type}
      className={className}
      onClick={allowed ? onClick : undefined}
      disabled={disabled || !allowed}
      title={allowed ? undefined : `Requires: ${CAP_LABEL[cap]}`}
    >
      {!allowed && <Icon name="lock" />}
      {children}
    </button>
  );
}

export function EmptyState({ icon = 'inbox', title, children, action }) {
  return (
    <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col items-center text-center gap-space-xs" role="status">
      <Icon name={icon} className="text-outline text-[32px]" />
      <span className="font-label-md text-label-md text-on-surface font-semibold">{title}</span>
      {children && <span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">{children}</span>}
      {action && <div className="pt-space-xs">{action}</div>}
    </div>
  );
}

// Accessible modal dialog rendered on document.body.
export function Modal({ title, icon = 'edit_document', onClose, children, footer, wide = false }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    dialogRef.current?.querySelector('input, select, textarea, button')?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); prev?.focus?.(); };
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-space-md">
      <div className="absolute inset-0 bg-inverse-surface/50 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative w-full ${wide ? 'max-w-3xl' : 'max-w-xl'} max-h-[90vh] flex flex-col bg-surface-container-lowest rounded-xl shadow-xl`}
      >
        <div className="flex items-center justify-between gap-space-sm px-space-md py-space-sm bg-surface-container-low rounded-t-xl">
          <div className="flex items-center gap-space-xs">
            <Icon name={icon} className="text-primary text-[20px]" />
            <h2 className="font-headline-sm text-headline-sm text-on-surface">{title}</h2>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded text-on-surface-variant hover:bg-surface-container-high" aria-label="Close">
            <Icon name="close" />
          </button>
        </div>
        <div className="overflow-y-auto p-space-md flex flex-col gap-space-md">{children}</div>
        {footer && <div className="px-space-md py-space-sm bg-surface-container-low rounded-b-xl flex items-center justify-end gap-space-sm flex-wrap">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}

export function formatTime(iso) {
  return `${new Date(iso).toISOString().replace('T', ' ').slice(0, 16)} UTC`;
}
