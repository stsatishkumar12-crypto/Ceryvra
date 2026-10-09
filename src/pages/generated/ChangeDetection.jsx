// AUTO-GENERATED from Change-Detection-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/change-detection.js?raw';

const exportsList = [];

export default function ChangeDetection() {
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
            <div className={"flex flex-col gap-space-md mb-space-lg"}>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
                  <span className={"hover:text-on-surface cursor-pointer"}>
                    {"Global Aerospace & Defense"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[15px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"hover:text-on-surface cursor-pointer"}>
                    {"Evidence & Proofs"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[15px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"text-primary font-semibold"}>
                    {"Change Detection & Impact"}
                  </span>
                </div>
                <div className={"flex items-center gap-space-sm"}>
                  <span className={"inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                    {" Merkle Tree: "}
                    <span className={"font-mono text-on-surface font-semibold"}>
                      {"0x7c92...11b8"}
                    </span>
                  </span>
                  {" "}
                  <span className={"inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm"}>
                    <span className={"material-symbols-outlined text-[14px]"}>
                      {"lock"}
                    </span>
                    {" Continuous Diff Daemon: Live "}
                  </span>
                </div>
              </div>
              <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md"}>
                <div className={"flex flex-col max-w-3xl"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                      {"Evidence Change Detection & Impact Monitoring"}
                    </h1>
                    <span className={"bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"error"}
                      </span>
                      {" 3 Action Required "}
                    </span>
                  </div>
                  <p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
                    {" Continuous cryptographic evidence audit, delta inspection, and automated materiality evaluation for governed AI decisions. "}
                  </p>
                </div>
                <div className={"flex flex-wrap items-center gap-space-sm shrink-0"}>
                  <button className={"flex items-center gap-space-xs px-space-md h-9 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm"} id={"btn-batch-triage"}>
                    <span className={"material-symbols-outlined text-[18px] text-outline"}>
                      {"playlist_add_check"}
                    </span>
                    {" "}
                    <span>
                      {"Batch Triage Non-Material"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-space-xs px-space-md h-9 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm"}>
                    <span className={"material-symbols-outlined text-[18px] text-outline"}>
                      {"file_download"}
                    </span>
                    {" "}
                    <span>
                      {"Export Change Ledger"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-space-xs px-space-md h-9 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm"} id={"btn-diff-scan"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"sync"}
                    </span>
                    {" "}
                    <span>
                      {"Run Enclave Diff Scan"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest shadow-sm"}>
                <div className={"flex flex-wrap items-center gap-space-sm"}>
                  <div className={"relative flex items-center bg-surface-container-low rounded-lg px-space-sm py-1"}>
                    <span className={"material-symbols-outlined text-[16px] text-outline mr-1.5"}>
                      {"calendar_month"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2"}>
                      {"Audit Window:"}
                    </span>
                    <select className={"bg-transparent font-label-md text-label-md text-on-surface focus:outline-none pr-space-xs cursor-pointer"} id={"time-range-select"}>
                      <option>
                        {"Last 7 Days (Oct 18 – Oct 25, 2024)"}
                      </option>
                      <option>
                        {"Last 24 Hours"}
                      </option>
                      <option>
                        {"Last 30 Days"}
                      </option>
                      <option>
                        {"Quarterly Cycle"}
                      </option>
                      <option>
                        {"Custom Range"}
                      </option>
                    </select>
                  </div>
                  <div className={"relative flex items-center bg-surface-container-low rounded-lg px-space-sm py-1"}>
                    <span className={"material-symbols-outlined text-[16px] text-outline mr-1.5"}>
                      {"hub"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2"}>
                      {"Scope:"}
                    </span>
                    <select className={"bg-transparent font-label-md text-label-md text-on-surface focus:outline-none pr-space-xs cursor-pointer"}>
                      <option>
                        {"All Enclaves (Global Aerospace & Defense)"}
                      </option>
                      <option>
                        {"SEC-9942 (Avionics Autonomous)"}
                      </option>
                      <option>
                        {"GovCloud-IL5 (Secure Execution)"}
                      </option>
                    </select>
                  </div>
                </div>
                <div className={"flex items-center bg-surface-container-low p-0.5 rounded-lg text-on-surface-variant"}>
                  <button className={"px-space-sm py-1 rounded-md font-label-sm text-label-sm font-semibold transition-all bg-surface-container-lowest text-primary shadow-sm"} id={"view-active"}>
                    {"Active Triage"}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-md font-label-sm text-label-sm hover:text-on-surface transition-all"} id={"view-drawer"}>
                    {"Side Drawer Open"}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-md font-label-sm text-label-sm hover:text-on-surface transition-all"} id={"view-zero"}>
                    {"All Clear (Zero)"}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-md font-label-sm text-label-sm hover:text-on-surface transition-all"} id={"view-skeleton"}>
                    {"Scan Running"}
                  </button>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm mb-space-md"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Total Changes"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-outline text-[18px]"}>
                    {"difference"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                    {"14"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant mt-0.5"}>
                    {"Across 3 secured enclaves"}
                  </p>
                </div>
                <div className={"w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-primary h-full rounded-full"} style={{ width: "100%" }} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-error font-semibold uppercase tracking-wider"}>
                    {"Material Impact"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-error text-[18px]"}>
                    {"warning"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-error font-bold tracking-tight"}>
                    {"3"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-error font-medium mt-0.5"}>
                    {"Mandates targeted review"}
                  </p>
                </div>
                <div className={"w-full bg-error-container h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-error h-full rounded-full"} style={{ width: "21%" }} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold"}>
                    {"Non-Material"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                    {"verified"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                    {"9"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant mt-0.5"}>
                    {"Auto-Ack • No cascade"}
                  </p>
                </div>
                <div className={"w-full bg-tertiary-fixed h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-tertiary-container h-full rounded-full"} style={{ width: "64%" }} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Expired Epochs"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-outline text-[18px]"}>
                    {"history_toggle_off"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                    {"2"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant mt-0.5"}>
                    {"Past rotation window"}
                  </p>
                </div>
                <div className={"w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-outline h-full rounded-full"} style={{ width: "14%" }} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"Telemetry Drift"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-error text-[18px]"}>
                    {"alt_route"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                    {"1"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant mt-0.5"}>
                    {"Threshold breached"}
                  </p>
                </div>
                <div className={"w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-error h-full rounded-full"} style={{ width: "7%" }} />
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                    {"New Attestations"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    {"new_releases"}
                  </span>
                </div>
                <div className={"mt-space-sm"}>
                  <div className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
                    {"4"}
                  </div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant mt-0.5"}>
                    {"Verified bundles ingested"}
                  </p>
                </div>
                <div className={"w-full bg-secondary-fixed h-1 rounded-full mt-3 overflow-hidden"}>
                  <div className={"bg-primary-container h-full rounded-full"} style={{ width: "28%" }} />
                </div>
              </div>
            </div>
            <div className={"bg-surface-container-low rounded-xl p-space-md mb-space-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md"}>
              <div className={"flex items-start gap-space-sm"}>
                <div className={"w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 mt-0.5"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"policy"}
                  </span>
                </div>
                <div className={"flex flex-col"}>
                  <div className={"flex items-center gap-space-xs flex-wrap"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider bg-surface-container text-on-surface px-1.5 py-0.5 rounded font-bold"}>
                      {"Standard R-005 / R-016"}
                    </span>
                    {" "}
                    <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                      {"Materiality-Preserving Audit Guarantee"}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-4xl"}>
                    {" Non-material evidence changes do "}
                    <strong className={"text-on-surface font-semibold"}>
                      {"not"}
                    </strong>
                    {" invalidate active Genesis seals. Routine clock synchronizations, telemetry jitter within confidence bands, and custodial profile updates are cryptographically stamped to ledger history without triggering workflow disruption. Only "}
                    <span className={"text-error font-medium"}>
                      {"Material Changes"}
                    </span>
                    {" initiate targeted revalidation cascades. "}
                  </p>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm shrink-0"}>
                <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                  {"Genesis Seal Policy: "}
                  <strong className={"text-on-surface"}>
                    {"Dual-Key FIPS-140-3"}
                  </strong>
                </span>
              </div>
            </div>
            <div className={"bg-surface-container-lowest rounded-xl p-space-sm mb-space-md shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm"}>
              <div className={"flex flex-wrap items-center gap-space-sm flex-1 min-w-0"}>
                <div className={"relative flex-1 min-w-[280px]"}>
                  <span className={"material-symbols-outlined absolute left-3 top-2 text-[18px] text-outline"}>
                    {"search"}
                  </span>
                  {" "}
                  <input className={"w-full h-8 pl-9 pr-10 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"} id={"search-events"} placeholder={"Search event ID, SHA-256 hash, OBL reference, decision target..."} type={"text"} />
                  {" "}
                  <span className={"absolute right-2 top-1.5 font-label-sm text-label-sm text-outline bg-surface-container px-1 py-0.2 rounded"}>
                    {"⌘K"}
                  </span>
                </div>
                <select className={"h-8 px-space-sm rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer"} id={"filter-materiality"}>
                  <option value={"ALL"}>
                    {"All Materialities"}
                  </option>
                  <option value={"MATERIAL"}>
                    {"Material Only (Action Mandated)"}
                  </option>
                  <option value={"NON_MATERIAL"}>
                    {"Non-Material (Logged Only)"}
                  </option>
                  <option value={"EXPIRED"}>
                    {"Expired Epochs"}
                  </option>
                </select>
                <select className={"h-8 px-space-sm rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer"}>
                  <option>
                    {"All Change Types"}
                  </option>
                  <option>
                    {"Certificate Revoked / Re-issued"}
                  </option>
                  <option>
                    {"Telemetry Boundary Drift"}
                  </option>
                  <option>
                    {"Epoch Expiration"}
                  </option>
                  <option>
                    {"Heartbeat / Clock Resync"}
                  </option>
                  <option>
                    {"Custodian Profile Refresh"}
                  </option>
                </select>
                <select className={"h-8 px-space-sm rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer"}>
                  <option>
                    {"All Decisions (DEC-14820, DEC-4402...)"}
                  </option>
                  <option>
                    {"DEC-14820: Dual-Use Flight Envelope"}
                  </option>
                  <option>
                    {"DEC-4402: Defense Logistics Routing"}
                  </option>
                  <option>
                    {"UC-8821: Avionics Autonomous Pilot"}
                  </option>
                </select>
                <button className={"h-8 px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors"} id={"btn-clear-filters"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    {"clear_all"}
                  </span>
                  {" "}
                  <span>
                    {"Clear"}
                  </span>
                </button>
              </div>
              <div className={"flex items-center gap-space-sm shrink-0 self-end xl:self-auto"}>
                <div className={"flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant"}>
                  <span>
                    {"Sort:"}
                  </span>
                  <select className={"bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none cursor-pointer"}>
                    <option>
                      {"Newest First (Block Height)"}
                    </option>
                    <option>
                      {"Oldest First"}
                    </option>
                    <option>
                      {"Materiality Priority"}
                    </option>
                  </select>
                </div>
                <div className={"flex items-center bg-surface-container-low p-0.5 rounded-lg text-outline"}>
                  <button className={"p-1 rounded bg-surface-container-lowest text-primary"} title={"Comfortable view"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"density_medium"}
                    </span>
                  </button>
                  {" "}
                  <button className={"p-1 rounded hover:text-on-surface"} title={"Compact view"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"density_small"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-12 gap-space-md items-start"}>
              <div className={"col-span-12 xl:col-span-7 flex flex-col gap-space-sm transition-all duration-300"} id={"change-feed-container"}>
                <div className={"hidden flex-col gap-space-sm"} id={"skeleton-container"}>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm animate-pulse flex flex-col gap-space-sm"}>
                    <div className={"flex justify-between items-center"}>
                      <div className={"h-4 w-48 bg-surface-container-high rounded"} />
                      <div className={"h-4 w-24 bg-surface-container-high rounded"} />
                    </div>
                    <div className={"h-8 w-3/4 bg-surface-container rounded mt-2"} />
                    <div className={"grid grid-cols-2 gap-space-sm mt-3"}>
                      <div className={"h-20 bg-surface-container-low rounded"} />
                      <div className={"h-20 bg-surface-container-low rounded"} />
                    </div>
                    <div className={"h-6 w-full bg-surface-container-high rounded mt-2"} />
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm animate-pulse flex flex-col gap-space-sm"}>
                    <div className={"flex justify-between items-center"}>
                      <div className={"h-4 w-40 bg-surface-container-high rounded"} />
                      <div className={"h-4 w-28 bg-surface-container-high rounded"} />
                    </div>
                    <div className={"h-8 w-2/3 bg-surface-container rounded mt-2"} />
                    <div className={"grid grid-cols-2 gap-space-sm mt-3"}>
                      <div className={"h-16 bg-surface-container-low rounded"} />
                      <div className={"h-16 bg-surface-container-low rounded"} />
                    </div>
                  </div>
                </div>
                <div className={"hidden bg-surface-container-lowest rounded-xl p-space-xl text-center shadow-sm flex-col items-center justify-center py-16"} id={"zero-state-container"}>
                  <div className={"w-16 h-16 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary mb-space-md"}>
                    <span className={"material-symbols-outlined text-[36px]"}>
                      {"verified_user"}
                    </span>
                  </div>
                  <h3 className={"font-headline-md text-headline-md text-on-surface"}>
                    {"Zero Drift Detected"}
                  </h3>
                  <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-1 mb-space-md"}>
                    {" All cryptographic evidence artifacts match their registered Genesis Merkle trees. No certificate revocations or telemetry breaches logged. "}
                  </p>
                  <button className={"px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors"} id={"btn-reset-zero"}>
                    {" Return to Active Triage "}
                  </button>
                </div>
                <div className={"flex flex-col gap-space-sm"} id={"feed-list"}>
                  <div className={"change-card material bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"} data-event-id={"EVT-9041"} data-materiality={"MATERIAL"}>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold bg-error-container text-on-error-container flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"dangerous"}
                          </span>
                          {" MATERIAL — REVALIDATION MANDATED "}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Event #EVT-9041"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Block #8,941,209"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span className={"material-symbols-outlined text-[14px] text-outline"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"2 hours ago"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs font-label-md text-label-md mt-0.5"}>
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface font-semibold"}>
                        {"OBL-804B"}
                      </span>
                      {" "}
                      <span className={"text-on-surface-variant"}>
                        {"Subcontractor Transit Key Escrow"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-outline"}>
                        {"arrow_forward"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container text-primary font-bold"}>
                        {"DEC-14820"}
                      </span>
                      {" "}
                      <span className={"text-on-surface truncate"}>
                        {"Dual-Use Flight Envelope Autonomous Override Policy (v2.4)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {" Cryptographic Certificate Revoked & Re-issued "}
                      </h3>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold"}>
                        {"Critical Priority"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm"}>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <div className={"flex items-center justify-between text-outline font-label-sm text-label-sm mb-1"}>
                          <span className={"uppercase tracking-wider font-semibold"}>
                            {"Registered Genesis State"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                            {"check_circle"}
                          </span>
                        </div>
                        <div className={"font-mono text-on-surface text-[11px] truncate bg-surface-container-low p-1 rounded mb-1.5"}>
                          {" SHA-256: 0x9f4a...2110 "}
                        </div>
                        <p className={"text-on-surface-variant text-[13px] leading-snug"}>
                          {" FIPS 140-2 Level 3 HSM Enclave #04 • Status: Satisfied • Exp: Oct 2024 "}
                        </p>
                      </div>
                      <div className={"flex flex-col bg-error-container/20 p-space-sm rounded-lg"}>
                        <div className={"flex items-center justify-between text-error font-label-sm text-label-sm mb-1"}>
                          <span className={"uppercase tracking-wider font-bold"}>
                            {"Current Ingested State"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"cancel"}
                          </span>
                        </div>
                        <div className={"font-mono text-error font-semibold text-[11px] truncate bg-error-container/40 p-1 rounded mb-1.5"}>
                          {" SHA-256: 0x3b11...ca55 "}
                        </div>
                        <p className={"text-on-error-container text-[13px] leading-snug font-medium"}>
                          {" Key Revoked by Raytheon SecOps • CRL Reason: Key Superseded • Deficient "}
                        </p>
                      </div>
                    </div>
                    <div className={"flex items-start gap-space-xs p-space-xs bg-surface-container-lowest rounded-lg"}>
                      <span className={"material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5"}>
                        {"report_problem"}
                      </span>
                      <div className={"flex flex-col text-body-sm text-body-sm"}>
                        <span className={"font-semibold text-error"}>
                          {"Impact Assessment: Direct Gate Block"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Directly breaks Rule #804 (PII/CUI Redaction & Key Transit). Suspends Dual-Key Signoff for Col. Vance & Dir. Sterling. Active flights must revert to fail-safe manual guidance."}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"btn-inspect-diff flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm"} data-event-ref={"EVT-9041"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"visibility"}
                          </span>
                          {" "}
                          <span>
                            {"Review Change & Open Diff"}
                          </span>
                        </button>
                        {" "}
                        <button className={"flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md"} data-nav="/revalidation">
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"restart_alt"}
                          </span>
                          {" "}
                          <span>
                            {"Initiate Targeted Revalidation"}
                          </span>
                        </button>
                      </div>
                      <button className={"text-outline hover:text-error font-label-md text-label-md transition-colors px-2 py-1"}>
                        {" Mark Exception / Request Waiver "}
                      </button>
                    </div>
                  </div>
                  <div className={"change-card material bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"} data-event-id={"EVT-8992"} data-materiality={"MATERIAL"}>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold bg-error-container text-on-error-container flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"troubleshoot"}
                          </span>
                          {" MATERIAL — DRIFT DETECTED "}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Event #EVT-8992"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Block #8,939,812"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span className={"material-symbols-outlined text-[14px] text-outline"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"5 hours ago"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs font-label-md text-label-md mt-0.5"}>
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface font-semibold"}>
                        {"OBL-462C"}
                      </span>
                      {" "}
                      <span className={"text-on-surface-variant"}>
                        {"Disparate Impact & Bias Stress Test"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-outline"}>
                        {"arrow_forward"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container text-primary font-bold"}>
                        {"DEC-14820"}
                      </span>
                      {" "}
                      <span className={"text-on-surface truncate"}>
                        {"Dual-Use Flight Envelope Autonomous Override Policy (v2.4)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {" Telemetry Boundary Metric Shift "}
                      </h3>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold"}>
                        {"High Priority"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm"}>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <div className={"flex items-center justify-between text-outline font-label-sm text-label-sm mb-1"}>
                          <span className={"uppercase tracking-wider font-semibold"}>
                            {"Baseline Proof Band"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                            {"check_circle"}
                          </span>
                        </div>
                        <div className={"flex items-baseline gap-2 mb-1"}>
                          <span className={"font-mono text-headline-sm text-headline-sm font-bold text-on-surface"}>
                            {"0.81"}
                          </span>
                          {" "}
                          <span className={"text-[12px] text-on-surface-variant font-medium"}>
                            {"Demographic Parity Ratio"}
                          </span>
                        </div>
                        <p className={"text-on-surface-variant text-[12px]"}>
                          {" Enclave Safe Envelope Tolerance: ≥ 0.80 (Compliant) "}
                        </p>
                      </div>
                      <div className={"flex flex-col bg-error-container/20 p-space-sm rounded-lg"}>
                        <div className={"flex items-center justify-between text-error font-label-sm text-label-sm mb-1"}>
                          <span className={"uppercase tracking-wider font-bold"}>
                            {"Ingested Telemetry Proof"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"warning"}
                          </span>
                        </div>
                        <div className={"flex items-baseline gap-2 mb-1"}>
                          <span className={"font-mono text-headline-sm text-headline-sm font-bold text-error"}>
                            {"0.77"}
                          </span>
                          {" "}
                          <span className={"text-[12px] text-error font-semibold"}>
                            {"-0.04 Variance Breach"}
                          </span>
                        </div>
                        <p className={"text-on-error-container text-[12px] font-medium"}>
                          {" Below minimum safety threshold of 0.80 "}
                        </p>
                      </div>
                    </div>
                    <div className={"flex items-start gap-space-xs p-space-xs bg-surface-container-lowest rounded-lg"}>
                      <span className={"material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5"}>
                        {"crisis_alert"}
                      </span>
                      <div className={"flex flex-col text-body-sm text-body-sm"}>
                        <span className={"font-semibold text-error"}>
                          {"Impact Assessment: Algorithmic Drift & Node Variance"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant"}>
                          {"Violates Rule #912 Autonomous Trajectory Corridor. Generates conflicting proof hash between Verifier Node #04 and SecOps Enclave."}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"btn-inspect-diff flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md"} data-event-ref={"EVT-8992"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"monitoring"}
                          </span>
                          {" "}
                          <span>
                            {"Inspect Telemetry Delta"}
                          </span>
                        </button>
                        {" "}
                        <button className={"flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"cached"}
                          </span>
                          {" "}
                          <span>
                            {"Trigger Node Re-evaluation"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"change-card non-material bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"} data-event-id={"EVT-8940"} data-materiality={"NON_MATERIAL"}>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold bg-surface-container text-on-surface flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                            {"check"}
                          </span>
                          {" NON-MATERIAL — LOGGED ONLY "}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Event #EVT-8940"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Block #8,935,100"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span className={"material-symbols-outlined text-[14px] text-outline"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"Yesterday (18:42 UTC)"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs font-label-md text-label-md mt-0.5"}>
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface font-semibold"}>
                        {"OBL-101A"}
                      </span>
                      {" "}
                      <span className={"text-on-surface-variant"}>
                        {"Hardware HSM Tamper Enclosure"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-outline"}>
                        {"arrow_forward"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-medium"}>
                        {"DEC-14820 & DEC-4402"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {" Periodic Routine Heartbeat & Microsecond Clock Drift Resync "}
                      </h3>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-medium"}>
                        {"Informational"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm"}>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <span className={"text-outline font-label-sm text-label-sm mb-1 uppercase tracking-wider font-semibold"}>
                          {"Previous Offset"}
                        </span>
                        <div className={"font-mono text-on-surface text-[13px] font-semibold"}>
                          {"+1.2ms"}
                        </div>
                        <span className={"text-[12px] text-on-surface-variant"}>
                          {"Hardware TPM Node #04"}
                        </span>
                      </div>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <span className={"text-tertiary font-label-sm text-label-sm mb-1 uppercase tracking-wider font-semibold"}>
                          {"Resynced Offset"}
                        </span>
                        <div className={"font-mono text-tertiary text-[13px] font-bold"}>
                          {"+0.4ms"}
                        </div>
                        <span className={"text-[12px] text-on-surface-variant"}>
                          {"Resynced to USNO Master GPS PPS"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                          {"verified"}
                        </span>
                        <div className={"flex flex-col text-body-sm text-body-sm"}>
                          <span className={"text-on-surface font-semibold"}>
                            {"Auto-Acknowledged • No Cascade Required"}
                          </span>
                          {" "}
                          <span className={"text-on-surface-variant text-[12px]"}>
                            {"Clock adjustment < 5.0ms threshold. Active seals intact. Decision validity 100% unaffected."}
                          </span>
                        </div>
                      </div>
                      <button className={"btn-inspect-diff text-primary hover:text-primary-container font-label-md text-label-md font-semibold px-2 py-1 transition-colors"} data-event-ref={"EVT-8940"} data-nav="/audit-history">
                        {" View Audit Stamp "}
                      </button>
                    </div>
                  </div>
                  <div className={"change-card non-material bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"} data-event-id={"EVT-8912"} data-materiality={"NON_MATERIAL"}>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold bg-surface-container text-on-surface flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px] text-outline"}>
                            {"description"}
                          </span>
                          {" NON-MATERIAL — METADATA UPDATE "}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Event #EVT-8912"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Block #8,931,440"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span className={"material-symbols-outlined text-[14px] text-outline"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"2 days ago"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs font-label-md text-label-md mt-0.5"}>
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface font-semibold"}>
                        {"Working Note #88219"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-outline"}>
                        {"arrow_forward"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-medium"}>
                        {"DEC-14820"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {" Auditor Annotation & Custodian Profile Refresh "}
                      </h3>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium"}>
                        {"Administrative"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm"}>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <span className={"text-outline font-label-sm text-label-sm mb-1 uppercase tracking-wider font-semibold"}>
                          {"Prior Role Header"}
                        </span>
                        {" "}
                        <span className={"text-[13px] text-on-surface font-medium"}>
                          {"Dr. Elena Rostova"}
                        </span>
                        {" "}
                        <span className={"text-[11px] text-on-surface-variant font-mono"}>
                          {"Role: Lead AI Risk Auditor"}
                        </span>
                      </div>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <span className={"text-on-surface font-label-sm text-label-sm mb-1 uppercase tracking-wider font-semibold"}>
                          {"Updated Custodian Card"}
                        </span>
                        {" "}
                        <span className={"text-[13px] text-on-surface font-semibold"}>
                          {"Dr. Elena Rostova"}
                        </span>
                        {" "}
                        <span className={"text-[11px] text-primary font-mono font-medium"}>
                          {"Lead AI Risk Auditor & Executor (PIV-CAC Re-keyed)"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex items-center justify-between pt-space-xs"}>
                      <span className={"text-[12px] text-on-surface-variant"}>
                        {"Administrative metadata update. No algorithmic weight or rule boundary altered."}
                      </span>
                      {" "}
                      <button className={"px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface transition-colors"}>
                        {" Acknowledge "}
                      </button>
                    </div>
                  </div>
                  <div className={"change-card material bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm"} data-event-id={"EVT-8874"} data-materiality={"EXPIRED"}>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold bg-error-container text-on-error-container flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"history_toggle_off"}
                          </span>
                          {" MATERIAL — EXPIRED EPOCH "}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Event #EVT-8874"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Block #8,924,190"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span className={"material-symbols-outlined text-[14px] text-outline"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"3 days ago"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs font-label-md text-label-md mt-0.5"}>
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface font-semibold"}>
                        {"OBL-915A"}
                      </span>
                      {" "}
                      <span className={"text-on-surface-variant"}>
                        {"Hardware HSM Enclave Key Epoch Certification"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-[14px] text-outline"}>
                        {"arrow_forward"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.5 rounded bg-surface-container text-primary font-bold"}>
                        {"DEC-14820"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {" Enclave Key 30-Day Rotation Expired "}
                      </h3>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold"}>
                        {"High Priority"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm"}>
                      <div className={"flex flex-col bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <span className={"text-outline font-label-sm text-label-sm mb-1 uppercase tracking-wider font-semibold"}>
                          {"Epoch #04 Status"}
                        </span>
                        {" "}
                        <span className={"text-[13px] text-on-surface font-medium"}>
                          {"Attested Sep 12, 2024"}
                        </span>
                        {" "}
                        <span className={"text-[11px] text-outline font-mono"}>
                          {"Window Expired: Oct 12, 2024"}
                        </span>
                      </div>
                      <div className={"flex flex-col bg-error-container/20 p-space-sm rounded-lg"}>
                        <span className={"text-error font-label-sm text-label-sm mb-1 uppercase tracking-wider font-bold"}>
                          {"Rotation Status"}
                        </span>
                        {" "}
                        <span className={"text-[13px] text-error font-bold"}>
                          {"SLA Breach (-3 Days Past Window)"}
                        </span>
                        {" "}
                        <span className={"text-[11px] text-on-error-container font-medium"}>
                          {"Enclave Trust Score: 85.0 → 78.4"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md shadow-sm"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"vpn_key"}
                          </span>
                          {" "}
                          <span>
                            {"Re-attest Enclave Key"}
                          </span>
                        </button>
                        {" "}
                        <button className={"flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md"}>
                          <span>
                            {"Request 48h Extension"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-span-12 xl:col-span-5 flex flex-col gap-space-sm sticky top-20"} id={"inspector-panel"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md"}>
                  <div className={"flex items-center justify-between pb-space-xs"}>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-1.5"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-error animate-pulse"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Change Impact & Provenance Inspector"}
                        </h2>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline mt-0.5"}>
                        {"Real-time Merkle validation and decision cascade tree"}
                      </span>
                    </div>
                    <button className={"w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline hover:text-on-surface transition-colors"} id={"btn-close-inspector"} title={"Close Panel"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"close"}
                      </span>
                    </button>
                  </div>
                  <div className={"bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-mono text-primary font-bold text-[13px]"}>
                        {"EVENT #EVT-9041"}
                      </span>
                      {" "}
                      <span className={"bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full"}>
                        {"Gate Block Active"}
                      </span>
                    </div>
                    <span className={"font-headline-sm text-headline-sm text-on-surface font-semibold text-[15px]"}>
                      {" Subcontractor Escrow Cert Deprecation "}
                    </span>
                    <div className={"flex items-center gap-space-sm text-outline font-label-sm text-label-sm mt-0.5"}>
                      <span>
                        {"Enclave: "}
                        <strong className={"text-on-surface"}>
                          {"SEC-9942"}
                        </strong>
                      </span>
                      {" "}
                      <span>
                        {"•"}
                      </span>
                      {" "}
                      <span>
                        {"Block: "}
                        <strong className={"text-on-surface font-mono"}>
                          {"8,941,209"}
                        </strong>
                      </span>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold"}>
                      {"Identified Root Cause"}
                    </span>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg text-body-sm text-body-sm text-on-surface leading-snug"}>
                      {" Subcontractor Raytheon node key deprecation without pre-registered intermediate CA in CRL pool. The authority certificate was superseded on the HSM hardware cluster without emitting an anticipatory genesis transition bundle. "}
                    </div>
                  </div>
                  <div className={"flex flex-col gap-1.5"}>
                    <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold"}>
                      {"Merkle Root & Cryptographic Diff"}
                    </span>
                    <div className={"bg-on-background text-inverse-on-surface p-space-sm rounded-lg font-mono text-[11px] leading-relaxed overflow-x-auto"}>
                      <div className={"text-outline-variant mb-1"}>
                        {"// Proof Envelope ID: 0x7c92...11b8"}
                      </div>
                      <div>
                        {"<MerkleRoot>: 0x7c92a910f13b2c8091...11b8"}
                      </div>
                      <div className={"text-error font-semibold"}>
                        {"- <CertRef>: SHA-256: 0x9f4a7c1e (Revoked)"}
                      </div>
                      <div className={"text-on-tertiary-container font-semibold"}>
                        {"+ <CertRef>: SHA-256: 0x3b11ca55 (Unverified CA)"}
                      </div>
                      <div className={"text-secondary-fixed"}>
                        {"Status: SIGNATURE_CHAIN_UNTRUSTED"}
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-2"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold"}>
                        {"Downstream Cascade Graph"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-primary font-semibold"}>
                        {"3 Decisions Bound"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-xs font-body-sm text-body-sm"}>
                      <div className={"flex items-center justify-between p-space-sm rounded-lg bg-error-container/20"}>
                        <div className={"flex items-center gap-space-xs min-w-0"}>
                          <span className={"material-symbols-outlined text-error text-[18px] shrink-0"}>
                            {"block"}
                          </span>
                          <div className={"flex flex-col min-w-0"}>
                            <span className={"font-semibold text-on-surface text-[13px] truncate"}>
                              {"DEC-14820: Dual-Use Flight Envelope"}
                            </span>
                            {" "}
                            <span className={"text-error text-[11px] font-medium"}>
                              {"Impact: Direct Gate Block • Seal Suspended"}
                            </span>
                          </div>
                        </div>
                        <span className={"font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded font-bold shrink-0"}>
                          {"CRITICAL"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low"}>
                        <div className={"flex items-center gap-space-xs min-w-0"}>
                          <span className={"material-symbols-outlined text-outline text-[18px] shrink-0"}>
                            {"warning"}
                          </span>
                          <div className={"flex flex-col min-w-0"}>
                            <span className={"font-semibold text-on-surface text-[13px] truncate"}>
                              {"DEC-4402: Defense Logistics Routing"}
                            </span>
                            {" "}
                            <span className={"text-on-surface-variant text-[11px]"}>
                              {"Impact: Non-blocking warning • Secondary signoff"}
                            </span>
                          </div>
                        </div>
                        <span className={"font-label-sm text-label-sm bg-surface-container text-on-surface px-2 py-0.5 rounded font-medium shrink-0"}>
                          {"ADVISORY"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low"}>
                        <div className={"flex items-center gap-space-xs min-w-0"}>
                          <span className={"material-symbols-outlined text-tertiary text-[18px] shrink-0"}>
                            {"check_circle"}
                          </span>
                          <div className={"flex flex-col min-w-0"}>
                            <span className={"font-semibold text-on-surface text-[13px] truncate"}>
                              {"UC-8821: Avionics Supply Chain Telemetry"}
                            </span>
                            {" "}
                            <span className={"text-on-surface-variant text-[11px]"}>
                              {"Impact: Monitored • Isolated fallback route"}
                            </span>
                          </div>
                        </div>
                        <span className={"font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-semibold shrink-0"}>
                          {"HEALTHY"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"pt-space-xs flex flex-col gap-space-xs"}>
                    <button className={"w-full flex items-center justify-center gap-space-xs py-2 px-space-md rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-semibold transition-colors shadow-sm"} data-nav="/revalidation">
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"bolt"}
                      </span>
                      {" "}
                      <span>
                        {"Launch Revalidation Wizard (DEC-14820)"}
                      </span>
                    </button>
                    <div className={"flex items-center justify-between px-1"}>
                      <span className={"font-label-sm text-label-sm text-outline"}>
                        {"Target Enclave: SEC-9942"}
                      </span>
                      {" "}
                      <a className={"font-label-sm text-label-sm text-primary hover:underline font-semibold"} href={"#"} data-nav="/audit-history">
                        {"View Raw Cryptographic Audit Bundle"}
                      </a>
                    </div>
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
