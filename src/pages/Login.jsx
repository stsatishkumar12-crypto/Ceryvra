// Sign-in page recreated from the client's login.html (same header, card, states and footer).
// Added for the demo: Admin Login / User Login tabs, each with the scope's §7 roles
// (one hardcoded demo account per role). Microsoft Entra SSO and the workspace-domain form
// are simulated and sign in as the selected role.
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { DEMO_ACCOUNTS, useAuth } from '../auth';
import { ADMIN_ROLES, HOME_BY_ROLE, ROLE_ICON, ROLE_LABEL, USER_ROLES } from '../roles';

const LOGO = '/brand/ceryvra-logo.png';
const MS_LOGO = '/brand/microsoft-logo.png';
const BODY_CLASS = 'min-h-screen flex flex-col justify-between bg-surface font-body-md text-on-surface antialiased relative selection:bg-primary-fixed selection:text-on-primary-fixed';

const TAB_ON = 'state-tab-btn flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all bg-surface-container-lowest text-primary shadow-sm font-semibold';
const TAB_OFF = 'state-tab-btn flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container';

const STATES = [
  { id: 'standard', icon: 'login', label: 'Standard SSO' },
  { id: 'loading', icon: 'sync', label: 'Processing' },
  { id: 'error', icon: 'error_outline', label: 'Auth Failure' },
  { id: 'denied', icon: 'gpp_bad', label: 'Access Denied' },
];

const LOGIN_TYPES = [
  { id: 'admin', roles: ADMIN_ROLES, icon: 'admin_panel_settings', label: 'Admin Login' },
  { id: 'user', roles: USER_ROLES, icon: 'person', label: 'User Login' },
];

export default function Login() {
  const { user, login, loginWithSso, logout } = useAuth();
  const navigate = useNavigate();
  const [view, setView] = useState('standard');
  const [loginType, setLoginType] = useState('admin');
  const [role, setRole] = useState(ADMIN_ROLES[0]);
  const isAdmin = loginType === 'admin';
  const typeRoles = isAdmin ? ADMIN_ROLES : USER_ROLES;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const [copied, setCopied] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const pending = useRef(null);

  useEffect(() => {
    document.title = 'Sign in – Ceryvra';
    document.body.className = BODY_CLASS;
    return () => window.clearTimeout(pending.current);
  }, []);

  if (user && !signingIn) return <Navigate to={HOME_BY_ROLE[user.role]} replace />;

  // Shows the client's "Connecting to Microsoft Entra ID" state, then opens the dashboard.
  const finishSignIn = (signedInRole) => {
    setSigningIn(true);
    setView('loading');
    window.clearTimeout(pending.current);
    pending.current = window.setTimeout(() => navigate(HOME_BY_ROLE[signedInRole], { replace: true }), 1400);
  };

  const cancelSignIn = () => {
    window.clearTimeout(pending.current);
    logout();
    setSigningIn(false);
    setView('standard');
  };

  const switchType = (next) => {
    setLoginType(next.id);
    setRole(next.roles[0]);
    setFormError('');
  };

  const pickRole = (next) => {
    setRole(next);
    setFormError('');
  };

  const submitCredentials = (e) => {
    e.preventDefault();
    const error = login(role, email, password);
    if (error) {
      setFormError(error);
      return;
    }
    setFormError('');
    finishSignIn(role);
  };

  const signInWithSso = (e) => {
    e?.preventDefault();
    loginWithSso(role);
    finishSignIn(role);
  };

  const fillDemo = () => {
    setEmail(DEMO_ACCOUNTS[role].email);
    setPassword(DEMO_ACCOUNTS[role].password);
    setFormError('');
  };

  const previewState = (id) => {
    if (signingIn) cancelSignIn();
    setView(id);
  };

  return (
    <>
      <header className="w-full bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50">
        <div className="w-full px-gutter md:px-margin h-16 flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <img alt="Ceryvra Enterprise AI Logo" className="h-8 w-auto object-contain" src={LOGO} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-none tracking-tight">Ceryvra</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Governance Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs md:gap-space-sm bg-surface-container-low px-space-sm py-1 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">SOC2 TYPE II • ISO 27001 CERTIFIED</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full px-gutter md:px-margin py-space-xl relative z-10">
        <div className="flex flex-col w-full items-center justify-center relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
            <div className="w-[720px] h-[720px] bg-surface-container rounded-full blur-3xl opacity-70" />
            <div className="absolute w-[480px] h-[480px] bg-secondary-fixed rounded-full blur-2xl opacity-40 -top-12 -right-12" />
          </div>

          <div className="w-full max-w-2xl relative z-10">
            {/* Review-state switcher from the client design */}
            <div className="mb-space-md p-space-xs bg-surface-container-low rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs">
              <div className="flex items-center gap-space-xs px-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">tune</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Review States:</span>
              </div>
              <div aria-label="Sign-in state preview" className="flex items-center gap-space-xs w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0" role="tablist">
                {STATES.map((s) => (
                  <button key={s.id} aria-selected={view === s.id} className={view === s.id ? TAB_ON : TAB_OFF} onClick={() => previewState(s.id)} role="tab" type="button">
                    <span className="material-symbols-outlined text-[15px]">{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-xl relative overflow-hidden transition-all duration-300">
              <div className="flex flex-col items-center text-center pb-space-lg">
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <img alt="Ceryvra Enterprise AI Logo" className="w-10 h-10 object-contain rounded-lg shadow-sm" src={LOGO} />
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-md text-headline-md text-on-surface tracking-tight">Ceryvra</span>
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-space-xs py-0.5 rounded uppercase tracking-wider font-semibold">AI Governance Cloud</span>
                  </div>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Governed AI Decision Platform</h1>
                <p className="font-body-md text-body-md text-secondary mt-1 max-w-lg leading-relaxed">
                  Automated compliance, policy enforcement, and audit-ready observability across enterprise generative and analytical models.
                </p>
              </div>

              {view === 'standard' && (
                <div className="flex flex-col gap-space-md">
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm min-w-0">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Detected Tenant Context</span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Global Aerospace &amp; Defense Group <span className="text-on-surface-variant font-normal">(US-Gov / EU-West cluster)</span>
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 bg-surface-container text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                      Verified
                    </span>
                  </div>

                  {/* Admin / User login selector */}
                  <div className="p-space-xs bg-surface-container-low rounded-lg grid grid-cols-2 gap-space-xs" role="tablist" aria-label="Login type">
                    {LOGIN_TYPES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        role="tab"
                        aria-selected={loginType === t.id}
                        onClick={() => switchType(t)}
                        className={`${loginType === t.id ? TAB_ON : TAB_OFF} justify-center py-2`}
                      >
                        <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Select role</span>
                    <div className={`grid gap-space-xs ${isAdmin ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`} role="radiogroup" aria-label="Role">
                      {typeRoles.map((r) => (
                        <button
                          key={r}
                          type="button"
                          role="radio"
                          aria-checked={role === r}
                          onClick={() => pickRole(r)}
                          className={`flex items-center gap-space-xs px-space-sm py-2 rounded-lg font-label-md text-label-md text-left transition-colors ${role === r ? 'bg-primary-fixed text-on-primary-fixed ring-2 ring-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
                        >
                          <span className="material-symbols-outlined text-[18px] shrink-0">{ROLE_ICON[r]}</span>
                          <span className="leading-tight">{ROLE_LABEL[r]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <form className="flex flex-col gap-space-sm" onSubmit={submitCredentials} noValidate>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-medium flex items-center justify-between" htmlFor="login-email">
                        <span>{isAdmin ? 'Admin Email' : 'User Email'}</span>
                        <span className="font-label-sm text-label-sm text-secondary">{ROLE_LABEL[role]}</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">mail</span>
                        <input
                          id="login-email"
                          type="email"
                          autoComplete="username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={DEMO_ACCOUNTS[role].email}
                          className="w-full pl-9 pr-space-md py-2.5 text-on-surface rounded-lg font-body-md text-body-md bg-surface-container-low/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="login-password">Password</label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">lock</span>
                        <input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-9 pr-10 py-2.5 text-on-surface rounded-lg font-body-md text-body-md bg-surface-container-low/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline"
                        />
                        <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-2 p-1 text-secondary hover:text-on-surface" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                          <span className="material-symbols-outlined text-[18px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                        </button>
                      </div>
                    </div>

                    {formError && (
                      <div className="bg-error-container p-space-sm rounded-lg flex items-center gap-space-sm" role="alert">
                        <span className="material-symbols-outlined text-on-error-container text-[18px]">error</span>
                        <span className="font-body-sm text-body-sm text-on-error-container">{formError}</span>
                      </div>
                    )}

                    <button className="w-full group bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 px-space-md rounded-lg flex items-center justify-center gap-3 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-surface-tint focus:ring-offset-2" type="submit">
                      <span className="material-symbols-outlined text-[18px]">{ROLE_ICON[role]}</span>
                      <span>Sign in as {ROLE_LABEL[role]}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </button>

                    <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">key</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                          Demo: <span className="font-mono text-on-surface">{DEMO_ACCOUNTS[role].email}</span> / <span className="font-mono text-on-surface">{DEMO_ACCOUNTS[role].password}</span>
                        </span>
                      </div>
                      <button type="button" onClick={fillDemo} className="shrink-0 font-label-sm text-label-sm text-primary hover:underline">Use demo login</button>
                    </div>
                  </form>

                  <div className="relative py-space-xs flex items-center justify-center">
                    <div className="w-full bg-surface-container h-px" />
                    <span className="absolute bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-secondary uppercase tracking-widest">or single sign-on</span>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <button className="w-full group bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-3 px-space-md rounded-lg flex items-center justify-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-surface-tint focus:ring-offset-2" onClick={signInWithSso} type="button">
                      <img alt="Microsoft Identity Logo" className="w-5 h-5 object-contain" src={MS_LOGO} />
                      <span>Sign in with Microsoft Entra ID</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </button>
                    <span className="font-label-sm text-label-sm text-center text-on-surface-variant">Conditional Access policies and hardware-bound MFA tokens will be evaluated.</span>
                  </div>

                  <div className="relative py-space-xs flex items-center justify-center">
                    <div className="w-full bg-surface-container h-px" />
                    <span className="absolute bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-secondary uppercase tracking-widest">or alternative tenant</span>
                  </div>

                  <form className="flex flex-col gap-space-sm" onSubmit={signInWithSso}>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-medium flex items-center justify-between" htmlFor="tenant-domain-input">
                        <span>Enterprise Workspace Domain</span>
                        <span className="font-label-sm text-label-sm text-secondary">Single Sign-On Routing</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">corporate_fare</span>
                        <input className="w-full pl-9 pr-space-md py-2.5 text-on-surface rounded-lg font-body-md text-body-md bg-surface-container-low/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" id="tenant-domain-input" placeholder="e.g. acme-defense.onmicrosoft.com" required type="text" />
                      </div>
                    </div>
                    <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-2.5 px-space-md rounded-lg transition-colors flex items-center justify-center gap-space-xs" type="submit">
                      <span>Continue with SSO</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                  </form>

                  <div className="pt-space-xs grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                    {[['lock', 'Zero-Trust Architecture'], ['encrypted', 'FIPS 140-2 Encrypted'], ['policy', 'Entra ID Enforced']].map(([icon, text]) => (
                      <div key={icon} className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">{icon}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {view === 'loading' && (
                <div className="flex flex-col items-center justify-center py-space-lg gap-space-md text-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-surface-container" />
                    <svg className="animate-spin w-20 h-20 text-primary absolute" fill="none" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeDasharray="80 140" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">shield</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 max-w-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Connecting to Microsoft Entra ID</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Verifying security tokens, hardware authentication factors, and tenant authorization assertions...</p>
                  </div>
                  <div className="w-full max-w-md bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm text-left">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-medium">1. Identity Federation Connected</span>
                        <span className="font-label-sm text-label-sm text-secondary">SAML 2.0 / OIDC handshake acknowledged</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[18px] animate-spin">refresh</span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-primary font-medium">2. Evaluating Tenant Conditional Access Policy...</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Evaluating Geo-IP, device posture &amp; Intune compliance</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm opacity-60">
                      <span className="material-symbols-outlined text-outline text-[18px]">radio_button_unchecked</span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface-variant font-medium">3. Decrypting Workspace Token</span>
                        <span className="font-label-sm text-label-sm text-secondary">Awaiting cryptographic signature release</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-xs">
                    <button className="font-label-md text-label-md text-secondary hover:text-error transition-colors flex items-center gap-1 mx-auto" onClick={cancelSignIn} type="button">
                      <span className="material-symbols-outlined text-[16px]">cancel</span>
                      Cancel and return to sign in
                    </button>
                  </div>
                </div>
              )}

              {view === 'error' && (
                <div className="flex flex-col gap-space-md">
                  <div className="bg-error-container p-space-md rounded-lg flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h2 className="font-headline-sm text-headline-sm text-on-error-container">Authentication Unsuccessful</h2>
                      <p className="font-body-md text-body-md text-on-error-container">
                        Your Microsoft Entra ID session could not be validated or has expired. No security credentials or policy rules were compromised during this attempt.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Audit Diagnostics</span>
                      <button
                        className="font-label-sm text-label-sm text-primary hover:underline"
                        onClick={() => { navigator.clipboard?.writeText('ERR_ENTRA_SESSION_EXPIRED - Code: 0x80041005 (CorrelationID: 4f88-b712-99e1)'); setCopied(true); }}
                        type="button"
                      >
                        {copied ? 'Copied' : 'Copy Telemetry'}
                      </button>
                    </div>
                    <div className="bg-surface-container p-space-xs rounded font-mono text-label-sm text-on-surface select-all overflow-x-auto whitespace-nowrap">
                      ERR_ENTRA_SESSION_EXPIRED • Code: 0x80041005 • Correlation: 4f88-b712-99e1-ca82
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-space-sm">
                    <button className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors" onClick={signInWithSso} type="button">
                      <span className="material-symbols-outlined text-[18px]">replay</span>
                      Retry Microsoft Entra Sign-In
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors" onClick={() => setView('standard')} type="button">
                      <span className="material-symbols-outlined text-[18px]">domain</span>
                      Use Different Domain
                    </button>
                  </div>
                  <div className="bg-surface-container-low/60 p-space-sm rounded-lg text-center">
                    <p className="font-body-sm text-body-sm text-secondary">
                      Repeated failures may indicate a conditional access IP restriction.
                      <a className="text-primary hover:underline font-semibold ml-1" href="#" onClick={(e) => { e.preventDefault(); alert('Routing ticket to Tenant Identity Operations...'); }}>
                        Contact your Ceryvra Tenant Administrator or Identity Ops Team
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {view === 'denied' && (
                <div className="flex flex-col gap-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">policy</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Access Restricted: Workspace Role Required</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Your identity was authenticated as <span className="font-semibold text-on-surface">marcus.vance@defensecorp.global</span>, but this account lacks an active RBAC assignment for the designated production cluster:
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between text-label-sm text-secondary uppercase tracking-wider">
                      <span>Target Environment</span>
                      <span>Security Tier: L4 High-Assurance</span>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">hub</span>
                      US-East Autonomous Systems Production Cluster
                    </div>
                    <div className="flex flex-wrap gap-space-xs pt-1">
                      <span className="bg-surface-container-lowest text-on-surface-variant px-2 py-0.5 rounded font-label-sm text-label-sm">Role Needed: AI Policy Auditor</span>
                      <span className="bg-surface-container-lowest text-on-surface-variant px-2 py-0.5 rounded font-label-sm text-label-sm">Org Unit: Autonomous Defense Group</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-space-sm">
                    <button className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors" onClick={() => alert('Access request ticket #REQ-99214 created and routed to Security Operations Manager.')} type="button">
                      <span className="material-symbols-outlined text-[18px]">add_moderator</span>
                      Request Access from Workspace Admin
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-2.5 px-space-md rounded-lg flex items-center justify-center gap-space-xs transition-colors" onClick={() => setView('standard')} type="button">
                      <span className="material-symbols-outlined text-[18px]">switch_account</span>
                      Switch Account
                    </button>
                  </div>
                  <div className="flex items-center gap-space-sm text-secondary px-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">info</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Approval routing will automatically dispatch to your assigned <span className="font-medium text-on-surface">Security Operations Manager</span> via ServiceNow &amp; Microsoft Teams Approvals.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-space-md p-space-sm bg-surface-container-lowest/90 backdrop-blur rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-xs text-center md:text-left">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Encrypted via TLS 1.3 Strict-Transport-Security</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-space-sm font-label-sm text-label-sm text-secondary">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container" />SOC 2 Type II</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container" />ISO/IEC 27001</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary" />FedRAMP Moderate In-Progress</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.02)] z-50">
        <div className="w-full px-gutter md:px-margin py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">shield</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">© 2025 Ceryvra Governance Systems Inc. All rights reserved.</span>
          </div>
          <nav className="flex flex-wrap items-center gap-space-md font-label-md text-label-md text-on-surface-variant">
            {['Trust Center', 'Privacy Policy', 'Security Documentation', 'Tenant Support'].map((label) => (
              <a key={label} className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>{label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
