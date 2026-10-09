// Demo-only authentication. Credentials are hardcoded on purpose: there is no backend.
import { createContext, useContext, useState } from 'react';
import { ROLES } from './routes';

export const DEMO_ACCOUNTS = {
  [ROLES.ADMIN]: {
    email: 'admin@ceryvra.com',
    password: 'Admin@123',
    name: 'Dr. Elena Rostova',
    title: 'Lead AI Risk Auditor & Executor',
    role: ROLES.ADMIN,
  },
  [ROLES.USER]: {
    email: 'user@ceryvra.com',
    password: 'User@123',
    name: 'Marcus Vance',
    title: 'Governance Analyst (Standard User)',
    role: ROLES.USER,
  },
};

const STORAGE_KEY = 'ceryvra-demo-session';
const AuthContext = createContext(null);

function readSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession);

  // Returns an error message, or null when the credentials match the selected role.
  const login = (role, email, password) => {
    const account = DEMO_ACCOUNTS[role];
    if (!account || email.trim().toLowerCase() !== account.email || password !== account.password) {
      return 'Invalid email or password for this login type.';
    }
    const { password: _ignored, ...session } = account;
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session)); } catch { /* ignore */ }
    setUser(session);
    return null;
  };

  // Microsoft Entra SSO is simulated: it signs in with the demo account of the selected role.
  const loginWithSso = (role) => {
    const account = DEMO_ACCOUNTS[role];
    return login(role, account.email, account.password);
  };

  const logout = () => {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, loginWithSso, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
