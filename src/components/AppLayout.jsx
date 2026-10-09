// Wraps every signed-in page: shared sidebar + the page's own header/main from the client HTML.
import { Suspense, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_ACCOUNTS, useAuth } from '../auth';
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

// The client headers hardcode the admin persona; swap it for the signed-in demo user.
function personalizeHeader(root, user) {
  const admin = DEMO_ACCOUNTS.admin;
  if (!root || user.name === admin.name) return;
  const header = root.querySelector('header');
  if (!header) return;
  const walker = document.createTreeWalker(header, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.nodeValue.includes(admin.name)) node.nodeValue = node.nodeValue.replace(admin.name, user.name);
    if (node.nodeValue.includes(admin.title)) node.nodeValue = node.nodeValue.replace(admin.title, user.title);
  }
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

  useEffect(() => {
    document.title = `${title} – Ceryvra`;
    document.body.className = bodyClass;
    window.scrollTo(0, 0);
  }, [bodyClass, title]);

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
    <div ref={rootRef} onClick={onClick}>
      <Sidebar />
      {/* key forces a fresh mount (and a fresh run of the page script) on every navigation */}
      <Suspense fallback={<div className="pl-72 min-h-screen bg-surface" />}>
        <Component key={page.path} />
        <AfterMount key={`after-${page.path}`} run={() => personalizeHeader(rootRef.current, user)} />
        {extension && (
          <PageExtension key={`ext-${page.path}`} id={extension.id} anchorText={extension.anchorText} className="scroll-mt-24">
            <extension.Panel />
          </PageExtension>
        )}
      </Suspense>
    </div>
  );
}
