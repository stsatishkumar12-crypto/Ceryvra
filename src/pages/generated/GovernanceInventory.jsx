// AUTO-GENERATED from Governance-Inventory-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/governance-inventory.js?raw';

const exportsList = ["setViewState","openDetailDrawer","closeDetailDrawer","openAttestationModal","closeAttestationModal","sealAttestationSuccess","executeQuarantine","clearFilters"];

export default function GovernanceInventory() {
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
            <div className={"bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm mb-space-md flex flex-wrap items-center justify-between gap-space-sm"}>
              <div className={"flex items-center gap-space-xs"}>
                <span className={"material-symbols-outlined text-[16px] text-primary-container"}>
                  {"tune"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider"}>
                  {"Screen Preview States:"}
                </span>
              </div>
              <div className={"flex flex-wrap items-center gap-1.5"} id={"state-toggle-group"}>
                <button className={"px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-xs transition-all"} id={"btn-state-active"} onClick={legacy("setViewState('active')")}>
                  {"Active Inventory (Default)"}
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all"} id={"btn-state-drawer"} onClick={legacy("setViewState('drawer')")}>
                  {"Slide-Over Detail Drawer Open"}
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all"} id={"btn-state-attest"} onClick={legacy("setViewState('attest')")}>
                  {"Fast Review / Attestation Modal"}
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all"} id={"btn-state-empty"} onClick={legacy("setViewState('empty')")}>
                  {"Empty Enclave"}
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all"} id={"btn-state-no-results"} onClick={legacy("setViewState('no-results')")}>
                  {"No Search Results"}
                </button>
                {" "}
                <button className={"px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all"} id={"btn-state-skeleton"} onClick={legacy("setViewState('skeleton')")}>
                  {"Loading Skeleton"}
                </button>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"w-2 h-2 rounded-full bg-tertiary-container"} />
                {" "}
                <span className={"font-label-sm text-label-sm text-outline"}>
                  {"Ledger Synchronized"}
                </span>
              </div>
            </div>
            <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg"}>
              <div className={"flex flex-col max-w-3xl"}>
                <div className={"flex items-center gap-1 text-label-sm font-label-sm text-outline uppercase tracking-wider mb-1"}>
                  <span className={"hover:text-primary transition-colors cursor-pointer"}>
                    {"Global Aerospace & Defense"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px]"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"hover:text-primary transition-colors cursor-pointer"}>
                    {"Governance Overview"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px]"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"text-primary font-semibold"}>
                    {"AI Systems & Inventory"}
                  </span>
                </div>
                <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                  {"AI Governance Inventory & Review"}
                </h1>
                <p className={"font-body-md text-body-md text-on-surface-variant mt-0.5"}>
                  {"Comprehensive cryptographic registry of governed AI models, autonomous agents, third-party vendor pipelines, active use cases, and mandated review cycles."}
                </p>
              </div>
              <div className={"flex items-center gap-space-sm shrink-0"}>
                <button className={"flex items-center gap-1.5 px-space-sm py-2 bg-surface-container-lowest hover:bg-surface-container shadow-sm text-on-surface font-label-md text-label-md rounded-lg transition-colors"} type={"button"}>
                  <span className={"material-symbols-outlined text-[18px] text-outline"}>
                    {"file_download"}
                  </span>
                  {" "}
                  <span>
                    {"Export Compliance Register"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-1.5 px-space-sm py-2 bg-surface-container-lowest hover:bg-surface-container shadow-sm text-on-surface font-label-md text-label-md rounded-lg transition-colors"} type={"button"}>
                  <span className={"material-symbols-outlined text-[18px] text-outline"}>
                    {"published_with_changes"}
                  </span>
                  {" "}
                  <span>
                    {"Bulk Recertify"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-1.5 px-space-md py-2 bg-primary-container hover:opacity-95 text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-opacity"} type={"button"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"add"}
                  </span>
                  {" "}
                  <span>
                    {"+ Create Governed Use Case"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Total Governed Assets"}
                  </span>
                  <div className={"w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"hub"}
                    </span>
                  </div>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"flex items-baseline gap-2"}>
                    <span className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                      {"42"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-tertiary-container bg-surface-container-high px-1.5 py-0.5 rounded font-semibold"}>
                      {"+3 this quarter"}
                    </span>
                  </div>
                  <div className={"mt-2 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1"}>
                    <span className={"font-semibold text-on-surface"}>
                      {"24"}
                    </span>
                    {" Models "}
                    <span className={"text-outline"}>
                      {"•"}
                    </span>
                    {" "}
                    <span className={"font-semibold text-on-surface"}>
                      {"11"}
                    </span>
                    {" Agents "}
                    <span className={"text-outline"}>
                      {"•"}
                    </span>
                    {" "}
                    <span className={"font-semibold text-on-surface"}>
                      {"7"}
                    </span>
                    {" Vendors "}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"High / Critical Risk"}
                  </span>
                  <div className={"w-8 h-8 rounded-lg bg-error-container/30 flex items-center justify-center text-error"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"warning"}
                    </span>
                  </div>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"flex items-baseline gap-2"}>
                    <span className={"font-headline-xl text-headline-xl text-error font-bold tracking-tight"}>
                      {"6 Flagged"}
                    </span>
                  </div>
                  <div className={"mt-2 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1"}>
                    <span className={"w-2 h-2 rounded-full bg-error"} />
                    {" "}
                    <span>
                      {"Strict Human-in-the-Loop & CAC required"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Overdue / Pending Review"}
                  </span>
                  <div className={"w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary-container"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"pending_actions"}
                    </span>
                  </div>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"flex items-baseline gap-2"}>
                    <span className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                      {"4"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-error bg-error-container/50 px-1.5 py-0.5 rounded font-semibold"}>
                      {"2 Past SLA"}
                    </span>
                  </div>
                  <div className={"mt-2 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1"}>
                    <span>
                      {"Attestation reviews mandated before freeze"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Cryptographically Bound"}
                  </span>
                  <div className={"w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"verified"}
                    </span>
                  </div>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"flex items-baseline gap-2"}>
                    <span className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                      {"98.2%"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline font-normal"}>
                      {"FIPS 140-2"}
                    </span>
                  </div>
                  <div className={"mt-2 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1"}>
                    <div className={"w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden"}>
                      <div className={"bg-primary-container h-1.5 rounded-full"} style={{ width: "98.2%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md flex flex-col gap-space-sm"}>
              <div className={"flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm"}>
                <div className={"relative flex-1 min-w-[320px]"}>
                  <span className={"material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline"}>
                    {"search"}
                  </span>
                  {" "}
                  <input className={"w-full h-10 pl-9 pr-14 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:shadow-xs transition-all"} id={"inventory-search-input"} placeholder={"Search system name, agent ID, vendor, owner, hash..."} type={"text"} defaultValue={""} />
                  {" "}
                  <span className={"absolute right-3 top-2.5 font-label-sm text-label-sm text-outline bg-surface-container px-1.5 py-0.5 rounded pointer-events-none"}>
                    {"⌘K"}
                  </span>
                </div>
                <div className={"flex items-center gap-space-xs shrink-0 self-end lg:self-center"}>
                  <div className={"flex items-center bg-surface-container-low rounded-lg p-0.5"}>
                    <button className={"px-2.5 py-1 rounded bg-surface-container-lowest shadow-xs text-on-surface font-label-sm text-label-sm flex items-center gap-1"} title={"Comfortable density"} type={"button"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"density_medium"}
                      </span>
                      {" "}
                      <span className={"hidden sm:inline"}>
                        {"Comfortable"}
                      </span>
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded hover:bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 transition-colors"} title={"Compact density"} type={"button"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"density_small"}
                      </span>
                      {" "}
                      <span className={"hidden sm:inline"}>
                        {"Compact"}
                      </span>
                    </button>
                  </div>
                  <button className={"w-10 h-10 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Customize columns"} type={"button"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"view_column"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm h-10 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors"} onClick={legacy("clearFilters()")} type={"button"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"filter_alt_off"}
                    </span>
                    {" "}
                    <span>
                      {"Clear Filters"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 pt-1"}>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Type: All Types (42)"}
                    </option>
                    <option>
                      {"Model / System (24)"}
                    </option>
                    <option>
                      {"Autonomous Agent (11)"}
                    </option>
                    <option>
                      {"Vendor Pipeline (7)"}
                    </option>
                    <option>
                      {"Use Case Boundary"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Risk: All Tiers"}
                    </option>
                    <option>
                      {"Critical (Tier 1)"}
                    </option>
                    <option>
                      {"High (Tier 2)"}
                    </option>
                    <option>
                      {"Moderate (Tier 3)"}
                    </option>
                    <option>
                      {"Low (Tier 4)"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Status: All Statuses"}
                    </option>
                    <option>
                      {"Satisfied"}
                    </option>
                    <option>
                      {"Provisional"}
                    </option>
                    <option>
                      {"Pending Approval"}
                    </option>
                    <option>
                      {"Awaiting Verification"}
                    </option>
                    <option>
                      {"Conflicting / Flagged"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Review: All Cycles"}
                    </option>
                    <option>
                      {"Current"}
                    </option>
                    <option>
                      {"Due in 7 Days"}
                    </option>
                    <option>
                      {"Overdue (Urgent)"}
                    </option>
                    <option>
                      {"Under Attestation"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Vendor: All Enclaves"}
                    </option>
                    <option>
                      {"Anthropic Gov-Isolated"}
                    </option>
                    <option>
                      {"Azure Gov OpenAI"}
                    </option>
                    <option>
                      {"Palantir AIP Enclave"}
                    </option>
                    <option>
                      {"Internal PyTorch (FIPS)"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
                <div className={"relative"}>
                  <select className={"w-full h-8 px-2.5 pr-7 bg-surface-container-low hover:bg-surface-container rounded font-label-sm text-label-sm text-on-surface appearance-none cursor-pointer focus:outline-none transition-colors"}>
                    <option>
                      {"Owner: All Custodians"}
                    </option>
                    <option>
                      {"Dr. Elena Rostova"}
                    </option>
                    <option>
                      {"Marcus Vance"}
                    </option>
                    <option>
                      {"Col. T. Vance"}
                    </option>
                    <option>
                      {"SecOps Team"}
                    </option>
                    <option>
                      {"Compliance Office"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2 top-2 text-[16px] text-outline pointer-events-none"}>
                    {"expand_more"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"relative w-full"}>
              <div className={"w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col"} id={"view-inventory"}>
                <div className={"overflow-x-auto w-full"}>
                  <table className={"w-full text-left border-collapse min-w-[1080px]"}>
                    <thead>
                      <tr className={"bg-surface-container-low text-outline font-label-sm text-label-sm uppercase tracking-wider select-none"}>
                        <th className={"py-3 px-4 w-10"}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </th>
                        <th className={"py-3 px-4 cursor-pointer hover:text-on-surface transition-colors"}>
                          <div className={"flex items-center gap-1"}>
                            <span>
                              {"Item Name & Asset Type"}
                            </span>
                            {" "}
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"arrow_drop_down"}
                            </span>
                          </div>
                        </th>
                        <th className={"py-3 px-4"}>
                          {"Owner & Department"}
                        </th>
                        <th className={"py-3 px-4"}>
                          {"Vendor & Enclave"}
                        </th>
                        <th className={"py-3 px-4"}>
                          {"Risk Classification"}
                        </th>
                        <th className={"py-3 px-4"}>
                          {"Governance Status"}
                        </th>
                        <th className={"py-3 px-4 cursor-pointer hover:text-on-surface transition-colors"}>
                          <div className={"flex items-center gap-1"}>
                            <span>
                              {"Review Lifecycle"}
                            </span>
                            {" "}
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"unfold_more"}
                            </span>
                          </div>
                        </th>
                        <th className={"py-3 px-4 text-right"}>
                          {"Actions"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className={"divide-y divide-surface-container font-body-sm text-body-sm text-on-surface"}>
                      <tr className={"hover:bg-surface-container-low/70 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"smart_toy"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Autonomous Flight Trajectory Optimizer"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"AGT-4402"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Autonomous Agent"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px]"}>
                              {"MV"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"Marcus Vance"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Avionics AI Eng"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Internal PyTorch"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[12px]"}>
                                {"security"}
                              </span>
                              {" FIPS 140-2 Node "}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container/40 text-on-error-container font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-error"} />
                            {" "}
                            <span>
                              {"Critical (Tier 1)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"check_circle"}
                            </span>
                            {" "}
                            <span>
                              {"Satisfied"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Next: Oct 14, 2024"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-tertiary"}>
                              {"Due in 16 days"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} onClick={legacy("openAttestationModal('AGT-4402')")} type={"button"}>
                              {"Quick Review"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className={"bg-error-container/10 hover:bg-error-container/20 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-error shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"account_tree"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Subcontractor Transit Node ITAR Evaluator"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"SYS-1082"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Model / Pipeline"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px]"}>
                              {"ER"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"Dr. Elena Rostova"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Lead AI Auditor"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Anthropic Gov-Isolated"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Claude 3.5 Sonnet (IL5)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-primary-container"} />
                            {" "}
                            <span>
                              {"High (Tier 2)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"error"}
                            </span>
                            {" "}
                            <span>
                              {"Conflicting (Flagged)"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-error font-semibold"}>
                              {"OVERDUE (2d ago)"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Last: Aug 20, 2024"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-error text-on-error font-label-sm text-label-sm shadow-xs hover:opacity-95 transition-opacity"} onClick={legacy("openDetailDrawer()")} type={"button"}>
                              {"Review & Attest"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low/70 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"verified_user"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Avionics Supply Chain Vendor Risk Assessor"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"UC-8821"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Use Case Boundary"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-sm text-[10px]"}>
                              {"SO"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"SecOps Team"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Infra Defense"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Palantir AIP Enclave"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Foundry FedRAMP"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-primary-container"} />
                            {" "}
                            <span>
                              {"High (Tier 2)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"schedule"}
                            </span>
                            {" "}
                            <span>
                              {"Pending Approval"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Next: Oct 02, 2024"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Due in 4 days"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} onClick={legacy("openAttestationModal('UC-8821')")} type={"button"}>
                              {"Review"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low/70 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"smart_toy"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Defense Maintenance LLM Copilot"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"AGT-9904"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Autonomous Agent"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px]"}>
                              {"TV"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"Col. T. Vance"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Air Force Liaison"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Azure Gov OpenAI"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"GPT-4o DoD Enclave"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-outline"} />
                            {" "}
                            <span>
                              {"Moderate (Tier 3)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"timer"}
                            </span>
                            {" "}
                            <span>
                              {"Provisional (Grace: 14d)"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Next: Oct 20, 2024"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Last: Sep 20, 2024"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} onClick={legacy("openAttestationModal('AGT-9904')")} type={"button"}>
                              {"Review"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low/70 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"account_tree"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Credit Underwriting & Defense Grant Scorer"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"SYS-3301"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Model / Pipeline"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-[10px]"}>
                              {"CO"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"Compliance Office"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Audit Board"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Custom XGBoost"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Core Hardware TPM"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container/40 text-on-error-container font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-error"} />
                            {" "}
                            <span>
                              {"Critical (Tier 1)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"fingerprint"}
                            </span>
                            {" "}
                            <span>
                              {"Awaiting Verification"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-error font-semibold"}>
                              {"OVERDUE (8d ago)"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Last: Jul 11, 2024"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-xs hover:opacity-95 transition-opacity"} onClick={legacy("openAttestationModal('SYS-3301')")} type={"button"}>
                              {"Verify Proof"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low/70 transition-colors group cursor-pointer"} onClick={legacy("openDetailDrawer()")}>
                        <td className={"py-3.5 px-4"} onClick={legacy("event.stopPropagation()")}>
                          <input className={"rounded text-primary-container focus:ring-0 cursor-pointer"} type={"checkbox"} />
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-start gap-2.5"}>
                            <div className={"w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5"}>
                              <span className={"material-symbols-outlined text-[18px]"}>
                                {"analytics"}
                              </span>
                            </div>
                            <div className={"flex flex-col min-w-0"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                                {"Telemetry Anomaly Auto-Classifier"}
                              </span>
                              <div className={"flex items-center gap-2 mt-0.5"}>
                                <span className={"font-label-sm text-label-sm text-outline"}>
                                  {"SYS-7719"}
                                </span>
                                {" "}
                                <span className={"text-outline text-[10px]"}>
                                  {"•"}
                                </span>
                                {" "}
                                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                                  {"Model / Pipeline"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex items-center gap-2"}>
                            <div className={"w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px]"}>
                              {"ER"}
                            </div>
                            <div className={"flex flex-col"}>
                              <span className={"font-label-md text-label-md text-on-surface"}>
                                {"Dr. Elena Rostova"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-outline"}>
                                {"Lead AI Auditor"}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Internal TensorRT"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Edge Cluster v4"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-outline"} />
                            {" "}
                            <span>
                              {"Low (Tier 4)"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[12px]"}>
                              {"check_circle"}
                            </span>
                            {" "}
                            <span>
                              {"Satisfied"}
                            </span>
                          </span>
                        </td>
                        <td className={"py-3.5 px-4"}>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md text-on-surface"}>
                              {"Next: Dec 22, 2024"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Last: Sep 22, 2024"}
                            </span>
                          </div>
                        </td>
                        <td className={"py-3.5 px-4 text-right"} onClick={legacy("event.stopPropagation()")}>
                          <div className={"flex items-center justify-end gap-1.5"}>
                            <button className={"px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} onClick={legacy("openAttestationModal('SYS-7719')")} type={"button"}>
                              {"Quick Review"}
                            </button>
                            {" "}
                            <button className={"w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center text-outline transition-colors"} type={"button"}>
                              <span className={"material-symbols-outlined text-[16px]"}>
                                {"more_vert"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"bg-surface-container-lowest px-space-md py-3 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant"}>
                    <span>
                      {"Showing "}
                      <strong className={"text-on-surface font-semibold"}>
                        {"1-6"}
                      </strong>
                      {" of "}
                      <strong className={"text-on-surface font-semibold"}>
                        {"42"}
                      </strong>
                      {" governed assets"}
                    </span>
                    {" "}
                    <span className={"text-outline"}>
                      {"|"}
                    </span>
                    <div className={"flex items-center gap-1.5"}>
                      <span>
                        {"Rows:"}
                      </span>
                      <select className={"h-7 px-2 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface cursor-pointer focus:outline-none"}>
                        <option>
                          {"10"}
                        </option>
                        <option>
                          {"25"}
                        </option>
                        <option>
                          {"50"}
                        </option>
                        <option>
                          {"100"}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className={"flex items-center gap-1"}>
                    <button className={"w-8 h-8 rounded bg-surface-container-low text-outline flex items-center justify-center cursor-not-allowed opacity-50"} disabled type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"chevron_left"}
                      </span>
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-xs font-semibold"} type={"button"}>
                      {"1"}
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} type={"button"}>
                      {"2"}
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} type={"button"}>
                      {"3"}
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} type={"button"}>
                      {"4"}
                    </button>
                    {" "}
                    <span className={"px-1 text-outline"}>
                      {"..."}
                    </span>
                    {" "}
                    <button className={"w-8 h-8 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"} type={"button"}>
                      {"7"}
                    </button>
                    {" "}
                    <button className={"w-8 h-8 rounded hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={"hidden w-full bg-surface-container-lowest rounded-xl p-12 text-center shadow-sm flex-col items-center justify-center"} id={"view-empty"}>
                <div className={"w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary-container mb-4"}>
                  <span className={"material-symbols-outlined text-[36px]"}>
                    {"shield_lock"}
                  </span>
                </div>
                <h3 className={"font-headline-md text-headline-md text-on-surface font-semibold"}>
                  {"No Governed Assets Registered in this Enclave"}
                </h3>
                <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-1 mb-6"}>
                  {"This cryptographic enclave partition has no active autonomous agents, machine learning models, or external pipelines bound to its hardware root of trust."}
                </p>
                <div className={"flex items-center gap-space-sm"}>
                  <button className={"px-space-md py-2 bg-primary-container hover:opacity-95 text-on-primary font-label-md text-label-md rounded-lg shadow-sm"} type={"button"}>
                    {" + Onboard First AI Model "}
                  </button>
                  {" "}
                  <button className={"px-space-md py-2 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg"} type={"button"}>
                    {" Import FedRAMP Template "}
                  </button>
                </div>
              </div>
              <div className={"hidden w-full bg-surface-container-lowest rounded-xl p-12 text-center shadow-sm flex-col items-center justify-center"} id={"view-no-results"}>
                <div className={"w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-outline mb-3"}>
                  <span className={"material-symbols-outlined text-[32px]"}>
                    {"manage_search"}
                  </span>
                </div>
                <h3 className={"font-headline-md text-headline-md text-on-surface font-semibold"}>
                  {"No Governed Assets Match Filter Criteria"}
                </h3>
                <p className={"font-body-md text-body-md text-on-surface-variant max-w-sm mt-1 mb-4"}>
                  {"We could not find any models, agents, or vendor pipelines matching the selected taxonomy and query string."}
                </p>
                <button className={"px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded-lg transition-colors"} onClick={legacy("clearFilters()")} type={"button"}>
                  {" Reset All Search Filters "}
                </button>
              </div>
              <div className={"hidden w-full bg-surface-container-lowest rounded-xl shadow-sm p-4 space-y-4 animate-pulse"} id={"view-skeleton"}>
                <div className={"h-10 bg-surface-container-high rounded w-full"} />
                <div className={"space-y-3 pt-2"}>
                  <div className={"h-14 bg-surface-container rounded w-full"} />
                  <div className={"h-14 bg-surface-container rounded w-full"} />
                  <div className={"h-14 bg-surface-container rounded w-full"} />
                  <div className={"h-14 bg-surface-container rounded w-full"} />
                  <div className={"h-14 bg-surface-container rounded w-full"} />
                </div>
                <div className={"h-8 bg-surface-container-low rounded w-1/3 mt-4"} />
              </div>
            </div>
            <div className={"mt-space-md bg-surface-container-low px-space-md py-2.5 rounded-lg flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-outline gap-2"}>
              <div className={"flex items-center gap-2"}>
                <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                  {"lock"}
                </span>
                {" "}
                <span>
                  {"All inventory items anchored to Enclave Ledger "}
                  <strong className={"text-on-surface font-mono"}>
                    {"#8,941,209"}
                  </strong>
                </span>
                {" "}
                <span className={"text-outline"}>
                  {"•"}
                </span>
                {" "}
                <span>
                  {"Hardware TPM Root of Trust Verified"}
                </span>
              </div>
              <div className={"flex items-center gap-3"}>
                <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                  {"Next Sync: In 4m 12s"}
                </span>
                {" "}
                <a className={"text-primary hover:underline font-label-sm text-label-sm font-semibold"} href={"#"} data-nav="/audit-history">
                  {"Audit Proof Ledger"}
                </a>
              </div>
            </div>
            <div className={"fixed inset-0 z-50 overflow-hidden pointer-events-none transition-opacity duration-300 opacity-0 hidden"} id={"slideover-drawer"}>
              <div className={"absolute inset-0 bg-inverse-surface/40 backdrop-blur-xs transition-opacity"} onClick={legacy("closeDetailDrawer()")} />
              <div className={"fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-auto"}>
                <div className={"w-screen max-w-2xl bg-surface-container-lowest shadow-2xl flex flex-col justify-between overflow-y-auto"}>
                  <div className={"px-space-lg py- space-md bg-surface-container-low border-b border-surface-container flex items-center justify-between"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-[20px] text-primary-container"}>
                        {"shield"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold"}>
                        {"Asset Governance Record & Attestation"}
                      </span>
                    </div>
                    <button className={"w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline hover:text-on-surface transition-colors"} onClick={legacy("closeDetailDrawer()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"close"}
                      </span>
                    </button>
                  </div>
                  <div className={"p-space-lg flex-1 space-y-space-lg"}>
                    <div className={"flex flex-col gap-2"}>
                      <div className={"flex items-center justify-between"}>
                        <span className={"font-mono text-body-sm bg-surface-container px-2 py-0.5 rounded text-primary-container font-semibold"}>
                          {"SYS-1082"}
                        </span>
                        {" "}
                        <span className={"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"error"}
                          </span>
                          {" "}
                          <span>
                            {"Conflicting Attestation"}
                          </span>
                        </span>
                      </div>
                      <h2 className={"font-headline-md text-headline-md text-on-surface font-bold leading-tight"}>
                        {"Subcontractor Transit Node ITAR Evaluator"}
                      </h2>
                      <p className={"font-body-md text-body-md text-on-surface-variant"}>
                        {"Classified logistics NLP engine scanning international freight bills of lading for Munitions List (USML) category compliance prior to flight manifesting."}
                      </p>
                    </div>
                    <div className={"grid grid-cols-2 gap-space-sm bg-surface-container-low p-space-md rounded-xl"}>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                          {"Custodian / Owner"}
                        </span>
                        {" "}
                        <span className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                          {"Dr. Elena Rostova (Cert #9921)"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                          {"Deployment Perimeter"}
                        </span>
                        {" "}
                        <span className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                          {"Anthropic Gov-Isolated IL5"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                          {"Risk Classification"}
                        </span>
                        {" "}
                        <span className={"font-label-md text-label-md text-error font-semibold mt-0.5"}>
                          {"Tier 2 (High Autonomous Impact)"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                          {"Root of Trust Hash"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-outline font-mono truncate mt-0.5"}>
                          {"sha256:0xf4a9...e3b1c8"}
                        </span>
                      </div>
                    </div>
                    <div className={"space-y-2"}>
                      <h4 className={"font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary"}>
                          {"lan"}
                        </span>
                        {" "}
                        <span>
                          {"Data Lineage & Model Perimeter"}
                        </span>
                      </h4>
                      <div className={"bg-surface-container-lowest rounded-lg p-space-sm border border-surface-container space-y-2 text-body-sm font-body-sm text-on-surface-variant"}>
                        <div className={"flex justify-between items-center py-1 border-b border-surface-container"}>
                          <span>
                            {"Training / Prompt Cutoff:"}
                          </span>
                          {" "}
                          <span className={"font-mono text-on-surface font-medium"}>
                            {"May 2024 (DoD Snapshot)"}
                          </span>
                        </div>
                        <div className={"flex justify-between items-center py-1 border-b border-surface-container"}>
                          <span>
                            {"Cryptographic Enclave:"}
                          </span>
                          {" "}
                          <span className={"text-tertiary font-semibold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"verified"}
                            </span>
                            {" FIPS 140-2 Level 3 Secure "}
                          </span>
                        </div>
                        <div className={"flex justify-between items-center py-1"}>
                          <span>
                            {"Dual-Key Human Signoff:"}
                          </span>
                          {" "}
                          <span className={"text-error font-semibold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"warning"}
                            </span>
                            {" Missing Second Key Holder "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"space-y-3"}>
                      <h4 className={"font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary"}>
                          {"fact_check"}
                        </span>
                        {" "}
                        <span>
                          {"Mandated Recertification Gates"}
                        </span>
                      </h4>
                      <div className={"space-y-2"}>
                        <div className={"flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container"}>
                          <span className={"material-symbols-outlined text-[20px] text-tertiary mt-0.5"}>
                            {"check_circle"}
                          </span>
                          <div className={"flex-1 min-w-0"}>
                            <div className={"flex items-center justify-between"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                                {"FIPS Cryptographic Hash Match"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-tertiary font-mono"}>
                                {"SEALED"}
                              </span>
                            </div>
                            <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                              {"Runtime binary matches enclave anchor block 8,941,110 without memory modifications."}
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container"}>
                          <span className={"material-symbols-outlined text-[20px] text-tertiary mt-0.5"}>
                            {"check_circle"}
                          </span>
                          <div className={"flex-1 min-w-0"}>
                            <div className={"flex items-center justify-between"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                                {"Model Bias & Disparate Impact Audit"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-tertiary font-mono"}>
                                {"PASS (99.8%)"}
                              </span>
                            </div>
                            <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                              {"Adversarial red-teaming verified false rejection rates below 0.02% across NATO vendors."}
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-start gap-3 p-3 rounded-lg bg-error-container/20 border border-error-container"}>
                          <span className={"material-symbols-outlined text-[20px] text-error mt-0.5"}>
                            {"cancel"}
                          </span>
                          <div className={"flex-1 min-w-0"}>
                            <div className={"flex items-center justify-between"}>
                              <span className={"font-label-md text-label-md text-error font-semibold"}>
                                {"Dual-Key Senior Officer Signoff"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-error font-bold"}>
                                {"EXPIRED 2d AGO"}
                              </span>
                            </div>
                            <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                              {"Previous authorization expired on Oct 12, 2024. Recertification requires CAC/PIV cryptographic seal from Lead AI Auditor and Cyber Command rep."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-lg bg-surface-container-low border-t border-surface-container flex flex-col gap-2.5"}>
                    <div className={"flex items-center gap-2"}>
                      <button className={"flex-1 py-2 px-3 bg-error text-on-error rounded-lg font-label-md text-label-md font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5"} onClick={legacy("executeQuarantine()")} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"block"}
                        </span>
                        {" "}
                        <span>
                          {"Reject & Quarantine Enclave"}
                        </span>
                      </button>
                      {" "}
                      <button className={"py-2 px-3 bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"receipt_long"}
                        </span>
                        {" "}
                        <span>
                          {"Request Proof"}
                        </span>
                      </button>
                    </div>
                    <button className={"w-full py-2.5 px-4 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:opacity-95 transition-opacity shadow-sm flex items-center justify-center gap-2"} onClick={legacy("openAttestationModal('SYS-1082')")} type={"button"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"badge"}
                      </span>
                      {" "}
                      <span>
                        {"Approve & Seal Recertification (Sign with CAC / PIV)"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={"fixed inset-0 z-50 overflow-y-auto hidden"} id={"attest-modal"}>
              <div className={"min-h-full flex items-center justify-center p-4 text-center"}>
                <div className={"fixed inset-0 bg-inverse-surface/50 backdrop-blur-xs transition-opacity"} onClick={legacy("closeAttestationModal()")} />
                <div className={"relative bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg text-left shadow-2xl z-10 space-y-space-md"}>
                  <div className={"flex items-center justify-between pb-2 border-b border-surface-container"}>
                    <div className={"flex items-center gap-2"}>
                      <div className={"w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"key"}
                        </span>
                      </div>
                      <div>
                        <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Sign Cryptographic Attestation"}
                        </h3>
                        <span className={"font-label-sm text-label-sm text-outline"} id={"modal-asset-id"}>
                          {"Asset: SYS-1082 • ITAR Evaluator"}
                        </span>
                      </div>
                    </div>
                    <button className={"w-8 h-8 rounded hover:bg-surface-container flex items-center justify-center text-outline"} onClick={legacy("closeAttestationModal()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"close"}
                      </span>
                    </button>
                  </div>
                  <div className={"bg-surface-container-low p-space-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant space-y-1"}>
                    <p className={"font-semibold text-on-surface"}>
                      {"By signing this verification statement, you attest that:"}
                    </p>
                    <ul className={"list-disc pl-5 space-y-0.5 text-label-sm"}>
                      <li>
                        {"Model weights are strictly isolated to the authorized enclave hardware partition."}
                      </li>
                      <li>
                        {"Adversarial red-teaming checks satisfy MIL-STD AI ethics tolerances."}
                      </li>
                      <li>
                        {"No unmonitored egress channels exist to external internet relays."}
                      </li>
                    </ul>
                  </div>
                  <div className={"space-y-2"}>
                    <label className={"font-label-sm text-label-sm text-on-surface font-semibold uppercase"}>
                      {"Hardware Security Token / CAC PIN"}
                    </label>
                    {" "}
                    <input className={"w-full h-10 px-3 bg-surface-container-low rounded-lg font-mono text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"••••••••••••"} type={"password"} defaultValue={"882190"} />
                    {" "}
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Detected Card Reader: Identiv SCR3310v2 (FIPS 201 Ready)"}
                    </span>
                  </div>
                  <div className={"pt-2 flex items-center justify-end gap-2 border-t border-surface-container"}>
                    <button className={"px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"} onClick={legacy("closeAttestationModal()")} type={"button"}>
                      {" Cancel "}
                    </button>
                    {" "}
                    <button className={"px-space-lg py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 shadow-sm transition-opacity flex items-center gap-1.5"} onClick={legacy("sealAttestationSuccess()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"verified"}
                      </span>
                      {" "}
                      <span>
                        {"Cryptographically Seal & Commit"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
