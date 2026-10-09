// Permission-denied state (scope §8) for screens outside the signed-in role's access,
// styled with the client's tokens and the same layout shell as the other pages.
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth';
import { HOME_BY_ROLE, ROLE_LABEL, rolesWithAccess } from '../roles';

export default function AccessDenied({ title, path }) {
  const { user } = useAuth();
  useEffect(() => {
    document.title = `${title} – Ceryvra`;
    document.body.className = 'bg-background font-body-md text-body-md text-on-surface';
  }, [title]);
  return (
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center">
        <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
          <span>Global Aerospace &amp; Defense</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">{title}</span>
        </div>
      </header>
      <main className="relative w-full pt-16 px-gutter bg-surface min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
          <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">gpp_bad</span>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-headline-sm text-headline-sm text-on-surface">Access Restricted: Role Not Authorized</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You are signed in as <span className="font-semibold text-on-surface">{user.email}</span> ({ROLE_LABEL[user.role]}).
                {' '}<span className="font-semibold text-on-surface">{title}</span> is not part of this role's workspace.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                Available to: {rolesWithAccess(path).join(', ')}.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-sm">
            <Link to={HOME_BY_ROLE[user.role]} className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors">
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              Back to My Workspace
            </Link>
            <button type="button" onClick={() => alert('Access request sent to your Tenant Administrator.')} className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors">
              <span className="material-symbols-outlined text-[18px]">add_moderator</span>
              Request Access
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
