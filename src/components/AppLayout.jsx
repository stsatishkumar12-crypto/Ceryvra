// Wraps every signed-in page: shared sidebar + the page's own header/main from the client HTML,
// plus the scope panels, tenant context, branding, role locks, responsive shell and states.
import { Fragment, Suspense, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../auth';
import { CAP_LABEL, GATED_ACTIONS, ROLE_LABEL, can } from '../roles';
import { HOME_TENANT, useStore } from '../demo/store';
import Sidebar from './Sidebar';
import AccessDenied from './AccessDenied';
import PageExtension from './PageExtension';
import { PageErrorBoundary, PageSkeleton, StatePreview } from './StateViews';
import { MsAuditPanel, MsExecutionPanel, MsVerificationPanel } from './extensions/MicrosoftAction';
import { OPEN_USE_CASE_FORM, UseCasePanel } from './extensions/UseCases';
import { DecisionPanel } from './extensions/Decisions';
import { DecisionEvidencePanel, EvidenceProvider, Microsoft365SourcesPanel } from './extensions/Evidence';
import { ChatComposer } from './extensions/ChatComposer';
import { RecommendationsPanel } from './extensions/Recommendations';
import { ActivityPanel, BrandingPanel, IsolationTestPanel, TenantWorkspace, WelcomeBanner, useBranding } from './extensions/Tenancy';

// Scope items the client screens do not show (or only show statically), added as panels on the
// matching screens. Each is inserted before the given anchor of the generated page.
const EXTENSIONS = {
  '/dashboard': [{ id: 'welcome', anchorText: 'Quick Actions', Panel: WelcomeBanner }],
  '/governance-inventory': [{ id: 'use-cases', anchorSelector: '#view-inventory', Panel: UseCasePanel }],
  '/decision-record': [{ id: 'decisions', anchorText: 'Decision Authority, Custodians', Panel: DecisionPanel }],
  '/missing-evidence': [
    { id: 'decision-evidence', anchorText: 'Completeness Logic Tree', anchorClosest: '.grid', Panel: DecisionEvidencePanel },
    { id: 'm365-sources', anchorText: 'Completeness Logic Tree', anchorClosest: '.grid', Panel: Microsoft365SourcesPanel },
  ],
  '/consequence-graph': [{ id: 'recommendations', anchorText: 'Hierarchical DAG', Panel: RecommendationsPanel }],
  '/recovery': [{ id: 'ms-action', anchorText: 'Cryptographically Shielded / Pruned Systems', Panel: MsExecutionPanel }],
  '/verification': [{ id: 'ms-verification', anchorText: 'Three-Way Comparative Diff Matrix', Panel: MsVerificationPanel }],
  '/audit-history': [
    { id: 'ms-audit', anchorText: 'Append-Only Ledger Timeline', Panel: MsAuditPanel },
    { id: 'activity', anchorText: 'Append-Only Ledger Timeline', Panel: ActivityPanel },
  ],
  '/admin/tenants': [
    { id: 'isolation', anchorText: 'Delegated MSP Operators', anchorClosest: '.border-b', Panel: IsolationTestPanel },
    { id: 'branding', anchorText: 'Delegated MSP Operators', anchorClosest: '.border-b', Panel: BrandingPanel },
  ],
};
const WRAPPERS = { '/missing-evidence': EvidenceProvider };

// Client buttons with no behaviour of their own that now open a prototype form.
const ACTION_HOOKS = {
  '/governance-inventory': [{ text: 'Create Governed Use Case', event: OPEN_USE_CASE_FORM }],
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
const matchRule = (rules, el) => {
  const text = norm(el.textContent || '');
  return rules.find((r) => text.includes(r.text) && text.length <= r.text.length + 40);
};

// Locks client-screen buttons whose action the role is not authorized for (scope §7
// role/authority segregation). Locked buttons stay visible but explain who may act.
function lockActions(root, path, role) {
  const rules = [...(GATED_ACTIONS['*'] || []), ...(GATED_ACTIONS[path] || [])];
  const scope = root?.querySelectorAll('header button, header a, main button, main a') || [];
  scope.forEach((el) => {
    if (el.closest('[data-extension]')) return;
    const rule = matchRule(rules, el);
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

export default function AppLayout({ page, denied = false }) {
  const { user } = useAuth();
  const s = useStore();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const rootRef = useRef(null);
  const { Component, bodyClass, title } = page;
  const [toast, setToast] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const toastTimer = useRef(null);
  const homeTenant = s.activeTenant === HOME_TENANT;
  const extensions = homeTenant ? EXTENSIONS[page.path] || [] : [];
  const Wrapper = WRAPPERS[page.path] || Fragment;
  const preview = params.get('preview');
  useBranding();
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  useEffect(() => {
    if (denied) return;
    document.title = `${title} – Ceryvra`;
    document.body.className = bodyClass;
    window.scrollTo(0, 0);
    setNavOpen(false);
  }, [bodyClass, title, denied]);

  const showToast = (text) => {
    setToast(text);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3500);
  };

  // Blocks locked actions before the client's own handlers run, and routes hooked buttons.
  const onClickCapture = (e) => {
    const locked = e.target.closest('[data-locked]');
    if (locked) {
      e.preventDefault();
      e.stopPropagation();
      showToast(`${ROLE_LABEL[user.role]} cannot perform this action. Requires: ${locked.getAttribute('data-locked')}.`);
      return;
    }
    const btn = e.target.closest('main button, main a');
    const hook = btn && !btn.closest('[data-extension]') && matchRule(ACTION_HOOKS[page.path] || [], btn);
    if (hook) {
      e.preventDefault();
      e.stopPropagation();
      window.dispatchEvent(new Event(hook.event));
    }
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

  const exitPreview = () => {
    params.delete('preview');
    setParams(params, { replace: true });
  };

  let content;
  if (denied) {
    content = <AccessDenied title={title} path={page.path} />;
  } else if (preview) {
    content = <StatePreview kind={preview} title={title} onExit={exitPreview} />;
  } else if (!homeTenant) {
    content = <TenantWorkspace page={page} />;
  } else {
    content = (
      <Suspense fallback={<PageSkeleton title={title} />}>
        {/* key forces a fresh mount (and a fresh run of the page script) per page and per role */}
        <Component key={`${page.path}-${user.role}`} />
        <AfterMount
          key={`after-${page.path}-${user.role}`}
          run={() => {
            personalizeHeader(rootRef.current, user);
            lockActions(rootRef.current, page.path, user.role);
          }}
        />
        <Wrapper>
          {extensions.map((ext) => (
            <PageExtension key={`${ext.id}-${user.role}`} id={ext.id} anchorText={ext.anchorText} anchorSelector={ext.anchorSelector} anchorClosest={ext.anchorClosest} className="scroll-mt-24">
              <ext.Panel />
            </PageExtension>
          ))}
        </Wrapper>
        {page.path === '/governed-chat' && <ChatComposer key={`chat-${user.role}`} />}
      </Suspense>
    );
  }

  return (
    <div ref={rootRef} data-app-shell="" onClick={onClick} onClickCapture={onClickCapture}>
      <button
        type="button"
        onClick={() => setNavOpen(true)}
        className="lg:hidden fixed top-3 left-3 z-[45] w-10 h-10 rounded-lg bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface"
        aria-label="Open navigation"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      {navOpen && <div className="lg:hidden fixed inset-0 z-[48] bg-inverse-surface/40" onClick={() => setNavOpen(false)} aria-hidden="true" />}
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />
      <PageErrorBoundary key={page.path} title={title}>{content}</PageErrorBoundary>
      {toast && (
        <div role="status" className="fixed bottom-space-lg left-1/2 -translate-x-1/2 lg:ml-36 z-[60] w-[calc(100%-2rem)] max-w-xl bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-[18px]">lock</span>
          <span className="font-body-sm text-body-sm">{toast}</span>
        </div>
      )}
    </div>
  );
}
