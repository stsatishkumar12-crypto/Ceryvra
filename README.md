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

## Roles and demo logins (scope §7)

There is one hardcoded demo account for each of the nine roles in the scope document. On the login page:
1. Pick **Admin Login** or **User Login**.
2. Choose a role.
3. Click **Use demo login**, then sign in.

| Login tab | Role | Email | Password | Opens on |
|---|---|---|---|---|
| Admin | Platform Administrator | `admin@ceryvra.com` | `Admin@123` | Dashboard |
| Admin | Tenant Administrator | `tenant.admin@ceryvra.com` | `Tenant@123` | Admin Rules & Evidence |
| Admin | Delegated MSP Operator | `msp@ceryvra.com` | `Msp@123` | Tenant & MSP Administration |
| User | Standard User | `user@ceryvra.com` | `User@123` | Dashboard |
| User | Decision Owner | `owner@ceryvra.com` | `Owner@123` | Dashboard |
| User | Reviewer / Approver | `approver@ceryvra.com` | `Approver@123` | Dashboard |
| User | Authorized Executor | `executor@ceryvra.com` | `Executor@123` | Recovery |
| User | Independent Verifier | `verifier@ceryvra.com` | `Verifier@123` | Verification |
| User | Auditor | `auditor@ceryvra.com` | `Auditor@123` | Audit History |

### What each role can open

| Screen | Platform Admin | Tenant Admin | MSP Operator | Standard User | Decision Owner | Approver | Executor | Verifier | Auditor |
|---|---|---|---|---|---|---|---|---|---|
| Dashboard | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Governance Inventory | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | ✓ |
| Governed Chat, Notes | ✓ | ✓ | | ✓ | ✓ | ✓ | | | |
| Decision Record | ✓ | ✓ | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| Missing Evidence | ✓ | ✓ | | | ✓ | ✓ | | ✓ | ✓ |
| Change Detection, Revalidation | ✓ | | | | ✓ | ✓ | | | ✓ |
| Consequence Graph, Recovery, Verification | ✓ | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| Audit History | ✓ | ✓ | ✓ | | ✓ | ✓ | | ✓ | ✓ |
| Admin Rules & Evidence | ✓ | ✓ | ✓ | | | | | | |
| Tenant & MSP Administration | ✓ | ✓ | ✓ | | | | | | |

The sidebar only shows the screens a role can open. Opening any other screen by URL or button shows an "Access Restricted" state that lists the roles allowed there.

### What each role can do (role/authority segregation, §7)

| Action | Allowed roles |
|---|---|
| Create a governed use case | Standard User, Decision Owner, Platform Administrator |
| Record a decision; attach or attest evidence | Decision Owner, Reviewer / Approver |
| Approve (revalidation, recovery quorum, bounded Microsoft action) | Reviewer / Approver |
| Execute recovery actions and the Microsoft action | Authorized Executor |
| Verify, reject verification, close a recovery | Independent Verifier |
| Configure rules, evidence requirements, branding | Tenant Administrator, Platform Administrator, delegated MSP Operator |
| Switch into delegated customer tenants | Delegated MSP Operator, Platform Administrator |
| Auditor | Read-only |

Buttons a role is not allowed to use stay visible but are dimmed. Hover shows who is allowed, and clicking shows a message instead of running the action. The Platform Administrator has no approve, execute or verify rights, and the MSP Operator has no cross-tenant approval or execution rights, as §7 requires.

All rules live in `src/roles.js`.

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
| `/admin/rules` | Admin Rules & Evidence | Compliance & Policies |
| `/admin/tenants` | Tenant & MSP Administration | Settings & Tenancy |

## Workflow demo (scope §5, 11 steps)

The **Workflow Demo** card at the bottom of the sidebar walks through the scope's mandatory workflow. Use **Start**, **Next** and **Prev**, or open the step list to jump to any step. Each step shows which role performs it. If you are signed in as a different role, click **Switch to …** to continue as that role. This is a demo shortcut and does not exist in the product.

| Step | Scope requirement | Role | Screen | R-IDs |
|---|---|---|---|---|
| 1 | User creates a governed use case, with notes/chat | Standard User | Governance Inventory (+ Governed Chat, Notes) | R-002, R-003 |
| 2 | Reviewer records the decision, evidence, authority, assumptions, rule version and obligations | Reviewer / Approver | Decision Record | R-004, R-005, R-015 |
| 3 | Decision stays provisional while evidence is incomplete | Decision Owner | Missing Evidence | R-018 |
| 4 | New, expired or revised evidence is linked to the right decision branch | Decision Owner | Change Detection | R-005, R-015 |
| 5 | Materiality gate separates relevant from irrelevant changes | Reviewer / Approver | Change Detection | R-016 |
| 6 | Only affected decisions are revalidated; the original stays comparable | Reviewer / Approver | Revalidation | R-006, R-017 |
| 7 | Downstream affected and unaffected items | Decision Owner | Consequence Graph | R-007, R-008 |
| 8 | Minimum sufficient recovery plan, subject to approvals | Reviewer / Approver | Recovery | R-009, R-019 |
| 9 | Authorized executor runs one bounded Microsoft action after approval | Authorized Executor | Recovery → ACT-03 panel | R-011 |
| 10 | Independent verifier gets fresh evidence; execution alone cannot close | Independent Verifier | Verification → Independent Read-Back panel | R-010, R-020 |
| 11 | Audit shows the whole lifecycle, including failures, retries and verified closure | Auditor | Audit History → Recovery Lifecycle panel | R-014 |

The scope names the actor for steps 1, 2, 8 (approvals), 9, 10 and 11. For steps 3, 4, 5 and 7 it describes system behaviour without naming a role, so the role shown is the one that reviews that screen.

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
src/auth.jsx               Demo-only auth: one hardcoded account per role (sessionStorage)
src/roles.js               The nine roles, page access, action permissions, landing pages
src/routes.js              Route table
tailwind.config.js         Client design tokens, copied exactly from the HTML files
```

If the client sends updated HTML files, put them in the parent folder and run `node scripts/convert-html.mjs`. Page-to-page button links are configured in the `PAGES` list in that script.

## Differences from the client HTML (intentional)

- **One shared sidebar.** Each client page had a slightly different sidebar. They are merged into one, based on the most complete version (from the Consequence Graph page), so every screen can be reached from every page.
- **Two sidebar entries added.** "Targeted Revalidation" and "Governance Notes" were added because those screens existed but had no sidebar link.
- **Workflow Demo and Microsoft action panels added.** These cover scope §5 steps 9–11 (R-010, R-011, R-014, R-020), which the client screens did not show yet. They are injected by `src/components/PageExtension.jsx`, so the generated pages stay untouched.
- **Admin/User login with the nine scope roles.** The login page has Admin Login and User Login tabs, a role picker and an email/password form. The rest of the client login design is unchanged.
- **Header persona follows the signed-in role.** The client headers always showed "Dr. Elena Rostova". They now show the signed-in demo account and its role.
- **Logos stored locally.** The logo images are saved in `public/brand/`, because the original Google-hosted image links do not load from localhost.
