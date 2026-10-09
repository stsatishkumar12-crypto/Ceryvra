// AUTO-GENERATED from Decision-Record-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/decision-record.js?raw';

const exportsList = ["setViewState","toggleAccordion","copyGenomeId"];

export default function DecisionRecord() {
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
          <div className={"flex flex-col w-full pb-16"}>
            {" "}
            <div className={"flex flex-col gap-space-sm pt-space-md pb-space-sm"}>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex flex-wrap items-center gap-space-sm"}>
                  <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
                    <span className={"hover:text-primary cursor-pointer transition-colors"}>
                      {"Global Aerospace & Defense"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[14px] text-outline"}>
                      {"chevron_right"}
                    </span>
                    {" "}
                    <span className={"hover:text-primary cursor-pointer transition-colors"}>
                      {"Decision Registry"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-[14px] text-outline"}>
                      {"chevron_right"}
                    </span>
                    {" "}
                    <span className={"text-on-surface font-semibold"}>
                      {"DEC-14820"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm shadow-sm"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"} />
                    {" "}
                    <span className={"font-medium tracking-tight"}>
                      {"Enclave SEC-9942 • Hardware TPM Sealed • Merkle Root Verified"}
                    </span>
                  </div>
                </div>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant"}>
                    <span className={"material-symbols-outlined text-[16px] text-primary"}>
                      {"fingerprint"}
                    </span>
                    {" "}
                    <span className={"font-mono text-outline"}>
                      {"Root: 0x7c92...11b8"}
                    </span>
                  </div>
                  <span className={"text-outline-variant"}>
                    {"|"}
                  </span>
                  <div className={"flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm"}>
                    <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                      {"lock"}
                    </span>
                    {" "}
                    <span>
                      {"FIPS 140-2 Level 3"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"flex items-center gap-1 p-1 bg-surface-container rounded-xl overflow-x-auto"}>
                <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-sm cursor-pointer transition-all"} id={"btn-tab-active"} onClick={legacy("setViewState('active')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[16px] text-primary"}>
                    {"edit_document"}
                  </span>
                  {" "}
                  <span>
                    {"Active Record (v2.4 - Provisional)"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md cursor-pointer transition-all"} id={"btn-tab-sealed"} onClick={legacy("setViewState('sealed')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                    {"verified"}
                  </span>
                  {" "}
                  <span>
                    {"Sealed Version (v1.0 Genesis)"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md cursor-pointer transition-all"} id={"btn-tab-diff"} onClick={legacy("setViewState('diff')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[16px] text-secondary"}>
                    {"difference"}
                  </span>
                  {" "}
                  <span>
                    {"Side-by-Side Diff (v1.0 vs v2.4)"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md cursor-pointer transition-all"} id={"btn-tab-audit-modal"} onClick={legacy("setViewState('audit-modal')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[16px] text-primary"}>
                    {"history_edu"}
                  </span>
                  {" "}
                  <span>
                    {"Audit & Signature Ledger"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md cursor-pointer transition-all"} id={"btn-tab-skeleton"} onClick={legacy("setViewState('skeleton')")} type={"button"}>
                  <span className={"material-symbols-outlined text-[16px] text-outline"}>
                    {"hourglass_empty"}
                  </span>
                  {" "}
                  <span>
                    {"Loading Skeleton"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"flex flex-col gap-space-lg mt-space-sm"} id={"view-active"}>
              <div className={"relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"absolute -right-8 -top-8 w-64 h-64 bg-gradient-to-br from-primary-fixed-dim/20 via-transparent to-transparent rounded-full pointer-events-none blur-2xl"} />
                <div className={"relative flex flex-col gap-space-md"}>
                  <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                    <div className={"flex flex-wrap items-center gap-space-sm"}>
                      <div className={"flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low rounded-lg font-mono font-label-sm text-label-sm text-on-surface shadow-sm"}>
                        <span className={"text-outline uppercase tracking-wider"}>
                          {"Genome ID"}
                        </span>
                        {" "}
                        <span className={"font-bold text-primary"}>
                          {"DEC-GENOME-2024-9942-A8"}
                        </span>
                        {" "}
                        <button className={"text-outline hover:text-primary transition-colors flex items-center ml-1"} onClick={legacy("copyGenomeId()")} title={"Copy Genome Identifier"}>
                          <span className={"material-symbols-outlined text-[14px]"} id={"copy-indicator"}>
                            {"content_copy"}
                          </span>
                        </button>
                      </div>
                      <div className={"flex items-center gap-1.5 px-3 py-1 bg-error-container text-on-error-container rounded-lg font-label-sm text-label-sm font-semibold shadow-sm"}>
                        <span className={"material-symbols-outlined text-[16px] text-error"}>
                          {"warning"}
                        </span>
                        {" "}
                        <span>
                          {"PROVISIONAL (EVIDENCE INCOMPLETE)"}
                        </span>
                      </div>
                      <span className={"text-outline-variant hidden sm:inline"}>
                        {"•"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-error font-medium"}>
                        {" Requires 1 Missing Obligation before Dual-Key Signoff "}
                      </span>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs"}>
                      <span className={"font-label-sm text-label-sm text-outline"}>
                        {"Active Revision:"}
                      </span>
                      <div className={"relative inline-block"}>
                        <select className={"appearance-none bg-surface-container font-label-md text-label-md font-semibold text-on-surface py-1.5 pl-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-lowest cursor-pointer"} defaultValue={"v2.4 (Current - Oct 12, 2024) [Provisional]"}>
                          <option>
                            {"v2.4 (Current - Oct 12, 2024) [Provisional]"}
                          </option>
                          <option>
                            {"v2.3 (Oct 04, 2024) [Review Failed]"}
                          </option>
                          <option>
                            {"v2.0 (Aug 15, 2024) [Satisfied / Revalidated]"}
                          </option>
                          <option>
                            {"v1.0 (Jan 10, 2024) [Original Genesis - Sealed]"}
                          </option>
                        </select>
                        <span className={"material-symbols-outlined pointer-events-none absolute right-2 top-2 text-[18px] text-outline"}>
                          {"expand_more"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-1"}>
                    <div className={"flex items-center gap-space-sm flex-wrap"}>
                      <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                        {" DEC-14820: Dual-Use Flight Envelope Autonomous Override Policy "}
                      </h1>
                      <span className={"px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-medium"}>
                        {"Revalidation Record #04"}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                        {"Genesis Block #8,941,209"}
                      </span>
                    </div>
                    <p className={"font-body-md text-body-md text-on-surface-variant max-w-4xl"}>
                      {" Governs the runtime invocation boundaries, fallback parameters, and deterministic telemetry masking protocols for uncrewed air-vehicle guidance during Tier-1 electronic warfare and GNSS denial environments. "}
                    </p>
                  </div>
                  <div className={"flex flex-wrap items-center justify-between gap-space-md pt-space-xs"}>
                    <div className={"flex flex-wrap items-center gap-space-xs"}>
                      <button className={"flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors"} onClick={legacy("setViewState('diff')")} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"compare_arrows"}
                        </span>
                        {" "}
                        <span>
                          {"Compare with v1.0"}
                        </span>
                      </button>
                      {" "}
                      <button className={"flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"download"}
                        </span>
                        {" "}
                        <span>
                          {"Export Bundle (JSON-LD + FIPS Sig)"}
                        </span>
                      </button>
                      {" "}
                      <button className={"flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors"} onClick={legacy("setViewState('audit-modal')")} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"account_tree"}
                        </span>
                        {" "}
                        <span>
                          {"View Merkle Tree"}
                        </span>
                      </button>
                    </div>
                    <div className={"flex flex-wrap items-center gap-space-xs"}>
                      <button className={"px-3.5 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors"} type={"button"}>
                        {" Save Working Draft "}
                      </button>
                      {" "}
                      <div className={"relative group"}>
                        <button className={"opacity-50 cursor-not-allowed flex items-center gap-1.5 px-4 py-1.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm"} disabled type={"button"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"vpn_key"}
                          </span>
                          {" "}
                          <span>
                            {"Submit for Dual-Key Signoff"}
                          </span>
                        </button>
                        <div className={"absolute bottom-full mb-2 right-0 hidden group-hover:flex px-2.5 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded shadow-lg whitespace-nowrap z-30"}>
                          {" 1 Obligation Pending: Subcontractor Transit Escrow (#OBL-804B) "}
                        </div>
                      </div>
                      <button className={"flex items-center gap-1 px-3 py-1.5 bg-error text-on-error font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-opacity"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"gavel"}
                        </span>
                        {" "}
                        <span>
                          {"Record Emergency Override"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
                <div className={"xl:col-span-8 flex flex-col gap-space-lg"}>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Decision Authority, Custodians & Dual-Key Signoff "}
                        </h2>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                        {"Section 01 // Chain of Trust"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl"}>
                      <div className={"flex flex-col gap-space-xs"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                          {"Primary Record Custodian"}
                        </span>
                        <div className={"flex items-center gap-space-sm"}>
                          <div className={"w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-label-md text-label-md"}>
                            {" ER "}
                          </div>
                          <div className={"flex flex-col min-w-0"}>
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Dr. Elena Rostova"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Lead AI Risk Auditor & Executor"}
                            </span>
                            {" "}
                            <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                              {"PIV/CAC-ID: ER-9921-USAF"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-space-xs"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                          {"Delegated Legal & Policy Mandate"}
                        </span>
                        <div className={"flex flex-col gap-1"}>
                          <div className={"flex items-center gap-1.5 text-on-surface font-label-md text-label-md font-medium"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"policy"}
                            </span>
                            {" "}
                            <span>
                              {"Directive DoD 3000.09 (Autonomy in Weapon Systems)"}
                            </span>
                          </div>
                          <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {" Executive Order 14110 Section 4.2 • NIST AI-RMF Category GOV-1.2 "}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-tertiary"}>
                            {"Cryptographically Bound to Policy Bundle #POL-441-A"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"flex flex-col gap-space-xs"}>
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Dual-Key Validation Protocol"}
                      </span>
                      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
                        <div className={"p-space-md rounded-lg bg-surface-container flex items-start gap-space-sm"}>
                          <div className={"w-8 h-8 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center shrink-0"}>
                            <span className={"material-symbols-outlined text-[18px]"}>
                              {"verified"}
                            </span>
                          </div>
                          <div className={"flex flex-col min-w-0"}>
                            <div className={"flex items-center justify-between"}>
                              <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                                {"Col. T. Vance"}
                              </span>
                              {" "}
                              <span className={"px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-semibold"}>
                                {"SIGNED"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Air Force Enclave Liaison"}
                            </span>
                            {" "}
                            <span className={"font-mono font-label-sm text-label-sm text-outline mt-1"}>
                              {"Signed Oct 11, 2024 14:02:19 UTC"}
                            </span>
                            {" "}
                            <span className={"font-mono font-label-sm text-label-sm text-tertiary"}>
                              {"PIV/CAC Validated (SHA-256: 0x22f8...84b)"}
                            </span>
                          </div>
                        </div>
                        <div className={"p-space-md rounded-lg bg-surface-container flex items-start gap-space-sm"}>
                          <div className={"w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0"}>
                            <span className={"material-symbols-outlined text-[18px]"}>
                              {"schedule"}
                            </span>
                          </div>
                          <div className={"flex flex-col min-w-0"}>
                            <div className={"flex items-center justify-between"}>
                              <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                                {"Dir. Marcus Sterling"}
                              </span>
                              {" "}
                              <span className={"px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold"}>
                                {"PENDING"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Chief Compliance Officer"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-error mt-1 font-medium"}>
                              {"Awaiting Obligation #OBL-804B Fulfillment"}
                            </span>
                            {" "}
                            <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                              {"Signature Slot #02 Reserved"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Decision Rationale & Bound Operational Context "}
                        </h2>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                        {"Section 02 // Rationale"}
                      </span>
                    </div>
                    <div className={"prose font-body-md text-body-md text-on-surface flex flex-col gap-space-sm"}>
                      <p>
                        {" In extreme operational theaters characterized by intentional wideband RF jamming and sustained GPS spoofing, automated flight-path adjustments cannot await ground-station telemetry reconciliation. This decision permits the localized edge inference module ("}
                        <span className={"font-mono font-semibold text-primary"}>
                          {"AGT-4402"}
                        </span>
                        {") to execute emergency autonomous flight envelope overrides without human prior authorization, subject to rigid deterministic containment. "}
                      </p>
                      <p>
                        {" Under condition code "}
                        <span className={"font-mono font-semibold"}>
                          {"NAV-LOSS-DEGRADED"}
                        </span>
                        {", the system immediately cascades to inertial dead-reckoning backed by pre-computed terrain correlation grids. The system is prohibited from altering target vector assignments and must maintain defensive loiter profiles. "}
                      </p>
                    </div>
                    <div className={"p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-md"}>
                      <div className={"w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm"}>
                        <span className={"material-symbols-outlined text-[20px]"}>
                          {"speed"}
                        </span>
                      </div>
                      <div className={"flex flex-col gap-0.5"}>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Key Deterministic Constraint"}
                        </span>
                        <p className={"font-body-md text-body-md text-on-surface-variant"}>
                          {" Threshold latency must strictly not exceed "}
                          <span className={"font-mono font-bold text-primary"}>
                            {"12ms"}
                          </span>
                          {" under Tier-1 jamming. If inference time breaches "}
                          <span className={"font-mono font-bold text-error"}>
                            {"12.00ms"}
                          </span>
                          {", the hardware TPM watchdog automatically halts neural weights and falls back to deterministic hard-coded inertial guidance. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Bound Policy Rules & Strict Thresholds "}
                        </h2>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                        {"Section 03 // Rule Registry"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-sm"}>
                      <div className={"p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
                        <div className={"flex items-start gap-space-sm"}>
                          <div className={"w-7 h-7 rounded bg-surface-container text-primary font-mono font-bold text-label-sm flex items-center justify-center shrink-0"}>
                            {" 804 "}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-2"}>
                              <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                                {"Strict PII & Sensor Telemetry Sanitization"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-primary/10 text-primary font-mono font-label-sm text-label-sm rounded"}>
                                {"v3.1"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded"}>
                                {"ACTIVE"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Real-time CUI coordinate masking prior to any secondary telemetry transit"}
                            </span>
                          </div>
                        </div>
                        <div className={"flex flex-col md:items-end shrink-0 pl-10 md:pl-0"}>
                          <span className={"font-label-sm text-label-sm text-outline"}>
                            {"Enforced Threshold"}
                          </span>
                          {" "}
                          <span className={"font-mono font-semibold text-label-md text-on-surface"}>
                            {"Zero unmasked coordinates outside buffer"}
                          </span>
                        </div>
                      </div>
                      <div className={"p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
                        <div className={"flex items-start gap-space-sm"}>
                          <div className={"w-7 h-7 rounded bg-surface-container text-primary font-mono font-bold text-label-sm flex items-center justify-center shrink-0"}>
                            {" 912 "}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-2"}>
                              <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                                {"Autonomous Trajectory Boundary Enforcement"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-primary/10 text-primary font-mono font-label-sm text-label-sm rounded"}>
                                {"v1.4"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded"}>
                                {"ACTIVE"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Kinematic safety margin boundary limits within pre-cleared corridor"}
                            </span>
                          </div>
                        </div>
                        <div className={"flex flex-col md:items-end shrink-0 pl-10 md:pl-0"}>
                          <span className={"font-label-sm text-label-sm text-outline"}>
                            {"Enforced Threshold"}
                          </span>
                          {" "}
                          <span className={"font-mono font-semibold text-label-md text-on-surface"}>
                            {"Deviation sigma ≤ 0.003 rad"}
                          </span>
                        </div>
                      </div>
                      <div className={"p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
                        <div className={"flex items-start gap-space-sm"}>
                          <div className={"w-7 h-7 rounded bg-surface-container text-primary font-mono font-bold text-label-sm flex items-center justify-center shrink-0"}>
                            {" 411 "}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-2"}>
                              <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                                {"Human-in-the-Loop Override Reversion Escalation"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-primary/10 text-primary font-mono font-label-sm text-label-sm rounded"}>
                                {"v2.0"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded"}>
                                {"ACTIVE"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Auto-handback escalation when telemetry communications re-establish"}
                            </span>
                          </div>
                        </div>
                        <div className={"flex flex-col md:items-end shrink-0 pl-10 md:pl-0"}>
                          <span className={"font-label-sm text-label-sm text-outline"}>
                            {"Enforced Threshold"}
                          </span>
                          {" "}
                          <span className={"font-mono font-semibold text-label-md text-on-surface"}>
                            {"1,200ms mandatory handback timeout"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between cursor-pointer select-none"} onClick={legacy("toggleAccordion('assumptions-content')")}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Assumptions & Environmental Boundaries (3) "}
                        </h2>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                          {"Section 04 // Constraints"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[20px] text-outline"} id={"assumptions-content-icon"}>
                          {"expand_less"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-col gap-space-sm"} id={"assumptions-content"}>
                      <div className={"p-space-sm rounded-lg bg-surface-container flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5"}>
                          {"verified_user"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"font-mono font-bold text-label-sm text-primary"}>
                              {"ASM-01"}
                            </span>
                            {" "}
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Physical Tamper Enclosure Integrity"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {" Avionics Edge Node #04 maintains FIPS 140-2 Level 3 tamper-evident physical enclosure and zero-volt optical wipe sensors. "}
                          </p>
                        </div>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-surface-container flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5"}>
                          {"sync_lock"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"font-mono font-bold text-label-sm text-primary"}>
                              {"ASM-02"}
                            </span>
                            {" "}
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Epoch Key Cycling Cadence"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {" Cryptographic key rotation frequency strictly complies with the 30-day enclave epoch cycle; stale keys invoke auto-purge. "}
                          </p>
                        </div>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-surface-container flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5"}>
                          {"lock_clock"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"font-mono font-bold text-label-sm text-primary"}>
                              {"ASM-03"}
                            </span>
                            {" "}
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Hardware-Bound PKI Attestation"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {" Subcontractor telemetry feeds are signed with hardware-bound PKI certificates and timestamped via microsecond GPS PPS clocks. "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-primary-container"} />
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Bound Dependencies & Upstream Models "}
                        </h2>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                        {"Section 05 // Lineage"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
                      <div className={"p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                            {"Primary Upstream Model"}
                          </span>
                          {" "}
                          <span className={"font-mono text-label-sm text-primary font-semibold"}>
                            {"AGT-4402"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Autonomous Flight Trajectory Optimizer"}
                        </span>
                        {" "}
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"PyTorch FIPS Enclave Build v4.9.1 (Weights Hash: 0x81b0...a7e)"}
                        </span>
                        <div className={"flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm mt-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"check_circle"}
                          </span>
                          {" "}
                          <span>
                            {"Deterministic Seed Locked: 0x48FA_99"}
                          </span>
                        </div>
                      </div>
                      <div className={"p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase"}>
                            {"Auxiliary Model"}
                          </span>
                          {" "}
                          <span className={"font-mono text-label-sm text-primary font-semibold"}>
                            {"SYS-7719"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Telemetry Anomaly Auto-Classifier"}
                        </span>
                        {" "}
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"TensorRT Edge Cluster v4 Optimized (Inference latency: 2.4ms)"}
                        </span>
                        <div className={"flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm mt-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"check_circle"}
                          </span>
                          {" "}
                          <span>
                            {"Enclave Partition: Isolated Node B"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm p-space-sm rounded-lg bg-surface-container"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"note_alt"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                            {"Linked Working Note #88219"}
                          </span>
                          {" "}
                          <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {"ITAR Compliance Review — Subcontractor Transit Node Gap Assessment"}
                          </span>
                        </div>
                      </div>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"smart_toy"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                            {"Governed Copilot Session"}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-primary"}>
                            {"#SEC-9942 (18 Prompts Verified)"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"xl:col-span-4 flex flex-col gap-space-lg"}>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-error"} />
                        <h3 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Evidence Obligations "}
                        </h3>
                      </div>
                      <span className={"px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold"}>
                        {" 3 of 4 Satisfied "}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-1.5"}>
                      <div className={"flex justify-between font-label-sm text-label-sm"}>
                        <span className={"text-on-surface-variant"}>
                          {"Dual-Key Readiness Completion"}
                        </span>
                        {" "}
                        <span className={"font-mono font-bold text-on-surface"}>
                          {"75%"}
                        </span>
                      </div>
                      <div className={"w-full h-2 rounded-full bg-surface-container-high overflow-hidden"}>
                        <div className={"h-full bg-primary-container rounded-full"} style={{ width: "75%" }} />
                      </div>
                    </div>
                    <div className={"flex flex-col gap-space-sm mt-space-xs"}>
                      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between"}>
                          <div className={"flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"task_alt"}
                            </span>
                            {" "}
                            <span className={"font-mono font-bold text-label-sm text-on-surface"}>
                              {"OBL-101A"}
                            </span>
                          </div>
                          <span className={"px-2 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-semibold rounded"}>
                            {"SATISFIED"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Hardware HSM Attestation Log"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline truncate"}>
                          {"SHA-256: 0x9f4a...2110 • Node #04"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between"}>
                          <div className={"flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"task_alt"}
                            </span>
                            {" "}
                            <span className={"font-mono font-bold text-label-sm text-on-surface"}>
                              {"OBL-402C"}
                            </span>
                          </div>
                          <span className={"px-2 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-semibold rounded"}>
                            {"SATISFIED"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Disparate Impact & Bias Stress Test Matrix"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Verifier: SecOps Defense Enclave (v4.2)"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between"}>
                          <div className={"flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"task_alt"}
                            </span>
                            {" "}
                            <span className={"font-mono font-bold text-label-sm text-on-surface"}>
                              {"OBL-774D"}
                            </span>
                          </div>
                          <span className={"px-2 py-0.2 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-semibold rounded"}>
                            {"SATISFIED"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"ITAR §120.54 Non-Exportable Telemetry Proof"}
                        </span>
                        {" "}
                        <span className={"font-body-sm text-body-sm text-outline"}>
                          {"Zero-Leakage Boundary Mode Enforced"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-error-container/40 flex flex-col gap-space-xs"}>
                        <div className={"flex items-center justify-between"}>
                          <div className={"flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-error"}>
                              {"error"}
                            </span>
                            {" "}
                            <span className={"font-mono font-bold text-label-sm text-error"}>
                              {"OBL-804B"}
                            </span>
                          </div>
                          <span className={"px-2 py-0.2 bg-error text-on-error font-label-sm text-label-sm font-semibold rounded"}>
                            {"DEFICIENT"}
                          </span>
                        </div>
                        <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                          {"Subcontractor Transit Key Escrow Recertification"}
                        </span>
                        <p className={"font-body-sm text-body-sm text-error"}>
                          {" Expired 48h ago (Oct 10, 2024). Blocking Dual-Key signoff from Dir. Marcus Sterling. "}
                        </p>
                        <div className={"flex items-center gap-2 pt-1"}>
                          <button className={"flex-1 py-1 px-2 rounded bg-primary-container text-on-primary font-label-sm text-label-sm text-center shadow-sm hover:opacity-95 transition-opacity"} type={"button"}>
                            {" Upload Fresh Cert "}
                          </button>
                          {" "}
                          <button className={"flex-1 py-1 px-2 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm text-center shadow-sm hover:bg-surface-container transition-colors"} type={"button"}>
                            {" Request Waiver "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"w-2.5 h-2.5 rounded-full bg-tertiary"} />
                        <h3 className={"font-headline-sm text-headline-sm text-on-surface tracking-tight"}>
                          {" Cryptographic Provenance "}
                        </h3>
                      </div>
                      <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                        {"Ledger Audit"}
                      </span>
                    </div>
                    <div className={"relative pl-6 flex flex-col gap-space-md"}>
                      <div className={"absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container-high"} />
                      <div className={"relative flex flex-col gap-0.5"}>
                        <div className={"absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-surface-container-lowest"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                            {"Revalidation v2.4 (Current)"}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                            {"Oct 12, 2024"}
                          </span>
                        </div>
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Working draft with tightened 12ms latency threshold"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-primary"}>
                          {"Pending Block Anchoring"}
                        </span>
                      </div>
                      <div className={"relative flex flex-col gap-0.5"}>
                        <div className={"absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-error ring-4 ring-surface-container-lowest"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                            {"Revalidation v2.3"}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                            {"Oct 04, 2024"}
                          </span>
                        </div>
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Audit flagged for stale subcontractor cert"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-error"}>
                          {"Block #8,941,209 (Flagged)"}
                        </span>
                      </div>
                      <div className={"relative flex flex-col gap-0.5"}>
                        <div className={"absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                            {"Revalidation v2.0"}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                            {"Aug 15, 2024"}
                          </span>
                        </div>
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Periodic enclave attestation re-satisfied"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Block #8,610,480"}
                        </span>
                      </div>
                      <div className={"relative flex flex-col gap-0.5"}>
                        <div className={"absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-container-lowest"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                            {"Genesis v1.0 (Immutable)"}
                          </span>
                          {" "}
                          <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                            {"Jan 10, 2024"}
                          </span>
                        </div>
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Original sealed decision by Dr. Rostova"}
                        </span>
                        {" "}
                        <span className={"font-mono font-label-sm text-label-sm text-outline"}>
                          {"Block #8,210,044"}
                        </span>
                      </div>
                    </div>
                    <div className={"p-space-sm rounded-lg bg-surface-container flex flex-col gap-1"}>
                      <div className={"flex items-center justify-between font-label-sm text-label-sm"}>
                        <span className={"text-on-surface font-semibold"}>
                          {"Hardware TPM 2.0 Root of Trust"}
                        </span>
                        {" "}
                        <span className={"text-tertiary font-bold"}>
                          {"VALID"}
                        </span>
                      </div>
                      <div className={"flex justify-between font-mono font-label-sm text-label-sm text-outline"}>
                        <span>
                          {"PCR[07] Hash"}
                        </span>
                        {" "}
                        <span>
                          {"0x319a...55b2"}
                        </span>
                      </div>
                      <div className={"flex justify-between font-mono font-label-sm text-label-sm text-outline"}>
                        <span>
                          {"Merkle Root Hash"}
                        </span>
                        {" "}
                        <span>
                          {"0x7c92...11b8"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"Changes Since v1.0 Genesis"}
                      </span>
                      {" "}
                      <button className={"font-label-sm text-label-sm text-primary hover:underline font-semibold"} onClick={legacy("setViewState('diff')")}>
                        {" Full Screen Diff "}
                      </button>
                    </div>
                    <div className={"flex flex-col gap-2 font-body-sm text-body-sm"}>
                      <div className={"p-2 rounded bg-surface-container-low flex items-start gap-2"}>
                        <span className={"material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5"}>
                          {"add_circle"}
                        </span>
                        {" "}
                        <span>
                          {"Rule #804 upgraded to v3.1 (+ Added strict CUI masking)"}
                        </span>
                      </div>
                      <div className={"p-2 rounded bg-surface-container-low flex items-start gap-2"}>
                        <span className={"material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5"}>
                          {"change_circle"}
                        </span>
                        {" "}
                        <span>
                          {"Latency threshold tightened from 25ms to 12ms"}
                        </span>
                      </div>
                      <div className={"p-2 rounded bg-surface-container-low flex items-start gap-2"}>
                        <span className={"material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5"}>
                          {"add_circle"}
                        </span>
                        {" "}
                        <span>
                          {"Added Dependency: SYS-7719 Telemetry Classifier"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex flex-col gap-space-lg mt-space-sm"} id={"view-sealed"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                <div className={"p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md"}>
                  <div className={"flex items-center gap-space-md"}>
                    <div className={"w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"material-symbols-outlined text-[28px]"}>
                        {"lock"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-2"}>
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                          {"DEC-14820 (v1.0 Genesis) — IMMUTABLE SEALED RECORD"}
                        </h2>
                        <span className={"px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold"}>
                          {"SEALED"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {" This record was cryptographically signed and anchored on Jan 10, 2024 09:14:22 UTC. It is mathematically immutable and represents the historical baseline. "}
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm shrink-0"}>
                    <button className={"px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95"} onClick={legacy("setViewState('active')")} type={"button"}>
                      {" Switch to Active v2.4 "}
                    </button>
                  </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-4 gap-space-md"}>
                  <div className={"p-space-md rounded-lg bg-surface-container flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Genesis Block Number"}
                    </span>
                    {" "}
                    <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                      {"#8,210,044"}
                    </span>
                    {" "}
                    <span className={"font-mono text-label-sm text-tertiary"}>
                      {"Proof Confirmed: FIPS-256"}
                    </span>
                  </div>
                  <div className={"p-space-md rounded-lg bg-surface-container flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Signer 1 (Primary)"}
                    </span>
                    {" "}
                    <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                      {"Dr. Elena Rostova"}
                    </span>
                    {" "}
                    <span className={"font-mono text-label-sm text-outline"}>
                      {"CAC: ER-9921 • Signed Jan 10"}
                    </span>
                  </div>
                  <div className={"p-space-md rounded-lg bg-surface-container flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Signer 2 (Authority)"}
                    </span>
                    {" "}
                    <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                      {"Gen. Arthur Hayes"}
                    </span>
                    {" "}
                    <span className={"font-mono text-label-sm text-outline"}>
                      {"PIV: AH-1002 • Signed Jan 10"}
                    </span>
                  </div>
                  <div className={"p-space-md rounded-lg bg-surface-container flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Genesis Hash Anchor"}
                    </span>
                    {" "}
                    <span className={"font-mono font-label-md text-label-md font-bold text-primary truncate"}>
                      {"0x55aa48...10f"}
                    </span>
                    {" "}
                    <span className={"font-mono text-label-sm text-outline"}>
                      {"100% TPM Intact"}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-sm pt-space-xs"}>
                  <h3 className={"font-label-lg text-label-lg font-bold text-on-surface"}>
                    {"Frozen Genesis Policy Rules (v1.0 Baseline)"}
                  </h3>
                  <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
                    <div className={"p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-mono text-label-sm text-primary font-semibold"}>
                        {"Rule #804-v2.9"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Standard Telemetry Sanitization"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Baseline telemetry masking with standard coordinate truncation."}
                      </span>
                    </div>
                    <div className={"p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-mono text-label-sm text-primary font-semibold"}>
                        {"Rule #912-v1.0"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Boundary Enforcement Baseline"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Corridor deviation allowance sigma ≤ 0.005 rad."}
                      </span>
                    </div>
                    <div className={"p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-mono text-label-sm text-primary font-semibold"}>
                        {"Rule #411-v1.0"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Reversion Timeout"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Human-in-the-loop handback baseline timeout: 2,500ms."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex flex-col gap-space-lg mt-space-sm"} id={"view-diff"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <span className={"material-symbols-outlined text-[24px] text-primary"}>
                      {"difference"}
                    </span>
                    <div className={"flex flex-col"}>
                      <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Side-by-Side Version Diff Analyzer"}
                      </h2>
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Comparing Genesis v1.0 (Immutable) against Working Revalidation v2.4 (Provisional)"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm"}>
                    <span className={"px-2.5 py-1 bg-surface-container rounded-lg font-mono font-label-sm text-label-sm text-on-surface"}>
                      {" 3 Insertions (+) • 1 Modification (Δ) • 0 Deletions (-) "}
                    </span>
                    {" "}
                    <button className={"px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface transition-colors"} onClick={legacy("setViewState('active')")}>
                      {" Exit Diff View "}
                    </button>
                  </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-space-md"}>
                  <div className={"p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between pb-space-xs"}>
                      <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"v1.0 Original Genesis (Jan 10, 2024)"}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded bg-surface-container font-mono text-label-sm text-outline"}>
                        {"Anchor #8,210,044"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-sm font-mono text-body-sm"}>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-outline text-label-sm"}>
                          {"// Latency Constraint"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"threshold_latency_max: "}
                          <span className={"font-bold text-on-surface"}>
                            {"25ms"}
                          </span>
                          {";"}
                        </span>
                        {" "}
                        <span className={"text-outline"}>
                          {"failover_mode: \"INERTIAL_COAST_TIER2\";"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-outline text-label-sm"}>
                          {"// Rule 804 Definition"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"rule_id: \"RULE-804\";"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"version: \"v2.9\";"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"cui_masking: false;"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"telemetry_precision: \"STANDARD_FLOAT32\";"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-outline text-label-sm"}>
                          {"// Handback Timeout"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"handback_timeout_ms: 2500;"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1 text-outline italic"}>
                        {" [No Auxiliary Telemetry Classifier SYS-7719 Bound] "}
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-md"}>
                    <div className={"flex items-center justify-between pb-space-xs"}>
                      <span className={"font-label-md text-label-md font-bold text-primary"}>
                        {"v2.4 Current Working Draft (Oct 12, 2024)"}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded bg-primary-container text-on-primary font-mono text-label-sm"}>
                        {"Working Revision #04"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-sm font-mono text-body-sm"}>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-primary text-label-sm font-semibold"}>
                          {"// Latency Constraint (TIGHTENED 52%)"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"threshold_latency_max: "}
                          <span className={"font-bold text-primary"}>
                            {"12ms"}
                          </span>
                          {";"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"failover_mode: \"INERTIAL_DEAD_RECKONING_STRICT\";"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-tertiary text-label-sm font-semibold"}>
                          {"// Rule 804 Upgraded (CUI Strictness Added)"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"rule_id: \"RULE-804\";"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"version: "}
                          <span className={"font-bold text-tertiary"}>
                            {"\"v3.1\""}
                          </span>
                          {";"}
                        </span>
                        {" "}
                        <span className={"text-tertiary font-bold"}>
                          {"cui_masking: true; // Added DoD Compliant"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"telemetry_precision: \"FIPS_ZERO_LEAK_FLOAT64\";"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-primary text-label-sm font-semibold"}>
                          {"// Handback Timeout Tightened"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"handback_timeout_ms: "}
                          <span className={"font-bold text-primary"}>
                            {"1200"}
                          </span>
                          {";"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-lowest flex flex-col gap-1"}>
                        <span className={"text-tertiary text-label-sm font-semibold"}>
                          {"// New Auxiliary Model Bound"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"auxiliary_dependency: \"SYS-7719-TensorRT\";"}
                        </span>
                        {" "}
                        <span className={"text-tertiary font-bold"}>
                          {"status: \"VERIFIED_HARDWARE_NODE_B\";"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex flex-col gap-space-lg mt-space-sm"} id={"view-audit-modal"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"}>
                <div className={"flex items-center justify-between"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"account_tree"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Cryptographic Merkle Tree & Ledger Signatures"}
                      </h2>
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Deterministic Proof Path for DEC-14820 (Genesis to Head)"}
                      </span>
                    </div>
                  </div>
                  <button className={"px-3.5 py-1.5 bg-surface-container hover:bg-surface-container-high rounded-lg font-label-md text-label-md text-on-surface"} onClick={legacy("setViewState('active')")}>
                    {" Close Ledger "}
                  </button>
                </div>
                <div className={"p-space-lg rounded-xl bg-surface-container-low flex flex-col items-center justify-center gap-space-md overflow-x-auto"}>
                  <div className={"flex flex-col items-center"}>
                    <div className={"px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-label-md font-bold shadow-md text-center"}>
                      {" Merkle Root: 0x7c92...11b8 "}
                    </div>
                    <div className={"w-0.5 h-6 bg-outline-variant"} />
                  </div>
                  <div className={"flex items-center gap-16"}>
                    <div className={"flex flex-col items-center"}>
                      <div className={"w-0.5 h-4 bg-outline-variant"} />
                      <div className={"px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono text-label-sm font-semibold shadow-sm text-center"}>
                        {" Branch A: Genesis v1.0 Hash"}
                        <br />
                        <span className={"text-outline text-[10px]"}>
                          {"0x4fa1...990"}
                        </span>
                      </div>
                      <div className={"w-0.5 h-4 bg-outline-variant"} />
                      <div className={"flex gap-4"}>
                        <span className={"px-2 py-1 bg-surface-container rounded font-mono text-[10px] text-tertiary"}>
                          {"Leaf: Owner Sig ER-9921"}
                        </span>
                        {" "}
                        <span className={"px-2 py-1 bg-surface-container rounded font-mono text-[10px] text-tertiary"}>
                          {"Leaf: Liaison Sig AH-1002"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-col items-center"}>
                      <div className={"w-0.5 h-4 bg-outline-variant"} />
                      <div className={"px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono text-label-sm font-semibold shadow-sm text-center"}>
                        {" Branch B: Revalidation v2.4 Hash"}
                        <br />
                        <span className={"text-primary text-[10px]"}>
                          {"0x3e11...412"}
                        </span>
                      </div>
                      <div className={"w-0.5 h-4 bg-outline-variant"} />
                      <div className={"flex gap-4"}>
                        <span className={"px-2 py-1 bg-surface-container rounded font-mono text-[10px] text-tertiary"}>
                          {"Leaf: Liaison Sig TV-8840"}
                        </span>
                        {" "}
                        <span className={"px-2 py-1 bg-surface-container rounded font-mono text-[10px] text-error font-bold"}>
                          {"Leaf: Pending Dir. Sterling"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"overflow-x-auto"}>
                  <table className={"w-full text-left font-body-sm text-body-sm"}>
                    <thead>
                      <tr className={"bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase"}>
                        <th className={"py-2.5 px-3"}>
                          {"Block #"}
                        </th>
                        <th className={"py-2.5 px-3"}>
                          {"Timestamp (UTC)"}
                        </th>
                        <th className={"py-2.5 px-3"}>
                          {"Action Type"}
                        </th>
                        <th className={"py-2.5 px-3"}>
                          {"Signer & CAC Key"}
                        </th>
                        <th className={"py-2.5 px-3"}>
                          {"Hardware Node"}
                        </th>
                        <th className={"py-2.5 px-3 text-right"}>
                          {"Integrity Status"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className={"divide-y divide-surface-container"}>
                      <tr className={"hover:bg-surface-container-low transition-colors"}>
                        <td className={"py-2.5 px-3 font-mono font-bold text-on-surface"}>
                          {"#8,941,209"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono text-outline"}>
                          {"Oct 11, 2024 14:02"}
                        </td>
                        <td className={"py-2.5 px-3 font-semibold text-on-surface"}>
                          {"Dual-Key Part 1 Ingestion"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"Col. T. Vance (CAC-TV88)"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"TPM-Node-04"}
                        </td>
                        <td className={"py-2.5 px-3 text-right text-tertiary font-bold"}>
                          {"VERIFIED"}
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low transition-colors"}>
                        <td className={"py-2.5 px-3 font-mono font-bold text-on-surface"}>
                          {"#8,941,180"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono text-outline"}>
                          {"Oct 11, 2024 10:15"}
                        </td>
                        <td className={"py-2.5 px-3 font-semibold text-on-surface"}>
                          {"Rule 804 Revision Ingestion"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"Dr. Elena Rostova (CAC-ER99)"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"TPM-Node-04"}
                        </td>
                        <td className={"py-2.5 px-3 text-right text-tertiary font-bold"}>
                          {"VERIFIED"}
                        </td>
                      </tr>
                      <tr className={"hover:bg-surface-container-low transition-colors"}>
                        <td className={"py-2.5 px-3 font-mono font-bold text-on-surface"}>
                          {"#8,210,044"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono text-outline"}>
                          {"Jan 10, 2024 09:14"}
                        </td>
                        <td className={"py-2.5 px-3 font-semibold text-on-surface"}>
                          {"Genesis Block Sealing"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"Dr. Rostova + Gen. Hayes"}
                        </td>
                        <td className={"py-2.5 px-3 font-mono"}>
                          {"Primary TPM Enclave"}
                        </td>
                        <td className={"py-2.5 px-3 text-right text-tertiary font-bold"}>
                          {"VERIFIED (ROOT)"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={"hidden flex flex-col gap-space-lg mt-space-sm animate-pulse"} id={"view-skeleton"}>
              <div className={"h-44 bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm"}>
                <div className={"flex justify-between"}>
                  <div className={"h-6 w-64 bg-surface-container rounded"} />
                  <div className={"h-6 w-32 bg-surface-container rounded"} />
                </div>
                <div className={"h-8 w-96 bg-surface-container rounded"} />
                <div className={"flex justify-between"}>
                  <div className={"h-6 w-48 bg-surface-container rounded"} />
                  <div className={"h-6 w-56 bg-surface-container rounded"} />
                </div>
              </div>
              <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg"}>
                <div className={"xl:col-span-8 flex flex-col gap-space-lg"}>
                  <div className={"h-48 bg-surface-container-lowest rounded-xl shadow-sm"} />
                  <div className={"h-64 bg-surface-container-lowest rounded-xl shadow-sm"} />
                  <div className={"h-56 bg-surface-container-lowest rounded-xl shadow-sm"} />
                </div>
                <div className={"xl:col-span-4 flex flex-col gap-space-lg"}>
                  <div className={"h-96 bg-surface-container-lowest rounded-xl shadow-sm"} />
                  <div className={"h-72 bg-surface-container-lowest rounded-xl shadow-sm"} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
