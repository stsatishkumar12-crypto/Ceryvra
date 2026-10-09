// AUTO-GENERATED from Missing-Evidence-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/missing-evidence.js?raw';

const exportsList = ["filterObligations","setWorkspaceState","triggerUploadModal","closeUploadModal","openUploadModalFor","fileSelected","submitEvidenceMock","requestVendorAttestation","requestEmergencyWaiver","triggerReverification","reattestTpm","pingPendingApprovers","compareDiffModal","inspectMerkleProof","reevaluateRules","requestBatchAttestation","setViewMode","showToast"];

export default function MissingEvidence() {
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
          <div className={"flex flex-col w-full pb-space-xl"}>
            <div className={"w-full bg-surface-container-low px-gutter py-space-xs mb-space-md flex flex-wrap items-center justify-between gap-space-sm rounded-lg shadow-sm"}>
              <div className={"flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm"}>
                <span className={"material-symbols-outlined text-[16px] text-primary-container"}>
                  {"tune"}
                </span>
                {" "}
                <span className={"font-semibold uppercase tracking-wider text-on-surface"}>
                  {"Simulate Ledger State:"}
                </span>
              </div>
              <div className={"flex items-center gap-space-xs overflow-x-auto py-0.5"}>
                <button className={"px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1"} id={"btn-state-deficient"} onClick={legacy("setWorkspaceState('deficient')")}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-error-container"} />
                  {" Active (Deficient/Incomplete) "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1"} id={"btn-state-compliant"} onClick={legacy("setWorkspaceState('compliant')")}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"} />
                  {" All Satisfied (Compliant) "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1"} id={"btn-state-evaluating"} onClick={legacy("setWorkspaceState('evaluating')")}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse"} />
                  {" Evaluation In-Progress "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1"} id={"btn-state-error"} onClick={legacy("setWorkspaceState('error')")}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-error"} />
                  {" Ledger Disconnect / Error "}
                </button>
              </div>
              <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"lock_clock"}
                </span>
                {" "}
                <span>
                  {"Epoch #8,941,210 • Read-Only Sandbox Active"}
                </span>
              </div>
            </div>
            <div className={"flex flex-col gap-space-sm mb-space-lg"}>
              <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
                <span className={"hover:text-on-surface cursor-pointer"}>
                  {"Global Aerospace & Defense (US-Gov)"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px] text-outline"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span className={"hover:text-on-surface cursor-pointer"}>
                  {"Evidence & Proofs"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px] text-outline"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span className={"text-on-surface font-semibold"}>
                  {"Evidence Completeness & Obligations"}
                </span>
              </div>
              <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md"}>
                <div className={"flex flex-col max-w-3xl"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm"}>
                      <span className={"material-symbols-outlined text-[22px]"}>
                        {"fact_check"}
                      </span>
                    </div>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                      {" Evidence Completeness & Obligations Engine "}
                    </h1>
                  </div>
                  <p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
                    {" Cryptographic proof verification, missing evidence resolution, and rule-bound obligation solver for autonomous system decisions. "}
                  </p>
                </div>
                <div className={"flex flex-wrap items-center gap-space-xs"}>
                  <button className={"flex items-center gap-1.5 px-space-sm h-9 bg-primary-container text-on-primary rounded font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"} onClick={legacy("triggerUploadModal()")}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"cloud_upload"}
                    </span>
                    {" "}
                    <span>
                      {"Attach Evidence"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm h-9 bg-surface-container-lowest text-on-surface rounded font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all"} onClick={legacy("requestBatchAttestation()")}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"send_time_extension"}
                    </span>
                    {" "}
                    <span>
                      {"Batch Attestations"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm h-9 bg-surface-container-lowest text-on-surface rounded font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all"} onClick={legacy("reevaluateRules()")}>
                    <span className={"material-symbols-outlined text-[18px] text-primary-container"}>
                      {"sync"}
                    </span>
                    {" "}
                    <span>
                      {"Re-evaluate Engine"}
                    </span>
                  </button>
                  {" "}
                  <button className={"flex items-center gap-1.5 px-space-sm h-9 bg-surface-container-lowest text-on-surface rounded font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all"} data-nav="/audit-history">
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"archive"}
                    </span>
                    {" "}
                    <span>
                      {"Audit Package"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md"}>
              <div className={"flex items-center gap-space-md flex-1 min-w-0"}>
                <div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0"}>
                  <span className={"material-symbols-outlined text-primary-container text-[24px]"}>
                    {"gavel"}
                  </span>
                </div>
                <div className={"flex flex-col min-w-0"}>
                  <div className={"flex items-center gap-space-xs flex-wrap"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-outline"}>
                      {"Target Scoped Decision:"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-primary-container font-mono font-semibold"}>
                      {"DEC-14820"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface font-semibold"}>
                      {"v2.4 (Provisional)"}
                    </span>
                  </div>
                  <span className={"font-headline-sm text-headline-sm text-on-surface truncate mt-0.5"}>
                    {" Dual-Use Flight Envelope Autonomous Override Policy "}
                  </span>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm w-full lg:w-auto shrink-0"}>
                <div className={"relative flex-1 lg:w-72"}>
                  <select className={"w-full h-9 pl-3 pr-8 rounded bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none focus:bg-surface-container-lowest appearance-none cursor-pointer"} defaultValue={"Scope: DEC-14820 (Flight Envelope Override)"}>
                    <option>
                      {"Scope: DEC-14820 (Flight Envelope Override)"}
                    </option>
                    <option>
                      {"Scope: DEC-14819 (Target Acquisition Neural Core)"}
                    </option>
                    <option>
                      {"Scope: DEC-14792 (Autonomous Refueling Tether)"}
                    </option>
                    <option>
                      {"View: All Governed Use Cases (42 Active Decisions)"}
                    </option>
                  </select>
                  <span className={"material-symbols-outlined absolute right-2.5 top-2.2 text-[18px] text-outline pointer-events-none"}>
                    {"unfold_more"}
                  </span>
                </div>
                <button className={"px-space-sm h-9 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    {"visibility"}
                  </span>
                  {" "}
                  <span>
                    {"Inspect Enclave"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"bg-error-container text-on-error-container p-space-md lg:p-space-lg rounded-xl shadow-sm mb-space-lg"} id={"status-banner-card"}>
              <div className={"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md"}>
                <div className={"flex items-start gap-space-md"}>
                  <div className={"w-10 h-10 rounded-full bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm mt-0.5"}>
                    <span className={"material-symbols-outlined text-[24px]"}>
                      {"gpp_bad"}
                    </span>
                  </div>
                  <div className={"flex flex-col"}>
                    <div className={"flex flex-wrap items-center gap-space-xs"}>
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error text-on-error uppercase tracking-wider font-semibold"}>
                        {" Hard Blocking Evaluation "}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md text-on-error-container font-semibold"}>
                        {" Policy Engine: Sealed Genesis Blocked "}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-error-container font-bold mt-1"}>
                      {" DECISION STATUS: PROVISIONAL — EVIDENCE INCOMPLETE (4 of 7 Obligations Satisfied • 57% Complete) "}
                    </h2>
                    <p className={"font-body-md text-body-md text-on-error-container opacity-90 mt-1 max-w-4xl"}>
                      {" Dual-Key cryptographic signoff is locked. 1 Deficient/Missing hard obligation and 1 Conflicting telemetry audit block elevation from Provisional to Sealed Genesis. Immediate remediation required prior to enclave deployment. "}
                    </p>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest/90 backdrop-blur text-on-surface p-space-md rounded-lg shadow-sm w-full lg:w-96 shrink-0 flex flex-col gap-1.5 font-mono"}>
                  <div className={"flex items-center justify-between text-label-sm font-label-sm font-sans font-semibold text-outline uppercase tracking-wider"}>
                    <span>
                      {"Obligation Formula"}
                    </span>
                    {" "}
                    <span className={"text-error font-bold font-mono"}>
                      {"EVAL: FAIL"}
                    </span>
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface bg-surface-container-low p-2 rounded leading-relaxed text-[11px]"}>
                    <span className={"text-primary font-semibold"}>
                      {"(ALL"}
                    </span>
                    {" [Core Sec] "}
                    <span className={"text-primary font-semibold"}>
                      {"AND"}
                    </span>
                    {" "}
                    <span className={"text-primary font-semibold"}>
                      {"2-of-3"}
                    </span>
                    {" [Model Verif] "}
                    <span className={"text-primary font-semibold"}>
                      {"AND"}
                    </span>
                    {" "}
                    <span className={"text-error font-semibold"}>
                      {"(IF Subcontractor THEN Key Escrow))"}
                    </span>
                  </div>
                  <div className={"flex items-center justify-between font-label-sm text-label-sm font-sans text-on-surface-variant pt-1"}>
                    <span>
                      {"Primary Bottleneck:"}
                    </span>
                    {" "}
                    <span className={"text-error font-semibold"}>
                      {"OBL-804B (Missing)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-space-sm mb-space-lg"}>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Satisfied"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-tertiary-container"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"4"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-tertiary font-semibold flex items-center"}>
                    <span className={"material-symbols-outlined text-[14px]"}>
                      {"check_circle"}
                    </span>
                    {" 57% "}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Sealed & Attested"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-error"}>
                  <span className={"font-bold"}>
                    {"Missing"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-error"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-error"}>
                    {"1"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-error font-semibold flex items-center"}>
                    <span className={"material-symbols-outlined text-[14px]"}>
                      {"block"}
                    </span>
                    {" Blocks "}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Mandatory Deficit"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Conflicting"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-error-container"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"1"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface-variant font-semibold"}>
                    {"Variance"}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Telemetry Divergence"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Stale / Expired"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-secondary"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"1"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface-variant font-semibold"}>
                    {"-3 Days"}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Epoch Out of Date"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Provisional"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-primary-container"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"1"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-primary font-semibold"}>
                    {"48h Left"}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"In Grace Period"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Superseded"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-outline-variant"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"2"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-outline font-semibold"}>
                    {"Archived"}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Replaced by v2.4"}
                </span>
              </div>
              <div className={"bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container-low transition-colors"}>
                <div className={"flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant"}>
                  <span>
                    {"Awaiting Verifier"}
                  </span>
                  {" "}
                  <span className={"w-2 h-2 rounded-full bg-tertiary-fixed-dim"} />
                </div>
                <div className={"flex items-baseline justify-between mt-2"}>
                  <span className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
                    {"1"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-tertiary font-semibold"}>
                    {"HSM Enclave"}
                  </span>
                </div>
                <span className={"font-label-sm text-label-sm text-outline mt-1 truncate"}>
                  {"Proof Dispatched"}
                </span>
              </div>
            </div>
            <div className={"grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start"}>
              <div className={"xl:col-span-8 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm"}>
                  <div className={"flex flex-col md:flex-row items-center gap-space-sm"}>
                    <div className={"relative flex-1 w-full"}>
                      <span className={"material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline"}>
                        {"search"}
                      </span>
                      {" "}
                      <input className={"w-full h-9 pl-9 pr-4 rounded bg-surface-container-low text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors"} id={"obligation-search"} onInput={legacy("filterObligations()")} placeholder={"Search by Obligation ID (OBL-xxx), Rule, Target Decision, Verifier..."} type={"text"} />
                    </div>
                    <div className={"flex items-center gap-space-xs w-full md:w-auto"}>
                      <div className={"flex items-center bg-surface-container-low p-0.5 rounded text-label-sm font-label-sm"}>
                        <button className={"px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-semibold shadow-sm flex items-center gap-1 transition-all"} id={"btn-view-tree"} onClick={legacy("setViewMode('tree')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"account_tree"}
                          </span>
                          {" "}
                          <span>
                            {"Clause Tree"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-all"} id={"btn-view-flat"} onClick={legacy("setViewMode('flat')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"view_agenda"}
                          </span>
                          {" "}
                          <span>
                            {"Flat Priority"}
                          </span>
                        </button>
                      </div>
                      <button className={"h-9 px-space-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface rounded font-label-sm text-label-sm flex items-center gap-1"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"filter_list"}
                        </span>
                        {" "}
                        <span>
                          {"More Filters"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-wrap items-center gap-space-xs pt-1"}>
                    <span className={"font-label-sm text-label-sm text-outline mr-1 uppercase"}>
                      {"Filter By:"}
                    </span>
                    <select className={"h-7 px-2 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer"} id={"filter-status"} onChange={legacy("filterObligations()")} defaultValue={"deficient"}>
                      <option value={"all"}>
                        {"All Statuses (7)"}
                      </option>
                      <option value={"deficient"}>
                        {"Missing / Deficient (1)"}
                      </option>
                      <option value={"conflicting"}>
                        {"Conflicting (1)"}
                      </option>
                      <option value={"stale"}>
                        {"Stale / Expired (1)"}
                      </option>
                      <option value={"provisional"}>
                        {"Provisional (1)"}
                      </option>
                      <option value={"satisfied"}>
                        {"Satisfied (4)"}
                      </option>
                      <option value={"superseded"}>
                        {"Superseded (2)"}
                      </option>
                    </select>
                    <select className={"h-7 px-2 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer"} id={"filter-logic"} onChange={legacy("filterObligations()")}>
                      <option value={"all"}>
                        {"All Logic Types"}
                      </option>
                      <option value={"conditional"}>
                        {"Conditional (IF / THEN)"}
                      </option>
                      <option value={"all-mandatory"}>
                        {"ALL (Mandatory Hard)"}
                      </option>
                      <option value={"k-of-n"}>
                        {"K-of-N Quorum"}
                      </option>
                      <option value={"weighted"}>
                        {"Weighted Trust Score"}
                      </option>
                      <option value={"ordered"}>
                        {"Ordered Temporal Sequence"}
                      </option>
                    </select>
                    <select className={"h-7 px-2 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer"} id={"filter-priority"} onChange={legacy("filterObligations()")}>
                      <option value={"all"}>
                        {"All Priorities"}
                      </option>
                      <option value={"critical"}>
                        {"Critical / Blocking"}
                      </option>
                      <option value={"high"}>
                        {"High Priority"}
                      </option>
                      <option value={"medium"}>
                        {"Medium Priority"}
                      </option>
                    </select>
                    <span className={"ml-auto font-label-sm text-label-sm text-outline"}>
                      {" Showing "}
                      <strong className={"text-on-surface"} id={"visible-count"}>
                        {"6"}
                      </strong>
                      {" obligations "}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-md"} id={"obligations-container"}>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all hover:shadow-md"} data-logic={"conditional"} data-priority={"critical"} data-status={"deficient"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                          {"OBL-804B: Subcontractor Transit Key Escrow Attestation"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-error-container text-on-error-container flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"error"}
                          </span>
                          {" DEFICIENT (MISSING) "}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs shrink-0"}>
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant font-mono"}>
                          {" CONDITIONAL: IF Subcontractor THEN Mandated "}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-error text-on-error"}>
                          {" CRITICAL / BLOCKING "}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-sm flex flex-wrap items-center gap-y-1 gap-x-space-md text-label-sm font-label-sm text-on-surface-variant font-mono"}>
                      <div>
                        <span className={"text-outline"}>
                          {"Decision:"}
                        </span>
                        {" DEC-14820 (v2.4)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Rule:"}
                        </span>
                        {" #804 (PII/CUI Redaction & Key Transit)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Branch:"}
                        </span>
                        {" Tier-2 Avionics Supply (Raytheon Systems Node #12)"}
                      </div>
                    </div>
                    <div className={"space-y-space-xs mb-space-md"}>
                      <div className={"flex items-start gap-space-xs text-body-md font-body-md text-on-surface"}>
                        <span className={"material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5"}>
                          {"policy"}
                        </span>
                        <div>
                          <strong>
                            {"Mandate Threshold:"}
                          </strong>
                          {" Requires FIPS 140-2 Level 3 HSM public key escrow attestation certificate cryptographically signed within the last 30 calendar days. No valid certificate exists in enclave vault (Previous cert expired Oct 10, 2024). "}
                        </div>
                      </div>
                      <div className={"flex items-start gap-space-xs text-body-sm font-body-sm text-error bg-error-container/40 p-2.5 rounded"}>
                        <span className={"material-symbols-outlined text-[18px] text-error shrink-0"}>
                          {"lock"}
                        </span>
                        <div>
                          <strong>
                            {"Governance Block:"}
                          </strong>
                          {" Prevents Col. Vance and Dir. Sterling from completing dual-key sealing. Autonomy execution remains paused in fallback manual loop. "}
                        </div>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"schedule"}
                        </span>
                        {" "}
                        <span>
                          {"Escalated 14h ago to Subcontractor SecOps"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"} onClick={legacy("requestVendorAttestation('OBL-804B')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"forward_to_inbox"}
                          </span>
                          {" "}
                          <span>
                            {"Request Vendor Attestation"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-surface-container text-error rounded font-label-md text-label-md hover:bg-error-container transition-colors flex items-center gap-1"} onClick={legacy("requestEmergencyWaiver('OBL-804B')")}>
                          <span>
                            {"Request Emergency Waiver"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-primary-container text-on-primary rounded font-label-md text-label-md hover:opacity-90 shadow-sm transition-all flex items-center gap-1"} onClick={legacy("openUploadModalFor('OBL-804B')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"file_upload"}
                          </span>
                          {" "}
                          <span>
                            {"Upload / Attach Proof"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all hover:shadow-md"} data-logic={"ordered"} data-priority={"high"} data-status={"conflicting"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                          {"OBL-462C: Disparate Impact & Bias Stress Test Matrix"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px] text-error"}>
                            {"difference"}
                          </span>
                          {" CONFLICTING PROOFS "}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs shrink-0"}>
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant font-mono"}>
                          {" ORDERED: Pre-training MUST Precede Post-Quantization "}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-variant text-on-surface font-mono"}>
                          {" HIGH PRIORITY "}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-sm flex flex-wrap items-center gap-y-1 gap-x-space-md text-label-sm font-label-sm text-on-surface-variant font-mono"}>
                      <div>
                        <span className={"text-outline"}>
                          {"Decision:"}
                        </span>
                        {" DEC-14820 (v2.4)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Rule:"}
                        </span>
                        {" #912 (Autonomous Trajectory Boundary & Demographic Parity)"}
                      </div>
                    </div>
                    <div className={"space-y-space-xs mb-space-md"}>
                      <p className={"text-body-md font-body-md text-on-surface"}>
                        {" Enclave Verifier Node #04 calculated an adverse impact ratio of "}
                        <span className={"font-mono font-semibold"}>
                          {"0.81"}
                        </span>
                        {", but SecOps Defense Enclave telemetry reported "}
                        <span className={"font-mono font-semibold"}>
                          {"0.77"}
                        </span>
                        {" on epoch block #8,940,211. The difference of "}
                        <span className={"font-mono font-semibold text-error"}>
                          {"0.04"}
                        </span>
                        {" exceeds the mandated ±0.02 threshold tolerance. "}
                      </p>
                      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xs bg-surface-container-low p-space-sm rounded font-mono text-label-sm"}>
                        <div className={"flex flex-col"}>
                          <span className={"text-outline"}>
                            {"Local Node #04 Hash:"}
                          </span>
                          {" "}
                          <span className={"text-on-surface font-semibold truncate"}>
                            {"SHA-256: 0x9f4a88bc3410aef71c9982410a"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-outline"}>
                            {"SecOps Defense Ledger Hash:"}
                          </span>
                          {" "}
                          <span className={"text-error font-semibold truncate"}>
                            {"SHA-256: 0x3b11090ca91ffbe4810239ca55"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"compare_arrows"}
                        </span>
                        {" "}
                        <span>
                          {"Temporal ordering verified; numeric delta unverified"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"} onClick={legacy("compareDiffModal('OBL-462C')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"difference"}
                          </span>
                          {" "}
                          <span>
                            {"Compare Diff & Logs"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-primary-container text-on-primary rounded font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-1"} onClick={legacy("triggerReverification('OBL-462C')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"refresh"}
                          </span>
                          {" "}
                          <span>
                            {"Trigger Re-verification"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all hover:shadow-md"} data-logic={"weighted"} data-priority={"high"} data-status={"stale"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                          {"OBL-915A: Hardware HSM Enclave Key Epoch Certification"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px] text-secondary"}>
                            {"history"}
                          </span>
                          {" STALE / EXPIRED (-3 DAYS) "}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs shrink-0"}>
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant font-mono"}>
                          {" WEIGHTED (Weight: 25% Trust Index) "}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-variant text-on-surface font-mono"}>
                          {" HIGH "}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-sm flex flex-wrap items-center gap-y-1 gap-x-space-md text-label-sm font-label-sm text-on-surface-variant font-mono"}>
                      <div>
                        <span className={"text-outline"}>
                          {"Decision:"}
                        </span>
                        {" DEC-14820"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Rule:"}
                        </span>
                        {" #101 (Cryptographic Epoch Validity)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Hardware:"}
                        </span>
                        {" Nitro TPM Module #04"}
                      </div>
                    </div>
                    <p className={"text-body-md font-body-md text-on-surface mb-space-md"}>
                      {" Key epoch valid for 30 calendar days. Last attested on "}
                      <span className={"font-mono font-semibold"}>
                        {"Sep 12, 2024"}
                      </span>
                      {". Key expired 3 days ago. Causes a 25-point penalty in the Composite Decision Trust Score, dropping the aggregate score below the mandated 85.0 threshold. "}
                    </p>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"key"}
                        </span>
                        {" "}
                        <span>
                          {"Root: Nitro Enclave Attestation Key (NEAK)"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"}>
                          <span>
                            {"Upload Key Rotation Cert"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-primary-container text-on-primary rounded font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-1"} onClick={legacy("reattestTpm('OBL-915A')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"bolt"}
                          </span>
                          {" "}
                          <span>
                            {"Re-attest via Hardware TPM"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all hover:shadow-md"} data-logic={"k-of-n"} data-priority={"medium"} data-status={"provisional"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                          {"OBL-774D: Zero-Leakage Telemetry Boundary Proof"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-primary-container flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"hourglass_top"}
                          </span>
                          {" PROVISIONAL (Grace Period: 48h) "}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs shrink-0"}>
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant font-mono"}>
                          {" K-of-N (2 of 3 Auditors Required) "}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-variant text-on-surface font-mono"}>
                          {" MEDIUM "}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-sm flex flex-wrap items-center gap-y-1 gap-x-space-md text-label-sm font-label-sm text-on-surface-variant font-mono"}>
                      <div>
                        <span className={"text-outline"}>
                          {"Decision:"}
                        </span>
                        {" DEC-14820 (v2.4)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Rule:"}
                        </span>
                        {" #302 (Egress Boundary Isolation)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Signatures:"}
                        </span>
                        {" 1 of 3 Collected (1 Needed)"}
                      </div>
                    </div>
                    <div className={"space-y-space-xs mb-space-md"}>
                      <div className={"grid grid-cols-1 sm:grid-cols-3 gap-space-xs font-label-sm"}>
                        <div className={"bg-surface-container-low p-2 rounded flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                            {"verified"}
                          </span>
                          <div>
                            <div className={"font-semibold text-on-surface"}>
                              {"DARPA SecOps"}
                            </div>
                            <div className={"text-outline text-[10px]"}>
                              {"Verified 2d ago"}
                            </div>
                          </div>
                        </div>
                        <div className={"bg-surface-container-low p-2 rounded flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-outline text-[18px]"}>
                            {"pending"}
                          </span>
                          <div>
                            <div className={"font-semibold text-on-surface"}>
                              {"MITRE Corporation"}
                            </div>
                            <div className={"text-outline text-[10px]"}>
                              {"Pending Signoff"}
                            </div>
                          </div>
                        </div>
                        <div className={"bg-surface-container-low p-2 rounded flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-outline text-[18px]"}>
                            {"pending"}
                          </span>
                          <div>
                            <div className={"font-semibold text-on-surface"}>
                              {"Internal SecOps Node"}
                            </div>
                            <div className={"text-outline text-[10px]"}>
                              {"Dispatched"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"timer"}
                        </span>
                        {" "}
                        <span>
                          {"Expires Oct 27, 2024 at 16:00 UTC"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"} onClick={legacy("pingPendingApprovers('OBL-774D')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"notifications_active"}
                          </span>
                          {" "}
                          <span>
                            {"Ping Pending Approvers"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"}>
                          <span>
                            {"View Current Proof"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all hover:shadow-md"} data-logic={"all-mandatory"} data-priority={"critical"} data-status={"satisfied"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-on-surface"}>
                          {"OBL-101A: Hardware HSM Physical Tamper Enclosure Attestation"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-tertiary font-mono flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"check_circle"}
                          </span>
                          {" SATISFIED "}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs shrink-0"}>
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface-variant font-mono"}>
                          {" ALL (Mandatory Base Proof) "}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-variant text-on-surface font-mono"}>
                          {" CRITICAL "}
                        </span>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-sm flex flex-wrap items-center gap-y-1 gap-x-space-md text-label-sm font-label-sm text-on-surface-variant font-mono"}>
                      <div>
                        <span className={"text-outline"}>
                          {"Decision:"}
                        </span>
                        {" DEC-14820 (v2.4)"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Auditor:"}
                        </span>
                        {" Dr. Elena Rostova"}
                      </div>
                      <div>
                        {"•"}
                      </div>
                      <div>
                        <span className={"text-outline"}>
                          {"Merkle Root:"}
                        </span>
                        {" Block #8,941,209"}
                      </div>
                    </div>
                    <div className={"flex items-center justify-between bg-surface-container-low p-space-sm rounded font-mono text-label-sm mb-space-md"}>
                      <div className={"flex items-center gap-2 truncate"}>
                        <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                          {"verified_user"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"SHA-256: 0x9f4a0129bcce3719002a21104eab89012"}
                        </span>
                      </div>
                      <span className={"text-outline shrink-0 ml-2"}>
                        {"Signed Oct 24, 2024"}
                      </span>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs text-label-sm text-outline"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"lock"}
                        </span>
                        {" "}
                        <span>
                          {"Cryptographically Sealed in Ledger"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"download"}
                          </span>
                          {" "}
                          <span>
                            {"Download Artifact"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1"} onClick={legacy("inspectMerkleProof('OBL-101A')")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"schema"}
                          </span>
                          {" "}
                          <span>
                            {"Inspect Merkle Proof"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"obligation-item bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all opacity-80 hover:opacity-100"} data-logic={"all-mandatory"} data-priority={"medium"} data-status={"superseded"}>
                    <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm"}>
                      <div className={"flex items-center gap-space-xs flex-wrap"}>
                        <span className={"font-mono font-bold text-headline-sm text-outline line-through"}>
                          {"OBL-804A: Legacy Redaction Buffer Cert v1.2"}
                        </span>
                        {" "}
                        <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-outline font-mono"}>
                          {" SUPERSEDED (ARCHIVED) "}
                        </span>
                      </div>
                      <span className={"px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold bg-surface-container text-outline font-mono"}>
                        {" DEPRECATED SCHEMA "}
                      </span>
                    </div>
                    <p className={"text-body-md font-body-md text-on-surface-variant mb-space-sm"}>
                      {" Replaced by "}
                      <span className={"font-mono font-semibold text-on-surface"}>
                        {"OBL-804B"}
                      </span>
                      {" under Decision revision v2.4 to satisfy newly enacted DoD FIPS-140-3 boundary requirements. Historical cryptographic hash preserved in archive. "}
                    </p>
                    <div className={"flex items-center justify-between text-label-sm font-label-sm text-outline pt-1"}>
                      <span>
                        {"Archived at block #8,890,114"}
                      </span>
                      {" "}
                      <button className={"text-on-surface-variant hover:text-on-surface font-semibold flex items-center gap-1"}>
                        <span>
                          {"View Archived Signature"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"open_in_new"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"xl:col-span-4 flex flex-col gap-space-md sticky top-20"}>
                <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-primary-container text-[20px]"}>
                        {"account_tree"}
                      </span>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {"Completeness Logic Tree"}
                      </h3>
                    </div>
                    <span className={"font-label-sm text-label-sm font-mono px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold"}>
                      {"DEC-14820"}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-md"}>
                    {" Live graphical solver verifying deterministic conditions before signing Genesis Token. "}
                  </p>
                  <div className={"bg-surface-container-low p-space-md rounded-lg font-mono text-label-sm space-y-2.5"}>
                    <div className={"flex items-center gap-2 font-bold text-on-surface"}>
                      <span className={"px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-mono text-[10px]"}>
                        {"ROOT GATE"}
                      </span>
                      {" "}
                      <span>
                        {"LOGICAL AND OPERATOR"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between pl-4 text-body-sm border-l-2 border-tertiary-container"}>
                      <div className={"flex items-center gap-2 truncate"}>
                        <span className={"material-symbols-outlined text-tertiary-container text-[16px]"}>
                          {"check_circle"}
                        </span>
                        {" "}
                        <span className={"text-on-surface truncate"}>
                          {"ALL: Core Sec Tamper"}
                        </span>
                      </div>
                      <span className={"text-tertiary font-bold text-[11px] shrink-0"}>
                        {"PASS 100%"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between pl-4 text-body-sm border-l-2 border-primary-container"}>
                      <div className={"flex items-center gap-2 truncate"}>
                        <span className={"material-symbols-outlined text-primary-container text-[16px]"}>
                          {"hourglass_empty"}
                        </span>
                        {" "}
                        <span className={"text-on-surface truncate"}>
                          {"2-of-3: Zero-Leakage"}
                        </span>
                      </div>
                      <span className={"text-primary font-bold text-[11px] shrink-0"}>
                        {"1/3 SIGNED"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between pl-4 text-body-sm border-l-2 border-error"}>
                      <div className={"flex items-center gap-2 truncate"}>
                        <span className={"material-symbols-outlined text-error text-[16px]"}>
                          {"cancel"}
                        </span>
                        {" "}
                        <span className={"text-error font-semibold truncate"}>
                          {"COND: Key Escrow"}
                        </span>
                      </div>
                      <span className={"text-error font-bold text-[11px] shrink-0"}>
                        {"FAIL (DEFICIT)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between pl-4 text-body-sm border-l-2 border-outline"}>
                      <div className={"flex items-center gap-2 truncate"}>
                        <span className={"material-symbols-outlined text-outline text-[16px]"}>
                          {"speed"}
                        </span>
                        {" "}
                        <span className={"text-on-surface truncate"}>
                          {"WEIGHT: Trust Index"}
                        </span>
                      </div>
                      <span className={"text-error font-bold text-[11px] shrink-0"}>
                        {"78 / 85 REQ"}
                      </span>
                    </div>
                  </div>
                  <div className={"mt-space-md pt-space-sm"}>
                    <div className={"flex items-center justify-between text-label-sm font-label-sm mb-1.5"}>
                      <span className={"text-on-surface-variant font-semibold"}>
                        {"Decision Trust Aggregate Score:"}
                      </span>
                      {" "}
                      <span className={"font-mono font-bold text-on-surface"}>
                        {"78.4 / 100"}
                      </span>
                    </div>
                    <div className={"w-full h-2 rounded bg-surface-container overflow-hidden"}>
                      <div className={"h-full bg-error transition-all duration-500"} style={{ width: "78.4%" }} />
                    </div>
                    <div className={"flex items-center justify-between text-[11px] text-outline font-mono mt-1"}>
                      <span>
                        {"Minimum Seal Threshold: 85.0"}
                      </span>
                      {" "}
                      <span className={"text-error font-semibold"}>
                        {"-6.6 Points Deficit"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-primary-container text-[20px]"}>
                        {"checklist"}
                      </span>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                        {"Fast Remediation Checklist"}
                      </h3>
                    </div>
                    <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-semibold"}>
                      {"2 Actions Required"}
                    </span>
                  </div>
                  <div className={"space-y-space-xs font-label-md text-label-md"}>
                    <div className={"p-space-sm rounded bg-surface-container-low flex items-start gap-space-xs"}>
                      <input className={"mt-1 rounded cursor-pointer"} id={"rem-1"} type={"checkbox"} />
                      {" "}
                      <label className={"flex-1 cursor-pointer"} htmlFor={"rem-1"}>
                        <div className={"font-semibold text-on-surface"}>
                          {"Attach Subcontractor Transit Key Escrow"}
                        </div>
                        <div className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                          {"Satisfies OBL-804B (est. 10m)"}
                        </div>
                      </label>
                      {" "}
                      <button className={"text-primary-container hover:underline text-[12px] font-semibold shrink-0"} onClick={legacy("openUploadModalFor('OBL-804B')")}>
                        {"Upload"}
                      </button>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex items-start gap-space-xs"}>
                      <input className={"mt-1 rounded cursor-pointer"} id={"rem-2"} type={"checkbox"} />
                      {" "}
                      <label className={"flex-1 cursor-pointer"} htmlFor={"rem-2"}>
                        <div className={"font-semibold text-on-surface"}>
                          {"Re-run Bias Stress Matrix Test"}
                        </div>
                        <div className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                          {"Resolves telemetry discrepancy (est. 25m)"}
                        </div>
                      </label>
                      {" "}
                      <button className={"text-primary-container hover:underline text-[12px] font-semibold shrink-0"} onClick={legacy("triggerReverification('OBL-462C')")}>
                        {"Run"}
                      </button>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container-low flex items-start gap-space-xs opacity-75"}>
                      <input className={"mt-1 rounded cursor-pointer"} id={"rem-3"} type={"checkbox"} />
                      {" "}
                      <label className={"flex-1 cursor-pointer"} htmlFor={"rem-3"}>
                        <div className={"font-semibold text-on-surface"}>
                          {"Trigger Nitro TPM Epoch Renewal"}
                        </div>
                        <div className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                          {"Restores 25 trust points (est. 2m)"}
                        </div>
                      </label>
                      {" "}
                      <button className={"text-primary-container hover:underline text-[12px] font-semibold shrink-0"} onClick={legacy("reattestTpm('OBL-915A')")}>
                        {"Attest"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-low transition-all"} id={"quick-dropzone"}>
                  <div className={"w-12 h-12 rounded-full bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary text-primary-container flex items-center justify-center transition-all mb-space-xs"}>
                    <span className={"material-symbols-outlined text-[24px]"}>
                      {"cloud_upload"}
                    </span>
                  </div>
                  <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                    {"Drop Attestation Bundle Here"}
                  </h4>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1"}>
                    {" Supports .pem, .cose, .spdx, .json proofs up to 50MB. Auto-associates with missing obligations via Merkle metadata. "}
                  </p>
                  <button className={"mt-space-sm px-space-sm h-8 bg-surface-container text-on-surface rounded font-label-md text-label-md group-hover:bg-surface-container-lowest transition-colors shadow-sm"} onClick={legacy("triggerUploadModal()")}>
                    {" Browse Secure Enclave Files "}
                  </button>
                </div>
              </div>
            </div>
            <div className={"fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm hidden items-center justify-center p-4"} id={"upload-modal"}>
              <div className={"bg-surface-container-lowest rounded-xl max-w-xl w-full p-space-lg shadow-xl relative animate-in fade-in zoom-in-95"}>
                <div className={"flex items-center justify-between pb-space-sm mb-space-md"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-primary-container text-[24px]"}>
                      {"shield"}
                    </span>
                    <h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
                      {"Attach Cryptographic Evidence"}
                    </h3>
                  </div>
                  <button className={"w-8 h-8 rounded hover:bg-surface-container flex items-center justify-center text-outline"} onClick={legacy("closeUploadModal()")}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className={"space-y-space-md"}>
                  <div>
                    <label className={"block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1"}>
                      {"Target Obligation Assignment"}
                    </label>
                    <select className={"w-full h-10 px-3 rounded bg-surface-container-low text-body-md font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest"} id={"modal-obligation-select"} defaultValue={"OBL-804B"}>
                      <option value={"OBL-804B"}>
                        {"OBL-804B: Subcontractor Transit Key Escrow Attestation (Mandatory Deficient)"}
                      </option>
                      <option value={"OBL-462C"}>
                        {"OBL-462C: Disparate Impact & Bias Stress Test Matrix"}
                      </option>
                      <option value={"OBL-915A"}>
                        {"OBL-915A: Hardware HSM Enclave Key Epoch Certification"}
                      </option>
                      <option value={"OBL-774D"}>
                        {"OBL-774D: Zero-Leakage Telemetry Boundary Proof"}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className={"block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1"}>
                      {"Proof Artifact Type"}
                    </label>
                    <div className={"grid grid-cols-2 gap-space-xs font-label-md"}>
                      <label className={"p-2.5 rounded bg-surface-container-low flex items-center gap-2 cursor-pointer hover:bg-surface-container"}>
                        <input defaultChecked className={"text-primary-container"} name={"proof_type"} type={"radio"} />
                        {" "}
                        <span>
                          {"COSE Signed Signature"}
                        </span>
                      </label>
                      {" "}
                      <label className={"p-2.5 rounded bg-surface-container-low flex items-center gap-2 cursor-pointer hover:bg-surface-container"}>
                        <input className={"text-primary-container"} name={"proof_type"} type={"radio"} />
                        {" "}
                        <span>
                          {"FIPS 140-3 PEM Certificate"}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className={"p-space-lg rounded-lg bg-surface-container-low flex flex-col items-center text-center"}>
                    <span className={"material-symbols-outlined text-[32px] text-outline mb-2"}>
                      {"upload_file"}
                    </span>
                    {" "}
                    <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                      {"Select artifact from secure workstation"}
                    </span>
                    {" "}
                    <span className={"text-body-sm font-body-sm text-outline mt-0.5"}>
                      {"Drag and drop file or click to select"}
                    </span>
                    {" "}
                    <input className={"hidden"} id={"file-input-actual"} onChange={legacy("fileSelected(this)")} type={"file"} />
                    {" "}
                    <button className={"mt-3 px-space-sm h-8 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded shadow-sm hover:bg-surface-container"} onClick={legacy("document.getElementById('file-input-actual').click()")} type={"button"}>
                      {" Browse File "}
                    </button>
                    {" "}
                    <span className={"font-mono text-label-sm text-primary font-semibold mt-2 hidden"} id={"selected-file-label"}>
                      {"raytheon-fips-escrow-oct2024.cose"}
                    </span>
                  </div>
                  <div className={"flex items-center justify-between pt-space-xs"}>
                    <button className={"px-space-md h-9 text-on-surface-variant hover:text-on-surface font-label-md text-label-md"} onClick={legacy("closeUploadModal()")} type={"button"}>
                      {" Cancel "}
                    </button>
                    {" "}
                    <button className={"px-space-md h-9 bg-primary-container text-on-primary rounded font-label-md text-label-md shadow-sm hover:opacity-90 flex items-center gap-1.5"} onClick={legacy("submitEvidenceMock()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"verified"}
                      </span>
                      {" "}
                      <span>
                        {"Cryptographically Attest & Ingest"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={"fixed bottom-6 right-6 z-50 hidden bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm"} id={"toast-notification"}>
              <span className={"material-symbols-outlined text-primary-container text-[20px]"} id={"toast-icon"}>
                {"info"}
              </span>
              {" "}
              <span className={"font-label-md text-label-md"} id={"toast-message"}>
                {"Notification message"}
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
