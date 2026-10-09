// AUTO-GENERATED from Recovery-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/recovery.js?raw';

const exportsList = ["switchWorkspaceState","executeActionOne","triggerMasterExecution","signQuorumModal","previewDiffModal","closeModal","confirmModalAction","simulateDryRun","exportManifestJSON"];

export default function Recovery() {
  useLegacyScript(script, exportsList);
  return (
    <>
      <div className={"pl-72"}>
        <header className={"fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter"}>
          <div className={"flex items-center gap-space-md"}>
            <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
              <span className={"text-on-surface-variant"}>
                {"Global Aerospace & Defense (US-Gov)"}
              </span>
              <span className={"material-symbols-outlined text-[14px]"}>
                {"chevron_right"}
              </span>
              <span className={"text-on-surface font-semibold"}>
                {"Governance Overview"}
              </span>
            </div>
            <div className={"hidden lg:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-lg text-on-surface-variant"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                {"search"}
              </span>
              <span className={"font-body-sm text-body-sm"}>
                {"Search audit ledger or policies..."}
              </span>
              <kbd className={"px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm"}>
                {"⌘K"}
              </kbd>
            </div>
          </div>
          <div className={"flex items-center gap-space-md"}>
            <div className={"hidden md:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant"}>
              <span className={"w-2 h-2 rounded-full bg-tertiary-container"} />
              <span className={"font-label-sm text-label-sm font-semibold"}>
                {"IL • Verified"}
              </span>
              <span className={"font-label-sm text-label-sm text-outline"}>
                {"|"}
              </span>
              <span className={"font-label-sm text-label-sm"}>
                {"Hardware TPM Sealed"}
              </span>
            </div>
            <button className={"relative p-space-xs rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"}>
              <span className={"material-symbols-outlined text-[20px]"}>
                {"notifications"}
              </span>
              <span className={"absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"} />
            </button>
            <button className={"px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-space-xs"} data-nav="/decision-record?new=decision">
              <span className={"material-symbols-outlined text-[18px]"}>
                {"add"}
              </span>
              <span>
                {"New Decision"}
              </span>
            </button>
            <div className={"flex items-center gap-space-sm pl-space-sm"}>
              <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center"}>
                <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                  {"person"}
                </span>
              </div>
              <div className={"hidden xl:flex flex-col"}>
                <span className={"font-label-md text-label-md text-on-surface font-semibold leading-tight"}>
                  {"Dr. Elena Rostova"}
                </span>
                <span className={"font-body-sm text-body-sm text-on-surface-variant leading-tight"}>
                  {"Lead AI Risk Auditor & Executor"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className={"relative pt-16 bg-background w-full min-h-screen px-gutter py-margin"}>
          <div className={"flex flex-col w-full"}>
            <div className={"flex flex-col gap-space-sm mb-space-lg"}>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm pb-space-sm"}>
                <div className={"flex items-center gap-space-sm"}>
                  <span className={"w-2.5 h-2.5 rounded-full bg-error animate-ping"} />
                  {" "}
                  <span className={"font-headline-sm text-headline-sm tracking-tight text-on-surface"}>
                    {"Controlled Recovery Execution Workspace"}
                  </span>
                  {" "}
                  <span className={"px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase tracking-wider font-bold"}>
                    {"CRITICAL TIER 1 • FLIGHT GATE LOCKED"}
                  </span>
                </div>
                <div className={"flex items-center p-0.5 rounded-xl bg-surface-container gap-1 shadow-sm overflow-x-auto max-w-full"} id={"state-switcher-bar"}>
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all bg-surface-container-lowest text-primary font-semibold shadow-sm flex items-center gap-1"} id={"tab-active"} onClick={legacy("switchWorkspaceState('active')")}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-primary"} />
                    {" "}
                    <span>
                      {"Active Recovery"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1"} id={"tab-drawer"} onClick={legacy("switchWorkspaceState('drawer')")}>
                    <span>
                      {"Action Detail Inspector"}
                    </span>
                    {" "}
                    <span className={"px-1 py-0.2 rounded bg-surface-container-highest text-on-surface font-label-sm text-[10px]"}>
                      {"Active"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1"} id={"tab-verification"} onClick={legacy("switchWorkspaceState('verification')")}>
                    <span>
                      {"Awaiting Verification"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1"} id={"tab-blocked"} onClick={legacy("switchWorkspaceState('blocked')")}>
                    <span className={"material-symbols-outlined text-[13px] text-error"}>
                      {"lock"}
                    </span>
                    {" "}
                    <span>
                      {"Execution Blocked"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1"} id={"tab-denied"} onClick={legacy("switchWorkspaceState('denied')")}>
                    <span>
                      {"Permission Denied"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1"} id={"tab-cleared"} onClick={legacy("switchWorkspaceState('cleared')")}>
                    <span className={"material-symbols-outlined text-[13px] text-tertiary-container"}>
                      {"verified"}
                    </span>
                    {" "}
                    <span>
                      {"All Cleared (Empty)"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md"}>
                <div className={"flex flex-wrap items-center gap-x-space-lg gap-y-space-xs"}>
                  <div className={"flex flex-col"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Recovery Case ID"}
                    </span>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"font-label-lg text-label-lg font-bold text-primary font-mono"}>
                        {"REC-2024-9942-R01"}
                      </span>
                      {" "}
                      <button className={"text-on-surface-variant hover:text-primary transition-colors"} title={"Copy Case ID"}>
                        <span className={"material-symbols-outlined text-[15px]"}>
                          {"content_copy"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"h-8 w-px bg-surface-container-high hidden sm:block"} />
                  <div className={"flex flex-col"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Triggering Decision"}
                    </span>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-primary"}>
                        {"policy"}
                      </span>
                      {" "}
                      <span className={"font-body-md text-body-md font-semibold text-on-surface"}>
                        {"DEC-14820"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant truncate max-w-xs"}>
                        {"(Autonomous Flight Envelope Override v2.4 Draft)"}
                      </span>
                    </div>
                  </div>
                  <div className={"h-8 w-px bg-surface-container-high hidden sm:block"} />
                  <div className={"flex flex-col"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Root Incident Event"}
                    </span>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"w-2 h-2 rounded-full bg-error"} />
                      {" "}
                      <span className={"font-body-md text-body-md font-semibold text-on-surface"}>
                        {"EVT-9041"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-error truncate max-w-xs font-mono"}>
                        {"Subcontractor HSM Escrow Revocation"}
                      </span>
                    </div>
                  </div>
                  <div className={"h-8 w-px bg-surface-container-high hidden sm:block"} />
                  <div className={"flex flex-col"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Target Enclave Boundary"}
                    </span>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-secondary"}>
                        {"encrypted"}
                      </span>
                      {" "}
                      <span className={"font-body-md text-body-md font-semibold text-on-surface"}>
                        {"SEC-9942"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface font-mono"}>
                        {"FIPS 140-3 L3"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"flex items-center gap-space-xs shrink-0 self-end lg:self-center"}>
                  <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 shadow-sm"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"history"}
                    </span>
                    {" "}
                    <span>
                      {"Incident Log"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 shadow-sm"} data-nav="/consequence-graph">
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"account_tree"}
                    </span>
                    {" "}
                    <span>
                      {"Dependency Graph"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container shadow-sm overflow-x-auto"}>
                <div className={"flex items-center justify-between min-w-[880px] gap-space-xs"}>
                  <div className={"flex items-center gap-space-xs flex-1"}>
                    <div className={"w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"check"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                        {"1. IMPACT TRIAGE"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-tertiary-container font-semibold"}>
                        {"Completed • Deterministic"}
                      </span>
                    </div>
                    <div className={"flex-1 h-0.5 bg-tertiary-container mx-space-xs"} />
                  </div>
                  <div className={"flex items-center gap-space-xs flex-1"}>
                    <div className={"w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm ring-4 ring-primary/20"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"calculate"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-bold text-primary"}>
                        {"2. MINIMUM RECOVERY"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-primary font-medium"}>
                        {"Calculated • 2 Obligations"}
                      </span>
                    </div>
                    <div className={"flex-1 h-0.5 bg-primary mx-space-xs"} />
                  </div>
                  <div className={"flex items-center gap-space-xs flex-1"}>
                    <div className={"w-7 h-7 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/40"}>
                      <span className={"font-label-sm text-label-sm font-bold font-mono"}>
                        {"3"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                        {"3. KEY QUORUM"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-on-surface-variant font-mono"}>
                        {"1/2 PIV Signed"}
                      </span>
                    </div>
                    <div className={"flex-1 h-0.5 bg-outline-variant mx-space-xs"} />
                  </div>
                  <div className={"flex items-center gap-space-xs flex-1"}>
                    <div className={"w-7 h-7 rounded-full bg-surface-container-lowest text-on-surface-variant flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"font-label-sm text-label-sm font-bold font-mono"}>
                        {"4"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-semibold text-on-surface-variant"}>
                        {"4. EXECUTION"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-on-surface-variant"}>
                        {"Armed • Gate Primed"}
                      </span>
                    </div>
                    <div className={"flex-1 h-0.5 bg-outline-variant mx-space-xs"} />
                  </div>
                  <div className={"flex items-center gap-space-xs flex-1"}>
                    <div className={"w-7 h-7 rounded-full bg-surface-container-lowest text-on-surface-variant flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"font-label-sm text-label-sm font-bold font-mono"}>
                        {"5"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-semibold text-on-surface-variant"}>
                        {"5. VERIFICATION"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-on-surface-variant"}>
                        {"Awaiting Gate Clearance"}
                      </span>
                    </div>
                    <div className={"flex-1 h-0.5 bg-outline-variant mx-space-xs"} />
                  </div>
                  <div className={"flex items-center gap-space-xs shrink-0"}>
                    <div className={"w-7 h-7 rounded-full bg-surface-container-lowest text-on-surface-variant flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"lock"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-sm text-label-sm font-semibold text-on-surface-variant"}>
                        {"6. REVALIDATION"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-[11px] text-on-surface-variant"}>
                        {"Genesis Merkle Seal"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-md"}>
              <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                <div className={"flex flex-col"}>
                  <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                    {"Nodes Traversed"}
                  </span>
                  {" "}
                  <span className={"font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight mt-0.5"}>
                    {"14"}
                  </span>
                  {" "}
                  <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Directed acyclic audit graph"}
                  </span>
                </div>
                <div className={"w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary"}>
                  <span className={"material-symbols-outlined text-[26px]"}>
                    {"lan"}
                  </span>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between ring-2 ring-primary/20"}>
                <div className={"flex flex-col"}>
                  <span className={"font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold"}>
                    {"Mandated Actions"}
                  </span>
                  <div className={"flex items-baseline gap-space-xs mt-0.5"}>
                    <span className={"font-headline-xl text-headline-xl font-bold text-primary tracking-tight"}>
                      {"2"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold"}>
                      {"Minimal Path"}
                    </span>
                  </div>
                  <span className={"font-body-sm text-body-sm text-on-surface font-medium"}>
                    {"Strict dependency closure"}
                  </span>
                </div>
                <div className={"w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm"}>
                  <span className={"material-symbols-outlined text-[26px]"}>
                    {"play_circle"}
                  </span>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                <div className={"flex flex-col"}>
                  <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                    {"Pruned Re-runs"}
                  </span>
                  <div className={"flex items-baseline gap-space-xs mt-0.5"}>
                    <span className={"font-headline-xl text-headline-xl font-bold text-tertiary-container tracking-tight"}>
                      {"5"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-on-surface-variant font-medium"}>
                      {"Tasks Suppressed"}
                    </span>
                  </div>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Provably uncoupled from root"}
                  </span>
                </div>
                <div className={"w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-tertiary-container"}>
                  <span className={"material-symbols-outlined text-[26px]"}>
                    {"filter_alt_off"}
                  </span>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                <div className={"flex flex-col"}>
                  <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                    {"Shielded Systems"}
                  </span>
                  <div className={"flex items-baseline gap-space-xs mt-0.5"}>
                    <span className={"font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight"}>
                      {"10"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold font-mono"}>
                      {"Isolated"}
                    </span>
                  </div>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Zero weights re-attestation"}
                  </span>
                </div>
                <div className={"w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary"}>
                  <span className={"material-symbols-outlined text-[26px]"}>
                    {"verified_user"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"flex flex-col gap-space-xs mb-space-lg"}>
              <div className={"p-space-md rounded-xl bg-surface-container flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm"}>
                <div className={"flex items-start gap-space-md"}>
                  <div className={"w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm"}>
                    <span className={"material-symbols-outlined text-[22px]"}>
                      {"auto_fix_high"}
                    </span>
                  </div>
                  <div className={"flex flex-col"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Calculated Minimum Sufficient Recovery Guarantee"}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-mono font-bold shadow-sm"}>
                        {"CER-ALGO-MINPATH"}
                      </span>
                    </div>
                    <p className={"font-body-md text-body-md text-on-surface-variant mt-0.5"}>
                      {" Ceryvra's deterministic consequence traversal pruned "}
                      <strong className={"text-on-surface font-semibold"}>
                        {"5 redundant model retraining runs and validation suites"}
                      </strong>
                      {" by proving that their causal ancestry tree does not intersect with revoked transit certificate "}
                      <span className={"font-mono text-on-surface bg-surface-container-lowest px-1 rounded"}>
                        {"0x9f4a...2110"}
                      </span>
                      {". Recovery is constrained strictly to 2 root obligations. "}
                    </p>
                  </div>
                </div>
                <div className={"flex items-center gap-space-xs shrink-0 self-stretch md:self-auto justify-end"}>
                  <button className={"px-space-md py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 shadow-sm"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"visibility"}
                    </span>
                    {" "}
                    <span>
                      {"Inspect Prune Proof"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"p-space-md rounded-xl bg-error-container/40 text-on-surface flex items-start gap-space-md shadow-sm"}>
                <div className={"w-8 h-8 rounded-lg bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm mt-0.5"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"gavel"}
                  </span>
                </div>
                <div className={"flex flex-col flex-1"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"font-label-lg text-label-lg font-bold text-on-error-container uppercase tracking-wide"}>
                      {"GOVERNANCE BARRIER • INDEPENDENT RE-VALIDATION ENFORCED"}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed"}>
                    {" Executing these actions will "}
                    <strong className={"text-on-surface"}>
                      {"NOT"}
                    </strong>
                    {" automatically lift flight envelope locks or mark recovery complete. The system will transition to "}
                    <span className={"font-mono font-semibold text-primary"}>
                      {"Stage 5: Independent Verification"}
                    </span>
                    {", generating an unsealed Merkle proof delta that requires cryptographic counter-attestation by an authorized independent risk officer before DEC-14820 is re-sealed into active flight status. "}
                  </p>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"}>
              <div className={"lg:col-span-7 flex flex-col gap-space-lg"}>
                <div className={"flex items-center justify-between pb-space-xs"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                      {"Ordered Execution Pipeline"}
                    </span>
                    {" "}
                    <span className={"px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-mono"}>
                      {"2 Actions (Sequential)"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"schedule"}
                    </span>
                    {" "}
                    <span>
                      {"Est. Latency: 42s Execution + Review"}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-md"}>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md transition-all hover:shadow-lg relative overflow-hidden"} id={"action-card-1"}>
                    <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-primary"} />
                    <div className={"flex items-start justify-between gap-space-sm pl-space-xs"}>
                      <div className={"flex items-start gap-space-sm"}>
                        <div className={"w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold font-mono text-label-lg shadow-sm"}>
                          {" 01 "}
                        </div>
                        <div className={"flex flex-col"}>
                          <div className={"flex flex-wrap items-center gap-space-xs"}>
                            <span className={"font-label-sm text-label-sm font-mono text-primary font-bold"}>
                              {"ACT-01"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold uppercase"}>
                              {"Prerequisite Step"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary-container font-semibold flex items-center gap-1"}>
                              <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                              {" APPROVED & ARMED "}
                            </span>
                          </div>
                          <span className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1"}>
                            {" Ingest Renewed Raytheon HSM 4096-bit RSA Transit Key Certificate "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm"}>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Target Obligation"}
                        </span>
                        {" "}
                        <span className={"font-mono text-on-surface font-semibold flex items-center gap-1 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[14px] text-primary"}>
                            {"verified"}
                          </span>
                          {" OBL-804B (Subcontractor Transit Key Escrow) "}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Required Authority"}
                        </span>
                        {" "}
                        <span className={"text-on-surface font-semibold flex items-center gap-1 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[14px] text-secondary"}>
                            {"badge"}
                          </span>
                          {" SecOps Cryptographic Custodian (Col. M. Vance) "}
                        </span>
                      </div>
                      <div className={"flex flex-col md:col-span-2"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Incident Causal Link"}
                        </span>
                        <p className={"text-on-surface-variant mt-0.5"}>
                          {" Revoked certificate "}
                          <span className={"font-mono text-error font-medium bg-surface-container-lowest px-1 rounded"}>
                            {"0x9f4a...2110"}
                          </span>
                          {" triggered enclave isolation. Ingesting validated X.509 bundle "}
                          <span className={"font-mono text-tertiary-container font-medium bg-surface-container-lowest px-1 rounded"}>
                            {"0x3b11...ca55"}
                          </span>
                          {" satisfies hardware TPM PCR[07] requirements. "}
                        </p>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"material-symbols-outlined text-[18px] text-tertiary-container"}>
                          {"file_download_done"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"Payload: raytheon-transit-ca-v4.pem (Verified FIPS 140-3)"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1"} onClick={legacy("previewDiffModal()")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"difference"}
                          </span>
                          {" "}
                          <span>
                            {"Inspect Cert Diff"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm flex items-center gap-1.5"} id={"btn-exec-01"} onClick={legacy("executeActionOne()")}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"lock_reset"}
                          </span>
                          {" "}
                          <span>
                            {"Execute Key Injection"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md relative overflow-hidden opacity-95"} id={"action-card-2"}>
                    <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-container"} />
                    <div className={"flex items-start justify-between gap-space-sm pl-space-xs"}>
                      <div className={"flex items-start gap-space-sm"}>
                        <div className={"w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-bold font-mono text-label-lg shadow-sm"}>
                          {" 02 "}
                        </div>
                        <div className={"flex flex-col"}>
                          <div className={"flex flex-wrap items-center gap-space-xs"}>
                            <span className={"font-label-sm text-label-sm font-mono text-secondary font-bold"}>
                              {"ACT-02"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold uppercase"}>
                              {"Dependent on ACT-01"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[12px]"}>
                                {"hourglass_top"}
                              </span>
                              {" AWAITING ACT-01 & DUAL-KEY QUORUM "}
                            </span>
                          </div>
                          <span className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-1"}>
                            {" Deterministic Re-execution of Rule #804 (PII/CUI Redaction & Zero-Trust Transit) "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm"}>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Bound Rule Target"}
                        </span>
                        {" "}
                        <span className={"font-mono text-on-surface font-semibold flex items-center gap-1 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[14px] text-primary"}>
                            {"rule"}
                          </span>
                          {" Bound Rule #804 v3.1 (WASM Enclave Sandbox) "}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Dual-Signoff Requirement"}
                        </span>
                        {" "}
                        <span className={"text-on-surface font-semibold flex items-center gap-1 mt-0.5"}>
                          <span className={"material-symbols-outlined text-[14px] text-secondary"}>
                            {"group"}
                          </span>
                          {" Dr. Elena Rostova & Dir. Sarah Sterling "}
                        </span>
                      </div>
                      <div className={"flex flex-col md:col-span-2"}>
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Validation Gate Requirement"}
                        </span>
                        <p className={"text-on-surface-variant mt-0.5"}>
                          {" Re-validates zero-trust egress filter against new transit key to verify telemetry latency remains within "}
                          <strong>
                            {"12ms threshold"}
                          </strong>
                          {" under simulated Tier-1 jamming. "}
                        </p>
                      </div>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-sm pt-space-xs"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"material-symbols-outlined text-[18px] text-on-surface-variant"}>
                          {"lock_clock"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"Execution gate locked until ACT-01 successfully seals Merkle leaf."}
                        </span>
                      </div>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"science"}
                          </span>
                          {" "}
                          <span>
                            {"Simulate Sandbox Run"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md opacity-60 cursor-not-allowed flex items-center gap-1.5"} disabled id={"btn-exec-02"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"lock"}
                          </span>
                          {" "}
                          <span>
                            {"Execute Re-run #804"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md"}>
                  <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <div className={"w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"shield"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                          {"Cryptographically Shielded / Pruned Systems"}
                        </span>
                        {" "}
                        <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Deterministic Proof of Decoupling (No action required)"}
                        </span>
                      </div>
                    </div>
                    <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono font-semibold"}>
                      {"3 Systems Preserved"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-xs"}>
                      <div className={"flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-tertiary-container mt-0.5"}>
                          {"check_circle"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-space-xs"}>
                            <span className={"font-body-md text-body-md font-bold text-on-surface font-mono"}>
                              {"UC-8821"}
                            </span>
                            {" "}
                            <span className={"font-body-md text-body-md text-on-surface font-semibold"}>
                              {"Avionics Cold-Chain Supply Telemetry"}
                            </span>
                            {" "}
                            <span className={"px-1.5 py-0.2 rounded bg-tertiary-container/15 text-tertiary-container font-label-sm text-label-sm font-semibold"}>
                              {"UNTOUCHED"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {" Merkle root "}
                            <span className={"font-mono text-on-surface bg-surface-container-lowest px-1 rounded"}>
                              {"sha256(root_41)"}
                            </span>
                            {" provably decoupled from EVT-9041 branch. No weights re-training or re-attestation required. "}
                          </p>
                        </div>
                      </div>
                      <span className={"font-label-sm text-label-sm font-mono text-on-surface-variant shrink-0 self-end md:self-center"}>
                        {"Prune Hash: 0x8a9f...e01"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-xs"}>
                      <div className={"flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-tertiary-container mt-0.5"}>
                          {"check_circle"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-space-xs"}>
                            <span className={"font-body-md text-body-md font-bold text-on-surface font-mono"}>
                              {"SYS-7719"}
                            </span>
                            {" "}
                            <span className={"font-body-md text-body-md text-on-surface font-semibold"}>
                              {"Telemetry Anomaly Auto-Classifier"}
                            </span>
                            {" "}
                            <span className={"px-1.5 py-0.2 rounded bg-tertiary-container/15 text-tertiary-container font-label-sm text-label-sm font-semibold"}>
                              {"UNTOUCHED"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {" Model weights frozen in SEC-1088 Enclave Partition B. Zero casualty verified across 4,200 test inference cycles. "}
                          </p>
                        </div>
                      </div>
                      <span className={"font-label-sm text-label-sm font-mono text-on-surface-variant shrink-0 self-end md:self-center"}>
                        {"Prune Hash: 0x11ce...99a"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-xs"}>
                      <div className={"flex items-start gap-space-sm"}>
                        <span className={"material-symbols-outlined text-[18px] text-primary mt-0.5"}>
                          {"pause_circle"}
                        </span>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-space-xs"}>
                            <span className={"font-body-md text-body-md font-bold text-on-surface font-mono"}>
                              {"AGT-4402"}
                            </span>
                            {" "}
                            <span className={"font-body-md text-body-md text-on-surface font-semibold"}>
                              {"Flight Trajectory Realtime Optimizer"}
                            </span>
                            {" "}
                            <span className={"px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold"}>
                              {"HOT-STANDBY"}
                            </span>
                          </div>
                          <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>
                            {" Autonomy suspended by hardware gate; will auto-unquarantine once Rule #804 verifies without requiring model re-calibration. "}
                          </p>
                        </div>
                      </div>
                      <span className={"font-label-sm text-label-sm font-mono text-on-surface-variant shrink-0 self-end md:self-center"}>
                        {"Standby TPM: PCR[14]"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-5 flex flex-col gap-space-lg"} id={"detail-inspector-column"}>
                <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md"}>
                  <div className={"flex items-center justify-between pb-space-xs"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <div className={"w-7 h-7 rounded bg-primary/10 flex items-center justify-center text-primary"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"manage_search"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                          {"Action Detail Inspector"}
                        </span>
                        {" "}
                        <span className={"font-body-sm text-body-sm text-on-surface-variant font-mono"}>
                          {"ACT-01 • Ingest Renewed Raytheon HSM Key"}
                        </span>
                      </div>
                    </div>
                    <span className={"px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold"}>
                      {"Target Obligation OBL-804B"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"Cryptographic Artifact Diff"}
                    </span>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs font-mono text-body-sm"}>
                      <div className={"p-space-xs rounded bg-error-container/30 flex flex-col gap-0.5"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-error font-bold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[13px]"}>
                              {"cancel"}
                            </span>
                            {" REVOKED TRANSIT KEY (EVT-9041) "}
                          </span>
                          {" "}
                          <span className={"text-[11px] text-error font-medium"}>
                            {"REVOCATION CRL #991"}
                          </span>
                        </div>
                        <span className={"text-on-surface text-[12px] truncate"}>
                          {"SHA-256: 0x9f4a7c88120b41aa9d00921104e1bc2a0f81d"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant text-[11px]"}>
                          {"Validity expired: 2024-10-14 11:20:00 UTC"}
                        </span>
                      </div>
                      <div className={"p-space-xs rounded bg-tertiary-container/20 flex flex-col gap-0.5"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-tertiary-container font-bold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[13px]"}>
                              {"verified"}
                            </span>
                            {" INCOMING CERTIFIED REPLACEMENT "}
                          </span>
                          {" "}
                          <span className={"text-[11px] text-tertiary-container font-medium"}>
                            {"SIGNED & ATTESTED"}
                          </span>
                        </div>
                        <span className={"text-on-surface text-[12px] truncate"}>
                          {"SHA-256: 0x3b11ef949021da44e05b76ca55848bb019df7"}
                        </span>
                        {" "}
                        <span className={"text-on-surface-variant text-[11px]"}>
                          {"Valid through: 2026-10-14 11:20:00 UTC (FIPS 140-3 L3)"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                        {"Dual-Key Quorum Verification"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm font-mono text-primary font-bold"}>
                        {"1 / 2 Signatures Acquired"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-xs"}>
                      <div className={"p-space-sm rounded-lg bg-surface-container flex items-center justify-between"}>
                        <div className={"flex items-center gap-space-sm"}>
                          <div className={"w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold text-label-sm"}>
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"check"}
                            </span>
                          </div>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Col. Marcus Vance"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-[11px] text-on-surface-variant"}>
                              {"Air Force Enclave Liaison • PIV-CAC Validated"}
                            </span>
                          </div>
                        </div>
                        <span className={"px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary-container font-label-sm text-label-sm font-semibold"}>
                          {"SIGNED"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded-lg bg-surface-container flex items-center justify-between"} id={"quorum-custodian-2"}>
                        <div className={"flex items-center gap-space-sm"}>
                          <div className={"w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-label-sm"}>
                            <span className={"material-symbols-outlined text-[16px]"}>
                              {"hourglass_empty"}
                            </span>
                          </div>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-md text-label-md font-semibold text-on-surface"}>
                              {"Dir. Sarah Sterling"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-[11px] text-on-surface-variant"}>
                              {"Chief Compliance & Legal Officer"}
                            </span>
                          </div>
                        </div>
                        <button className={"px-2 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1"} onClick={legacy("signQuorumModal()")}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"draw"}
                          </span>
                          {" "}
                          <span>
                            {"Countersign"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"}>
                      {"WORM Audit Log Command Preview"}
                    </span>
                    <div className={"p-space-sm rounded-lg bg-inverse-surface text-inverse-on-surface font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner"}>
                      <div className={"text-tertiary-fixed mb-1"}>
                        {"# Ceryvra Immutable Genesis Transaction Proposal"}
                      </div>
                      <div className={"text-on-primary-container"}>
                        {"$ ceryvra-enclave-cli recovery execute \\"}
                      </div>
                      <div className={"pl-3 text-surface-container-highest"}>
                        {"--case-id \"REC-2024-9942-R01\" \\"}
                      </div>
                      <div className={"pl-3 text-surface-container-highest"}>
                        {"--action-id \"ACT-01\" \\"}
                      </div>
                      <div className={"pl-3 text-surface-container-highest"}>
                        {"--hsm-slot 0x04 --fips-level 3 \\"}
                      </div>
                      <div className={"pl-3 text-surface-container-highest"}>
                        {"--cert-merkle-leaf 0x3b11ef94... \\"}
                      </div>
                      <div className={"pl-3 text-tertiary-fixed"}>
                        {"--piv-attest \"VANCE_M_9921_USAF\""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-space-md"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"verified"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <span className={"font-headline-sm text-headline-sm text-on-surface"}>
                        {"Next Milestone: Independent Verification"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Stage 5 Gate Readiness Protocol"}
                      </span>
                    </div>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface leading-relaxed"}>
                    {" Following Action 01 & 02 command execution, the system issues a cryptographically frozen "}
                    <strong className={"text-primary font-semibold"}>
                      {"Verification Proof Manifest"}
                    </strong>
                    {". Full re-activation of flight envelope override authority requires: "}
                  </p>
                  <ul className={"flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"}>
                    <li className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-tertiary-container"}>
                        {"radio_button_checked"}
                      </span>
                      {" "}
                      <span>
                        {"Mathematical Merkle inclusion proof calculated by Enclave node"}
                      </span>
                    </li>
                    <li className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-primary"}>
                        {"radio_button_checked"}
                      </span>
                      {" "}
                      <span>
                        {"Dr. Elena Rostova independent offline signoff (Hardware YubiKey/CAC)"}
                      </span>
                    </li>
                    <li className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-outline"}>
                        {"radio_button_unchecked"}
                      </span>
                      {" "}
                      <span>
                        {"Zero-divergence re-attestation on Defense Ledger block #19,402"}
                      </span>
                    </li>
                  </ul>
                  <div className={"flex flex-col gap-space-xs pt-space-xs"}>
                    <button className={"w-full py-2.5 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-md flex items-center justify-center gap-space-xs"} id={"btn-master-exec"} onClick={legacy("triggerMasterExecution()")}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"shield"}
                      </span>
                      {" "}
                      <span>
                        {"Execute Minimum Recovery Plan (1 Step Armed)"}
                      </span>
                    </button>
                    <div className={"grid grid-cols-2 gap-space-xs"}>
                      <button className={"py-1.5 px-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm flex items-center justify-center gap-1"} onClick={legacy("simulateDryRun()")}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"terminal"}
                        </span>
                        {" "}
                        <span>
                          {"Dry-Run Sandbox"}
                        </span>
                      </button>
                      {" "}
                      <button className={"py-1.5 px-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm flex items-center justify-center gap-1"} onClick={legacy("exportManifestJSON()")}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"file_download"}
                        </span>
                        {" "}
                        <span>
                          {"Export Manifest"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 hidden items-center justify-center p-space-md"} id={"interactive-modal"}>
              <div className={"bg-surface-container-lowest p-space-lg rounded-xl max-w-lg w-full shadow-2xl flex flex-col gap-space-md"}>
                <div className={"flex items-center justify-between"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-primary text-[24px]"}>
                      {"verified_user"}
                    </span>
                    {" "}
                    <span className={"font-headline-sm text-headline-sm text-on-surface"} id={"modal-title"}>
                      {"Cryptographic Attestation"}
                    </span>
                  </div>
                  <button className={"text-on-surface-variant hover:text-on-surface"} onClick={legacy("closeModal()")}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className={"font-body-md text-body-md text-on-surface-variant"} id={"modal-body"}>
                  {" Dual-key quorum countersign for Legal & Compliance clearance. "}
                </div>
                <div className={"flex items-center justify-end gap-space-xs pt-space-xs"}>
                  <button className={"px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md"} onClick={legacy("closeModal()")}>
                    {" Cancel "}
                  </button>
                  {" "}
                  <button className={"px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1 shadow-sm"} id={"modal-confirm-btn"} onClick={legacy("confirmModalAction()")}>
                    <span>
                      {"Attest & Sign"}
                    </span>
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
