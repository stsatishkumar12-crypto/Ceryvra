// Wraps every signed-in page: shared sidebar + the page's own header/main from the client HTML.
import { Suspense, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { CAP_LABEL, GATED_ACTIONS, ROLE_LABEL, can } from '../roles';
import Sidebar from './Sidebar';
import PageExtension from './PageExtension';
import { MsAuditPanel, MsExecutionPanel, MsVerificationPanel } from './extensions/MicrosoftAction';

// Scope items the client screens do not show yet (§5 steps 9–11), added as panels on the
// matching screens. They are inserted before the named card of the generated page.
const EXTENSIONS = {
  '/recovery': { id: 'ms-action', anchorText: 'Cryptographically Shielded / Pruned Systems', Panel: MsExecutionPanel },
  '/verification': { id: 'ms-verification', anchorText: 'Three-Way Comparative Diff Matrix', Panel: MsVerificationPanel },
  '/audit-history': { id: 'ms-audit', anchorText: 'Append-Only Ledger Timeline', Panel: MsAuditPanel },
};

// The client headers hardcode one persona ("Dr. Elena Rostova" + a title line);
// show the signed-in demo account and its role instead.
const CLIENT_PERSONA = 'Dr. Elena Rostova';

function personalizeHeader(root, user) {
  const header = root?.querySelector('header');
  if (!header) return;
  const walker = document.createTreeWalker(header, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.nodeValue.trim() === CLIENT_PERSONA) {
      node.nodeValue = user.name;
      const titleEl = node.parentElement.nextElementSibling;
      if (titleEl) titleEl.textContent = ROLE_LABEL[user.role];
      return;
    }
  }
}

const norm = (s) => s.replace(/\s+/g, ' ').trim();

// Locks client-screen buttons whose action the role is not authorized for (scope §7
// role/authority segregation). Locked buttons stay visible but explain who may act.
function lockActions(root, path, role) {
  const rules = [...(GATED_ACTIONS['*'] || []), ...(GATED_ACTIONS[path] || [])];
  const scope = root?.querySelectorAll('header button, header a, main button, main a') || [];
  scope.forEach((el) => {
    if (el.closest('[data-extension]')) return;
    const text = norm(el.textContent || '');
    const rule = rules.find((r) => text.includes(r.text) && text.length <= r.text.length + 40);
    if (rule && !can(role, rule.cap)) {
      el.setAttribute('data-locked', CAP_LABEL[rule.cap]);
      el.setAttribute('title', `Requires: ${CAP_LABEL[rule.cap]}`);
      el.setAttribute('aria-disabled', 'true');
      el.classList.add('opacity-50', 'cursor-not-allowed');
    }
  });
}

// Runs after the lazily loaded page has been committed to the DOM.
function AfterMount({ run }) {
  useEffect(run, [run]);
  return null;
}

export default function AppLayout({ page }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const { Component, bodyClass, title } = page;
  const extension = EXTENSIONS[page.path];
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  useEffect(() => {
    document.title = `${title} – Ceryvra`;
    document.body.className = bodyClass;
    window.scrollTo(0, 0);
  }, [bodyClass, title]);

  // Blocks locked actions before the client's own handlers run.
  const onClickCapture = (e) => {
    const locked = e.target.closest('[data-locked]');
    if (!locked) return;
    e.preventDefault();
    e.stopPropagation();
    setToast(`${ROLE_LABEL[user.role]} cannot perform this action. Requires: ${locked.getAttribute('data-locked')}.`);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3500);
  };

  // Page-to-page navigation for buttons wired with data-nav, and no-op "#" links.
  const onClick = (e) => {
    const navEl = e.target.closest('[data-nav]');
    if (navEl) {
      e.preventDefault();
      navigate(navEl.getAttribute('data-nav'));
      return;
    }
    const link = e.target.closest('a');
    if (link && (link.getAttribute('href') || '#').startsWith('#')) e.preventDefault();
  };

  return (
    <div ref={rootRef} onClick={onClick} onClickCapture={onClickCapture}>
      <Sidebar />
      {/* key forces a fresh mount (and a fresh run of the page script) per page and per role */}
      <Suspense fallback={<div className="pl-72 min-h-screen bg-surface" />}>
        <Component key={`${page.path}-${user.role}`} />
        <AfterMount
          key={`after-${page.path}-${user.role}`}
          run={() => {
            personalizeHeader(rootRef.current, user);
            lockActions(rootRef.current, page.path, user.role);
          }}
        />
        {extension && (
          <PageExtension key={`ext-${page.path}-${user.role}`} id={extension.id} anchorText={extension.anchorText} className="scroll-mt-24">
            <extension.Panel />
          </PageExtension>
        )}
      </Suspense>
      {toast && (
        <div role="status" className="fixed bottom-space-lg left-1/2 -translate-x-1/2 ml-36 z-[60] max-w-xl bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-[18px]">lock</span>
          <span className="font-body-sm text-body-sm">{toast}</span>
        </div>
      )}
    </div>
  );
}
