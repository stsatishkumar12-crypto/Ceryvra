// Sidebar card that walks through the scope's 11-step mandatory workflow demonstration.
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { WORKFLOW, stepForPath } from '../demo/workflow';
import { ROLE_LABEL } from '../roles';

const KEY = 'ceryvra-demo-step';

function readStep() {
  try { return Number(sessionStorage.getItem(KEY)) || null; } catch { return null; }
}

export default function WorkflowGuide() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, switchRole } = useAuth();
  const [preferred, setPreferred] = useState(readStep);
  const [open, setOpen] = useState(false);
  const current = stepForPath(pathname, preferred);
  const step = current ? WORKFLOW[current - 1] : null;

  useEffect(() => {
    try { if (current) sessionStorage.setItem(KEY, String(current)); } catch { /* ignore */ }
  }, [current]);

  const go = (n) => {
    setPreferred(n);
    setOpen(false);
    navigate(WORKFLOW[n - 1].to);
  };

  // Demo convenience: hand the current step to the role that performs it.
  const actAs = () => {
    switchRole(step.role);
    navigate(step.to);
  };

  return (
    <div className="relative">
      <div className="p-space-xs rounded bg-surface-container-lowest flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setOpen((v) => !v)} className="flex items-center gap-space-xs text-left" aria-expanded={open}>
            <span className="material-symbols-outlined text-primary text-[18px]">route</span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">Workflow Demo</span>
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">{open ? 'expand_more' : 'chevron_right'}</span>
          </button>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{current ? `Step ${current} / ${WORKFLOW.length}` : 'Not on a step'}</span>
        </div>
        <span className="font-body-sm text-body-sm text-on-surface-variant truncate" title={step?.detail}>
          {step ? step.title : 'Start at step 1 to follow the scope workflow.'}
        </span>
        {step && (
          step.role === user.role ? (
            <span className="font-label-sm text-label-sm text-tertiary-container flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              You are the {ROLE_LABEL[step.role]}
            </span>
          ) : (
            <button type="button" onClick={actAs} className="font-label-sm text-label-sm text-primary hover:underline text-left flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">switch_account</span>
              Switch to {ROLE_LABEL[step.role]}
            </button>
          )
        )}
        <div className="flex items-center gap-space-xs">
          <button type="button" disabled={!current || current === 1} onClick={() => go(current - 1)} className="flex-1 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1 disabled:opacity-40">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>Prev
          </button>
          <button type="button" disabled={current === WORKFLOW.length} onClick={() => go(current ? current + 1 : 1)} className="flex-1 py-1 rounded bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm flex items-center justify-center gap-1 disabled:opacity-40">
            {current ? 'Next' : 'Start'}<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-full bottom-0 ml-space-sm w-96 max-h-[80vh] overflow-y-auto bg-surface-container-lowest rounded-xl shadow-xl p-space-md flex flex-col gap-space-xs z-50">
          <div className="flex items-center justify-between pb-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-bold">Mandatory Workflow Demonstration</span>
            <button type="button" onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-on-surface" aria-label="Close">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          {WORKFLOW.map((s) => (
            <button
              key={s.n}
              type="button"
              onClick={() => go(s.n)}
              className={`text-left p-space-xs rounded-lg flex gap-space-sm transition-colors ${s.n === current ? 'bg-primary-container text-on-primary' : 'hover:bg-surface-container-low'}`}
            >
              <span className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-label-sm text-label-sm ${s.n === current ? 'bg-on-primary text-primary' : 'bg-surface-container text-on-surface'}`}>{s.n}</span>
              <span className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-semibold">{s.title}</span>
                <span className={`font-body-sm text-body-sm ${s.n === current ? 'text-on-primary/90' : 'text-on-surface-variant'}`}>{s.detail}</span>
                <span className={`font-label-sm text-label-sm ${s.n === current ? 'text-on-primary/80' : 'text-secondary'}`}>{ROLE_LABEL[s.role]} · {s.reqs}</span>
              </span>
            </button>
          ))}
          {step?.also && (
            <div className="pt-space-xs flex flex-wrap gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Step {step.n} also uses:</span>
              {step.also.map(([label, to]) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="font-label-sm text-label-sm text-primary hover:underline">{label}</Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
