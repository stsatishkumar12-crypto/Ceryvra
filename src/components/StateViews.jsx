// Scope §8 "accessible error, loading, empty, permission-denied ... states" at app-shell level,
// so every screen has them even where the client design has no preview for a state.
import { Component as ReactComponent } from 'react';
import { Link } from 'react-router-dom';
import { BTN_PRIMARY, BTN_SECONDARY, Icon } from './ui';

function Shell({ title, children }) {
  return (
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center">
        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{title}</span>
      </header>
      <main className="relative w-full pt-16 px-gutter bg-surface min-h-screen">{children}</main>
    </div>
  );
}

export function PageSkeleton({ title = 'Loading' }) {
  return (
    <Shell title={title}>
      <div className="py-space-lg flex flex-col gap-space-md animate-pulse" role="status" aria-live="polite" aria-label={`Loading ${title}`}>
        <div className="h-8 w-1/3 rounded bg-surface-container" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm">
          {[0, 1, 2, 3].map((i) => <div key={i} className="h-24 rounded-xl bg-surface-container-low" />)}
        </div>
        <div className="h-64 rounded-xl bg-surface-container-low" />
        <span className="sr-only">Loading {title}…</span>
      </div>
    </Shell>
  );
}

const PREVIEWS = {
  empty: { icon: 'inbox', tone: 'bg-surface-container-low text-on-surface', title: 'Nothing here yet', text: 'This workspace has no records for this screen. Records appear as soon as they are created.' },
  error: { icon: 'error', tone: 'bg-error-container text-on-error-container', title: 'This screen could not be loaded', text: 'The governance service did not respond. No data was changed. Try again, or contact your tenant administrator if it keeps happening.' },
  denied: { icon: 'gpp_bad', tone: 'bg-secondary-container text-on-secondary-container', title: 'Permission denied', text: 'Your role is not authorized for this screen or action. Request access from your tenant administrator.' },
};

export function StatePreview({ kind, title, onExit }) {
  if (kind === 'loading') return <PageSkeleton title={title} />;
  const p = PREVIEWS[kind];
  return (
    <Shell title={title}>
      <div className="py-space-xl flex justify-center">
        <div className={`max-w-lg w-full rounded-xl p-space-lg flex flex-col items-center text-center gap-space-sm ${p.tone}`} role={kind === 'error' ? 'alert' : 'status'}>
          <Icon name={p.icon} className="text-[40px]" />
          <h1 className="font-headline-md text-headline-md">{p.title}</h1>
          <p className="font-body-md text-body-md opacity-90">{p.text}</p>
          <div className="flex gap-space-sm pt-space-xs">
            {kind === 'error' && <button type="button" className={BTN_PRIMARY} onClick={onExit}><Icon name="replay" />Retry</button>}
            <button type="button" className={BTN_SECONDARY} onClick={onExit}>Show live screen</button>
          </div>
        </div>
      </div>
    </Shell>
  );
}

// Catches render errors in a screen and shows an accessible error state instead of a blank page.
export class PageErrorBoundary extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <Shell title={this.props.title}>
        <div className="py-space-xl flex justify-center">
          <div className="max-w-lg w-full rounded-xl p-space-lg bg-error-container text-on-error-container flex flex-col items-center text-center gap-space-sm" role="alert">
            <Icon name="error" className="text-[40px]" />
            <h1 className="font-headline-md text-headline-md">Something went wrong on this screen</h1>
            <p className="font-body-sm text-body-sm">{String(this.state.error.message || this.state.error)}</p>
            <div className="flex gap-space-sm">
              <button type="button" className={BTN_PRIMARY} onClick={() => this.setState({ error: null })}><Icon name="replay" />Retry</button>
              <Link to="/dashboard" className={BTN_SECONDARY}>Go to dashboard</Link>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}
