// AUTO-GENERATED from Notes-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/notes.js?raw';

const exportsList = ["setScenario"];

export default function Notes() {
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
            <button className={"flex items-center gap-space-xs px-space-sm h-9 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity"} type={"button"} data-nav="/decision-record?new=decision">
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
          <div className={"flex flex-col w-full pb-16"}>
            <div className={"flex flex-col gap-space-sm mb-space-md pt-space-xs"}>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
                  <span className={"hover:text-on-surface cursor-pointer"}>
                    {"Global Aerospace & Defense"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"hover:text-on-surface cursor-pointer"}>
                    {"Governed Documentation"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"font-semibold text-on-surface"}>
                    {"Notes & Records"}
                  </span>
                </div>
                <div className={"flex items-center gap-space-xs px-2.5 py-1 bg-surface-container rounded-full shadow-sm"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary-container animate-pulse"} />
                  {" "}
                  <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                    {"Enclave SEC-9942"}
                  </span>
                  {" "}
                  <span className={"text-outline font-label-sm"}>
                    {"•"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-secondary"}>
                    {"Linked to Immutable Audit Ledger"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-primary ml-0.5"}>
                    {"lock_clock"}
                  </span>
                </div>
              </div>
              <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mt-space-xs"}>
                <div>
                  <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                    {"Governance Notes & Working Records"}
                  </h1>
                  <p className={"font-body-md text-body-md text-on-surface-variant mt-0.5"}>
                    {"Tamper-evident investigative workbenches, pre-decision memos, and regulatory defense citations."}
                  </p>
                </div>
                <div className={"flex flex-wrap items-center gap-space-sm shrink-0"}>
                  <div className={"inline-flex p-1 bg-surface-container rounded-lg gap-1 shadow-sm"} id={"scenario-controls"}>
                    <button className={"px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary font-semibold shadow-sm transition-all flex items-center gap-1"} id={"btn-scenario-workspace"} onClick={legacy("setScenario('workspace')")} type={"button"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"table_chart"}
                      </span>
                      {"Active Workspace "}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all flex items-center gap-1"} id={"btn-scenario-empty"} onClick={legacy("setScenario('empty')")} type={"button"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"inbox"}
                      </span>
                      {"Empty "}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all flex items-center gap-1"} id={"btn-scenario-loading"} onClick={legacy("setScenario('loading')")} type={"button"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"hourglass_empty"}
                      </span>
                      {"Loading "}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all flex items-center gap-1"} id={"btn-scenario-denied"} onClick={legacy("setScenario('denied')")} type={"button"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"lock"}
                      </span>
                      {"Restricted "}
                    </button>
                  </div>
                  <button className={"h-9 px-space-md bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container transition-colors flex items-center gap-1.5"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px] text-secondary"}>
                      {"sim_card_download"}
                    </span>
                    {" "}
                    <span>
                      {"Export Notes Package"}
                    </span>
                  </button>
                  {" "}
                  <button className={"h-9 px-space-md bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-opacity flex items-center gap-1.5"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"add"}
                    </span>
                    {" "}
                    <span>
                      {"New Note"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <section className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md"}>
              <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md"}>
                <div className={"flex flex-wrap items-center gap-space-sm flex-1 min-w-0"}>
                  <div className={"relative w-full sm:w-72 md:w-80"}>
                    <span className={"material-symbols-outlined absolute left-3 top-2 text-[18px] text-outline"}>
                      {"search"}
                    </span>
                    {" "}
                    <input className={"w-full h-9 pl-9 pr-14 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"} placeholder={"Search working notes, citations, hashes (⌘F or /)..."} type={"text"} />
                    {" "}
                    <span className={"absolute right-2.5 top-2 font-label-sm text-label-sm text-outline bg-surface-container px-1.5 py-0.5 rounded"}>
                      {"⌘F"}
                    </span>
                  </div>
                  <div className={"relative"}>
                    <select className={"h-9 pl-3 pr-8 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container appearance-none cursor-pointer"} defaultValue={"Dr. Elena Rostova (Lead)"}>
                      <option>
                        {"All Authors (4)"}
                      </option>
                      <option>
                        {"Dr. Elena Rostova (Lead)"}
                      </option>
                      <option>
                        {"Marcus Vance (AI Fairness Lead)"}
                      </option>
                      <option>
                        {"SecOps Enclave Bot"}
                      </option>
                    </select>
                    <span className={"material-symbols-outlined absolute right-2 top-2.5 text-[16px] text-outline pointer-events-none"}>
                      {"expand_more"}
                    </span>
                  </div>
                  <div className={"relative"}>
                    <select className={"h-9 pl-3 pr-8 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container appearance-none cursor-pointer"} defaultValue={"All Linked Items"}>
                      <option>
                        {"All Linked Items"}
                      </option>
                      <option>
                        {"Decisions Only"}
                      </option>
                      <option>
                        {"Governed Use Cases"}
                      </option>
                      <option>
                        {"Cryptographic Enclaves"}
                      </option>
                    </select>
                    <span className={"material-symbols-outlined absolute right-2 top-2.5 text-[16px] text-outline pointer-events-none"}>
                      {"expand_more"}
                    </span>
                  </div>
                  <div className={"relative"}>
                    <select className={"h-9 pl-3 pr-8 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container appearance-none cursor-pointer"} defaultValue={"Last 30 Days"}>
                      <option>
                        {"Last 30 Days"}
                      </option>
                      <option>
                        {"Q3 2024 Audit Cycle"}
                      </option>
                      <option>
                        {"Year to Date (2024)"}
                      </option>
                      <option>
                        {"Custom Enclave Range..."}
                      </option>
                    </select>
                    <span className={"material-symbols-outlined absolute right-2 top-2.5 text-[16px] text-outline pointer-events-none"}>
                      {"calendar_month"}
                    </span>
                  </div>
                </div>
                <div className={"flex items-center gap-space-xs shrink-0 self-end lg:self-auto"}>
                  <span className={"font-label-sm text-label-sm text-outline mr-1"}>
                    {"Layout"}
                  </span>
                  <div className={"inline-flex bg-surface-container rounded-lg p-0.5 shadow-sm"}>
                    <button className={"w-8 h-8 rounded flex items-center justify-center bg-surface-container-lowest text-primary shadow-sm"} title={"Split Master-Detail Workbench"} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"view_column"}
                      </span>
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded flex items-center justify-center text-secondary hover:text-on-surface"} title={"Full Width Ledger Grid"} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"view_stream"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={"flex flex-wrap items-center gap-2 mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-2.5 rounded-b-xl"}>
                <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider mr-1"}>
                  {"Lifecycle Status:"}
                </span>
                {" "}
                <button className={"px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-highest text-on-surface font-semibold shadow-sm"} type={"button"}>
                  {" All Records "}
                  <span className={"ml-1 opacity-75 font-normal"}>
                    {"14"}
                  </span>
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container transition-colors"} type={"button"}>
                  {" Draft "}
                  <span className={"ml-1 px-1.5 py-0.2 bg-surface-container rounded text-outline font-normal"}>
                    {"4"}
                  </span>
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary hover:bg-surface-container transition-colors font-medium"} type={"button"}>
                  {" Bound to Decision "}
                  <span className={"ml-1 px-1.5 py-0.2 bg-secondary-container text-on-secondary-container rounded font-bold"}>
                    {"6"}
                  </span>
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container transition-colors"} type={"button"}>
                  {" Pending Review "}
                  <span className={"ml-1 px-1.5 py-0.2 bg-surface-container rounded text-outline font-normal"}>
                    {"3"}
                  </span>
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded-full font-label-sm text-label-sm text-secondary hover:bg-surface-container transition-colors"} type={"button"}>
                  {" Archived "}
                  <span className={"ml-1 px-1.5 py-0.2 bg-surface-container rounded text-outline font-normal"}>
                    {"1"}
                  </span>
                </button>
                <div className={"ml-auto text-outline font-label-sm text-label-sm flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                    {"check_circle"}
                  </span>
                  {" "}
                  <span>
                    {"14 notes cryptographically indexed & anchored"}
                  </span>
                </div>
              </div>
            </section>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start"} id={"view-workspace"}>
              <div className={"lg:col-span-5 xl:col-span-4 flex flex-col gap-space-sm"}>
                <div className={"flex items-center justify-between px-space-xs"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold"}>
                    {"Indexed Records (4 Shown)"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                    {" Live Enclave Sync "}
                  </span>
                </div>
                <article className={"p-space-md rounded-xl bg-surface-container-high shadow-md transition-all cursor-pointer relative overflow-hidden group"}>
                  <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"} />
                  <div className={"flex items-start justify-between gap-space-sm pl-1 mb-2"}>
                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed shadow-sm"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"verified"}
                      </span>
                      {" Bound to Decision "}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"18m ago"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface leading-snug pl-1 font-semibold group-hover:text-primary transition-colors"}>
                    {" ITAR Compliance Review — Subcontractor Transit Node Gap Assessment "}
                  </h3>
                  <div className={"mt-2.5 pl-1 flex items-center gap-1.5"}>
                    <span className={"px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm"}>
                      <span className={"material-symbols-outlined text-[13px]"}>
                        {"policy"}
                      </span>
                      {" DEC-4402: Defense Logistics Routing "}
                    </span>
                  </div>
                  <p className={"mt-2 pl-1 font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                    {" Initial audit on Tier-2 dual-use avionics transit hubs identified unverified HSM telemetry from Apex Precision before boundary handshake... "}
                  </p>
                  <div className={"mt-3 pl-1 pt-2 flex items-center justify-between font-label-sm text-label-sm text-secondary bg-surface-container-lowest/60 rounded p-1.5"}>
                    <div className={"flex items-center gap-1.5"}>
                      <div className={"w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold"}>
                        {"ER"}
                      </div>
                      <span className={"truncate max-w-[130px] font-medium text-on-surface"}>
                        {"Dr. Elena Rostova"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 text-outline"}>
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"attach_file"}
                        </span>
                        {"2"}
                      </span>
                      {" "}
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"bookmark_added"}
                        </span>
                        {"3 Citations"}
                      </span>
                    </div>
                  </div>
                </article>
                <article className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-all cursor-pointer relative overflow-hidden group"}>
                  <div className={"flex items-start justify-between gap-space-sm mb-2"}>
                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed shadow-sm"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"schedule"}
                      </span>
                      {" Pending Review "}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"2h ago"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface leading-snug font-semibold group-hover:text-primary transition-colors"}>
                    {" Pre-Deployment Bias Analysis for Credit Underwriting Model v4 "}
                  </h3>
                  <div className={"mt-2.5 flex items-center gap-1.5"}>
                    <span className={"px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[13px]"}>
                        {"account_tree"}
                      </span>
                      {" UC-108: CreditUnderwriting-FairnessProof "}
                    </span>
                  </div>
                  <p className={"mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                    {" Disparate impact ratio meets 0.81 threshold across protected groups, but requires final sign-off from compliance officers before node packaging. "}
                  </p>
                  <div className={"mt-3 pt-2 flex items-center justify-between font-label-sm text-label-sm text-secondary"}>
                    <div className={"flex items-center gap-1.5"}>
                      <div className={"w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px] font-bold"}>
                        {"MV"}
                      </div>
                      <span className={"truncate max-w-[130px]"}>
                        {"Marcus Vance"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 text-outline"}>
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"attach_file"}
                        </span>
                        {"4"}
                      </span>
                      {" "}
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"bookmark_added"}
                        </span>
                        {"1 Citation"}
                      </span>
                    </div>
                  </div>
                </article>
                <article className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-all cursor-pointer relative overflow-hidden group"}>
                  <div className={"flex items-start justify-between gap-space-sm mb-2"}>
                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant shadow-sm"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"edit_note"}
                      </span>
                      {" Draft "}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Yesterday"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface leading-snug font-semibold group-hover:text-primary transition-colors"}>
                    {" Vendor Contract Escrow Key Expiration Checklist "}
                  </h3>
                  <div className={"mt-2.5 flex items-center gap-1.5"}>
                    <span className={"px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[13px]"}>
                        {"vpn_key"}
                      </span>
                      {" KEY-094: ITAR-AutonomousRouting "}
                    </span>
                  </div>
                  <p className={"mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                    {" Quarterly rotation scheduled for key escrow vault #8. Need to confirm dual-custody authorization keys before the 1st of the month. "}
                  </p>
                  <div className={"mt-3 pt-2 flex items-center justify-between font-label-sm text-label-sm text-secondary"}>
                    <div className={"flex items-center gap-1.5"}>
                      <div className={"w-5 h-5 rounded-full bg-outline flex items-center justify-center text-on-primary text-[10px] font-bold"}>
                        {"SB"}
                      </div>
                      <span className={"truncate max-w-[130px]"}>
                        {"SecOps Enclave Bot"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 text-outline"}>
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"attach_file"}
                        </span>
                        {"0"}
                      </span>
                      {" "}
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"bookmark_added"}
                        </span>
                        {"0 Citations"}
                      </span>
                    </div>
                  </div>
                </article>
                <article className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-all cursor-pointer relative overflow-hidden group"}>
                  <div className={"flex items-start justify-between gap-space-sm mb-2"}>
                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed shadow-sm"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"verified"}
                      </span>
                      {" Bound to Decision "}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"3d ago"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface leading-snug font-semibold group-hover:text-primary transition-colors"}>
                    {" Prompt Sanitization Edge Cases under Rule #804 "}
                  </h3>
                  <div className={"mt-2.5 flex items-center gap-1.5"}>
                    <span className={"px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-medium flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[13px]"}>
                        {"gavel"}
                      </span>
                      {" RULE-804: PII/CUI Redaction Engine "}
                    </span>
                  </div>
                  <p className={"mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                    {" Redaction regex benchmarks in multi-turn dialogues revealed rare token escapes when UTF-8 zero-width joiners are passed directly to LLM. "}
                  </p>
                  <div className={"mt-3 pt-2 flex items-center justify-between font-label-sm text-label-sm text-secondary"}>
                    <div className={"flex items-center gap-1.5"}>
                      <div className={"w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold"}>
                        {"ER"}
                      </div>
                      <span className={"truncate max-w-[130px]"}>
                        {"Dr. Elena Rostova"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 text-outline"}>
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"attach_file"}
                        </span>
                        {"1"}
                      </span>
                      {" "}
                      <span className={"flex items-center gap-0.5"}>
                        <span className={"material-symbols-outlined text-[13px]"}>
                          {"bookmark_added"}
                        </span>
                        {"5 Citations"}
                      </span>
                    </div>
                  </div>
                </article>
                <div className={"p-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between text-outline font-label-sm text-label-sm shadow-sm"}>
                  <span>
                    {"Showing 1-4 of 14"}
                  </span>
                  <div className={"flex items-center gap-1"}>
                    <button className={"w-7 h-7 rounded bg-surface-container-low flex items-center justify-center text-outline disabled:opacity-40"} disabled>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_left"}
                      </span>
                    </button>
                    {" "}
                    <button className={"w-7 h-7 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-7 xl:col-span-8 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md"}>
                  <div className={"flex flex-col md:flex-row md:items-start justify-between gap-space-md pb-space-sm border-b border-surface-container"}>
                    <div className={"flex-1 min-w-0"}>
                      <div className={"flex items-center gap-2 mb-1.5"}>
                        <span className={"w-2 h-2 rounded-full bg-tertiary"} />
                        {" "}
                        <span className={"font-label-sm text-label-sm text-outline"}>
                          {"All changes cryptographically synced to local secure enclave"}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant"}>
                          {"ID: NOTE-88219"}
                        </span>
                      </div>
                      <input className={"w-full font-headline-lg text-headline-lg font-bold text-on-surface bg-transparent focus:outline-none focus:bg-surface-container-low/40 rounded px-1 -mx-1 transition-all"} type={"text"} defaultValue={"ITAR Compliance Review — Subcontractor Transit Node Gap Assessment"} />
                    </div>
                    <div className={"flex items-center gap-2 shrink-0"}>
                      <button className={"h-9 px-3 text-secondary hover:text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-1"} title={"Discard unsaved changes"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"undo"}
                        </span>
                        {" "}
                        <span>
                          {"Revert"}
                        </span>
                      </button>
                      {" "}
                      <button className={"h-9 px-3 bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md rounded-lg shadow-sm transition-colors flex items-center gap-1.5"} type={"button"} data-nav="/decision-record?new=decision&from=notes">
                        <span className={"material-symbols-outlined text-[18px] text-primary"}>
                          {"swap_horiz"}
                        </span>
                        {" "}
                        <span className={"hidden sm:inline"}>
                          {"Elevate to Decision"}
                        </span>
                      </button>
                      {" "}
                      <button className={"h-9 px-4 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-opacity flex items-center gap-1.5"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"lock"}
                        </span>
                        {" "}
                        <span>
                          {"Save & Link Record"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm"}>
                    <div className={"flex items-start md:items-center gap-space-md"}>
                      <div className={"w-10 h-10 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center shrink-0"}>
                        <span className={"material-symbols-outlined text-[24px]"}>
                          {"verified_user"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Linked Governance Target"}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.2 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold"}>
                            {"Tier-1 Cleared"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-2 mt-0.5"}>
                          <a className={"font-label-lg text-label-lg font-semibold text-primary hover:underline flex items-center gap-1"} href={"#"}>
                            {" [Decision #14,820: Defense Logistics Routing Policy Assessment - Q3 Enclave] "}
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"open_in_new"}
                            </span>
                          </a>
                        </div>
                        <div className={"flex items-center gap-3 mt-1 font-label-sm text-label-sm text-on-surface-variant"}>
                          <span className={"flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                              {"memory"}
                            </span>
                            {"Hardware TPM Node #04 Verified"}
                          </span>
                          {" "}
                          <span>
                            {"•"}
                          </span>
                          {" "}
                          <a className={"text-primary hover:underline flex items-center gap-0.5"} href={"#"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"smart_toy"}
                            </span>
                            {"Copilot Session #SEC-9942 "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"flex items-center gap-2 self-start md:self-auto"}>
                      <button className={"px-3 py-1.5 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm hover:bg-surface-container transition-colors flex items-center gap-1"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"link"}
                        </span>
                        {" Reassign Target "}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-wrap items-center justify-between gap-2 p-1.5 bg-surface-container rounded-lg shadow-sm"}>
                    <div className={"flex items-center gap-0.5"}>
                      <button className={"w-8 h-8 rounded bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm"} title={"Bold"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_bold"}
                        </span>
                      </button>
                      {" "}
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Italic"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_italic"}
                        </span>
                      </button>
                      {" "}
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Strike"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_strikethrough"}
                        </span>
                      </button>
                      <div className={"w-[1px] h-5 bg-outline-variant mx-1"} />
                      <button className={"px-2 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-semibold"} title={"Heading 1"} type={"button"}>
                        {"H1"}
                      </button>
                      {" "}
                      <button className={"px-2 h-8 rounded bg-surface-container-high text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm"} title={"Heading 2"} type={"button"}>
                        {"H2"}
                      </button>
                      {" "}
                      <button className={"px-2 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-semibold"} title={"Heading 3"} type={"button"}>
                        {"H3"}
                      </button>
                      <div className={"w-[1px] h-5 bg-outline-variant mx-1"} />
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Bullet List"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_list_bulleted"}
                        </span>
                      </button>
                      {" "}
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Numbered List"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_list_numbered"}
                        </span>
                      </button>
                      {" "}
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Quote Block"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"format_quote"}
                        </span>
                      </button>
                      {" "}
                      <button className={"w-8 h-8 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center"} title={"Code Block"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"code"}
                        </span>
                      </button>
                    </div>
                    <div className={"flex items-center gap-1.5 flex-wrap"}>
                      <button className={"px-2.5 py-1 bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-primary font-label-sm text-label-sm font-semibold rounded shadow-sm transition-all flex items-center gap-1"} type={"button"} data-nav="/decision-record">
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"verified"}
                        </span>
                        {" + Link Decision Proof "}
                      </button>
                      {" "}
                      <button className={"px-2.5 py-1 bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-medium rounded shadow-sm transition-all flex items-center gap-1"} type={"button"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"alternate_email"}
                        </span>
                        {" + Insert Citation [@Source] "}
                      </button>
                      {" "}
                      <button className={"px-2.5 py-1 bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-secondary font-label-sm text-label-sm font-medium rounded shadow-sm transition-all flex items-center gap-1"} type={"button"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"tag"}
                        </span>
                        {" + Hash Stamp "}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-md py-space-sm font-body-md text-body-md text-on-surface leading-relaxed"}>
                    <div>
                      <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface mb-2"}>
                        {"1. Executive Summary & Scope of Evaluation"}
                      </h2>
                      <p>
                        {" In accordance with Federal Information Processing Standards (FIPS 140-2 Level 3) and Directorate of Defense Trade Controls (DDTC) ITAR mandate §120.54, this memorandum logs the formal investigative findings regarding the dual-use avionics routing pipelines orchestrated under autonomous AI dispatch module "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-[12px] text-primary"}>
                          {"model_avx_v2.18"}
                        </span>
                        {". "}
                      </p>
                    </div>
                    <div>
                      <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface mb-2"}>
                        {"2. Subcontractor Transit Node Findings"}
                      </h2>
                      <p className={"mb-2"}>
                        {" Cross-enclave traffic inspection confirmed that edge inferences passing through Tier-2 supplier relay clusters complied with zero-knowledge packet encryption. However, two non-fatal security variances were noted during hardware attestation handshakes: "}
                      </p>
                      <ul className={"list-disc pl-5 space-y-1.5 text-on-surface-variant"}>
                        <li>
                          <strong className={"text-on-surface"}>
                            {"Telemetry Timestamp Discrepancy:"}
                          </strong>
                          {" Node "}
                          <code className={"px-1 py-0.5 bg-surface-container rounded font-mono text-[12px]"}>
                            {"apx-eur-node-09"}
                          </code>
                          {" exhibited a drift of +114ms relative to the US-Gov Master atomic clock cluster "}
                          <a className={"inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold"} href={"#"}>
                            {"[SRC-01: ITAR-Reg-774]"}
                          </a>
                          {". "}
                        </li>
                        <li>
                          <strong className={"text-on-surface"}>
                            {"Escrow Key Certificate Rollover:"}
                          </strong>
                          {" The sub-contractor’s HSM public certificate was updated without pre-registering the intermediate CA chain inside the Ceryvra Root Anchor "}
                          <a className={"inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold"} href={"#"} data-nav="/governed-chat">
                            {"[SRC-02: Vendor-Audit]"}
                          </a>
                          {". "}
                        </li>
                        <li>
                          <strong className={"text-on-surface"}>
                            {"Autonomous Prompt Ingestion Check:"}
                          </strong>
                          {" Model input filters properly sanitized all classified flight telemetry matrices without hallucination leaks. "}
                        </li>
                      </ul>
                    </div>
                    <div className={"rounded-xl p-space-md bg-secondary-container/30 border-l-4 border-primary-container shadow-sm flex items-start gap-space-sm"}>
                      <span className={"material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5"}>
                        {"report_problem"}
                      </span>
                      <div className={"flex flex-col gap-1"}>
                        <span className={"font-label-lg text-label-lg font-bold text-on-surface"}>
                          {"Critical Auditor Pre-Condition"}
                        </span>
                        <p className={"font-body-md text-body-md text-on-surface-variant"}>
                          {" Do not elevate this working note to a binding Decision until missing hardware security module (HSM) attestation logs from Apex Precision are uploaded and verified against the defense logistics enclave ledger. "}
                        </p>
                        <div className={"mt-2 flex items-center gap-2"}>
                          <button className={"px-2.5 py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold rounded shadow-sm hover:bg-surface-container"} type={"button"}>
                            {" Request HSM Telemetry from Vendor "}
                          </button>
                          {" "}
                          <button className={"px-2.5 py-1 text-secondary font-label-sm text-label-sm rounded hover:bg-surface-container"} type={"button"}>
                            {" Dismiss Warning (Requires Super-Admin Key) "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface mb-2"}>
                        {"3. Cryptographic Enclave Attestation Hash"}
                      </h2>
                      <div className={"p-3 bg-surface-container-low rounded-lg font-mono text-[12px] text-on-surface-variant flex items-center justify-between shadow-inner"}>
                        <div className={"flex items-center gap-2 min-w-0"}>
                          <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                            {"fingerprint"}
                          </span>
                          {" "}
                          <span className={"truncate"}>
                            {"SHA-256: 0x9f4a621e847c10d32bb58231201fae904b772418e2110c9d74f280a9829988c1"}
                          </span>
                        </div>
                        <button className={"text-primary hover:underline font-label-sm text-label-sm ml-2 shrink-0"} type={"button"}>
                          {"Copy Hash"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"pt-space-md mt-space-sm border-t border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-outline font-label-sm text-label-sm"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                        {"history_toggle_off"}
                      </span>
                      {" "}
                      <span>
                        {"Version "}
                        <strong>
                          {"v3.2"}
                        </strong>
                        {" (Immutable Revision)"}
                      </span>
                      {" "}
                      <span>
                        {"•"}
                      </span>
                      {" "}
                      <span>
                        {"Created Sep 28, 2024 at 11:20 AM EDT"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1.5"}>
                      <span>
                        {"Signed by:"}
                      </span>
                      {" "}
                      <span className={"font-semibold text-on-surface"}>
                        {"Dr. Elena Rostova [Lead Risk Auditor]"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                        {"verified"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {"Evidence & Artifact Attachments"}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary"}>
                        {"2 Files"}
                      </span>
                    </div>
                    <button className={"font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1"} type={"button"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"cloud_upload"}
                      </span>
                      {" Upload New Artifact "}
                    </button>
                  </div>
                  <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm"}>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-sm min-w-0"}>
                        <span className={"material-symbols-outlined text-primary text-[24px]"}>
                          {"description"}
                        </span>
                        <div className={"flex flex-col min-w-0"}>
                          <span className={"font-label-md text-label-md font-semibold text-on-surface truncate"}>
                            {"Apex_Precision_HSM_Audit_Q3.pdf"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-outline"}>
                            {"1.4 MB • SHA256 Verified"}
                          </span>
                        </div>
                      </div>
                      <button className={"p-1 rounded text-secondary hover:text-on-surface"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"download"}
                        </span>
                      </button>
                    </div>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-sm min-w-0"}>
                        <span className={"material-symbols-outlined text-primary text-[24px]"}>
                          {"terminal"}
                        </span>
                        <div className={"flex flex-col min-w-0"}>
                          <span className={"font-label-md text-label-md font-semibold text-on-surface truncate"}>
                            {"Telemetry_Offset_Log_Node09.json"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-outline"}>
                            {"320 KB • SHA256 Verified"}
                          </span>
                        </div>
                      </div>
                      <button className={"p-1 rounded text-secondary hover:text-on-surface"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"download"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-xl shadow-sm text-center min-h-[520px]"} id={"view-empty"}>
              <div className={"w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-space-md shadow-sm"}>
                <span className={"material-symbols-outlined text-[44px]"}>
                  {"edit_document"}
                </span>
              </div>
              <h2 className={"font-headline-md text-headline-md font-bold text-on-surface mb-2"}>
                {"No Governance Notes in this Enclave View"}
              </h2>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg"}>
                {" No working records or regulatory memos match your current author or lifecycle status filters. Create a new tamper-evident note or broaden your query. "}
              </p>
              <div className={"flex items-center gap-space-sm"}>
                <button className={"h-10 px-space-lg bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-opacity flex items-center gap-2"} onClick={legacy("setScenario('workspace')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"add"}
                  </span>
                  {" "}
                  <span>
                    {"Create First Governance Note"}
                  </span>
                </button>
                {" "}
                <button className={"h-10 px-space-md bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors"} onClick={legacy("setScenario('workspace')")} type={"button"}>
                  {" Clear Active Filters "}
                </button>
              </div>
            </div>
            <div className={"hidden grid-cols-1 lg:grid-cols-12 gap-space-md items-start animate-pulse"} id={"view-loading"}>
              <div className={"lg:col-span-5 xl:col-span-4 flex flex-col gap-space-sm"}>
                <div className={"h-4 bg-surface-container-high rounded w-36 mb-2"} />
                <div className={"h-44 bg-surface-container rounded-xl shadow-sm"} />
                <div className={"h-40 bg-surface-container-low rounded-xl shadow-sm"} />
                <div className={"h-40 bg-surface-container-low rounded-xl shadow-sm"} />
              </div>
              <div className={"lg:col-span-7 xl:col-span-8 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                  <div className={"h-8 bg-surface-container rounded w-3/4"} />
                  <div className={"h-16 bg-surface-container-low rounded-xl"} />
                  <div className={"h-10 bg-surface-container rounded-lg"} />
                  <div className={"space-y-3 pt-4"}>
                    <div className={"h-4 bg-surface-container-low rounded w-full"} />
                    <div className={"h-4 bg-surface-container-low rounded w-5/6"} />
                    <div className={"h-4 bg-surface-container-low rounded w-4/6"} />
                  </div>
                  <div className={"h-28 bg-surface-container-high rounded-xl mt-4"} />
                </div>
              </div>
            </div>
            <div className={"hidden flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-xl shadow-sm text-center min-h-[520px]"} id={"view-denied"}>
              <div className={"w-20 h-20 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center mb-space-md shadow-sm"}>
                <span className={"material-symbols-outlined text-[44px]"}>
                  {"lock"}
                </span>
              </div>
              <div className={"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold mb-3"}>
                <span>
                  {"Classification: TOP SECRET // NO-FOREIGN"}
                </span>
              </div>
              <h2 className={"font-headline-md text-headline-md font-bold text-on-surface mb-2"}>
                {"Restricted Enclave Vault"}
              </h2>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mb-space-lg"}>
                {" Access to Enclave SEC-9942 documentation records requires Tier-1 Defense Attestation credentials. Your current hardware token is signed for Tier-2 General Oversight. "}
              </p>
              <div className={"p-space-md bg-surface-container-low rounded-xl max-w-md w-full text-left mb-space-lg font-mono text-[12px] text-on-surface-variant"}>
                <div>
                  {"Session ID: SEC-9942-AUTH-ERR"}
                </div>
                <div>
                  {"Required Scope: urn:ceryvra:gov:enclave:audit-write"}
                </div>
                <div>
                  {"TPM PCR-07: Validated (Hash Match)"}
                </div>
                <div className={"text-error font-semibold mt-1"}>
                  {"Status: EACCES - Clearance Level 1 Required"}
                </div>
              </div>
              <div className={"flex items-center gap-space-sm"}>
                <button className={"h-10 px-space-lg bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-opacity flex items-center gap-2"} type={"button"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"vpn_key"}
                  </span>
                  {" "}
                  <span>
                    {"Request Elevated Clearance"}
                  </span>
                </button>
                {" "}
                <button className={"h-10 px-space-md bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors"} onClick={legacy("setScenario('workspace')")} type={"button"}>
                  {" Switch to Public Ledger "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
