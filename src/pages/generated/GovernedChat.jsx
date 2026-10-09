// AUTO-GENERATED from Governed-Chat-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/governed-chat.js?raw';

const exportsList = [];

export default function GovernedChat() {
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
          <div className={"flex flex-col w-full pb-10"}>
            <div className={"w-full bg-surface-container-lowest shadow-sm rounded-lg px-space-md py-space-sm mb-space-md"}>
              <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-sm"}>
                <div className={"flex flex-col gap-0.5"}>
                  <div className={"flex flex-wrap items-center gap-space-xs"}>
                    <span className={"inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"shield"}
                      </span>
                      {" SEC-9942 "}
                    </span>
                    <h1 className={"font-headline-md text-headline-md text-on-surface tracking-tight"}>
                      {" Defense Logistics Routing Policy Assessment - Q3 Enclave "}
                    </h1>
                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"} />
                      {" Zero-Data-Leakage Mode "}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5"}>
                    <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                      {"lock"}
                    </span>
                    {" Boundary Enforced: Tier-1 Cleared Sources Only • Hardware TPM Isolation • FIPS 140-2 Attested "}
                  </p>
                </div>
                <div className={"flex flex-wrap items-center gap-space-xs"}>
                  <button className={"inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm"} id={"btn-export-pkg"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"verified"}
                    </span>
                    {" Export Decision Package "}
                  </button>
                  {" "}
                  <button className={"inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm"} id={"btn-convert-case"} type={"button"} data-nav="/governance-inventory?new=usecase&from=chat">
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"account_tree"}
                    </span>
                    {" Convert to Use Case "}
                  </button>
                  {" "}
                  <button className={"inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm"} id={"btn-new-thread"} type={"button"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"add"}
                    </span>
                    {" New Governed Thread "}
                  </button>
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs bg-surface-container-low px-space-sm py-1.5 rounded"}>
                <div className={"flex items-center gap-1"}>
                  <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider mr-2 hidden sm:inline"}>
                    {"Scenario Preview:"}
                  </span>
                  {" "}
                  <button className={"state-tab active px-2.5 py-1 rounded font-label-sm text-label-sm transition-all bg-primary-container text-on-primary shadow-sm"} data-state={"active-chat"}>
                    {" Active Governed Chat "}
                  </button>
                  {" "}
                  <button className={"state-tab px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all"} data-state={"empty-state"}>
                    {" Empty Workspace "}
                  </button>
                  {" "}
                  <button className={"state-tab px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all"} data-state={"alert-state"}>
                    {" Boundary Alert "}
                  </button>
                  {" "}
                  <button className={"state-tab px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all"} data-state={"denied-source"}>
                    {" Permission Denied "}
                  </button>
                </div>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"text-on-surface-variant font-label-sm text-label-sm hidden md:inline"}>
                    {"Ledger Height: "}
                    <code className={"font-mono text-primary font-semibold"}>
                      {"#8,941,209"}
                    </code>
                  </span>
                  {" "}
                  <button className={"inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors shadow-sm"} id={"toggle-evidence-panel"} type={"button"}>
                    <span className={"material-symbols-outlined text-[16px] text-primary"}>
                      {"dock_to_right"}
                    </span>
                    {" "}
                    <span id={"evidence-panel-label"}>
                      {"Evidence Inspector (4)"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"w-full grid grid-cols-12 gap-space-md items-start"}>
              <div className={"col-span-12 lg:col-span-8 flex flex-col gap-space-md transition-all duration-200"} id={"chat-column"}>
                <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-2 min-w-0"}>
                    <div className={"w-7 h-7 rounded bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"neurology"}
                      </span>
                    </div>
                    <div className={"flex flex-col min-w-0"}>
                      <div className={"flex items-center gap-1.5"}>
                        <span className={"font-label-md text-label-md text-on-surface font-semibold truncate"}>
                          {"Ceryvra Cleared Enclave Agent"}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.2 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm"}>
                          {"Claude 3.5 Sonnet Gov-Isolated"}
                        </span>
                      </div>
                      <span className={"font-body-sm text-body-sm text-outline truncate"}>
                        {"Active Verifier Node #04 • Hash Ring: 0x9f...4a12 • Zero Non-Cleared Egress"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"flex items-center gap-1 text-tertiary font-label-sm text-label-sm bg-tertiary-container/10 px-2 py-1 rounded"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"encrypted"}
                      </span>
                      {" "}
                      <span>
                        {"Deterministic Proof Sealed"}
                      </span>
                    </div>
                    <button className={"text-outline hover:text-on-surface p-1 rounded transition-colors"} title={"Audit parameters"} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"tune"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-md"} id={"view-container"}>
                  <div className={"flex flex-col gap-space-md"} id={"view-active-chat"}>
                    <div className={"bg-surface-container-high/60 rounded-lg p-space-sm shadow-sm flex items-start gap-space-sm"}>
                      <span className={"material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"}>
                        {"shield_person"}
                      </span>
                      <div className={"flex flex-col text-on-surface"}>
                        <span className={"font-label-md text-label-md font-semibold"}>
                          {"Enclave Policy Pre-Filter Applied (Rule #804)"}
                        </span>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" Prompt automatically sanitized for defense personnel PII and sensitive unclassified facility telemetry (CUI). 2 internal tokens replaced with deterministic cryptographic aliases. "}
                        </p>
                      </div>
                    </div>
                    <div className={"bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"flex items-center justify-between"}>
                        <div className={"flex items-center gap-space-sm"}>
                          <div className={"w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md font-bold"}>
                            {" ER "}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-1.5"}>
                              <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                                {"Dr. Elena Rostova"}
                              </span>
                              {" "}
                              <span className={"px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant"}>
                                {"Lead AI Risk Auditor"}
                              </span>
                            </div>
                            <span className={"font-body-sm text-body-sm text-outline"}>
                              {"14:28:09 EST • Session Auth: PKI-CAC-7709"}
                            </span>
                          </div>
                        </div>
                        <div className={"flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-mono font-label-sm text-label-sm"} title={"Cryptographically signed prompt hash"}>
                          <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                            {"fingerprint"}
                          </span>
                          {" "}
                          <span>
                            {"sha256:4ca8...e911"}
                          </span>
                        </div>
                      </div>
                      <div className={"font-body-md text-body-md text-on-surface pl-10 pr-2"}>
                        <p>
                          {" Analyze subcontractor logistics vendor routing under updated Q3 ITAR regulations (ITAR-Reg-774). We specifically require an assessment of high-altitude dual-use avionics transit nodes across Tier-1 and Tier-2 domestic supply hubs. Highlight any compliance gaps or unverified chain-of-custody handoffs. "}
                        </p>
                      </div>
                      <div className={"pl-10 flex flex-wrap items-center gap-1.5 pt-1"}>
                        <span className={"text-outline font-label-sm text-label-sm"}>
                          {"Knowledge Scope:"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono font-label-sm text-label-sm"}>
                          {"@ITAR-Knowledge-Base (v4.2)"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono font-label-sm text-label-sm"}>
                          {"@Vendor-Contracts-2024 (Verified)"}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-md"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-sm pb-space-xs bg-surface-container-low px-space-sm py-1.5 rounded"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"verified"}
                            </span>
                            {" Governed & Cryptographically Bound "}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                            {"Merkle Root: "}
                            <code className={"font-mono text-on-surface font-semibold"}>
                              {"0x7c92...11b8"}
                            </code>
                          </span>
                        </div>
                        <div className={"flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant"}>
                          <span>
                            {"Confidence: "}
                            <strong className={"text-tertiary font-semibold"}>
                              {"99.4%"}
                            </strong>
                          </span>
                          {" "}
                          <span className={"text-outline"}>
                            {"•"}
                          </span>
                          {" "}
                          <span>
                            {"Latency: "}
                            <span className={"font-mono"}>
                              {"812ms"}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className={"font-body-md text-body-md text-on-surface flex flex-col gap-space-sm"}>
                        <p>
                          {" Based on authoritative enclave corpora, the logistics routing for "}
                          <strong>
                            {"Dual-Use Avionics Subsystems (Category VIII / XV)"}
                          </strong>
                          {" satisfies base physical containment criteria, but presents two distinct jurisdictional compliance concerns under amended "}
                          <button className={"inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-mono font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary transition-colors cursor-pointer"} onClick={legacy("document.getElementById('src-card-1').scrollIntoView({behavior: 'smooth'})")} type={"button"}>
                            {" [SRC-01: ITAR-Reg-774] "}
                          </button>
                          {": "}
                        </p>
                        <div className={"p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2"}>
                          <div className={"flex items-start gap-2"}>
                            <span className={"material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5"}>
                              {"check_circle"}
                            </span>
                            <div>
                              <strong className={"font-label-md text-label-md text-on-surface"}>
                                {"1. Domestic Hub Cleared Handoffs:"}
                              </strong>
                              {" "}
                              <span className={"font-body-sm text-body-sm text-on-surface-variant block mt-0.5"}>
                                {" Ground transit between Fort Worth Depot and Huntsville Component Labs conforms strictly with audited ISO-27001 / CMMC Level 3 standards as validated in "}
                                <button className={"inline-flex items-center px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-mono font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary transition-colors"} type={"button"}>
                                  {" [SRC-02: Vendor-Audit-Ledger-2024] "}
                                </button>
                                {". No foreign national co-location detected. "}
                              </span>
                            </div>
                          </div>
                          <div className={"flex items-start gap-2"}>
                            <span className={"material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5"}>
                              {"warning"}
                            </span>
                            <div>
                              <strong className={"font-label-md text-label-md text-on-surface"}>
                                {"2. Subcontractor Auxiliary Storage Interoperability:"}
                              </strong>
                              {" "}
                              <span className={"font-body-sm text-body-sm text-on-surface-variant block mt-0.5"}>
                                {" Secondary holding facilities managed by Apex Precision Dynamics lack active hardware security module (HSM) telemetry logs for batch #AV-904. Under "}
                                <button className={"inline-flex items-center px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-mono font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary transition-colors"} type={"button"}>
                                  {" [SRC-03: Dual-Use-Matrix-RevB] "}
                                </button>
                                {", this requires either an on-site physical attestation or explicit exemption signed by the Defense Logistics Agency (DLA). "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={"mt-space-xs pt-space-xs"}>
                          <div className={"flex items-center justify-between pb-1.5"}>
                            <span className={"font-label-sm text-label-sm text-outline uppercase tracking-wider"}>
                              {"Citations & Enclave Verification Proofs (3 Cleared Sources)"}
                            </span>
                            {" "}
                            <button className={"text-primary font-label-sm text-label-sm hover:underline"} id={"toggle-citations-body"} type={"button"}>
                              {"Toggle All Hashes"}
                            </button>
                          </div>
                          <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-xs"} id={"citations-container"}>
                            <div className={"p-2.5 rounded bg-surface-container-low flex flex-col justify-between gap-1 shadow-sm"}>
                              <div className={"flex items-center justify-between"}>
                                <span className={"font-label-sm text-label-sm font-bold text-on-surface truncate"}>
                                  {"SRC-01: ITAR-Reg-774"}
                                </span>
                                {" "}
                                <span className={"px-1 py-0.2 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-[10px]"}>
                                  {"Verified"}
                                </span>
                              </div>
                              <span className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>
                                {"ITAR §121.1 Dual-Use Provision"}
                              </span>
                              <div className={"flex items-center justify-between pt-1 font-mono text-[10px] text-outline"}>
                                <span className={"truncate"}>
                                  {"SHA: b8a9...31fc"}
                                </span>
                                {" "}
                                <span className={"text-primary font-semibold"}>
                                  {"Tier-1 Cleared"}
                                </span>
                              </div>
                            </div>
                            <div className={"p-2.5 rounded bg-surface-container-low flex flex-col justify-between gap-1 shadow-sm"}>
                              <div className={"flex items-center justify-between"}>
                                <span className={"font-label-sm text-label-sm font-bold text-on-surface truncate"}>
                                  {"SRC-02: Vendor-Audit"}
                                </span>
                                {" "}
                                <span className={"px-1 py-0.2 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-[10px]"}>
                                  {"Verified"}
                                </span>
                              </div>
                              <span className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>
                                {"Defense Vendor Q2 Review"}
                              </span>
                              <div className={"flex items-center justify-between pt-1 font-mono text-[10px] text-outline"}>
                                <span className={"truncate"}>
                                  {"SHA: f441...99de"}
                                </span>
                                {" "}
                                <span className={"text-tertiary font-semibold"}>
                                  {"Freshness: 4d"}
                                </span>
                              </div>
                            </div>
                            <div className={"p-2.5 rounded bg-surface-container-low flex flex-col justify-between gap-1 shadow-sm"}>
                              <div className={"flex items-center justify-between"}>
                                <span className={"font-label-sm text-label-sm font-bold text-on-surface truncate"}>
                                  {"SRC-03: Dual-Use-Matrix"}
                                </span>
                                {" "}
                                <span className={"px-1 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px]"}>
                                  {"Attested"}
                                </span>
                              </div>
                              <span className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>
                                {"Classification Annex B-Rev9"}
                              </span>
                              <div className={"flex items-center justify-between pt-1 font-mono text-[10px] text-outline"}>
                                <span className={"truncate"}>
                                  {"SHA: d110...74ae"}
                                </span>
                                {" "}
                                <span className={"text-on-surface-variant font-semibold"}>
                                  {"Confidential"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center justify-between pt-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <button className={"inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm transition-colors"} type={"button"}>
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"content_copy"}
                            </span>
                            {" Copy Cryptographic Proof "}
                          </button>
                          {" "}
                          <button className={"inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm transition-colors"} type={"button"} data-nav="/decision-record?new=decision&from=chat">
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"bookmark_add"}
                            </span>
                            {" Save to Decision Ledger "}
                          </button>
                        </div>
                        <span className={"font-label-sm text-label-sm text-outline"}>
                          {"Deterministic Seed: "}
                          <code className={"font-mono"}>
                            {"#9048-SEC-US"}
                          </code>
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"bg-surface-container-high rounded p-space-sm flex items-start justify-between gap-space-sm"}>
                        <div className={"flex items-start gap-space-xs"}>
                          <span className={"material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5"}>
                            {"report_problem"}
                          </span>
                          <div>
                            <span className={"font-label-md text-label-md text-error font-semibold block"}>
                              {"Partial Governance Boundary Detected"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {" Sub-clause 4.2 references subcontractor facility Apex Precision in Huntsville, which relies on a provisional compliance file with pending cryptographic attestation. "}
                            </span>
                          </div>
                        </div>
                        <div className={"flex items-center gap-1 shrink-0"}>
                          <button className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm hover:opacity-90"} type={"button"}>
                            {" Request Attestation "}
                          </button>
                          {" "}
                          <button className={"px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest"} type={"button"} data-nav="/missing-evidence">
                            {" Review Missing Proof "}
                          </button>
                        </div>
                      </div>
                      <div className={"font-body-md text-body-md text-on-surface"}>
                        <p>
                          <strong>
                            {"Recommended Mitigations Before Sign-Off:"}
                          </strong>
                          {" To execute automated routing authorization without human officer manual intervention, trigger an enclave verification query against "}
                          <code>
                            {"Apex-Facility-Log-SEC4"}
                          </code>
                          {" or re-route shipment legs 3 through 5 via cleared Defense Depot Red River (DDRR). "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"hidden flex-col gap-space-md bg-surface-container-lowest p-space-xl rounded-lg shadow-sm text-center"} id={"view-empty-state"}>
                    <div className={"w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mx-auto text-primary-container"}>
                      <span className={"material-symbols-outlined text-[36px]"}>
                        {"security"}
                      </span>
                    </div>
                    <div className={"max-w-lg mx-auto flex flex-col gap-1"}>
                      <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                        {"Isolated Enclave Copilot Initialized"}
                      </h2>
                      <p className={"font-body-md text-body-md text-on-surface-variant"}>
                        {" Every query operates under strict Zero-Data-Leakage constraints. Models cannot train on your prompts, and responses are deterministically verified against cleared enterprise documents. "}
                      </p>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm max-w-2xl mx-auto w-full text-left pt-space-sm"}>
                      <div className={"p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg cursor-pointer transition-colors shadow-sm flex flex-col gap-1"}>
                        <span className={"font-label-md text-label-md font-semibold text-primary flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"gavel"}
                          </span>
                          {" ITAR Compliance Audit "}
                        </span>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" \"Cross-reference supply route Alpha-12 against dual-use avionics restrictions in ITAR Category XV.\" "}
                        </p>
                      </div>
                      <div className={"p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg cursor-pointer transition-colors shadow-sm flex flex-col gap-1"}>
                        <span className={"font-label-md text-label-md font-semibold text-primary flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"verified_user"}
                          </span>
                          {" Vendor Risk Gap Analysis "}
                        </span>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" \"Evaluate Q2 subcontractor audit logs for unverified hardware custodianship handoffs.\" "}
                        </p>
                      </div>
                      <div className={"p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg cursor-pointer transition-colors shadow-sm flex flex-col gap-1"}>
                        <span className={"font-label-md text-label-md font-semibold text-primary flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"assignment_turned_in"}
                          </span>
                          {" Decision Package Drafting "}
                        </span>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" \"Compile cryptographic evidence bundle for NATO interoperability compliance sign-off.\" "}
                        </p>
                      </div>
                      <div className={"p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg cursor-pointer transition-colors shadow-sm flex flex-col gap-1"}>
                        <span className={"font-label-md text-label-md font-semibold text-primary flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"code"}
                          </span>
                          {" Model Policy Guardrail Review "}
                        </span>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" \"Inspect active sanitization filters (Rule #804) applied to confidential payload schemas.\" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"hidden flex-col gap-space-md"} id={"view-alert-state"}>
                    <div className={"bg-error-container/20 rounded-lg p-space-md shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0"}>
                          <span className={"material-symbols-outlined text-[24px]"}>
                            {"gpp_maybe"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <h3 className={"font-headline-sm text-headline-sm text-error font-semibold"}>
                            {"Strict Boundary Violation: Unattested Citation Quarantined"}
                          </h3>
                          <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {"Audit Incident ID: "}
                            <code className={"font-mono font-semibold"}>
                              {"INC-89412-SEC"}
                            </code>
                            {" • Triggered by Model Completion Node #04"}
                          </span>
                        </div>
                      </div>
                      <p className={"font-body-md text-body-md text-on-surface"}>
                        {" The agent attempted to synthesize findings utilizing document "}
                        <code>
                          {"Draft-Subcontractor-Agreement-Rev0.8"}
                        </code>
                        {". This document has not completed its cryptographic Merkle signature attestation and violates Enclave Directive "}
                        <strong>
                          {"SEC-POL-04 (No Provisional Synthesis)"}
                        </strong>
                        {". "}
                      </p>
                      <div className={"p-space-sm bg-surface-container-lowest rounded flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"}>
                          <span>
                            {"Quarantined Artifact: "}
                            <strong>
                              {"Draft-Subcontractor-Agreement-Rev0.8.pdf"}
                            </strong>
                          </span>
                          {" "}
                          <span className={"text-error font-semibold"}>
                            {"Cryptographic Checksum Mismatch"}
                          </span>
                        </div>
                        <div className={"w-full bg-surface-container h-1.5 rounded-full overflow-hidden"}>
                          <div className={"bg-error h-full w-2/3"} />
                        </div>
                      </div>
                      <div className={"flex items-center justify-end gap-space-xs pt-space-xs"}>
                        <button className={"px-space-sm py-1.5 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"} type={"button"}>
                          {" Purge From Working Memory "}
                        </button>
                        {" "}
                        <button className={"px-space-sm py-1.5 rounded bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm"} type={"button"}>
                          {" Escalate to Security Officer "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"hidden flex-col gap-space-md"} id={"view-denied-source"}>
                    <div className={"bg-surface-container-lowest p-space-xl rounded-lg shadow-sm flex flex-col items-center text-center gap-space-sm"}>
                      <div className={"w-14 h-14 rounded-full bg-error-container text-on-error-container flex items-center justify-center"}>
                        <span className={"material-symbols-outlined text-[32px]"}>
                          {"lock_clock"}
                        </span>
                      </div>
                      <div className={"max-w-md flex flex-col gap-1"}>
                        <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>
                          {"Access Denied: Clearance Level Secret / No-Foreign Required"}
                        </h3>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {" Your current session token (CAC-7709) holds "}
                          <strong>
                            {"Confidential - Secret Delegated"}
                          </strong>
                          {" clearance, but the cited repository "}
                          <code className={"font-mono text-primary"}>
                            {"@NATO-Interoperability-Matrix-Annex-C"}
                          </code>
                          {" requires explicit bilateral bilateral compartmental authorization. "}
                        </p>
                      </div>
                      <div className={"flex items-center gap-2 pt-space-xs"}>
                        <button className={"px-space-sm py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md shadow-sm"} type={"button"}>
                          {" Request Escalated CAC Elevation "}
                        </button>
                        {" "}
                        <button className={"px-space-sm py-1.5 rounded bg-surface-container text-on-surface font-label-md text-label-md"} type={"button"}>
                          {" View Redacted Summary "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-lg shadow-md p-space-sm flex flex-col gap-space-xs"}>
                  <div className={"flex flex-wrap items-center justify-between gap-space-xs pb-1"}>
                    <div className={"flex flex-wrap items-center gap-1.5"}>
                      <span className={"font-label-sm text-label-sm text-outline"}>
                        {"Target Enclave Scope:"}
                      </span>
                      {" "}
                      <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-container/10 text-primary-container font-mono font-label-sm text-label-sm font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary-container"} />
                        {" @ITAR-Knowledge-Base (v4.2) "}
                        <button className={"hover:text-error ml-0.5"} type={"button"}>
                          {"×"}
                        </button>
                      </span>
                      {" "}
                      <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-mono font-label-sm text-label-sm font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                        {" @Vendor-Contracts-2024 (Verified) "}
                        <button className={"hover:text-error ml-0.5"} type={"button"}>
                          {"×"}
                        </button>
                      </span>
                    </div>
                    <div className={"flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm"}>
                      <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                        {"security_update_good"}
                      </span>
                      {" "}
                      <span>
                        {"Strict Enforce Mode"}
                      </span>
                    </div>
                  </div>
                  <div className={"relative w-full"}>
                    <textarea className={"w-full p-space-sm rounded bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container resize-none transition-all"} id={"governed-prompt-input"} placeholder={"Ask governed assistant across cleared knowledge enclaves... (/ for slash commands, @ for specific source repository)"} rows={"3"} />
                  </div>
                  <div className={"flex flex-wrap items-center justify-between gap-space-xs pt-1"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <button className={"inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors shadow-sm"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"attach_file"}
                        </span>
                        {" Attach Evidence File "}
                      </button>
                      {" "}
                      <button className={"inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors shadow-sm"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"data_object"}
                        </span>
                        {" Inject Policy Schema "}
                      </button>
                      {" "}
                      <button className={"inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors shadow-sm"} type={"button"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"terminal"}
                        </span>
                        {" /commands "}
                      </button>
                    </div>
                    <div className={"flex items-center gap-space-sm"}>
                      <span className={"hidden sm:inline font-label-sm text-label-sm text-outline"}>
                        {"Press "}
                        <strong>
                          {"⌘ + Enter"}
                        </strong>
                      </span>
                      {" "}
                      <button className={"inline-flex items-center gap-1.5 px-space-md py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity"} id={"send-prompt-btn"} type={"button"}>
                        <span>
                          {"Send Query"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"send"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"flex items-center gap-1.5 pt-1 text-[11px] font-body-sm text-outline justify-center"}>
                    <span className={"material-symbols-outlined text-[13px] text-tertiary"}>
                      {"lock"}
                    </span>
                    {" "}
                    <span>
                      {"All prompts & completions are cryptographically hashed and logged to immutable audit ledger block #8,941,209."}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"col-span-12 lg:col-span-4 flex flex-col gap-space-md"} id={"evidence-column"}>
                <div className={"bg-surface-container-lowest rounded-lg shadow-sm p-space-md flex flex-col gap-space-md sticky top-20"}>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-1.5"}>
                        <span className={"material-symbols-outlined text-primary-container text-[20px]"}>
                          {"policy"}
                        </span>
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface"}>
                          {"Active Evidence Inspector"}
                        </h2>
                      </div>
                      <span className={"px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold"}>
                        {"Enclave TPM Sync"}
                      </span>
                    </div>
                    <span className={"font-body-sm text-body-sm text-outline"}>
                      {"Deterministic verification ledger for ongoing thread"}
                    </span>
                    {" "}
                    <div className={"flex items-center gap-1 pt-space-xs bg-surface-container-low p-1 rounded"}>
                      <button className={"evidence-tab flex-1 py-1 rounded text-center font-label-sm text-label-sm font-semibold transition-all bg-surface-container-lowest text-primary shadow-sm"} data-tab={"sources"}>
                        {" Enclave Sources (4) "}
                      </button>
                      {" "}
                      <button className={"evidence-tab flex-1 py-1 rounded text-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all"} data-tab={"guardrails"}>
                        {" Guardrails "}
                      </button>
                      {" "}
                      <button className={"evidence-tab flex-1 py-1 rounded text-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all"} data-tab={"export"}>
                        {" Pre-Decision "}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-sm"} id={"tab-sources"}>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1.5 hover:bg-surface-container transition-colors shadow-sm"} id={"src-card-1"}>
                      <div className={"flex items-start justify-between gap-1"}>
                        <div className={"flex items-center gap-1.5 min-w-0"}>
                          <span className={"material-symbols-outlined text-tertiary text-[18px] shrink-0"}>
                            {"verified"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-semibold truncate"}>
                            {"DoD-ITAR-Compliance-Spec-v2.8"}
                          </span>
                        </div>
                        <span className={"px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-[10px] font-bold shrink-0"}>
                          {"Satisfied"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-body-sm text-on-surface-variant"}>
                        <span>
                          {"Classification: "}
                          <strong className={"text-on-surface"}>
                            {"Secret / No-Foreign"}
                          </strong>
                        </span>
                        {" "}
                        <span className={"font-mono text-[11px]"}>
                          {"d8e1...44bc"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-[11px] text-outline pt-0.5"}>
                        <span>
                          {"Sync: Hardware Enclave Node #04"}
                        </span>
                        {" "}
                        <span className={"text-tertiary font-semibold"}>
                          {"Cryptographically Verified"}
                        </span>
                      </div>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1.5 hover:bg-surface-container transition-colors shadow-sm"}>
                      <div className={"flex items-start justify-between gap-1"}>
                        <div className={"flex items-center gap-1.5 min-w-0"}>
                          <span className={"material-symbols-outlined text-tertiary text-[18px] shrink-0"}>
                            {"check_circle"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-semibold truncate"}>
                            {"Aerospace-Vendor-Risk-Ledger-Q2"}
                          </span>
                        </div>
                        <span className={"px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-[10px] font-bold shrink-0"}>
                          {"Satisfied"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-body-sm text-on-surface-variant"}>
                        <span>
                          {"Classification: "}
                          <strong className={"text-on-surface"}>
                            {"Confidential CUI"}
                          </strong>
                        </span>
                        {" "}
                        <span className={"font-mono text-[11px]"}>
                          {"77ef...021a"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-[11px] text-outline pt-0.5"}>
                        <span>
                          {"In Enclave TPM Storage"}
                        </span>
                        {" "}
                        <span className={"text-primary font-semibold"}>
                          {"Attestation Fresh"}
                        </span>
                      </div>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1.5 hover:bg-surface-container transition-colors shadow-sm"}>
                      <div className={"flex items-start justify-between gap-1"}>
                        <div className={"flex items-center gap-1.5 min-w-0"}>
                          <span className={"material-symbols-outlined text-outline text-[18px] shrink-0"}>
                            {"pending"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-semibold truncate"}>
                            {"Defense-Subcontractor-Agreement-Draft"}
                          </span>
                        </div>
                        <span className={"px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold shrink-0"}>
                          {"Provisional"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-body-sm text-on-surface-variant"}>
                        <span>
                          {"Classification: "}
                          <strong className={"text-on-surface"}>
                            {"Restricted Tier-2"}
                          </strong>
                        </span>
                        {" "}
                        <span className={"font-mono text-[11px]"}>
                          {"3b11...9f88"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-[11px] text-outline pt-0.5"}>
                        <span className={"text-error font-medium"}>
                          {"Awaiting Compliance Signoff"}
                        </span>
                        {" "}
                        <button className={"text-primary font-semibold hover:underline"} type={"button"}>
                          {"Verify"}
                        </button>
                      </div>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1.5 hover:bg-surface-container transition-colors shadow-sm"}>
                      <div className={"flex items-start justify-between gap-1"}>
                        <div className={"flex items-center gap-1.5 min-w-0"}>
                          <span className={"material-symbols-outlined text-outline text-[18px] shrink-0"}>
                            {"history"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-semibold truncate"}>
                            {"NATO-Interoperability-Matrix-2024"}
                          </span>
                        </div>
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] font-bold shrink-0"}>
                          {"Stale"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-body-sm text-on-surface-variant"}>
                        <span>
                          {"Classification: "}
                          <strong className={"text-on-surface"}>
                            {"NATO Unclassified"}
                          </strong>
                        </span>
                        {" "}
                        <span className={"font-mono text-[11px]"}>
                          {"19e0...c4c4"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-[11px] text-outline pt-0.5"}>
                        <span>
                          {"Revalidation Due: 48h ago"}
                        </span>
                        {" "}
                        <button className={"text-primary font-semibold hover:underline"} type={"button"}>
                          {"Sync Hash"}
                        </button>
                      </div>
                    </div>
                    <button className={"w-full py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors text-center shadow-sm flex items-center justify-center gap-1"} type={"button"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"add_circle"}
                      </span>
                      {" Register Additional Enclave Source "}
                    </button>
                  </div>
                  <div className={"hidden flex-col gap-space-sm"} id={"tab-guardrails"}>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Rule #804: PII / CUI Sanitizer"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Deterministic redaction active on all model input channels."}
                      </p>
                      <span className={"font-mono text-[10px] text-tertiary"}>
                        {"Status: Enforced • Zero Overrides"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Rule #911: Egress Quarantine"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"External API connections disabled. All generation executed on on-premise hardware."}
                      </p>
                      <span className={"font-mono text-[10px] text-tertiary"}>
                        {"Status: Enforced • Hardware Lock Active"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex flex-col gap-1"}>
                      <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                        {"Rule #302: Merkle Proof Packaging"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Requires 100% cryptographic source backing before generating decision tokens."}
                      </p>
                      <span className={"font-mono text-[10px] text-primary"}>
                        {"Status: Enforced • Verifier Node #04"}
                      </span>
                    </div>
                  </div>
                  <div className={"hidden flex-col gap-space-sm"} id={"tab-export"}>
                    <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                      {" Create Governed Use Case from this Chat "}
                    </span>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {" Convert current conversation thread into a tamper-evident decision record. "}
                    </p>
                    <div className={"flex flex-col gap-space-xs pt-1"}>
                      <label className={"font-label-sm text-label-sm text-on-surface font-medium"}>
                        {"Use Case / Title"}
                      </label>
                      {" "}
                      <input className={"w-full h-8 px-2 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container"} type={"text"} defaultValue={"Defense Logistics Routing - Q3 Sign-Off"} />
                      {" "}
                      <label className={"font-label-sm text-label-sm text-on-surface font-medium"}>
                        {"Risk Level"}
                      </label>
                      <div className={"px-2 py-1 rounded bg-error-container/20 text-error font-label-sm text-label-sm font-semibold flex items-center justify-between"}>
                        <span>
                          {"Tier-1 High (ITAR Regulated)"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"warning"}
                        </span>
                      </div>
                      <label className={"font-label-sm text-label-sm text-on-surface font-medium"}>
                        {"Assigned Verifier"}
                      </label>
                      <div className={"px-2 py-1 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm"}>
                        {" Dr. Elena Rostova (Lead Risk Auditor) "}
                      </div>
                      <label className={"font-label-sm text-label-sm text-on-surface font-medium"}>
                        {"Decision Type"}
                      </label>
                      <div className={"px-2 py-1 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm"}>
                        {" Defense Logistics Authorization "}
                      </div>
                    </div>
                    <button className={"w-full mt-2 py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm hover:opacity-95 transition-opacity"} type={"button"} data-nav="/verification">
                      {" Submit for Multi-Sig Verification "}
                    </button>
                  </div>
                  <div className={"pt-space-xs bg-surface-container-low p-space-sm rounded flex items-center gap-space-sm"}>
                    <div className={"relative w-10 h-10 shrink-0"}>
                      <svg className={"w-10 h-10 -rotate-90"} viewBox={"0 0 36 36"}>
                        <path className={"text-surface-container"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeWidth={"3"} />
                        <path className={"text-tertiary"} d={"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"} fill={"none"} stroke={"currentColor"} strokeDasharray={"94, 100"} strokeLinecap={"round"} strokeWidth={"3"} />
                      </svg>
                      {" "}
                      <span className={"absolute inset-0 flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface"}>
                        {"94%"}
                      </span>
                    </div>
                    <div className={"flex flex-col min-w-0"}>
                      <span className={"font-label-sm text-label-sm text-on-surface font-semibold truncate"}>
                        {"Enclave Integrity Score"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-outline truncate"}>
                        {"3 of 4 sources cryptographically sealed"}
                      </span>
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
