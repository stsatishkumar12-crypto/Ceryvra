// AUTO-GENERATED from home-dashboard.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/home-dashboard.js?raw';

const exportsList = ["switchDashboardState","filterTriageMatrix","filterRolePerspective","setTimeRange","handleQuickAction","exportGovernanceLedger","rotateKeyAction","verifyProofAction","submitEvidenceAction","openConflictModal","closeConflictModal","confirmConflictResolution"];

export default function HomeDashboard() {
  useLegacyScript(script, exportsList);
  return (
    <>
      <div className={"pl-72"}>
        <header className={"fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-md"}>
          <div className={"flex items-center gap-space-md min-w-0"}>
            <div className={"flex items-center gap-space-xs text-label-md font-label-md text-on-surface-variant shrink-0"}>
              <span className={"hover:text-on-surface cursor-pointer"}>
                {"Global Aerospace & Defense"}
              </span>
              <span className={"material-symbols-outlined text-[16px] text-outline"}>
                {"chevron_right"}
              </span>
              <span className={"text-on-surface font-semibold"}>
                {"Governance Overview"}
              </span>
            </div>
            <div className={"relative w-96 hidden md:block"}>
              <span className={"material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline"}>
                {"search"}
              </span>
              <input className={"w-full h-9 pl-9 pr-12 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"} placeholder={"Search use cases, decisions, evidence IDs (Ctrl+K)..."} type={"text"} />
              <span className={"absolute right-2.5 top-2 font-label-sm text-label-sm text-outline bg-surface-container px-1.5 py-0.5 rounded"}>
                {"⌘K"}
              </span>
            </div>
          </div>
          <div className={"flex items-center gap-space-md shrink-0"}>
            <div className={"hidden lg:flex items-center gap-1.5 px-space-sm py-1 bg-tertiary-container/10 text-tertiary rounded-full"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                {"verified_user"}
              </span>
              <span className={"font-label-sm text-label-sm font-semibold"}>
                {"SOC 2 Type II • Verified"}
              </span>
            </div>
            <button className={"relative w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"} type={"button"}>
              <span className={"material-symbols-outlined text-[20px]"}>
                {"notifications"}
              </span>
              <span className={"absolute top-2 right-2 w-2 h-2 rounded-full bg-error"} />
            </button>
            <button className={"flex items-center gap-space-xs px-space-sm h-9 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity"} type={"button"} data-nav="/decision-record">
              <span className={"material-symbols-outlined text-[18px]"}>
                {"add"}
              </span>
              <span>
                {"New Decision"}
              </span>
            </button>
            <div className={"flex items-center gap-space-sm pl-space-xs cursor-pointer group"}>
              <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center"}>
                <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                  {"person"}
                </span>
              </div>
              <div className={"hidden xl:flex flex-col text-left"}>
                <span className={"font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors leading-tight"}>
                  {"Dr. Elena Rostova"}
                </span>
                <span className={"font-label-sm text-label-sm text-outline leading-tight"}>
                  {"Lead AI Risk Auditor & Executor"}
                </span>
              </div>
              <span className={"material-symbols-outlined text-outline text-[18px] hidden xl:block"}>
                {"expand_more"}
              </span>
            </div>
          </div>
        </header>
        <main className={"relative w-full pt-16 px-gutter bg-surface min-h-screen"}>
          <div className={"flex flex-col w-full pb-space-xl"}>
            <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-sm mb-space-md"}>
              <div className={"flex flex-wrap items-center gap-space-sm"}>
                <div className={"flex items-center bg-surface-container-low p-1 rounded-lg shadow-sm"}>
                  <button className={"px-space-sm py-1 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm transition-all flex items-center gap-1.5"} id={"tab-state-active"} onClick={legacy("switchDashboardState('active')")}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"} />
                    {" "}
                    <span>
                      {"Active Workspace"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5"} id={"tab-state-skeleton"} onClick={legacy("switchDashboardState('skeleton')")}>
                    <span className={"material-symbols-outlined text-[15px]"}>
                      {"hourglass_empty"}
                    </span>
                    {" "}
                    <span>
                      {"Loading Skeleton"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5"} id={"tab-state-empty"} onClick={legacy("switchDashboardState('empty')")}>
                    <span className={"material-symbols-outlined text-[15px]"}>
                      {"inbox"}
                    </span>
                    {" "}
                    <span>
                      {"Fresh Enclave (Empty)"}
                    </span>
                  </button>
                </div>
                <div className={"h-5 w-px bg-outline-variant hidden sm:block"} />
                <div className={"flex items-center gap-1.5 bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm"}>
                  <span className={"material-symbols-outlined text-[16px] text-outline"}>
                    {"badge"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                    {"View as:"}
                  </span>
                  <select className={"bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer"} id={"role-selector"} onChange={legacy("filterRolePerspective(this.value)")}>
                    <option value={"all"}>
                      {"All Roles"}
                    </option>
                    <option value={"admin"}>
                      {"Admin (System Lead)"}
                    </option>
                    <option value={"approver"}>
                      {"Approver (Dual-Key)"}
                    </option>
                    <option value={"executor"}>
                      {"Executor (Operational)"}
                    </option>
                    <option value={"verifier"}>
                      {"Verifier (Proof Audits)"}
                    </option>
                    <option value={"auditor"}>
                      {"Auditor (Read-Only SecOps)"}
                    </option>
                  </select>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm self-end lg:self-auto"}>
                <div className={"flex items-center bg-surface-container-lowest rounded-lg p-1 shadow-sm"}>
                  <button className={"time-pill px-2.5 py-1 rounded font-label-sm text-label-sm bg-primary text-on-primary transition-all"} onClick={legacy("setTimeRange('24h', this)")}>
                    {"Last 24h"}
                  </button>
                  {" "}
                  <button className={"time-pill px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("setTimeRange('7d', this)")}>
                    {"7 Days"}
                  </button>
                  {" "}
                  <button className={"time-pill px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("setTimeRange('30d', this)")}>
                    {"30 Days"}
                  </button>
                </div>
                <button className={"flex items-center gap-1.5 px-space-sm py-2 bg-surface-container-lowest hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md shadow-sm transition-all"} onClick={legacy("exportGovernanceLedger()")}>
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"receipt_long"}
                  </span>
                  {" "}
                  <span className={"hidden sm:inline"}>
                    {"Export Governance Ledger"}
                  </span>
                  {" "}
                  <span className={"sm:hidden"}>
                    {"Ledger"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"flex flex-col w-full gap-space-lg"} id={"state-view-active"}>
              <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-space-sm"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Governed Use Cases"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-primary text-[20px] p-1 bg-surface-container rounded-lg"}>
                      {"account_tree"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-on-surface"}>
                        {"38"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-tertiary-container font-semibold"}>
                        {"+3 this mo"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 mt-1"}>
                      <div className={"flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden flex"}>
                        <div className={"bg-primary w-[84%]"} />
                        <div className={"bg-tertiary-fixed-dim w-[16%]"} />
                      </div>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-space-xs"}>
                    <span>
                      {"32 Prod • 6 Validating"}
                    </span>
                    {" "}
                    <span className={"text-primary font-semibold"}>
                      {"1 Canary"}
                    </span>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Decisions Logged"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-tertiary-container text-[20px] p-1 bg-tertiary-fixed/20 rounded-lg"}>
                      {"fact_check"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-on-surface"}>
                        {"14,820"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1.5 mt-1 font-label-sm text-label-sm text-tertiary-container font-semibold"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"verified"}
                      </span>
                      {" "}
                      <span>
                        {"99.8% Compliant"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-space-xs"}>
                    <span>
                      {"Deterministic Runs"}
                    </span>
                    {" "}
                    <span className={"text-error font-semibold"}>
                      {"4 Escalated"}
                    </span>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Evidence Attention"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-error text-[20px] p-1 bg-error-container/60 rounded-lg"}>
                      {"inventory_2"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-error"}>
                        {"4"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-error font-semibold"}>
                        {"Action Req."}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1 mt-1"}>
                      <span className={"text-[11px] font-label-sm px-1.5 py-0.5 rounded bg-error-container text-on-error-container"}>
                        {"1 Expired"}
                      </span>
                      {" "}
                      <span className={"text-[11px] font-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface"}>
                        {"2 Conflicts"}
                      </span>
                    </div>
                  </div>
                  <div className={"text-body-sm font-body-sm text-outline truncate pt-space-xs"}>
                    {" 1 Provisional ends in 48h "}
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Pending Approvals"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-primary-container text-[20px] p-1 bg-secondary-container rounded-lg"}>
                      {"checklist"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-on-surface"}>
                        {"7"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                        {"in queue"}
                      </span>
                    </div>
                    <div className={"text-body-sm font-body-sm text-on-surface-variant mt-1"}>
                      {" 3 Dual-Key signoffs "}
                    </div>
                  </div>
                  <div className={"flex items-center justify-between text-body-sm font-body-sm text-primary pt-space-xs font-semibold"}>
                    <span>
                      {"4 Proof Reviews"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Drift & Revalidations"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-on-secondary-fixed-variant text-[20px] p-1 bg-surface-container-high rounded-lg"}>
                      {"sync_problem"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-on-surface"}>
                        {"2"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-on-secondary-fixed-variant font-semibold"}>
                        {"Flagged"}
                      </span>
                    </div>
                    <div className={"text-body-sm font-body-sm text-on-surface-variant mt-1 truncate"}>
                      {" SupplyChain-LLM-v4 (Embed) "}
                    </div>
                  </div>
                  <div className={"text-body-sm font-body-sm text-outline truncate pt-space-xs"}>
                    {" 1 Policy Re-eval trigger "}
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"}>
                  <div className={"flex items-start justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Active Incidents"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-tertiary-container text-[20px] p-1 bg-tertiary-fixed/20 rounded-lg"}>
                      {"shield_with_heart"}
                    </span>
                  </div>
                  <div className={"my-space-xs"}>
                    <div className={"flex items-baseline gap-1.5"}>
                      <span className={"font-headline-xl text-headline-xl text-tertiary-container"}>
                        {"0"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-tertiary-container font-semibold"}>
                        {"Clear"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1.5 mt-1 font-label-sm text-label-sm text-outline"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                      {" "}
                      <span>
                        {"All Guardrails Active"}
                      </span>
                    </div>
                  </div>
                  <div className={"text-body-sm font-body-sm text-on-surface-variant truncate pt-space-xs"}>
                    {" Last resolved 4d ago "}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex items-center gap-space-xs text-on-surface-variant px-space-xs"}>
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"terminal"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm font-semibold uppercase tracking-wider"}>
                    {"Workspace Quick Actions:"}
                  </span>
                </div>
                <div className={"flex flex-wrap items-center gap-space-xs"}>
                  <button className={"flex items-center gap-1.5 px-space-sm py-1.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity"} data-nav="/governance-inventory">
                    <span className={"material-symbols-outlined text-[17px]"}>
                      {"add_box"}
                    </span>
                    {" "}
                    <span>
                      {"Register Governed Use Case"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors"} data-nav="/governed-chat">
                    <span className={"material-symbols-outlined text-[17px] text-primary"}>
                      {"smart_toy"}
                    </span>
                    {" "}
                    <span>
                      {"Open Governed Enclave"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors"} data-nav="/decision-record">
                    <span className={"material-symbols-outlined text-[17px] text-tertiary-container"}>
                      {"balance"}
                    </span>
                    {" "}
                    <span>
                      {"Record Policy Decision"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors"} data-nav="/missing-evidence">
                    <span className={"material-symbols-outlined text-[17px] text-on-secondary-fixed-variant"}>
                      {"approval_delegation"}
                    </span>
                    {" "}
                    <span>
                      {"Review & Attest Evidence"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors"} data-nav="/audit-history">
                    <span className={"material-symbols-outlined text-[17px] text-outline"}>
                      {"history_edu"}
                    </span>
                    {" "}
                    <span>
                      {"Inspect Audit Log"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
                <div className={"xl:col-span-7 flex flex-col gap-space-md bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                  <div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"w-2.5 h-2.5 rounded-full bg-error animate-ping"} />
                      <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Needs Attention Triage Matrix"}
                      </h2>
                      <span className={"px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm"}>
                        {"4 Urgent"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1 flex-wrap"}>
                      <button className={"triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-primary text-on-primary font-semibold transition-all"} onClick={legacy("filterTriageMatrix('all', this)")}>
                        {"All (4)"}
                      </button>
                      {" "}
                      <button className={"triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("filterTriageMatrix('conflicting', this)")}>
                        {"Conflicting (1)"}
                      </button>
                      {" "}
                      <button className={"triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("filterTriageMatrix('stale', this)")}>
                        {"Stale (1)"}
                      </button>
                      {" "}
                      <button className={"triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("filterTriageMatrix('provisional', this)")}>
                        {"Provisional (1)"}
                      </button>
                      {" "}
                      <button className={"triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all"} onClick={legacy("filterTriageMatrix('pending', this)")}>
                        {"Pending (1)"}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs mt-space-xs"} id={"triage-items-container"}>
                    <div className={"triage-card p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm shadow-sm"} data-category={"conflicting"}>
                      <div className={"flex items-start gap-space-sm min-w-0"}>
                        <div className={"p-2 rounded-lg bg-error-container text-on-error-container shrink-0 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"warning"}
                          </span>
                        </div>
                        <div className={"flex flex-col min-w-0"}>
                          <div className={"flex items-center gap-2 flex-wrap"}>
                            <span className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                              {"SupplyChain-VendorSelect-v3"}
                            </span>
                            {" "}
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold"}>
                              {"Conflicting"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-outline"}>
                              {"#DISP-8921"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {"Conflicting Human vs Model Decision Logs during Tier-1 Aerospace vendor selection pass."}
                          </p>
                          <div className={"flex items-center gap-3 mt-1.5 text-label-sm font-label-sm text-outline"}>
                            <span className={"flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[15px]"}>
                                {"person"}
                              </span>
                              {" Dr. Rostova"}
                            </span>
                            {" "}
                            <span>
                              {"•"}
                            </span>
                            {" "}
                            <span className={"text-error font-medium"}>
                              {"Logged 24m ago"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center gap-2 shrink-0 self-end md:self-center"}>
                        <button className={"px-space-sm py-1.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:opacity-95 shadow-sm transition-opacity"} onClick={legacy("openConflictModal('SupplyChain-VendorSelect-v3')")}>
                          {" Resolve Conflict "}
                        </button>
                      </div>
                    </div>
                    <div className={"triage-card p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm shadow-sm"} data-category={"stale"}>
                      <div className={"flex items-start gap-space-sm min-w-0"}>
                        <div className={"p-2 rounded-lg bg-secondary-container text-on-secondary-container shrink-0 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"key_off"}
                          </span>
                        </div>
                        <div className={"flex flex-col min-w-0"}>
                          <div className={"flex items-center gap-2 flex-wrap"}>
                            <span className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                              {"ITAR-AutonomousRouting-Agent"}
                            </span>
                            {" "}
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-semibold"}>
                              {"Stale Key"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-outline"}>
                              {"#KEY-094"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {"Cryptographic Attestation Key Expired 6h ago. Enclave outbound policy execution suspended."}
                          </p>
                          <div className={"flex items-center gap-3 mt-1.5 text-label-sm font-label-sm text-outline"}>
                            <span className={"flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[15px]"}>
                                {"groups"}
                              </span>
                              {" SecOps Team"}
                            </span>
                            {" "}
                            <span>
                              {"•"}
                            </span>
                            {" "}
                            <span className={"text-on-surface font-medium"}>
                              {"Auto-quarantined"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center gap-2 shrink-0 self-end md:self-center"}>
                        <button className={"px-space-sm py-1.5 bg-surface-container-highest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md transition-colors shadow-sm"} data-nav="/revalidation">
                          {" Rotate & Re-verify "}
                        </button>
                      </div>
                    </div>
                    <div className={"triage-card p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm shadow-sm"} data-category={"pending"}>
                      <div className={"flex items-start gap-space-sm min-w-0"}>
                        <div className={"p-2 rounded-lg bg-surface-variant text-on-surface shrink-0 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"rule"}
                          </span>
                        </div>
                        <div className={"flex flex-col min-w-0"}>
                          <div className={"flex items-center gap-2 flex-wrap"}>
                            <span className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                              {"CreditUnderwriting-FairnessProof-Q2"}
                            </span>
                            {" "}
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-variant text-on-surface font-semibold"}>
                              {"Awaiting Verification"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-outline"}>
                              {"#PRF-4011"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {"Disparate Impact Ratio proof calculation generated; requires formal Compliance Officer sign-off."}
                          </p>
                          <div className={"flex items-center gap-3 mt-1.5 text-label-sm font-label-sm text-outline"}>
                            <span className={"flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[15px]"}>
                                {"verified_user"}
                              </span>
                              {" Compliance Office"}
                            </span>
                            {" "}
                            <span>
                              {"•"}
                            </span>
                            {" "}
                            <span>
                              {"Threshold: 0.81 Ratio"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center gap-2 shrink-0 self-end md:self-center"}>
                        <button className={"px-space-sm py-1.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:opacity-95 shadow-sm transition-opacity"} data-nav="/verification">
                          {" Verify Proof "}
                        </button>
                      </div>
                    </div>
                    <div className={"triage-card p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm shadow-sm"} data-category={"provisional"}>
                      <div className={"flex items-start gap-space-sm min-w-0"}>
                        <div className={"p-2 rounded-lg bg-surface-container text-primary shrink-0 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"timer"}
                          </span>
                        </div>
                        <div className={"flex flex-col min-w-0"}>
                          <div className={"flex items-center gap-2 flex-wrap"}>
                            <span className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                              {"CustomerSupport-Agent-Provisional"}
                            </span>
                            {" "}
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-primary font-semibold"}>
                              {"Provisional"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-outline"}>
                              {"#GRACE-12"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {"Provisional sandbox authorization expires in 42 hours. Full safety test evidence must be submitted."}
                          </p>
                          <div className={"flex items-center gap-3 mt-1.5 text-label-sm font-label-sm text-outline"}>
                            <span className={"flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[15px]"}>
                                {"group"}
                              </span>
                              {" Product AI Team"}
                            </span>
                            {" "}
                            <span>
                              {"•"}
                            </span>
                            {" "}
                            <span className={"text-tertiary-container font-medium"}>
                              {"3/5 Evidence Sets Attached"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center gap-2 shrink-0 self-end md:self-center"}>
                        <button className={"px-space-sm py-1.5 bg-surface-container-highest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md transition-colors shadow-sm"} data-nav="/missing-evidence">
                          {" Submit Full Evidence "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-outline"}>
                    <div className={"flex items-center gap-1.5"}>
                      <span className={"material-symbols-outlined text-[16px] text-tertiary-container"}>
                        {"lock_clock"}
                      </span>
                      {" "}
                      <span>
                        {"All actions enforce tamper-proof signature generation"}
                      </span>
                    </div>
                    <span className={"hover:text-primary cursor-pointer font-label-md text-label-md"}>
                      {"View All 19 Active Items →"}
                    </span>
                  </div>
                </div>
                <div className={"xl:col-span-5 flex flex-col gap-space-md bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                  <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-primary text-[22px]"}>
                        {"history_edu"}
                      </span>
                      <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Immutable Ledger Activity"}
                      </h2>
                    </div>
                    <span className={"font-label-sm text-label-sm text-outline px-2 py-0.5 bg-surface-container rounded-md"}>
                      {"Live Stream"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-space-md relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-high"}>
                    <div className={"relative flex flex-col gap-1"}>
                      <div className={"absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-error flex items-center justify-center text-on-error shadow-sm"}>
                        <span className={"material-symbols-outlined text-[10px]"}>
                          {"close"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-label-sm font-label-sm"}>
                        <span className={"text-error font-semibold"}>
                          {"Policy Bypass Attempt Blocked"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"12m ago"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Triggered Rule #804 (PII Obfuscation) on "}
                        <span className={"font-semibold text-primary"}>
                          {"HR-Screening-Model"}
                        </span>
                        {"."}
                      </p>
                      <div className={"flex items-center gap-2 text-[11px] font-label-sm text-outline"}>
                        <span className={"font-mono bg-surface-container px-1 rounded"}>
                          {"tx: 0x8f2a...c014"}
                        </span>
                        {" "}
                        <span>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Automated Enforcer"}
                        </span>
                      </div>
                    </div>
                    <div className={"relative flex flex-col gap-1"}>
                      <div className={"absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm"}>
                        <span className={"material-symbols-outlined text-[10px]"}>
                          {"done_all"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-label-sm font-label-sm"}>
                        <span className={"text-primary font-semibold"}>
                          {"Dual-Key Approval Granted"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"47m ago"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Co-signed for "}
                        <span className={"font-semibold text-primary"}>
                          {"DefenseLogistics-RiskAssessor"}
                        </span>
                        {" promotion."}
                      </p>
                      <div className={"flex items-center gap-2 text-[11px] font-label-sm text-outline"}>
                        <span className={"font-mono bg-surface-container px-1 rounded"}>
                          {"signers: Col. Vance, Dir. Sterling"}
                        </span>
                        {" "}
                        <span>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Role: Approver"}
                        </span>
                      </div>
                    </div>
                    <div className={"relative flex flex-col gap-1"}>
                      <div className={"absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary shadow-sm"}>
                        <span className={"material-symbols-outlined text-[10px]"}>
                          {"push_pin"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-label-sm font-label-sm"}>
                        <span className={"text-tertiary-container font-semibold"}>
                          {"Evidence Package Hash-Pinned"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"2h ago"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Fairness proof verified for "}
                        <span className={"font-semibold text-primary"}>
                          {"Financial-Forecasting-Agent"}
                        </span>
                        {"."}
                      </p>
                      <div className={"flex items-center gap-2 text-[11px] font-label-sm text-outline"}>
                        <span className={"font-mono bg-surface-container px-1 rounded"}>
                          {"SHA-256: d8e1...44bc"}
                        </span>
                        {" "}
                        <span>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Verifier Node #02"}
                        </span>
                      </div>
                    </div>
                    <div className={"relative flex flex-col gap-1"}>
                      <div className={"absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-on-surface flex items-center justify-center text-surface shadow-sm"}>
                        <span className={"material-symbols-outlined text-[10px]"}>
                          {"upgrade"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-label-sm font-label-sm"}>
                        <span className={"text-on-surface font-semibold"}>
                          {"Promoted to Production Enclave"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"3h ago"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Autonomous routing authorized under NIST-AI-RMF envelope."}
                      </p>
                      <div className={"flex items-center gap-2 text-[11px] font-label-sm text-outline"}>
                        <span>
                          {"Dr. Elena Rostova"}
                        </span>
                        {" "}
                        <span>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Admin Privilege"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"pt-space-sm"}>
                    <button className={"w-full py-2 bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md rounded-lg transition-colors flex items-center justify-center gap-1.5"} data-nav="/audit-history">
                      <span>
                        {"Open Complete Ledger Audit Trail"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={"flex flex-col gap-space-md bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-2"}>
                    <span className={"material-symbols-outlined text-[20px] text-primary"}>
                      {"sell"}
                    </span>
                    {" "}
                    <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                      {"Governance Status Taxonomy"}
                    </span>
                    {" "}
                    <span className={"font-body-sm text-body-sm text-outline hidden md:inline"}>
                      {"• 7 Strict Cryptographic States"}
                    </span>
                  </div>
                  <div className={"text-label-sm font-label-sm text-outline"}>
                    {" Standard: CERYVRA-ST-2024.1 "}
                  </div>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-space-xs"}>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-primary font-semibold text-center truncate"}>
                      {"Provisional"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Time-bound trial"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-tertiary-container/15 text-tertiary font-semibold text-center truncate"}>
                      {"Satisfied"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Valid & sealed"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-semibold text-center truncate"}>
                      {"Stale"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Key/proof expired"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold text-center truncate"}>
                      {"Conflicting"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Dual logs diverge"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-primary-container text-on-primary font-semibold text-center truncate"}>
                      {"Pending Approval"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Dual-key required"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-variant text-on-surface font-semibold text-center truncate"}>
                      {"Awaiting Verif."}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Proof under test"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1 p-space-xs rounded-lg bg-surface-container-low"}>
                    <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold text-center truncate"}>
                      {"Archival"}
                    </span>
                    {" "}
                    <span className={"text-[11px] font-body-sm text-on-surface-variant text-center"}>
                      {"Decommissioned"}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs bg-surface-container p-space-sm rounded-lg"}>
                  <div className={"flex items-center gap-space-sm text-on-surface"}>
                    <span className={"material-symbols-outlined text-primary text-[20px]"}>
                      {"enhanced_encryption"}
                    </span>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-md text-label-md font-semibold"}>
                        {"Ledger Block #8,941,209 • SHA-256 Validated"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                        {"Tamper-evident Merkle root anchored to Hardware Enclave TPM"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm text-label-sm font-label-sm"}>
                    <span className={"flex items-center gap-1 text-tertiary font-semibold bg-tertiary-fixed/30 px-2 py-1 rounded"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"verified"}
                      </span>
                      {" FedRAMP High Ready "}
                    </span>
                    {" "}
                    <span className={"text-outline hidden md:inline"}>
                      {"Node Sync: 99.999%"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex-col w-full gap-space-lg animate-pulse"} id={"state-view-skeleton"}>
              <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-space-sm"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-36 flex flex-col justify-between"}>
                  <div className={"h-4 bg-surface-container rounded w-2/3"} />
                  <div className={"h-8 bg-surface-container-high rounded w-1/2"} />
                  <div className={"h-3 bg-surface-container rounded w-full"} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm h-14 flex items-center justify-between"}>
                <div className={"h-4 bg-surface-container rounded w-48"} />
                <div className={"flex gap-2"}>
                  <div className={"h-8 bg-surface-container-high rounded w-32"} />
                  <div className={"h-8 bg-surface-container-high rounded w-32"} />
                  <div className={"h-8 bg-surface-container-high rounded w-32"} />
                </div>
              </div>
              <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg"}>
                <div className={"xl:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-4"}>
                  <div className={"h-6 bg-surface-container rounded w-1/3"} />
                  <div className={"h-20 bg-surface-container-low rounded"} />
                  <div className={"h-20 bg-surface-container-low rounded"} />
                  <div className={"h-20 bg-surface-container-low rounded"} />
                  <div className={"h-20 bg-surface-container-low rounded"} />
                </div>
                <div className={"xl:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-4"}>
                  <div className={"h-6 bg-surface-container rounded w-1/2"} />
                  <div className={"h-16 bg-surface-container-low rounded"} />
                  <div className={"h-16 bg-surface-container-low rounded"} />
                  <div className={"h-16 bg-surface-container-low rounded"} />
                  <div className={"h-16 bg-surface-container-low rounded"} />
                </div>
              </div>
            </div>
            <div className={"hidden flex-col w-full gap-space-lg"} id={"state-view-empty"}>
              <div className={"bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col items-center text-center max-w-4xl mx-auto my-space-lg"}>
                <div className={"w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-space-md"}>
                  <span className={"material-symbols-outlined text-[36px]"}>
                    {"shield"}
                  </span>
                </div>
                <h2 className={"font-headline-lg text-headline-lg text-on-surface mb-space-xs"}>
                  {"Welcome to your Clean Governance Enclave"}
                </h2>
                <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg"}>
                  {" This enclave workspace is cryptographically isolated and ready for AI asset registration. No models, decision policies, or proof packages have been bound yet. "}
                </p>
                <div className={"w-full text-left bg-surface-container-low rounded-xl p-space-lg mb-space-lg flex flex-col gap-space-md"}>
                  <span className={"font-label-lg text-label-lg text-on-surface font-semibold"}>
                    {"Recommended Deployment Checklist:"}
                  </span>
                  <div className={"flex items-start gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"}>
                    <span className={"w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0"}>
                      {"1"}
                    </span>
                    <div className={"flex flex-col"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Register your first Governed Use Case"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Define model bounds, risk classification tier (NIST AI RMF / EU AI Act), and operational owners."}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-start gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"}>
                    <span className={"w-6 h-6 rounded-full bg-surface-container text-outline font-label-sm text-label-sm flex items-center justify-center shrink-0"}>
                      {"2"}
                    </span>
                    <div className={"flex flex-col"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Upload Verification Proof Specifications"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Attach disparate impact ratios, hallucination guardrails, and deterministic attestation rules."}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-start gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"}>
                    <span className={"w-6 h-6 rounded-full bg-surface-container text-outline font-label-sm text-label-sm flex items-center justify-center shrink-0"}>
                      {"3"}
                    </span>
                    <div className={"flex flex-col"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Configure Dual-Key Authority Thresholds"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Require co-signing from both SecOps and Compliance officers before production promotion."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"flex flex-wrap items-center justify-center gap-space-sm"}>
                  <button className={"px-space-lg py-2.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity flex items-center gap-2"} data-nav="/governance-inventory">
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"add"}
                    </span>
                    {" "}
                    <span>
                      {"Create First Governed Use Case"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-md py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors"} onClick={legacy("switchDashboardState('active')")}>
                    {" Return to Simulated Active Enclave "}
                  </button>
                </div>
              </div>
            </div>
            <div className={"fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm hidden items-center justify-center p-4"} id={"conflict-modal"}>
              <div className={"bg-surface-container-lowest rounded-xl shadow-xl max-w-lg w-full p-space-lg flex flex-col gap-space-md"}>
                <div className={"flex items-center justify-between"}>
                  <div className={"flex items-center gap-2 text-error"}>
                    <span className={"material-symbols-outlined text-[24px]"}>
                      {"gavel"}
                    </span>
                    <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>
                      {"Deterministic Conflict Resolution"}
                    </h3>
                  </div>
                  <button className={"text-outline hover:text-on-surface"} onClick={legacy("closeConflictModal()")}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className={"bg-error-container/40 p-space-sm rounded-lg text-body-sm font-body-sm text-on-error-container"}>
                  <span className={"font-semibold block"} id={"modal-model-title"}>
                    {"SupplyChain-VendorSelect-v3"}
                  </span>
                  {" Model generated an autonomous override which contradicted signed human auditor directive #REV-88. "}
                </div>
                <div className={"flex flex-col gap-2"}>
                  <label className={"font-label-sm text-label-sm text-on-surface-variant"}>
                    {"Select Binding Precedence:"}
                  </label>
                  {" "}
                  <label className={"flex items-center gap-2 p-space-sm rounded-lg bg-surface-container-low cursor-pointer"}>
                    <input defaultChecked className={"accent-primary"} name={"precedence"} type={"radio"} defaultValue={"human"} />
                    <div className={"flex flex-col"}>
                      <span className={"font-label-md text-label-md text-on-surface"}>
                        {"Enforce Human Signed Determination"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-outline"}>
                        {"Supersedes model calculation and appends immutable override proof."}
                      </span>
                    </div>
                  </label>
                  {" "}
                  <label className={"flex items-center gap-2 p-space-sm rounded-lg bg-surface-container-low cursor-pointer"}>
                    <input className={"accent-primary"} name={"precedence"} type={"radio"} defaultValue={"model"} />
                    <div className={"flex flex-col"}>
                      <span className={"font-label-md text-label-md text-on-surface"}>
                        {"Uphold Model Autonomous Verification"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-outline"}>
                        {"Flags human discrepancy for elevated SecOps dual-key review."}
                      </span>
                    </div>
                  </label>
                </div>
                <div className={"flex items-center justify-end gap-space-sm pt-space-xs"}>
                  <button className={"px-space-md py-2 text-on-surface-variant font-label-md text-label-md"} onClick={legacy("closeConflictModal()")}>
                    {"Cancel"}
                  </button>
                  {" "}
                  <button className={"px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md"} onClick={legacy("confirmConflictResolution()")}>
                    {"Apply Signed Hash & Resolve"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
