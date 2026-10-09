// AUTO-GENERATED from Revalidation-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/revalidation.js?raw';

const exportsList = ["switchView","insertTemplate","executeMint","rejectRevalidation","requestMoreEvidence"];

export default function Revalidation() {
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
          <div className={"flex flex-col w-full"}>
            <div className={"mb-space-md p-space-xs bg-surface-container-low rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-space-sm"}>
              <div className={"flex items-center gap-space-xs pl-space-xs"}>
                <span className={"material-symbols-outlined text-primary text-[18px]"}>
                  {"tune"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold"}>
                  {"Workspace Screen State Simulation:"}
                </span>
              </div>
              <div className={"flex flex-wrap items-center gap-1.5"} id={"view-mode-selector"}>
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-primary-container text-on-primary transition-all shadow-sm"} id={"btn-view-active"} onClick={legacy("switchView('active')")}>
                  {" Active Revalidation "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all"} id={"btn-view-diff"} onClick={legacy("switchView('diff')")}>
                  {" Side-by-Side Deep Diff "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all"} id={"btn-view-sealed"} onClick={legacy("switchView('sealed')")}>
                  {" Approved / Version Sealed "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all"} id={"btn-view-denied"} onClick={legacy("switchView('denied')")}>
                  {" Permission Denied (Clearance) "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all"} id={"btn-view-empty"} onClick={legacy("switchView('empty')")}>
                  {" Empty Queue "}
                </button>
                {" "}
                <button className={"px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all"} id={"btn-view-loading"} onClick={legacy("switchView('loading')")}>
                  {" Loading Sync "}
                </button>
              </div>
            </div>
            <div className={"hidden py-space-xl text-center bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg"} id={"state-loading-view"}>
              <div className={"inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface-container mb-space-md text-primary animate-spin"}>
                <span className={"material-symbols-outlined text-[32px]"}>
                  {"sync"}
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md text-on-surface"}>
                {"Synchronizing Cryptographic Enclave Ledger"}
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-space-xs"}>
                {" Querying FIPS 140-3 boundary nodes, validating Merkle leaf inclusion, and recalculating state dependency matrix for EVT-9041... "}
              </p>
              <div className={"mt-space-md w-64 mx-auto bg-surface-container h-1.5 rounded-full overflow-hidden"}>
                <div className={"bg-primary h-full w-2/3 animate-pulse"} />
              </div>
            </div>
            <div className={"hidden py-space-xl px-space-xl bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg text-center"} id={"state-denied-view"}>
              <div className={"w-16 h-16 rounded-full bg-error-container text-on-error-container mx-auto flex items-center justify-center mb-space-md"}>
                <span className={"material-symbols-outlined text-[36px]"}>
                  {"gpp_bad"}
                </span>
              </div>
              <span className={"font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded uppercase font-semibold"}>
                {"Clearance Violation: SAP/SAR Required"}
              </span>
              <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-sm"}>
                {"Access Denied: Revalidation Locked"}
              </h2>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mt-space-xs"}>
                {" REV-2024-9942-04 impacts Top Secret / Critical Nuclear & Aerospace Autonomous Override parameters. Your active PIV-CAC certificate lacks Dual-Key Cryptographic Custody validation for Department 14 Special Access Programs. "}
              </p>
              <div className={"mt-space-lg flex justify-center gap-space-sm"}>
                <button className={"px-space-md py-space-xs bg-surface-container text-on-surface rounded font-label-md text-label-md hover:bg-surface-variant transition-colors"}>
                  {"Request Temporary Token Escalation"}
                </button>
                {" "}
                <button className={"px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md"} onClick={legacy("switchView('active')")}>
                  {"Return to Auditor Console"}
                </button>
              </div>
            </div>
            <div className={"hidden py-space-xl px-space-xl bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg text-center"} id={"state-empty-view"}>
              <div className={"w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed mx-auto flex items-center justify-center mb-space-md"}>
                <span className={"material-symbols-outlined text-[36px]"}>
                  {"verified"}
                </span>
              </div>
              <span className={"font-label-sm text-label-sm bg-tertiary-container/10 text-tertiary font-semibold px-2 py-0.5 rounded"}>
                {"All Obligations Reconciled"}
              </span>
              <h2 className={"font-headline-lg text-headline-lg text-on-surface mt-space-sm"}>
                {"Revalidation Queue Clear"}
              </h2>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mt-space-xs"}>
                {" Zero pending evidence delta cascades detected across all 42 registered Aerospace & Defense autonomous decision models. Active enclave state is mathematically stable. "}
              </p>
              <div className={"mt-space-lg"}>
                <button className={"px-space-md py-space-xs bg-primary-container text-on-primary rounded font-label-md text-label-md"} onClick={legacy("switchView('active')")}>
                  {"Inspect Archival Seals"}
                </button>
              </div>
            </div>
            <div className={"hidden mb-space-md p-space-md bg-tertiary-fixed text-on-tertiary-fixed rounded-xl shadow-sm flex items-start gap-space-md"} id={"sealed-success-banner"}>
              <span className={"material-symbols-outlined text-[28px] text-tertiary shrink-0"}>
                {"task_alt"}
              </span>
              <div className={"flex flex-col"}>
                <div className={"flex items-center gap-space-sm"}>
                  <span className={"font-headline-sm text-headline-sm font-bold"}>
                    {"REVALIDATION SEALED & MINTED AS VERSION v2.4"}
                  </span>
                  {" "}
                  <span className={"bg-surface-container-lowest text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded shadow-xs font-mono font-bold"}>
                    {"BLOCK #8,941,300"}
                  </span>
                </div>
                <p className={"font-body-md text-body-md mt-1"}>
                  {" Target decision DEC-14820 successfully revalidated with dual hardware TPM signatures. Original Genesis Seal v1.0 (Block #8,210,044) has been archived in immutable cold storage for the mandated 7-year regulatory compliance envelope. "}
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-space-lg"} id={"main-revalidation-content"}>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant mb-space-sm"}>
                  <span className={"hover:text-primary cursor-pointer transition-colors"}>
                    {"Global Aerospace & Defense"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"hover:text-primary cursor-pointer transition-colors"}>
                    {"Approvals & Verification"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"hover:text-primary cursor-pointer transition-colors"}>
                    {"Revalidation Workspace"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[14px] text-outline"}>
                    {"chevron_right"}
                  </span>
                  {" "}
                  <span className={"text-on-surface font-semibold font-mono"}>
                    {"REV-2024-9942-04"}
                  </span>
                </div>
                <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-md"}>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex flex-wrap items-center gap-space-sm"}>
                      <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                        {" Targeted Decision Revalidation Workspace "}
                      </h1>
                      <span className={"px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold tracking-wide flex items-center gap-1"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"warning"}
                        </span>
                        {" REV-2024-9942-04 "}
                      </span>
                      {" "}
                      <span className={"px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                        {" TRIGGER: EVT-9041 "}
                      </span>
                    </div>
                    <p className={"font-body-md text-body-md text-on-surface-variant max-w-4xl"}>
                      {" Controlled selective recalculation engine. Executes deterministic containment so that upstream certificate alterations do NOT cascade into uncompromised flight models. "}
                    </p>
                  </div>
                  <div className={"flex flex-wrap items-center gap-space-sm shrink-0"}>
                    <div className={"flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"verified"}
                      </span>
                      {" "}
                      <span className={"font-mono"}>
                        {"Enclave SEC-9942 • Hardware TPM Sealed"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-secondary-container text-on-secondary-container font-label-sm text-label-sm"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"lock_clock"}
                      </span>
                      {" "}
                      <span>
                        {"Cascade Containment Active"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"mt-space-md p-space-sm rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-2 h-2 rounded-full bg-primary animate-ping"} />
                    <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                      {"Scope: Selective Cascade Containment Mode"}
                    </span>
                    {" "}
                    <span className={"text-outline text-label-sm"}>
                      {"|"}
                    </span>
                    {" "}
                    <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {" Genesis seals remain immutable and addressable via Merkle leaf proofs. Only direct dependencies of Subcontractor Key transit are queued for version minting. "}
                    </span>
                  </div>
                  <div className={"flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold cursor-pointer hover:underline"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"history_edu"}
                    </span>
                    {" "}
                    <span>
                      {"View FIPS Audit Trail Spec"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md"}>
                <div className={"lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                  <div>
                    <div className={"flex items-center justify-between mb-space-xs"}>
                      <span className={"font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold"}>
                        {"Triggering Event Provenance"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm font-mono text-primary font-bold"}>
                        {"Block #8,941,209"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-sm mb-space-sm"}>
                      <div className={"w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0"}>
                        <span className={"material-symbols-outlined text-[22px]"}>
                          {"key_off"}
                        </span>
                      </div>
                      <div className={"flex flex-col"}>
                        <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Event #EVT-9041"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"SecOps Continuous Diff Daemon v4.12"}
                        </span>
                      </div>
                    </div>
                    <div className={"p-space-xs bg-surface-container-low rounded-lg font-mono text-label-sm text-on-surface-variant flex flex-col gap-1"}>
                      <div className={"flex justify-between"}>
                        <span className={"text-outline"}>
                          {"Ingest Timestamp:"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"2024-10-24 14:12:08 UTC"}
                        </span>
                      </div>
                      <div className={"flex justify-between"}>
                        <span className={"text-outline"}>
                          {"Origin Enclave:"}
                        </span>
                        {" "}
                        <span className={"text-on-surface"}>
                          {"Subcontractor Node #12 (Raytheon Corp)"}
                        </span>
                      </div>
                      <div className={"flex justify-between"}>
                        <span className={"text-outline"}>
                          {"Revoked Hash:"}
                        </span>
                        {" "}
                        <span className={"text-error font-semibold truncate max-w-[190px]"}>
                          {"0x9f4a8831b09210aa"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"mt-space-sm pt-space-xs flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm text-outline"}>
                      {"Signature Verifier:"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm font-semibold text-tertiary flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"done_all"}
                      </span>
                      {" SHA-384 Pre-Computed "}
                    </span>
                  </div>
                </div>
                <div className={"lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                  <div>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs mb-space-xs"}>
                      <span className={"font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold"}>
                        {"Automated Impact Classification"}
                      </span>
                      {" "}
                      <span className={"bg-error-container text-on-error-container px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold flex items-center gap-1"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"gavel"}
                        </span>
                        {" MATERIAL IMPACT — REVALIDATION MANDATED "}
                      </span>
                    </div>
                    <h2 className={"font-headline-sm text-headline-sm text-on-surface mt-1"}>
                      {" Breach of Rule #804: Subcontractor Key Transit & FIPS 140-3 Boundary "}
                    </h2>
                    <p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs"}>
                      {" Subcontractor Raytheon intermediate HSM escrow certificate was revoked and re-issued outside the active Genesis cryptographic bundle. This invalidates the active runtime trust assertion for Dual-Use Autonomous Flight Envelopes. "}
                    </p>
                  </div>
                  <div className={"mt-space-sm p-space-sm bg-surface-container rounded-lg flex items-center justify-between gap-space-sm"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <span className={"material-symbols-outlined text-primary text-[20px]"}>
                        {"filter_alt"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md text-on-surface font-semibold"}>
                        {"Triage Policy Resolution:"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {" Revalidation isolated to 1 targeted decision while quarantining zero production flights. "}
                      </span>
                    </div>
                    <span className={"font-label-sm text-label-sm text-primary font-bold whitespace-nowrap"}>
                      {"Strict Isolation Protocol"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md"}>
                  <div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                      {"Decision Cascade Segmentation"}
                    </h2>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Deterministic impact graph showing selective revalidation boundary isolation."}
                    </p>
                  </div>
                  <div className={"flex items-center gap-space-sm"}>
                    <span className={"font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded font-semibold"}>
                      {" 1 Affected / Needs Revalidation "}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded font-semibold"}>
                      {" 41 Unaffected / Cryptographically Sealed "}
                    </span>
                  </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md"}>
                  <div className={"lg:col-span-5 bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm"}>
                        <span className={"px-space-xs py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold uppercase"}>
                          {" Direct Target for Revalidation "}
                        </span>
                        {" "}
                        <span className={"font-mono text-label-sm text-outline"}>
                          {"Merkle Index #420"}
                        </span>
                      </div>
                      <div className={"flex items-start gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0"}>
                          <span className={"material-symbols-outlined text-[22px]"}>
                            {"flight_takeoff"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <div className={"flex items-center gap-space-xs"}>
                            <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                              {"DEC-14820"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm font-mono text-primary font-semibold"}>
                              {"v1.0 → v2.4 Draft"}
                            </span>
                          </div>
                          <span className={"font-body-sm text-body-sm text-on-surface font-medium"}>
                            {"Dual-Use Flight Envelope Autonomous Override Policy"}
                          </span>
                        </div>
                      </div>
                      <div className={"mt-space-md flex flex-col gap-space-xs bg-surface-container-lowest p-space-sm rounded-lg"}>
                        <div className={"flex items-center justify-between text-label-sm"}>
                          <span className={"text-outline"}>
                            {"Revalidation Status:"}
                          </span>
                          {" "}
                          <span className={"font-semibold text-error flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"pending"}
                            </span>
                            {" PROVISIONAL / PENDING DUAL SIGN-OFF "}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between text-label-sm"}>
                          <span className={"text-outline"}>
                            {"Primary Bottleneck:"}
                          </span>
                          {" "}
                          <span className={"font-semibold text-on-surface"}>
                            {"OBL-804B cert escrow deficit"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between text-label-sm"}>
                          <span className={"text-outline"}>
                            {"Target Autonomous Engine:"}
                          </span>
                          {" "}
                          <span className={"font-mono text-on-surface"}>
                            {"F-35A Block 4 Mission System Autonomy"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-xs flex items-center justify-between"}>
                      <span className={"font-label-sm text-label-sm text-primary font-semibold"}>
                        {"Active Review Selected"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-primary text-[20px]"}>
                        {"radio_button_checked"}
                      </span>
                    </div>
                  </div>
                  <div className={"lg:col-span-7 bg-surface-container rounded-xl p-space-md flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm"}>
                        <span className={"px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold uppercase"}>
                          {" Cryptographically Isolated • 41 Decisions Protected "}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-secondary-container font-semibold"}>
                          {"Zero Workflow Disruption"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                        {" These decisions are provably decoupled via disjoint Merkle proof paths. Evidence change EVT-9041 contains zero semantic overlap with supply chain or avionics navigation models. "}
                      </p>
                      <div className={"flex flex-col gap-space-xs"}>
                        <div className={"flex items-center justify-between bg-surface-container-lowest p-space-xs rounded-lg text-body-sm"}>
                          <div className={"flex items-center gap-space-sm"}>
                            <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                              {"verified"}
                            </span>
                            {" "}
                            <span className={"font-mono font-semibold text-on-surface"}>
                              {"DEC-4402"}
                            </span>
                            {" "}
                            <span className={"text-on-surface"}>
                              {"Defense Logistics Autonomous Routing Engine"}
                            </span>
                          </div>
                          <span className={"font-label-sm text-label-sm bg-surface-variant px-2 py-0.5 rounded font-mono text-on-surface"}>
                            {"Seal Intact (v3.0)"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between bg-surface-container-lowest p-space-xs rounded-lg text-body-sm"}>
                          <div className={"flex items-center gap-space-sm"}>
                            <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                              {"verified"}
                            </span>
                            {" "}
                            <span className={"font-mono font-semibold text-on-surface"}>
                              {"UC-8821"}
                            </span>
                            {" "}
                            <span className={"text-on-surface"}>
                              {"Avionics Cold-Chain Supply Verification"}
                            </span>
                          </div>
                          <span className={"font-label-sm text-label-sm bg-surface-variant px-2 py-0.5 rounded font-mono text-on-surface"}>
                            {"Seal Intact (v1.2)"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between bg-surface-container-lowest p-space-xs rounded-lg text-body-sm opacity-75"}>
                          <div className={"flex items-center gap-space-sm"}>
                            <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                              {"verified"}
                            </span>
                            {" "}
                            <span className={"font-mono font-semibold text-on-surface"}>
                              {"+39 Others"}
                            </span>
                            {" "}
                            <span className={"text-on-surface-variant"}>
                              {"Ground telemetry, SATCOM relay logic, EW sensor routing"}
                            </span>
                          </div>
                          <span className={"font-label-sm text-label-sm text-outline font-mono"}>
                            {"Disjoint Tree"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-xs flex items-center justify-between text-label-sm text-on-surface-variant"}>
                      <span>
                        {"Merkle Proof: "}
                        <span className={"font-mono"}>
                          {"sha256(root_41) != branch(evt_9041)"}
                        </span>
                      </span>
                      {" "}
                      <span className={"text-tertiary font-semibold flex items-center gap-1"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"lock"}
                        </span>
                        {" Zero Drift Confirmed "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md"}>
                  <div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                      {"Side-by-Side State Comparison"}
                    </h2>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {" Direct cryptographic diff between original immutable Genesis seal and proposed v2.4 revalidation draft. "}
                    </p>
                  </div>
                  <div className={"flex items-center gap-space-xs text-label-sm text-on-surface-variant"}>
                    <span className={"w-3 h-3 rounded bg-surface-variant inline-block"} />
                    {" "}
                    <span>
                      {"Unchanged"}
                    </span>
                    {" "}
                    <span className={"w-3 h-3 rounded bg-error-container inline-block ml-2"} />
                    {" "}
                    <span>
                      {"Revoked / Superseded"}
                    </span>
                    {" "}
                    <span className={"w-3 h-3 rounded bg-tertiary-fixed inline-block ml-2"} />
                    {" "}
                    <span>
                      {"Revalidated / Upgraded"}
                    </span>
                  </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-space-lg"}>
                  <div className={"bg-surface-container-low rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between"}>
                    <div className={"absolute top-0 left-0 right-0 h-1.5 bg-outline"} />
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm pt-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                            {"Original State"}
                          </span>
                          {" "}
                          <span className={"font-mono text-label-sm font-bold bg-surface-container px-2 py-0.5 rounded text-on-surface"}>
                            {"v1.0 Genesis"}
                          </span>
                        </div>
                        <span className={"bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-semibold"}>
                          {" Sealed & Immutable "}
                        </span>
                      </div>
                      <div className={"bg-surface-container-lowest p-space-sm rounded-lg mb-space-md shadow-xs"}>
                        <div className={"flex justify-between items-center text-label-sm font-mono text-outline mb-1"}>
                          <span>
                            {"Genesis Block #8,210,044"}
                          </span>
                          {" "}
                          <span>
                            {"Sealed: Jan 10, 2024"}
                          </span>
                        </div>
                        <div className={"text-label-sm font-mono text-on-surface truncate"}>
                          {" Merkle Root: "}
                          <span className={"font-semibold text-primary"}>
                            {"0x7c92a99180bde441...11b8"}
                          </span>
                        </div>
                        <div className={"mt-space-xs pt-space-xs text-label-sm text-on-surface-variant flex items-center gap-1 font-semibold"}>
                          <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                            {"policy"}
                          </span>
                          {" "}
                          <span>
                            {"Historical Preservation: Legally Bound for 7 Years"}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-space-sm"}>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Bound Rule"}
                          </span>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" Rule #804 v1.0: Real-time CUI Redaction & Key Transit "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Permitted standard 24-hour grace window on Subcontractor Key rollover. Single HSM root. "}
                          </div>
                        </div>
                        <div className={"bg-error-container/20 p-space-sm rounded-lg"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-error uppercase font-bold"}>
                              {"Evidence: OBL-804B (REVOKED)"}
                            </span>
                            {" "}
                            <span className={"font-mono text-label-sm text-error"}>
                              {"Serial #0x9f4a...2110"}
                            </span>
                          </div>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" Subcontractor Node #12 (Raytheon) Cert Escrow "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Signed Jan 10, 2024 • Validity expired prematurely on Key Revocation EVT-9041. "}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Execution Latency Threshold"}
                          </span>
                          <div className={"font-label-md text-label-md text-on-surface font-mono font-bold mt-0.5"}>
                            {" 25ms execution threshold (Standard EW) "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Permitted higher latency buffer during satellite relay failovers. "}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Validated Assumptions"}
                          </span>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" ASM-01: Single Enclave HSM escrow assumed valid across defense theatre. "}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Dual-Key Signers (Historical)"}
                          </span>
                          <div className={"flex items-center justify-between mt-1 text-label-sm"}>
                            <span className={"text-on-surface font-semibold"}>
                              {"Col. Marcus Vance (Ops Comm)"}
                            </span>
                            {" "}
                            <span className={"text-tertiary font-mono"}>
                              {"SIGNED [0x41ab]"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between mt-1 text-label-sm"}>
                            <span className={"text-on-surface font-semibold"}>
                              {"Dir. Sarah Sterling (Legal Risk)"}
                            </span>
                            {" "}
                            <span className={"text-tertiary font-mono"}>
                              {"SIGNED [0x992e]"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-xs text-body-sm text-outline italic"}>
                      {" Genesis snapshot is preserved in hardware WORM storage and can never be modified. "}
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between"}>
                    <div className={"absolute top-0 left-0 right-0 h-1.5 bg-primary-container"} />
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm pt-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                            {"Proposed Revalidated State"}
                          </span>
                          {" "}
                          <span className={"font-mono text-label-sm font-bold bg-primary-container text-on-primary px-2 py-0.5 rounded"}>
                            {"v2.4 Draft"}
                          </span>
                        </div>
                        <span className={"bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-semibold"}>
                          {" Provisional Candidate "}
                        </span>
                      </div>
                      <div className={"bg-surface-container-low p-space-sm rounded-lg mb-space-md shadow-xs"}>
                        <div className={"flex justify-between items-center text-label-sm font-mono text-primary font-bold mb-1"}>
                          <span>
                            {"Proposed Target Block #8,941,300"}
                          </span>
                          {" "}
                          <span>
                            {"Generated: Today 14:35 UTC"}
                          </span>
                        </div>
                        <div className={"text-label-sm font-mono text-on-surface truncate"}>
                          {" Anticipated Root: "}
                          <span className={"font-semibold text-tertiary"}>
                            {"0x8ef4919bc0192a22...55da"}
                          </span>
                        </div>
                        <div className={"mt-space-xs pt-space-xs text-label-sm text-primary flex items-center gap-1 font-semibold"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"new_releases"}
                          </span>
                          {" "}
                          <span>
                            {"New Version v2.4 minted on sign-off; v1.0 retained."}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-space-sm"}>
                        <div className={"bg-tertiary-fixed/30 p-space-sm rounded-lg"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-tertiary uppercase font-bold"}>
                              {"Bound Rule (UPGRADED)"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-tertiary font-bold"}>
                              {"DIFF: +FIPS 140-3"}
                            </span>
                          </div>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" Rule #804 v3.1: FIPS 140-3 Level 3 Subcontractor Transit Boundary "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Enforces zero grace window. Mandates zero-trust PII sanitization and immediate mutual TLS revote. "}
                          </div>
                        </div>
                        <div className={"bg-tertiary-fixed/30 p-space-sm rounded-lg"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-tertiary uppercase font-bold"}>
                              {"Evidence: OBL-804B (RE-ISSUED CERT)"}
                            </span>
                            {" "}
                            <span className={"font-mono text-label-sm text-tertiary font-bold"}>
                              {"Serial #0x3b11...ca55"}
                            </span>
                          </div>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" Re-issued HSM Token with Multi-Party Dual Custody "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Cryptographically active • Verified in enclave isolated sandbox test run #99214. "}
                          </div>
                        </div>
                        <div className={"bg-tertiary-fixed/30 p-space-sm rounded-lg"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-tertiary uppercase font-bold"}>
                              {"Execution Latency (TIGHTENED)"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-tertiary font-bold"}>
                              {"DIFF: 25ms → 12ms"}
                            </span>
                          </div>
                          <div className={"font-label-md text-label-md text-on-surface font-mono font-bold mt-0.5"}>
                            {" 12ms execution threshold under Tier-1 jamming "}
                          </div>
                          <div className={"text-body-sm text-on-surface-variant mt-1"}>
                            {" Tighter safety boundary enforced to prevent desync in contested airspace. "}
                          </div>
                        </div>
                        <div className={"bg-tertiary-fixed/30 p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-tertiary uppercase font-bold"}>
                            {"Validated Assumptions (UPDATED)"}
                          </span>
                          <div className={"font-label-md text-label-md text-on-surface font-semibold mt-0.5"}>
                            {" ASM-03: Added hardware-bound PKI attestation via TPM 2.0 PCR[07]. "}
                          </div>
                        </div>
                        <div className={"bg-surface-container-low p-space-sm rounded-lg"}>
                          <span className={"font-label-sm text-label-sm text-outline uppercase font-semibold"}>
                            {"Dual-Key Sign-off Status"}
                          </span>
                          <div className={"flex items-center justify-between mt-1 text-label-sm"}>
                            <span className={"text-on-surface font-semibold"}>
                              {"Col. Marcus Vance (Ops Comm)"}
                            </span>
                            {" "}
                            <span className={"text-tertiary font-mono font-bold flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[14px]"}>
                                {"check_circle"}
                              </span>
                              {" PRE-APPROVED "}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between mt-1 text-label-sm"}>
                            <span className={"text-on-surface font-semibold"}>
                              {"Dir. Sarah Sterling (Legal Risk)"}
                            </span>
                            {" "}
                            <span className={"text-error font-mono font-bold flex items-center gap-1"}>
                              <span className={"material-symbols-outlined text-[14px]"}>
                                {"hourglass_top"}
                              </span>
                              {" AWAITING DR. ROSTOVA AUDIT "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-xs text-body-sm text-primary font-semibold flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"format_image_left"}
                      </span>
                      {" Ready for cryptographic revalidation minting. "}
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"flex items-center justify-between mb-space-md"}>
                  <div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                      {"Changed Elements Detailed Breakdown"}
                    </h2>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Deterministic verification delta for policy rules, thresholds, and cryptographic attestations."}
                    </p>
                  </div>
                  <button className={"flex items-center gap-1 px-space-sm py-1 bg-surface-container rounded-lg font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"terminal"}
                    </span>
                    {" "}
                    <span>
                      {"Open Diff Inspector CLI"}
                    </span>
                  </button>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md"}>
                  <div className={"bg-surface-container-low rounded-xl p-space-sm shadow-xs flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-1"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold text-outline"}>
                          {"Evidence Delta"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-primary text-[18px]"}>
                          {"verified"}
                        </span>
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"OBL-804B Certificate Hash"}
                      </div>
                      <div className={"mt-space-xs p-space-xs bg-surface-container-lowest rounded font-mono text-label-sm"}>
                        <div className={"text-error line-through truncate"}>
                          {"- 0x9f4a...2110 (Expired)"}
                        </div>
                        <div className={"text-tertiary font-bold truncate"}>
                          {"+ 0x3b11...ca55 (Issued)"}
                        </div>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-space-xs"}>
                        {" Raytheon Subcontractor key renewed with 4096-bit RSA hardware attestation token. "}
                      </p>
                    </div>
                    <span className={"mt-space-sm font-label-sm text-label-sm text-tertiary font-semibold"}>
                      {"Integrity Verified"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-low rounded-xl p-space-sm shadow-xs flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-1"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold text-outline"}>
                          {"Rule Threshold Diff"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-primary text-[18px]"}>
                          {"speed"}
                        </span>
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"Rule #804 & Rule #912"}
                      </div>
                      <div className={"mt-space-xs p-space-xs bg-surface-container-lowest rounded font-mono text-label-sm"}>
                        <div className={"text-error line-through"}>
                          {"- Latency ceiling: 25ms"}
                        </div>
                        <div className={"text-tertiary font-bold"}>
                          {"+ Latency ceiling: 12ms"}
                        </div>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-space-xs"}>
                        {" Demographic parity and radar classification boundary adjusted +2.4% for EW noise tolerance. "}
                      </p>
                    </div>
                    <span className={"mt-space-sm font-label-sm text-label-sm text-tertiary font-semibold"}>
                      {"Constraint Met (8.4ms measured)"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-low rounded-xl p-space-sm shadow-xs flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-1"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold text-outline"}>
                          {"Dependency Graph"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-primary text-[18px]"}>
                          {"account_tree"}
                        </span>
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"Upstream Model AGT-4402"}
                      </div>
                      <div className={"mt-space-xs p-space-xs bg-surface-container-lowest rounded font-mono text-label-sm"}>
                        <div className={"text-on-surface"}>
                          {"Weights: Frozen v4.1"}
                        </div>
                        <div className={"text-tertiary font-bold"}>
                          {"Working Note #88219 Linked"}
                        </div>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-space-xs"}>
                        {" No retraining cascade required. Only runtime safety sandbox parameters modified. "}
                      </p>
                    </div>
                    <span className={"mt-space-sm font-label-sm text-label-sm text-tertiary font-semibold"}>
                      {"Decoupled Weights Confirmed"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-low rounded-xl p-space-sm shadow-xs flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-1"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold text-outline"}>
                          {"Cryptographic Provenance"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-primary text-[18px]"}>
                          {"fingerprint"}
                        </span>
                      </div>
                      <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"TPM Root of Trust PCR[07]"}
                      </div>
                      <div className={"mt-space-xs p-space-xs bg-surface-container-lowest rounded font-mono text-label-sm truncate"}>
                        <span className={"text-on-surface"}>
                          {"SHA-256: 0x9942e88a..."}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-space-xs"}>
                        {" Hardware enclave state verified compliant under FIPS 140-3 Level 3 standard. "}
                      </p>
                    </div>
                    <span className={"mt-space-sm font-label-sm text-label-sm text-tertiary font-semibold"}>
                      {"Hardware Sealed"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"}>
                <div className={"flex flex-col xl:flex-row gap-space-lg"}>
                  <div className={"xl:w-7/12 flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm"}>
                        <div className={"flex items-center gap-space-sm"}>
                          <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary"}>
                            <span className={"material-symbols-outlined text-[18px]"}>
                              {"badge"}
                            </span>
                          </div>
                          <div>
                            <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                              {"Reviewer Auditor Attestation Memo"}
                            </h3>
                            <span className={"font-label-sm text-label-sm text-outline"}>
                              {"Lead AI Risk Auditor: Dr. Elena Rostova • Clearance: TS/SCI-SAR"}
                            </span>
                          </div>
                        </div>
                        <span className={"font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-mono"}>
                          {" PIV-CAC #99420-ROSTOVA "}
                        </span>
                      </div>
                      <label className={"block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1 font-semibold"} htmlFor={"auditor-memo"}>
                        {" Mandatory Revalidation Justification & Risk Sign-Off Rationale "}
                      </label>
                      <textarea className={"w-full p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all resize-none shadow-xs"} id={"auditor-memo"} placeholder={"Document specific reasoning for accepting Raytheon re-issued certificate 0x3b11...ca55, verifying that flight envelope limits remain within non-kinetic autonomous operating parameters..."} rows={"4"} />
                      <div className={"mt-space-xs flex flex-wrap items-center gap-space-xs"}>
                        <span className={"font-label-sm text-label-sm text-outline"}>
                          {"Standard Justification Stamps:"}
                        </span>
                        {" "}
                        <button className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-variant transition-colors"} onClick={legacy("insertTemplate('fips')")}>
                          {" + FIPS-140-3 HSM Verified "}
                        </button>
                        {" "}
                        <button className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-variant transition-colors"} onClick={legacy("insertTemplate('latency')")}>
                          {" + Sub-12ms Jamming Validated "}
                        </button>
                        {" "}
                        <button className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-variant transition-colors"} onClick={legacy("insertTemplate('isolation')")}>
                          {" + Cascade Isolation Confirmed "}
                        </button>
                      </div>
                    </div>
                    <div className={"mt-space-md p-space-xs bg-surface-container-low rounded-lg flex items-center justify-between text-body-sm text-on-surface-variant"}>
                      <span className={"flex items-center gap-1 font-mono text-label-sm"}>
                        <span className={"material-symbols-outlined text-[16px] text-primary"}>
                          {"key"}
                        </span>
                        {" PIV-CAC Hardware Token Connected (Slot 01) "}
                      </span>
                      {" "}
                      <span className={"text-tertiary font-semibold text-label-sm"}>
                        {"Session Verified"}
                      </span>
                    </div>
                  </div>
                  <div className={"xl:w-5/12 bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between mb-space-sm"}>
                        <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Revalidation Execution"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-outline uppercase font-mono font-semibold"}>
                          {"Dual-Key Required"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-md"}>
                        {" Executing minting will seal "}
                        <span className={"font-semibold text-on-surface"}>
                          {"DEC-14820 v2.4"}
                        </span>
                        {" to the enclave ledger and notify Director Sterling for final cryptographic counter-signing. The Genesis v1.0 block remains permanently accessible. "}
                      </p>
                      <div className={"flex flex-col gap-space-sm"}>
                        <button className={"w-full py-space-sm px-space-md bg-primary-container text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-space-xs shadow-md"} id={"btn-approve-mint"} onClick={legacy("executeMint()")}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"verified_user"}
                          </span>
                          {" "}
                          <span>
                            {"Approve & Mint Revalidated Version (v2.4)"}
                          </span>
                        </button>
                        {" "}
                        <button className={"w-full py-space-sm px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md font-medium hover:bg-surface-container transition-colors flex items-center justify-center gap-space-xs shadow-xs"} onClick={legacy("requestMoreEvidence()")}>
                          <span className={"material-symbols-outlined text-[20px]"}>
                            {"contact_support"}
                          </span>
                          {" "}
                          <span>
                            {"Request Additional Evidence / Hold in Provisional"}
                          </span>
                        </button>
                        {" "}
                        <button className={"w-full py-space-xs px-space-md bg-error-container text-on-error-container rounded-lg font-label-md text-label-md font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-space-xs"} onClick={legacy("rejectRevalidation()")}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"cancel"}
                          </span>
                          {" "}
                          <span>
                            {"Reject Proposed Revalidation Draft"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-xs flex items-center justify-between text-label-sm text-outline"}>
                      <span>
                        {"Audit Trail Event Code: "}
                        <span className={"font-mono"}>
                          {"EVT_REV_MINT_42"}
                        </span>
                      </span>
                      {" "}
                      <span className={"hover:underline text-primary cursor-pointer"}>
                        {"Enclave Term"}
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
