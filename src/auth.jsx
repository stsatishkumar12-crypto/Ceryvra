// Demo-only authentication. Credentials are hardcoded on purpose: there is no backend.
// One demo account per role from the scope document §7.
import { createContext, useContext, useState } from 'react';
import { ROLES, ROLE_LABEL } from './roles';

const account = (role, email, password, name) => ({ role, email, password, name, title: ROLE_LABEL[role] });

export const DEMO_ACCOUNTS = {
  [ROLES.PLATFORM_ADMIN]: account(ROLES.PLATFORM_ADMIN, 'admin@ceryvra.com', 'Admin@123', 'Priya Raman'),
  [ROLES.TENANT_ADMIN]: account(ROLES.TENANT_ADMIN, 'tenant.admin@ceryvra.com', 'Tenant@123', 'Daniel Brooks'),
  [ROLES.MSP_OPERATOR]: account(ROLES.MSP_OPERATOR, 'msp@ceryvra.com', 'Msp@123', 'Leo Martins'),
  [ROLES.STANDARD_USER]: account(ROLES.STANDARD_USER, 'user@ceryvra.com', 'User@123', 'Jordan Ellis'),
  [ROLES.DECISION_OWNER]: account(ROLES.DECISION_OWNER, 'owner@ceryvra.com', 'Owner@123', 'Aisha Karim'),
  // Approver, executor and verifier use the people named in the client's Recovery/Verification screens.
  [ROLES.APPROVER]: account(ROLES.APPROVER, 'approver@ceryvra.com', 'Approver@123', 'Dir. Sarah Sterling'),
  [ROLES.EXECUTOR]: account(ROLES.EXECUTOR, 'executor@ceryvra.com', 'Executor@123', 'Col. Marcus Vance'),
  [ROLES.VERIFIER]: account(ROLES.VERIFIER, 'verifier@ceryvra.com', 'Verifier@123', 'Dr. Elena Rostova'),
  [ROLES.AUDITOR]: account(ROLES.AUDITOR, 'auditor@ceryvra.com', 'Auditor@123', 'Hannah Weiss'),
};

const STORAGE_KEY = 'ceryvra-demo-session';
const AuthContext = createContext(null);

function readSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const session = raw ? JSON.parse(raw) : null;
    return session && DEMO_ACCOUNTS[session.role] ? session : null;
  } catch {
    return null;
  }
}

function toSession(acc) {
  const { password: _ignored, ...session } = acc;
  return session;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession);

  const start = (acc) => {
    const session = toSession(acc);
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session)); } catch { /* ignore */ }
    setUser(session);
  };

  // Returns an error message, or null when the credentials match the selected role.
  const login = (role, email, password) => {
    const acc = DEMO_ACCOUNTS[role];
    if (!acc || email.trim().toLowerCase() !== acc.email || password !== acc.password) {
      return `Invalid email or password for ${ROLE_LABEL[role] || 'this role'}.`;
    }
    start(acc);
    return null;
  };

  // Microsoft Entra SSO is simulated: it signs in with the demo account of the selected role.
  const loginWithSso = (role) => start(DEMO_ACCOUNTS[role]);

  // Demo helper used by the workflow guide to hand a step to the role that performs it.
  const switchRole = (role) => start(DEMO_ACCOUNTS[role]);

  const logout = () => {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithSso, switchRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
