// Route table for the clickable prototype. Each page is generated 1:1 from a client HTML file
// and loaded on demand, so every screen is its own chunk.
import { lazy } from 'react';
import BODY from './pages/generated/bodyClasses.json';

export const ROLES = { ADMIN: 'admin', USER: 'user' };
const ALL = [ROLES.ADMIN, ROLES.USER];
const ADMIN_ONLY = [ROLES.ADMIN];

const page = (path, title, name, load, roles = ALL) => ({
  path, title, roles, bodyClass: BODY[name], Component: lazy(load),
});

export const PAGES = [
  page('/dashboard', 'Home', 'HomeDashboard', () => import('./pages/generated/HomeDashboard.jsx')),
  page('/governance-inventory', 'Governance Inventory', 'GovernanceInventory', () => import('./pages/generated/GovernanceInventory.jsx')),
  page('/governed-chat', 'Governed Chat', 'GovernedChat', () => import('./pages/generated/GovernedChat.jsx')),
  page('/notes', 'Notes', 'Notes', () => import('./pages/generated/Notes.jsx')),
  page('/decision-record', 'Decision Record', 'DecisionRecord', () => import('./pages/generated/DecisionRecord.jsx')),
  page('/missing-evidence', 'Missing Evidence', 'MissingEvidence', () => import('./pages/generated/MissingEvidence.jsx')),
  page('/change-detection', 'Change Detection', 'ChangeDetection', () => import('./pages/generated/ChangeDetection.jsx')),
  page('/revalidation', 'Revalidation', 'Revalidation', () => import('./pages/generated/Revalidation.jsx')),
  page('/consequence-graph', 'Consequence Graph', 'ConsequenceGraph', () => import('./pages/generated/ConsequenceGraph.jsx')),
  page('/recovery', 'Recovery', 'Recovery', () => import('./pages/generated/Recovery.jsx')),
  page('/verification', 'Verification', 'Verification', () => import('./pages/generated/Verification.jsx')),
  page('/audit-history', 'Audit History', 'AuditHistory', () => import('./pages/generated/AuditHistory.jsx')),
  page('/admin/rules', 'Admin Rules & Evidence', 'AdminRules', () => import('./pages/generated/AdminRules.jsx'), ADMIN_ONLY),
  page('/admin/tenants', 'Tenant & MSP Administration', 'TenantMsp', () => import('./pages/generated/TenantMsp.jsx'), ADMIN_ONLY),
];

export const HOME_BY_ROLE = {
  [ROLES.ADMIN]: '/dashboard',
  [ROLES.USER]: '/dashboard',
};

export function canAccess(role, path) {
  const match = PAGES.find((p) => p.path === path);
  return !match || match.roles.includes(role);
}
