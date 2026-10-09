# Ceryvra – Clickable Frontend Prototype

A React frontend that recreates the client's 15 HTML screens with the same design and connects them into one clickable demo.
It is frontend only. There is no backend, API, database or real authentication. All data on screen is static mock data from the client files.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build at http://localhost:4173
```

## Demo logins (hardcoded)

| Login type | Email | Password | Access |
|---|---|---|---|
| Admin Login | `admin@ceryvra.com` | `Admin@123` | All screens, including Compliance & Policies and Settings & Tenancy |
| User Login | `user@ceryvra.com` | `User@123` | All workflow screens. Admin screens show an "Access Restricted" state |

On the login page you can also:
- click **Use demo login** to fill in the credentials;
- use **Sign in with Microsoft Entra ID** or the workspace-domain form (both are simulated).

All three sign in as the selected login type, show the client's "Connecting to Microsoft Entra ID" state, and then open the dashboard. **Sign out** is at the bottom of the sidebar.

## Screens and routes

| Route | Screen (client file) | Sidebar item |
|---|---|---|
| `/login` | Sign-in (`login.html`) | – |
| `/dashboard` | Home (`home-dashboard.html`) | Overview / Dashboard |
| `/governance-inventory` | Governance Inventory | Governed Use Cases |
| `/governed-chat` | Governed Chat | Governed Chat / Copilot |
| `/notes` | Notes | Governance Notes |
| `/decision-record` | Decision Record | Decision Registry |
| `/missing-evidence` | Missing Evidence | Evidence & Proofs → Completeness & Obligations |
| `/change-detection` | Change Detection | Change Detection & Impact |
| `/revalidation` | Revalidation | Targeted Revalidation |
| `/consequence-graph` | Consequence Graph | Consequence & Dependency |
| `/recovery` | Recovery | Recovery Planning |
| `/verification` | Verification | Approvals & Verification |
| `/audit-history` | Audit History | Audit Log & History |
| `/admin/rules` | Admin Rules & Evidence (admin only) | Compliance & Policies |
| `/admin/tenants` | Tenant & MSP Administration (admin only) | Settings & Tenancy |

## Workflow demo (scope §5, 11 steps)

The **Workflow Demo** card at the bottom of the sidebar walks through the scope's mandatory workflow. Use **Start**, **Next** and **Prev**, or open the step list to jump to any step.

| Step | Scope requirement | Screen | R-IDs |
|---|---|---|---|
| 1 | User creates a governed use case, with notes/chat | Governance Inventory (+ Governed Chat, Notes) | R-002, R-003 |
| 2 | Reviewer records the decision, evidence, authority, assumptions, rule version and obligations | Decision Record | R-004, R-005, R-015 |
| 3 | Decision stays provisional while evidence is incomplete | Missing Evidence | R-018 |
| 4 | New, expired or revised evidence is linked to the right decision branch | Change Detection | R-005, R-015 |
| 5 | Materiality gate separates relevant from irrelevant changes | Change Detection | R-016 |
| 6 | Only affected decisions are revalidated; the original stays comparable | Revalidation | R-006, R-017 |
| 7 | Downstream affected and unaffected items | Consequence Graph | R-007, R-008 |
| 8 | Minimum sufficient recovery plan | Recovery | R-009, R-019 |
| 9 | Authorized executor runs one bounded Microsoft action after approval | Recovery → ACT-03 panel | R-011 |
| 10 | Independent verifier gets fresh evidence; execution alone cannot close | Verification → Independent Read-Back panel | R-010, R-020 |
| 11 | Audit shows the whole lifecycle, including failures, retries and verified closure | Audit History → Recovery Lifecycle panel | R-014 |

Buttons inside the screens also link the steps together. For example:
- Change Detection → **Launch Revalidation Wizard**
- Consequence Graph → **Launch Minimum Recovery Plan**
- **New Decision** in every header → Decision Record

### Bounded Microsoft action (steps 9–11)

The client screens did not yet show the Microsoft Entra / Graph action that the scope requires, so it was added as three panels. They use the same card styling as the client screens. The demo state lasts for the browser session; **Reset Demo** starts it again.

1. **Recovery › ACT-03:**
   - The approver approves.
   - The executor runs "remove 3 members from Entra group SG-Flight-Override-Operators".
   - Tick **Simulate permission failure** to show a Graph 403 error and a retry.
   - A successful run only reaches **AWAITING_VERIFICATION**. The executor has no close button.
2. **Verification › Independent Read-Back:**
   - The verifier does a fresh Graph read and compares expected state, executor claim and observed state.
   - Tick **Simulate state mismatch** to show **VERIFICATION_FAILED** and reopen the recovery.
   - Otherwise the result is **VERIFIED**, and then **Close Recovery Case**.
3. **Audit History › Recovery Lifecycle:**
   - Shows every event with its timestamp and authority: approval, attempts, failures, retries, verification and closure.

## Screens required by the scope (§8)

All 15 are implemented:
- sign-in
- home
- governed chat
- notes
- governance inventory
- decision record
- missing evidence
- change detection
- revalidation
- consequence graph
- recovery
- verification
- admin rules/evidence
- tenant/MSP
- audit history

The required states (error, loading, empty, permission-denied, approval, provisional, verification-failure) are available from each screen's own scenario/state switcher at the top of the page, as in the client designs.

## How the code is organised

```
scripts/convert-html.mjs   Converts the client HTML files (in the parent folder) into React pages
src/pages/generated/       One component per client screen – same markup and Tailwind classes
src/legacy/                Each screen's original JavaScript, run after the page mounts
src/lib/legacy.js          Runs those scripts inside React and cleans up on navigation
src/components/            Shared sidebar, workflow guide, layout, access-denied state
src/components/extensions/ Scope panels added to client screens (Microsoft action, verification, audit)
src/demo/                  Mock workflow steps and Microsoft-action state
src/pages/Login.jsx        Login page (client design + Admin/User login)
src/auth.jsx               Demo-only auth with hardcoded accounts (sessionStorage)
src/routes.js              Route table and role access
tailwind.config.js         Client design tokens, copied exactly from the HTML files
```

If the client sends updated HTML files, put them in the parent folder and run `node scripts/convert-html.mjs`. Page-to-page button links are configured in the `PAGES` list in that script.

## Differences from the client HTML (intentional)

- **One shared sidebar.** Each client page had a slightly different sidebar. They are merged into one, based on the most complete version (from the Consequence Graph page), so every screen can be reached from every page.
- **Two sidebar entries added.** "Targeted Revalidation" and "Governance Notes" were added because those screens existed but had no sidebar link.
- **Workflow Demo and Microsoft action panels added.** These cover scope §5 steps 9–11 (R-010, R-011, R-014, R-020), which the client screens did not show yet. They are injected by `src/components/PageExtension.jsx`, so the generated pages stay untouched.
- **Admin/User login added.** The login page has an Admin/User login selector and an email/password form, as requested. The rest of the client login design is unchanged.
- **Logos stored locally.** The logo images are saved in `public/brand/`, because the original Google-hosted image links do not load from localhost.
