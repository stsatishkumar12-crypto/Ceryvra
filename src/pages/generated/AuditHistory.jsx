// AUTO-GENERATED from Audit-History-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/audit-history.js?raw';

const exportsList = ["switchScenario","toggleDeficitsOnly","filterOnlyDeficits","resetFilters","selectEvent","setInspectorTab","triggerLiveProbe"];

export default function AuditHistory() {
  useLegacyScript(script, exportsList);
  return (
    <>
      <div className={"pl-72"}>
        <header className={"fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/40 z-40 px-space-lg flex items-center justify-between gap-space-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"}>
          <div className={"flex items-center gap-space-md min-w-0 flex-1"}>
            <div className={"flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface-container-low border border-outline-variant/50 max-w-sm truncate"}>
              <span className={"material-symbols-outlined text-[16px] text-primary shrink-0"}>
                {"domain"}
              </span>
              <span className={"font-label-sm text-label-sm text-on-surface font-medium truncate"}>
                {"Lockheed Martin Space & Autonomous Systems (TEN-US-0841)"}
              </span>
              <span className={"text-outline-variant text-[11px]"}>
                {"•"}
              </span>
              <span className={"font-label-sm text-label-sm font-mono text-tertiary-container font-semibold whitespace-nowrap"}>
                {"SEC-9942 Enclave"}
              </span>
              <span className={"material-symbols-outlined text-[14px] text-outline shrink-0 ml-1"}>
                {"unfold_more"}
              </span>
            </div>
            <div className={"hidden xl:flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm truncate"}>
              <span className={"truncate"}>
                {"Global Aerospace & Defense (US-Gov)"}
              </span>
              <span className={"material-symbols-outlined text-[14px] text-outline"}>
                {"chevron_right"}
              </span>
              <span className={"truncate"}>
                {"Audit Log & History"}
              </span>
              <span className={"material-symbols-outlined text-[14px] text-outline"}>
                {"chevron_right"}
              </span>
              <span className={"text-on-surface font-semibold truncate"}>
                {"Lifecycle Reconstruction & Forensic Timeline"}
              </span>
            </div>
          </div>
          <div className={"flex items-center gap-space-sm shrink-0"}>
            <div className={"relative w-80 hidden md:block"}>
              <span className={"material-symbols-outlined text-[16px] text-outline absolute left-2.5 top-2.5 pointer-events-none"}>
                {"search"}
              </span>
              <input className={"w-full h-9 pl-8 pr-12 rounded bg-surface-container-low border border-outline-variant/60 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"} placeholder={"Search immutable ledger, Merkle roots, actors, or events... ⌘K"} type={"text"} />
              <span className={"absolute right-2 top-2 px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono font-label-sm text-label-sm"}>
                {"⌘K"}
              </span>
            </div>
            <div className={"hidden lg:flex items-center gap-1.5"}>
              <div className={"flex items-center gap-1 px-2 py-1 rounded bg-secondary-container/50 border border-secondary-container text-on-secondary-fixed-variant"}>
                <span className={"material-symbols-outlined text-[14px] text-primary"}>
                  {"verified_user"}
                </span>
                <span className={"font-label-sm text-label-sm font-mono font-semibold uppercase tracking-wider"}>
                  {"FIPS 140-3 L3 Sealed"}
                </span>
              </div>
              <div className={"flex items-center gap-1 px-2 py-1 rounded bg-secondary-container/50 border border-secondary-container text-on-secondary-fixed-variant"}>
                <span className={"material-symbols-outlined text-[14px] text-tertiary-container"}>
                  {"lock"}
                </span>
                <span className={"font-label-sm text-label-sm font-mono font-semibold uppercase tracking-wider"}>
                  {"WORM Hardware Anchor Active"}
                </span>
              </div>
            </div>
            <div className={"h-6 w-px bg-outline-variant/40 mx-1"} />
            <div className={"flex items-center gap-space-sm pl-1"}>
              <div className={"text-right hidden sm:block"}>
                <div className={"font-label-md text-label-md text-on-surface font-bold leading-tight"}>
                  {"Dr. Elena Rostova"}
                </div>
                <div className={"font-label-sm text-label-sm text-on-surface-variant leading-tight"}>
                  {"Lead AI Risk Auditor & Verification Authority"}
                </div>
              </div>
              <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"}>
                <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                  {"person"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className={"relative pt-16 w-full px-space-lg bg-surface"}>
          <div className={"flex flex-col w-full"}>
            <div className={"bg-surface-container-high px-space-md py-space-xs rounded-lg mb-space-sm shadow-sm flex items-center justify-between flex-wrap gap-space-sm"}>
              <div className={"flex items-center gap-space-sm"}>
                <span className={"material-symbols-outlined text-primary text-[18px]"}>
                  {"tune"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm uppercase font-mono text-on-surface-variant font-bold tracking-wider"}>
                  {"Forensic Scenario Simulator:"}
                </span>
                <div className={"inline-flex rounded-lg bg-surface-container p-0.5"} id={"scenario-selector-group"}>
                  <button className={"scenario-btn active px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold transition-all bg-primary-container text-on-primary"} data-scenario={"default"} onClick={legacy("switchScenario('default')")} type={"button"}>
                    {" Active Stream "}
                  </button>
                  {" "}
                  <button className={"scenario-btn px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all"} data-scenario={"reconstruction"} onClick={legacy("switchScenario('reconstruction')")} type={"button"}>
                    {" DEC-14820 Focus "}
                  </button>
                  {" "}
                  <button className={"scenario-btn px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all"} data-scenario={"failures"} onClick={legacy("switchScenario('failures')")} type={"button"}>
                    {" Failures & Retries (3) "}
                  </button>
                  {" "}
                  <button className={"scenario-btn px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all"} data-scenario={"verifying"} onClick={legacy("switchScenario('verifying')")} type={"button"}>
                    {" Integrity Probe (Live) "}
                  </button>
                  {" "}
                  <button className={"scenario-btn px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all"} data-scenario={"empty"} onClick={legacy("switchScenario('empty')")} type={"button"}>
                    {" Empty State "}
                  </button>
                  {" "}
                  <button className={"scenario-btn px-space-sm py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all"} data-scenario={"denied"} onClick={legacy("switchScenario('denied')")} type={"button"}>
                    {" Clearance Boundary "}
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm"}>
                <span className={"inline-flex items-center gap-1 font-label-sm text-label-sm font-mono text-tertiary-container font-semibold"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary-container animate-pulse"} />
                  {" STREAM: MONOTONIC APPEND "}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm font-mono text-outline"}>
                  {"LATENCY: 8.4ms"}
                </span>
              </div>
            </div>
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md"}>
              <div className={"flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-md pb-space-md"}>
                <div className={"flex flex-col min-w-0"}>
                  <div className={"flex items-center gap-space-sm flex-wrap"}>
                    <span className={"px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-mono font-bold tracking-wider"}>
                      {"TEN-US-0841"}
                    </span>
                    <h2 className={"font-headline-md text-headline-md text-on-surface font-bold tracking-tight"}>
                      {" Lockheed Martin Space & Autonomous Systems "}
                    </h2>
                    <span className={"px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-mono font-bold"}>
                      {" SEC-9942 Enclave (Air-Gapped GovCloud) "}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                    {" Immutable WORM Ledger • Monotonic Append-Only Log • Cryptographically Attested by TPM 2.0 PCR[07] Hardware Anchor "}
                  </p>
                </div>
                <div className={"flex items-center gap-space-xs flex-wrap self-end xl:self-auto"}>
                  <button className={"px-space-sm py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px] text-primary"}>
                      {"download"}
                    </span>
                    {" Export Audit Package (.cose) "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm"} onClick={legacy("triggerLiveProbe()")} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px] text-tertiary-container"}>
                      {"verified"}
                    </span>
                    {" Verify Ledger Invariants "}
                  </button>
                  {" "}
                  <button className={"px-space-md py-2 rounded bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"timeline"}
                    </span>
                    {" Reconstruction Mode: Active "}
                  </button>
                </div>
              </div>
              <div className={"grid grid-cols-2 md:grid-cols-5 gap-space-sm pt-space-sm"}>
                <div className={"p-space-sm rounded bg-surface-container-low"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase font-mono font-semibold"}>
                      {"Total Events"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-outline text-[16px]"}>
                      {"receipt_long"}
                    </span>
                  </div>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1 font-mono"}>
                    {"148,294"}
                  </div>
                  <span className={"font-label-sm text-label-sm text-tertiary-container font-mono font-semibold"}>
                    {"+18 in Epoch #41,892"}
                  </span>
                </div>
                <div className={"p-space-sm rounded bg-surface-container-low"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase font-mono font-semibold"}>
                      {"Current Merkle Root"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-primary text-[16px]"}>
                      {"fingerprint"}
                    </span>
                  </div>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1 font-mono"}>
                    {"0x89f4...2e09"}
                  </div>
                  <span className={"font-label-sm text-label-sm text-primary font-mono font-semibold"}>
                    {"Block #8,941,225 Sealed"}
                  </span>
                </div>
                <div className={"p-space-sm rounded bg-surface-container-low"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase font-mono font-semibold"}>
                      {"Chains Traced"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-outline text-[16px]"}>
                      {"link"}
                    </span>
                  </div>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1 font-mono"}>
                    {"42 Decisions"}
                  </div>
                  <span className={"font-label-sm text-label-sm text-tertiary-container font-semibold"}>
                    {"0 Missing Links (100%)"}
                  </span>
                </div>
                <div className={"p-space-sm rounded bg-surface-container-low"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase font-mono font-semibold"}>
                      {"Interventions"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-error text-[16px]"}>
                      {"gavel"}
                    </span>
                  </div>
                  <div className={"font-headline-sm text-headline-sm font-bold text-error mt-1 font-mono"}>
                    {"3 Quarantines"}
                  </div>
                  <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                    {"1 Closed • 2 Remediated"}
                  </span>
                </div>
                <div className={"p-space-sm rounded bg-surface-container-low"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase font-mono font-semibold"}>
                      {"Attestations"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-primary text-[16px]"}>
                      {"approval_delegation"}
                    </span>
                  </div>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1 font-mono"}>
                    {"19 Verified"}
                  </div>
                  <span className={"font-label-sm text-label-sm text-primary font-mono font-semibold"}>
                    {"FIPS 140-3 L3 Dual-Signed"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md"}>
              <div className={"flex flex-col lg:flex-row gap-space-sm items-stretch lg:items-center justify-between"}>
                <div className={"relative flex-1"}>
                  <span className={"material-symbols-outlined text-[18px] text-outline absolute left-3 top-2.5 pointer-events-none"}>
                    {"search"}
                  </span>
                  {" "}
                  <input className={"w-full h-10 pl-9 pr-24 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"} id={"query-input"} placeholder={"Search event hash, decision ID (e.g. DEC-14820), actor PIV, signature, or rule... ⌘K"} type={"text"} defaultValue={"case:DEC-14820 state:quarantined_or_recovered"} />
                  {" "}
                  <button className={"absolute right-2 top-2 px-2 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-primary font-semibold hover:bg-surface-container-high"} type={"button"}>
                    {" Apply ↵ "}
                  </button>
                </div>
                <div className={"flex items-center gap-space-xs flex-wrap"}>
                  <div className={"flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-low font-label-md text-label-md text-on-surface"}>
                    <span className={"material-symbols-outlined text-[16px] text-outline"}>
                      {"calendar_today"}
                    </span>
                    {" "}
                    <span>
                      {"Last 7 Days (Oct 08 – Oct 15 UTC)"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[14px] text-outline"}>
                      {"expand_more"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-low font-label-md text-label-md text-on-surface"}>
                    <span className={"material-symbols-outlined text-[16px] text-outline"}>
                      {"person"}
                    </span>
                    {" "}
                    <span>
                      {"All Actors"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[14px] text-outline"}>
                      {"expand_more"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-low font-label-md text-label-md text-on-surface"}>
                    <span className={"material-symbols-outlined text-[16px] text-outline"}>
                      {"category"}
                    </span>
                    {" "}
                    <span>
                      {"All Categories"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[14px] text-outline"}>
                      {"expand_more"}
                    </span>
                  </div>
                  <button className={"px-space-sm py-2 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:brightness-95 transition-all"} id={"toggle-deficits-btn"} onClick={legacy("toggleDeficitsOnly()")} type={"button"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"warning"}
                    </span>
                    {" "}
                    <span>
                      {"Only Chain Breakers & Deficits (3)"}
                    </span>
                  </button>
                  {" "}
                  <button className={"p-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"} onClick={legacy("resetFilters()")} title={"Reset Filters"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"restart_alt"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-space-xs mt-space-sm pt-space-xs flex-wrap text-on-surface-variant font-label-sm text-label-sm"}>
                <span className={"font-mono text-outline uppercase font-semibold"}>
                  {"Saved Reconstructions:"}
                </span>
                {" "}
                <span className={"px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-mono font-semibold flex items-center gap-1 cursor-pointer"}>
                  <span>
                    {"REC-2024-9942-R01 (End-to-End Forensic Trace)"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[12px]"}>
                    {"check"}
                  </span>
                </span>
                {" "}
                <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-mono cursor-pointer"}>
                  {" CRL-Subcontractor-Revocation-Impact "}
                </span>
                {" "}
                <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-mono cursor-pointer"}>
                  {" TPM-PCR07-Reseal-Run "}
                </span>
                {" "}
                <span className={"ml-auto font-mono text-outline"}>
                  {"Showing 6 Events of 148,294 (Filtered)"}
                </span>
              </div>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start"} id={"main-content-area"}>
              <div className={"lg:col-span-8 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {" Append-Only Ledger Timeline • Case DEC-14820 Traversal "}
                      </h3>
                    </div>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"px-2 py-0.5 rounded bg-surface-container-high font-mono text-label-sm text-label-sm font-semibold text-primary"}>
                        {" DAG Hash Depth: 6 Hops "}
                      </span>
                      {" "}
                      <button className={"p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface"} title={"Expand View"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"fullscreen"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"overflow-x-auto"}>
                    <table className={"w-full text-left"} id={"audit-table"}>
                      <thead>
                        <tr className={"bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm font-mono uppercase tracking-wider"}>
                          <th className={"py-2.5 px-3 rounded-l"}>
                            {"Index / Block"}
                          </th>
                          <th className={"py-2.5 px-3"}>
                            {"Timestamp (UTC)"}
                          </th>
                          <th className={"py-2.5 px-3"}>
                            {"Actor / Authority"}
                          </th>
                          <th className={"py-2.5 px-3"}>
                            {"Event Action"}
                          </th>
                          <th className={"py-2.5 px-3"}>
                            {"Target Object"}
                          </th>
                          <th className={"py-2.5 px-3"}>
                            {"Phase"}
                          </th>
                          <th className={"py-2.5 px-3 rounded-r"}>
                            {"Integrity Status"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={"font-body-sm text-body-sm divide-y-0"} id={"audit-rows-body"}>
                        <tr className={"audit-row cursor-pointer transition-colors hover:bg-surface-container-low/70 bg-surface-container-lowest"} data-id={"evt-genesis"} onClick={legacy("selectEvent('evt-genesis')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-on-surface"}>
                              <span className={"material-symbols-outlined text-[15px] text-tertiary-container"}>
                                {"verified"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,200"}
                              </span>
                            </div>
                            <span className={"text-outline font-mono text-[10px]"}>
                              {"Leaf 01"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface-variant"}>
                            <div>
                              {"10-14 09:12:14"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".412 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Col. M. Vance"}
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                              {"SecOps Custodian"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-semibold bg-secondary-container text-on-secondary-fixed-variant"}>
                              {" INITIAL_DECISION_SEALED "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-primary font-semibold"}>
                              {"DEC-14820 v1.0"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-outline font-mono"}>
                              {"Stage 1: Genesis"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed"}>
                              {" Verified & Sealed "}
                            </span>
                          </td>
                        </tr>
                        <tr className={"audit-row active cursor-pointer transition-colors bg-error-container/20 hover:bg-error-container/30"} data-id={"evt-revocation"} onClick={legacy("selectEvent('evt-revocation')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-error"}>
                              <span className={"material-symbols-outlined text-[15px] text-error"}>
                                {"shield_lock"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,209"}
                              </span>
                            </div>
                            <span className={"text-error font-mono text-[10px] font-bold"}>
                              {"Leaf 08 [FLAGGED]"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface"}>
                            <div className={"font-bold"}>
                              {"10-14 11:20:00"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".104 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-bold text-on-surface flex items-center gap-1"}>
                              <span>
                                {"CRL Ingestion Daemon"}
                              </span>
                              {" "}
                              <span className={"material-symbols-outlined text-[13px] text-primary"} title={"Automated Air-Gap Ingestion"}>
                                {"smart_toy"}
                              </span>
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                              {"CRL #991 Polling"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-bold bg-error-container text-on-error-container animate-pulse"}>
                              {" ROOT_EVIDENCE_REVOKED "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"flex flex-col gap-0.5"}>
                              <span className={"px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-mono text-label-sm text-label-sm font-bold"}>
                                {"EVT-9041"}
                              </span>
                              {" "}
                              <span className={"text-outline font-mono text-[10px]"}>
                                {"OBL-804B HSM Cert"}
                              </span>
                            </div>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-error font-mono font-bold"}>
                              {"Stage 2: Blast Triage"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-error-container text-on-error-container"}>
                              {" Quarantine Mandated "}
                            </span>
                          </td>
                        </tr>
                        <tr className={"audit-row cursor-pointer transition-colors hover:bg-surface-container-low/70 bg-surface-container-lowest"} data-id={"evt-traversal"} onClick={legacy("selectEvent('evt-traversal')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-on-surface"}>
                              <span className={"material-symbols-outlined text-[15px] text-tertiary-container"}>
                                {"verified"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,214"}
                              </span>
                            </div>
                            <span className={"text-outline font-mono text-[10px]"}>
                              {"Leaf 10"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface-variant"}>
                            <div>
                              {"10-14 11:20:04"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".881 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Consequence Engine"}
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                              {"Graph Engine v4.18"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-semibold bg-surface-container-high text-primary"}>
                              {" CONSEQUENCE_TRAVERSAL_RUN "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-on-surface"}>
                              {"DAG-Blast-DEC14820"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                              {"Stage 2: Blast Triage"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container-high text-primary"}>
                              {" 1 Target Frozen "}
                            </span>
                          </td>
                        </tr>
                        <tr className={"audit-row cursor-pointer transition-colors hover:bg-surface-container-low/70 bg-surface-container-lowest"} data-id={"evt-recovery"} onClick={legacy("selectEvent('evt-recovery')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-on-surface"}>
                              <span className={"material-symbols-outlined text-[15px] text-tertiary-container"}>
                                {"verified"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,219"}
                              </span>
                            </div>
                            <span className={"text-outline font-mono text-[10px]"}>
                              {"Leaf 11"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface-variant"}>
                            <div>
                              {"10-14 12:45:10"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".009 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Dr. Elena Rostova"}
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                              {"Lead AI Risk Auditor"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-semibold bg-surface-container-high text-primary"}>
                              {" RECOVERY_PLAN_ARMED "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-primary font-semibold"}>
                              {"REC-2024-9942-R01"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                              {"Stage 3: Recovery Prep"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-fixed-variant"}>
                              {" Quorum 2-of-2 Ready "}
                            </span>
                          </td>
                        </tr>
                        <tr className={"audit-row cursor-pointer transition-colors hover:bg-surface-container-low/70 bg-surface-container-lowest"} data-id={"evt-execution"} onClick={legacy("selectEvent('evt-execution')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-on-surface"}>
                              <span className={"material-symbols-outlined text-[15px] text-tertiary-container"}>
                                {"verified"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,222"}
                              </span>
                            </div>
                            <span className={"text-outline font-mono text-[10px]"}>
                              {"Leaf 12"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface-variant"}>
                            <div>
                              {"10-14 14:22:18"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".330 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Col. M. Vance"}
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                              {"Dual-Key Co-Signer"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-semibold bg-primary-fixed text-on-primary-fixed"}>
                              {" RECOVERY_ACTION_EXECUTED "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"flex flex-col gap-0.5"}>
                              <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-primary"}>
                                {"ACT-01 & ACT-02"}
                              </span>
                              {" "}
                              <span className={"text-outline font-mono text-[10px]"}>
                                {"WASM Sandbox Re-eval"}
                              </span>
                            </div>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                              {"Stage 4: Execution"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed"}>
                              {" Retry #1 Succeeded "}
                            </span>
                          </td>
                        </tr>
                        <tr className={"audit-row cursor-pointer transition-colors hover:bg-surface-container-low/70 bg-surface-container-lowest"} data-id={"evt-attestation"} onClick={legacy("selectEvent('evt-attestation')")}>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm"}>
                            <div className={"flex items-center gap-1 font-bold text-on-surface"}>
                              <span className={"material-symbols-outlined text-[15px] text-tertiary-container"}>
                                {"verified"}
                              </span>
                              {" "}
                              <span>
                                {"#8,941,225"}
                              </span>
                            </div>
                            <span className={"text-outline font-mono text-[10px]"}>
                              {"Leaf 14 (Tip)"}
                            </span>
                          </td>
                          <td className={"py-3 px-3 font-mono text-label-sm text-label-sm text-on-surface-variant"}>
                            <div>
                              {"10-14 14:31:45"}
                            </div>
                            <span className={"text-outline text-[10px]"}>
                              {".092 UTC"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <div className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Dr. Elena Rostova"}
                            </div>
                            <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                              {"Independent Verifier"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-mono font-semibold bg-tertiary-container text-on-tertiary-container"}>
                              {" INDEPENDENT_VERIFICATION_ATTESTED "}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-sm text-label-sm text-tertiary-container font-semibold"}>
                              {"VRF-2024-9942-V05"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"font-label-sm text-label-sm text-tertiary-container font-mono font-semibold"}>
                              {"Stage 5: Final Seal"}
                            </span>
                          </td>
                          <td className={"py-3 px-3"}>
                            <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed"}>
                              {" Verified & Sealed "}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={"mt-space-md p-space-sm rounded bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-sm"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"account_tree"}
                      </span>
                      <div>
                        <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                          {"Chain Continuity: Continuous DAG Monotonic Proof"}
                        </div>
                        <div className={"font-label-sm text-label-sm text-outline font-mono"}>
                          {"Block delta: +25 blocks across 5 hours 19 minutes • 0 Orphan Nodes"}
                        </div>
                      </div>
                    </div>
                    <div className={"flex items-center gap-1"}>
                      <svg className={"overflow-visible"} height={"24"} viewBox={"0 0 220 24"} width={"220"}>
                        <line className={"text-outline-variant"} stroke={"currentColor"} strokeWidth={"2"} x1={"10"} x2={"210"} y1={"12"} y2={"12"} />
                        <circle className={"fill-tertiary-container"} cx={"15"} cy={"12"} r={"5"} />
                        <circle className={"fill-error animate-pulse"} cx={"55"} cy={"12"} r={"6"} />
                        <circle className={"fill-primary-container"} cx={"95"} cy={"12"} r={"4"} />
                        <circle className={"fill-primary-container"} cx={"135"} cy={"12"} r={"4"} />
                        <circle className={"fill-tertiary-fixed-dim"} cx={"175"} cy={"12"} r={"5"} />
                        <circle className={"fill-tertiary-container"} cx={"205"} cy={"12"} r={"6"} />
                      </svg>
                      {" "}
                      <span className={"font-mono text-label-sm text-label-sm text-tertiary-container font-bold ml-1"}>
                        {"L14 SEED"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <h4 className={"font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wider mb-space-xs flex items-center gap-1.5"}>
                    <span className={"material-symbols-outlined text-[18px] text-primary"}>
                      {"groups"}
                    </span>
                    {" Cryptographic Separation of Duties (SoD) Assertion "}
                  </h4>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                    {" Federal & DoD Directive 3000.09 compliance requires that the author of an action cannot independently attest to its verification. "}
                  </p>
                  <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-sm"}>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col justify-between"}>
                      <div>
                        <span className={"font-label-sm text-label-sm font-mono text-outline uppercase font-semibold"}>
                          {"Authority 1: Action Operator"}
                        </span>
                        <div className={"font-label-md text-label-md font-bold text-on-surface mt-1"}>
                          {"Col. Marcus Vance"}
                        </div>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"PIV #994-01-VANCE • SecOps"}
                        </span>
                      </div>
                      <span className={"mt-2 text-[10px] font-mono text-primary font-bold"}>
                        {"SIGNED: ACT-01 INJECTION"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col justify-between"}>
                      <div>
                        <span className={"font-label-sm text-label-sm font-mono text-outline uppercase font-semibold"}>
                          {"Authority 2: Independent Verifier"}
                        </span>
                        <div className={"font-label-md text-label-md font-bold text-on-surface mt-1"}>
                          {"Dr. Elena Rostova"}
                        </div>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"PIV #994-08-ROSTOVA • Audit"}
                        </span>
                      </div>
                      <span className={"mt-2 text-[10px] font-mono text-tertiary-container font-bold"}>
                        {"SIGNED: VRF-2024 CERTIFICATE"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded bg-tertiary-fixed/30 flex flex-col justify-between"}>
                      <div>
                        <span className={"font-label-sm text-label-sm font-mono text-on-tertiary-fixed-variant uppercase font-semibold"}>
                          {"Dual-Sign Invariant"}
                        </span>
                        <div className={"font-label-md text-label-md font-bold text-on-tertiary-fixed mt-1"}>
                          {"Non-Collusive Quorum"}
                        </div>
                        <span className={"font-label-sm text-label-sm text-on-tertiary-fixed-variant"}>
                          {"Distinct TPM PIV Keys Verified"}
                        </span>
                      </div>
                      <div className={"mt-2 flex items-center gap-1 text-[11px] font-mono text-on-tertiary-fixed font-bold"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"check_circle"}
                        </span>
                        {" "}
                        <span>
                          {"INVARIANT SATISFIED"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-4 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex items-start justify-between pb-space-sm"}>
                    <div>
                      <div className={"flex items-center gap-1.5 mb-1"}>
                        <span className={"px-2 py-0.5 rounded bg-error-container text-on-error-container font-mono text-label-sm text-label-sm font-bold"}>
                          {" CRITICAL EVENT "}
                        </span>
                        {" "}
                        <span className={"font-mono text-label-sm text-label-sm text-outline"}>
                          {"BLOCK #8,941,209"}
                        </span>
                      </div>
                      <h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"} id={"inspector-event-title"}>
                        {" EVT-8941-220-REV "}
                      </h3>
                      <span className={"font-body-sm text-body-sm text-on-surface-variant font-mono"}>
                        {" 2024-10-14 11:20:00.104 UTC "}
                      </span>
                    </div>
                    <div className={"w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"lock_reset"}
                      </span>
                    </div>
                  </div>
                  <div className={"p-space-sm rounded bg-surface-container-low mb-space-md space-y-1"}>
                    <div className={"flex items-center justify-between font-label-sm text-label-sm font-mono"}>
                      <span className={"text-outline"}>
                        {"LEAF HASH:"}
                      </span>
                      {" "}
                      <span className={"text-primary font-bold"}>
                        {"0x9f4a...2110"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between font-label-sm text-label-sm font-mono"}>
                      <span className={"text-outline"}>
                        {"TPM HARDWARE:"}
                      </span>
                      {" "}
                      <span className={"text-tertiary-container font-bold"}>
                        {"PCR[07] WORM Sealed"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between font-label-sm text-label-sm font-mono"}>
                      <span className={"text-outline"}>
                        {"INGESTION AGENT:"}
                      </span>
                      {" "}
                      <span className={"text-on-surface"}>
                        {"CRL Ingestion Daemon"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-1 p-0.5 rounded bg-surface-container mb-space-md overflow-x-auto"} id={"inspector-tabs-nav"}>
                    <button className={"tab-btn active px-2.5 py-1.5 rounded font-label-sm text-label-sm font-semibold transition-all bg-surface-container-lowest text-primary shadow-sm whitespace-nowrap"} data-tab={"reconstruction-tree"} onClick={legacy("setInspectorTab('reconstruction-tree')")} type={"button"}>
                      {" Lifecycle Tree "}
                    </button>
                    {" "}
                    <button className={"tab-btn px-2.5 py-1.5 rounded font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-on-surface whitespace-nowrap"} data-tab={"diff-view"} onClick={legacy("setInspectorTab('diff-view')")} type={"button"}>
                      {" State Diff "}
                    </button>
                    {" "}
                    <button className={"tab-btn px-2.5 py-1.5 rounded font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-on-surface whitespace-nowrap"} data-tab={"crypto-proof"} onClick={legacy("setInspectorTab('crypto-proof')")} type={"button"}>
                      {" Signatures & Proof "}
                    </button>
                    {" "}
                    <button className={"tab-btn px-2.5 py-1.5 rounded font-label-sm text-label-sm font-semibold transition-all text-on-surface-variant hover:text-on-surface whitespace-nowrap"} data-tab={"retry-telemetry"} onClick={legacy("setInspectorTab('retry-telemetry')")} type={"button"}>
                      {" Retry Telemetry "}
                    </button>
                  </div>
                  <div className={"inspector-tab-content flex flex-col space-y-space-sm"} id={"tab-reconstruction-tree"}>
                    <div className={"font-label-sm text-label-sm uppercase font-mono font-bold text-outline"}>
                      {" Forensic DAG Blast Traversal Sequence "}
                    </div>
                    <div className={"relative pl-6 pb-3"}>
                      <div className={"absolute left-2 top-1.5 bottom-0 w-0.5 bg-outline-variant"} />
                      <div className={"absolute left-0.5 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary-container flex items-center justify-center"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary"} />
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"1. Genesis Decision Sealed"}
                      </div>
                      <div className={"font-label-sm text-label-sm text-outline font-mono"}>
                        {"09:12:14 UTC • DEC-14820 Active"}
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                        {" Production autonomous navigation flight envelope active under Rule #804 v3.1. "}
                      </p>
                    </div>
                    <div className={"relative pl-6 pb-3"}>
                      <div className={"absolute left-2 top-1.5 bottom-0 w-0.5 bg-outline-variant"} />
                      <div className={"absolute left-0.5 top-1.5 w-3.5 h-3.5 rounded-full bg-error-container flex items-center justify-center"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-error"} />
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-error"}>
                        {"2. Subcontractor HSM Revoked (EVT-9041)"}
                      </div>
                      <div className={"font-label-sm text-label-sm text-error font-mono font-semibold"}>
                        {"11:20:00 UTC • +02h 07m"}
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                        {" Certificate Authority posted CRL #991. Obligation OBL-804B invalidated immediately. "}
                      </p>
                    </div>
                    <div className={"relative pl-6 pb-3"}>
                      <div className={"absolute left-2 top-1.5 bottom-0 w-0.5 bg-outline-variant"} />
                      <div className={"absolute left-0.5 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary-container flex items-center justify-center"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary"} />
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"3. DAG Blast Traversal & Freeze"}
                      </div>
                      <div className={"font-label-sm text-label-sm text-outline font-mono"}>
                        {"11:20:04 UTC • +04s Engine Trigger"}
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                        {" Downstream autonomous dispatch halted. Enclave safety gate engaged in lock-mode. "}
                      </p>
                    </div>
                    <div className={"relative pl-6 pb-3"}>
                      <div className={"absolute left-2 top-1.5 bottom-0 w-0.5 bg-outline-variant"} />
                      <div className={"absolute left-0.5 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary-container flex items-center justify-center"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary"} />
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"4. Recovery Plan Armed & Executed"}
                      </div>
                      <div className={"font-label-sm text-label-sm text-outline font-mono"}>
                        {"12:45:10 - 14:22:18 UTC • 2-of-2 Keys"}
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                        {" Fresh hardware key injected into HSM slot 04. WASM simulation suite executed without variance. "}
                      </p>
                    </div>
                    <div className={"relative pl-6"}>
                      <div className={"absolute left-0.5 top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary-fixed flex items-center justify-center"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-tertiary-container"}>
                        {"5. Independent Verification Resealed"}
                      </div>
                      <div className={"font-label-sm text-label-sm text-tertiary-container font-mono font-semibold"}>
                        {"14:31:45 UTC • VRF-2024-9942-V05"}
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                        {" Dual-party attestation completed by Lead Auditor. Flight envelope re-enabled. "}
                      </p>
                    </div>
                  </div>
                  <div className={"inspector-tab-content hidden flex-col space-y-space-sm"} id={"tab-diff-view"}>
                    <div className={"font-label-sm text-label-sm uppercase font-mono font-bold text-outline"}>
                      {" Ledger State Diff: Block #8,941,208 $\\to$ #8,941,209 "}
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low font-mono text-[12px] leading-relaxed overflow-x-auto space-y-1"}>
                      <div className={"text-outline font-semibold"}>
                        {"// Target: DEC-14820 Lifecycle State"}
                      </div>
                      <div className={"p-1 rounded bg-error-container text-on-error-container"}>
                        {" - \"decision_status\": \"ACTIVE_SEALED\", "}
                      </div>
                      <div className={"p-1 rounded bg-tertiary-fixed text-on-tertiary-fixed"}>
                        {" + \"decision_status\": \"QUARANTINED_REVALIDATION_MANDATED\", "}
                      </div>
                      <div className={"text-outline font-semibold mt-2"}>
                        {"// Target: OBL-804B Certificate Validity"}
                      </div>
                      <div className={"p-1 rounded bg-error-container text-on-error-container"}>
                        {" - \"cert_status\": \"VALID\", - \"expires\": \"2026-04-12T00:00:00Z\" "}
                      </div>
                      <div className={"p-1 rounded bg-tertiary-fixed text-on-tertiary-fixed"}>
                        {" + \"cert_status\": \"REVOKED\", + \"revocation_reason\": \"KEY_COMPROMISE_REPORTED_CRL_991\" "}
                      </div>
                      <div className={"text-outline font-semibold mt-2"}>
                        {"// Enclave Security Interlock"}
                      </div>
                      <div className={"p-1 rounded bg-error-container text-on-error-container"}>
                        {" - \"safety_gate_lock\": false "}
                      </div>
                      <div className={"p-1 rounded bg-tertiary-fixed text-on-tertiary-fixed"}>
                        {" + \"safety_gate_lock\": true "}
                      </div>
                    </div>
                  </div>
                  <div className={"inspector-tab-content hidden flex-col space-y-space-sm"} id={"tab-crypto-proof"}>
                    <div className={"font-label-sm text-label-sm uppercase font-mono font-bold text-outline"}>
                      {" Merkle Audit Path & Attestation "}
                    </div>
                    <div className={"space-y-space-xs"}>
                      <div className={"p-space-sm rounded bg-surface-container-low"}>
                        <span className={"font-label-sm text-label-sm font-mono text-outline uppercase"}>
                          {"Signer PIV Certificate:"}
                        </span>
                        <div className={"font-label-md text-label-md font-bold text-on-surface font-mono mt-0.5"}>
                          {"CRL-DAEMON-US-GOV-ID#901"}
                        </div>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"Serial: 0x48FA-991A-22B1-CC09"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-low"}>
                        <span className={"font-label-sm text-label-sm font-mono text-outline uppercase"}>
                          {"Ed25519 Payload Signature:"}
                        </span>
                        <div className={"font-mono text-[11px] text-on-surface break-all bg-surface-container p-1 rounded mt-1"}>
                          {" 4a9f82d1c09e8432a1b9423c89f50e8237419e73d82c0b49f31a48c909b7e31d48c089f0293847291a823c4d720b91 "}
                        </div>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-low"}>
                        <span className={"font-label-sm text-label-sm font-mono text-outline uppercase"}>
                          {"Merkle Audit Inclusion Path (Height: 14):"}
                        </span>
                        <div className={"space-y-1 mt-1 font-mono text-[11px]"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"text-outline"}>
                              {"Sibling 0 (R):"}
                            </span>
                            {" "}
                            <span className={"text-primary"}>
                              {"0x43b8...91a2"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between"}>
                            <span className={"text-outline"}>
                              {"Sibling 1 (L):"}
                            </span>
                            {" "}
                            <span className={"text-primary"}>
                              {"0x98f2...001c"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between"}>
                            <span className={"text-outline"}>
                              {"Sibling 2 (R):"}
                            </span>
                            {" "}
                            <span className={"text-primary"}>
                              {"0x21a4...7ec9"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between font-bold"}>
                            <span className={"text-on-surface"}>
                              {"Calculated Root:"}
                            </span>
                            {" "}
                            <span className={"text-tertiary-container"}>
                              {"0x89f4...2e09 [MATCH]"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"inspector-tab-content hidden flex-col space-y-space-sm"} id={"tab-retry-telemetry"}>
                    <div className={"font-label-sm text-label-sm uppercase font-mono font-bold text-outline"}>
                      {" Automated Probe & Recovery Attempts "}
                    </div>
                    <div className={"space-y-space-xs font-mono text-label-sm text-label-sm"}>
                      <div className={"p-space-sm rounded bg-error-container text-on-error-container"}>
                        <div className={"flex items-center justify-between font-bold"}>
                          <span>
                            {"ATTEMPT #0 (INITIAL PROBE)"}
                          </span>
                          {" "}
                          <span>
                            {"14:15:02 UTC"}
                          </span>
                        </div>
                        <p className={"text-[11px] mt-1"}>
                          {"Status: TIMEOUT • Key store handshake dropped after 4500ms • Socket closed."}
                        </p>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-high text-primary"}>
                        <div className={"flex items-center justify-between font-bold"}>
                          <span>
                            {"ATTEMPT #1 (FALLBACK HSM)"}
                          </span>
                          {" "}
                          <span>
                            {"14:22:18 UTC"}
                          </span>
                        </div>
                        <p className={"text-[11px] mt-1"}>
                          {"Status: SUCCESS • Latency: 9.2ms • Attestation signature generated and verified."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"mt-space-md p-space-sm rounded bg-surface-container-low"}>
                    <div className={"flex items-start gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[18px] text-tertiary-container shrink-0 mt-0.5"}>
                        {"verified_user"}
                      </span>
                      <div>
                        <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                          {"Forensic Chain Integrity Verified"}
                        </div>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                          {" Every state transition from Revocation through Remediation is monotonically chained. No out-of-band updates detected. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"mt-space-md flex flex-col gap-space-xs"}>
                    <button className={"w-full py-2 rounded bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"folder_zip"}
                      </span>
                      {" Download Forensic Bundle (.cose) "}
                    </button>
                    <div className={"grid grid-cols-2 gap-space-xs"}>
                      <button className={"py-1.5 px-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1 transition-colors"} type={"button"} data-nav="/consequence-graph">
                        <span className={"material-symbols-outlined text-[16px] text-primary"}>
                          {"account_tree"}
                        </span>
                        {" DAG Blast Graph "}
                      </button>
                      {" "}
                      <button className={"py-1.5 px-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1 transition-colors"} type={"button"} data-nav="/verification">
                        <span className={"material-symbols-outlined text-[16px] text-tertiary-container"}>
                          {"approval_delegation"}
                        </span>
                        {" Verification Cert "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex items-center justify-between mb-space-xs"}>
                    <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                      {"Hardware Security Enclave Status"}
                    </span>
                    {" "}
                    <span className={"px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-mono text-[11px] font-bold"}>
                      {"ONLINE"}
                    </span>
                  </div>
                  <div className={"space-y-1.5 font-label-sm text-label-sm"}>
                    <div className={"flex items-center justify-between text-on-surface-variant font-mono"}>
                      <span>
                        {"TPM 2.0 PCR[07]:"}
                      </span>
                      {" "}
                      <span className={"text-on-surface font-semibold"}>
                        {"0x77c2...b31e (Sealed)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between text-on-surface-variant font-mono"}>
                      <span>
                        {"WORM Storage:"}
                      </span>
                      {" "}
                      <span className={"text-on-surface font-semibold"}>
                        {"AWS S3 Object Lock (Compliance)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between text-on-surface-variant font-mono"}>
                      <span>
                        {"Air-Gap Ingestion:"}
                      </span>
                      {" "}
                      <span className={"text-tertiary-container font-semibold"}>
                        {"Synchronized (0 Deficit)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden my-space-md p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex-col items-center justify-center text-center"} id={"sim-verifying-banner"}>
              <div className={"w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center animate-spin mb-space-sm"}>
                <span className={"material-symbols-outlined text-[24px]"}>
                  {"refresh"}
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md font-bold text-on-surface"}>
                {"Running Full Ledger Invariant Probe..."}
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mt-1"}>
                {" Computing SHA-256 hashes across 148,294 monotonic append leaves. Verifying TPM 2.0 PCR[07] signature match with root hash 0x89f4...2e09. "}
              </p>
              <div className={"w-72 bg-surface-container rounded-full h-2 mt-space-md overflow-hidden"}>
                <div className={"bg-primary-container h-full w-2/3 animate-pulse"} />
              </div>
              <span className={"font-mono text-label-sm text-label-sm text-primary mt-2"}>
                {"Checking block #8,941,219... Estimated completion: 1.2s"}
              </span>
            </div>
            <div className={"hidden my-space-md p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex-col items-center justify-center text-center"} id={"sim-empty-state"}>
              <div className={"w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-space-md"}>
                <span className={"material-symbols-outlined text-[32px]"}>
                  {"folder_off"}
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md font-bold text-on-surface"}>
                {"No Forensic Events Match Filter"}
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-1"}>
                {" No cryptographic ledger entries found for the selected time window or actor criteria. The ledger remains unbroken. "}
              </p>
              <button className={"mt-space-md px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors"} onClick={legacy("resetFilters()")} type={"button"}>
                {" Reset Filter Query "}
              </button>
            </div>
            <div className={"hidden my-space-md p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex-col items-center justify-center text-center"} id={"sim-denied-state"}>
              <div className={"w-16 h-16 rounded-full bg-error-container text-on-error-container flex items-center justify-center mb-space-md"}>
                <span className={"material-symbols-outlined text-[32px]"}>
                  {"no_encryption"}
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md font-bold text-error"}>
                {"Security Clearance Boundary Enforced"}
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mt-1"}>
                {" Case REC-2024-9942-R01 contains classified DoD autonomous targeting envelopes. Viewing unredacted cryptographic evidence proofs requires "}
                <strong>
                  {"TS-SCI Clearance with Special Compartment Access (SAP-CYBER-99)"}
                </strong>
                {". "}
              </p>
              <div className={"flex items-center gap-space-sm mt-space-md"}>
                <button className={"px-space-md py-2 rounded bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors"} type={"button"}>
                  {" Request Elevation (PIV Re-challenge) "}
                </button>
                {" "}
                <button className={"px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors"} onClick={legacy("switchScenario('default')")} type={"button"}>
                  {" Return to Default View "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
