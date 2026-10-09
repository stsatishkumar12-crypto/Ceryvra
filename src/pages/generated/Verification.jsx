// AUTO-GENERATED from Verification-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/verification.js?raw';

const exportsList = ["setSimState","insertStamp","triggerAttestationModal","closeAttestationModal","executeAttestationSignoff","rejectVerificationAction","triggerResampleAction"];

export default function Verification() {
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
            <button className={"px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-space-xs"} data-nav="/decision-record">
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
            <div className={"w-full bg-surface-container rounded-xl p-space-sm mb-space-md shadow-sm"}>
              <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    {"tune"}
                  </span>
                  {" "}
                  <span className={"font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold"}>
                    {"Workspace Simulation Controller"}
                  </span>
                  {" "}
                  <span className={"hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-outline-variant mx-1"} />
                  {" "}
                  <span className={"font-body-sm text-body-sm text-secondary hidden sm:inline"}>
                    {"Emulate governance enforcement boundary states"}
                  </span>
                </div>
                <div className={"flex flex-wrap items-center gap-1.5"} id={"sim-state-buttons"}>
                  <button className={"sim-btn active-sim px-space-sm py-1 rounded text-on-primary bg-primary font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('awaiting')")} type={"button"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-fixed"} />
                    {" "}
                    <span>
                      {"Awaiting Verification (Active)"}
                    </span>
                  </button>
                  {" "}
                  <button className={"sim-btn px-space-sm py-1 rounded text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high font-label-sm text-label-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('passed')")} type={"button"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-secondary"} />
                    {" "}
                    <span>
                      {"Pass — Ready for Seal"}
                    </span>
                  </button>
                  {" "}
                  <button className={"sim-btn px-space-sm py-1 rounded text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high font-label-sm text-label-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('failed')")} type={"button"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-error"} />
                    {" "}
                    <span>
                      {"Verification Failed"}
                    </span>
                  </button>
                  {" "}
                  <button className={"sim-btn px-space-sm py-1 rounded text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high font-label-sm text-label-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('gap')")} type={"button"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container"} />
                    {" "}
                    <span>
                      {"Telemetry Gap"}
                    </span>
                  </button>
                  {" "}
                  <button className={"sim-btn px-space-sm py-1 rounded text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high font-label-sm text-label-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('denied')")} type={"button"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-outline"} />
                    {" "}
                    <span>
                      {"Permission Denied"}
                    </span>
                  </button>
                  {" "}
                  <button className={"sim-btn px-space-sm py-1 rounded text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high font-label-sm text-label-sm transition-all flex items-center gap-1"} onClick={legacy("setSimState('loading')")} type={"button"}>
                    <span className={"material-symbols-outlined text-[13px] animate-spin"}>
                      {"sync"}
                    </span>
                    {" "}
                    <span>
                      {"Ingesting Telemetry"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"flex flex-col gap-space-xs mb-space-md"}>
              <div className={"flex flex-wrap items-center gap-1 font-label-sm text-label-sm text-on-surface-variant"}>
                <span>
                  {"Global Aerospace & Defense"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span>
                  {"Approvals & Verification"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span>
                  {"Recovery Verification"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span className={"text-primary font-bold"}>
                  {"VRF-2024-9942-V05"}
                </span>
              </div>
              <div className={"flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm"}>
                <div className={"flex flex-col gap-1"}>
                  <div className={"flex flex-wrap items-center gap-2"}>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                      {"Independent Verification & Attestation Workspace"}
                    </h1>
                    <span className={"px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm tracking-wide uppercase font-semibold"}>
                      {"STAGE 4 OF 5 • ACTIVE GATE"}
                    </span>
                  </div>
                  <div className={"flex flex-wrap items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm"}>
                    <div className={"flex items-center gap-1"}>
                      <span className={"font-semibold text-on-surface"}>
                        {"Case:"}
                      </span>
                      {" "}
                      <code className={"px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-bold"}>
                        {"VRF-2024-9942-V05"}
                      </code>
                    </div>
                    <span className={"text-outline-variant"}>
                      {"•"}
                    </span>
                    <div className={"flex items-center gap-1"}>
                      <span className={"font-semibold text-on-surface"}>
                        {"Plan:"}
                      </span>
                      {" "}
                      <span className={"text-primary underline cursor-pointer hover:text-primary-container"}>
                        {"REC-2024-9942-R01"}
                      </span>
                    </div>
                    <span className={"text-outline-variant"}>
                      {"•"}
                    </span>
                    <div className={"flex items-center gap-1"}>
                      <span className={"font-semibold text-on-surface"}>
                        {"Target Decision:"}
                      </span>
                      {" "}
                      <span className={"font-semibold text-on-surface"}>
                        {"DEC-14820"}
                      </span>
                      {" "}
                      <span className={"px-1.5 py-0.2 rounded bg-surface-container text-secondary font-label-sm text-label-sm"}>
                        {"(v2.4 Candidate)"}
                      </span>
                    </div>
                    <span className={"text-outline-variant"}>
                      {"•"}
                    </span>
                    <div className={"flex items-center gap-1 text-tertiary-container font-medium"}>
                      <span className={"material-symbols-outlined text-[15px]"}>
                        {"security"}
                      </span>
                      {" "}
                      <span>
                        {"Enclave SEC-9942 • Hardware TPM 2.0 PCR[07] • Dual-Key Isolation Enforced"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"flex items-center gap-2 self-start xl:self-center"}>
                  <button className={"px-3 py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5"} type={"button"} data-nav="/audit-history">
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"receipt_long"}
                    </span>
                    {" "}
                    <span>
                      {"Export Ledger Proof"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-3 py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5"} type={"button"} data-nav="/consequence-graph">
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"hub"}
                    </span>
                    {" "}
                    <span>
                      {"View Telemetry DAG"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"w-full bg-amber-500/10 text-on-surface rounded-xl p-space-md mb-space-lg shadow-sm"}>
              <div className={"flex items-start gap-space-sm"}>
                <div className={"w-9 h-9 rounded bg-amber-600/20 flex items-center justify-center shrink-0"}>
                  <span className={"material-symbols-outlined text-amber-700 text-[22px]"}>
                    {"gavel"}
                  </span>
                </div>
                <div className={"flex flex-col gap-1 flex-1"}>
                  <div className={"flex flex-wrap items-center gap-2"}>
                    <span className={"font-label-lg text-label-lg text-amber-900 uppercase tracking-wide font-bold"}>
                      {"Governance Barrier: Execution Self-Certification Prohibited"}
                    </span>
                    {" "}
                    <span className={"px-2 py-0.5 rounded bg-amber-700/15 text-amber-900 font-label-sm text-label-sm font-semibold"}>
                      {"DoD Directive 8140.03-M"}
                    </span>
                    {" "}
                    <span className={"px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm"}>
                      {"Dual-Key Gate"}
                    </span>
                  </div>
                  <p className={"font-body-md text-body-md text-amber-950/90 leading-relaxed"}>
                    {" An execution authority "}
                    <span className={"font-semibold"}>
                      {"(SecOps Custodian Col. Marcus Vance)"}
                    </span>
                    {" can never certify their own recovery remediation. Successful remediation execution simply promotes this record to Stage 4. Legal attestation, cryptographic validation, and genesis clearance are reserved exclusively for the Independent Risk & Integrity Auditor "}
                    <span className={"font-semibold"}>
                      {"(Dr. Elena Rostova)"}
                    </span>
                    {" using out-of-band hardware telemetry proofs. "}
                  </p>
                </div>
              </div>
            </div>
            <div className={"w-full bg-surface-container-lowest rounded-xl p-space-md mb-space-lg shadow-sm"}>
              <div className={"flex items-center justify-between pb-space-sm mb-space-sm"}>
                <div className={"flex items-center gap-2"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    {"conversion_path"}
                  </span>
                  {" "}
                  <span className={"font-label-lg text-label-lg text-on-surface font-bold"}>
                    {"Recovery Attestation Lifecycle Stream"}
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  {"Protocol Spec 3.9.4 • Non-Repudiable Pipeline"}
                </span>
              </div>
              <div className={"grid grid-cols-1 md:grid-cols-5 gap-space-sm relative"}>
                <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 relative"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"}>
                      {"Stage 01"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                      {"check_circle"}
                    </span>
                  </div>
                  <div className={"font-label-md text-label-md text-on-surface font-semibold"}>
                    {"Impact Triage"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Blast radius contained: 3 services"}
                  </div>
                  <div className={"mt-1 font-mono text-[10px] text-secondary"}>
                    {"HASH: 0x9e12...b43"}
                  </div>
                </div>
                <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 relative"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"}>
                      {"Stage 02"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                      {"check_circle"}
                    </span>
                  </div>
                  <div className={"font-label-md text-label-md text-on-surface font-semibold"}>
                    {"Minimum Recovery"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"REC-2024-9942 plan synthesized"}
                  </div>
                  <div className={"mt-1 font-mono text-[10px] text-secondary"}>
                    {"HASH: 0xaa40...1f7"}
                  </div>
                </div>
                <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 relative"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"}>
                      {"Stage 03"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-secondary text-[18px]"}>
                      {"history_edu"}
                    </span>
                  </div>
                  <div className={"font-label-md text-label-md text-on-surface font-semibold"}>
                    {"Execution"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"By Col. Vance (14:22:04 UTC)"}
                  </div>
                  <div className={"mt-1 font-mono text-[10px] text-amber-700 bg-amber-500/10 px-1 rounded inline-block"}>
                    {"Unverified Self-Report"}
                  </div>
                </div>
                <div className={"p-space-sm rounded-lg bg-primary-container text-on-primary flex flex-col gap-1 shadow-md relative overflow-hidden"}>
                  <div className={"absolute -right-4 -bottom-4 opacity-10"}>
                    <span className={"material-symbols-outlined text-[72px]"}>
                      {"verified"}
                    </span>
                  </div>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container font-bold"}>
                      {"Stage 04 • ACTIVE GATE"}
                    </span>
                    {" "}
                    <span className={"relative flex h-2.5 w-2.5"}>
                      <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"} />
                      {" "}
                      <span className={"relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-fixed"} />
                    </span>
                  </div>
                  <div className={"font-label-md text-label-md text-on-primary font-bold"}>
                    {"Independent Verification"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-primary-container"}>
                    {"Auditor: Dr. Elena Rostova"}
                  </div>
                  <div className={"mt-1 font-label-sm text-label-sm bg-surface-container-lowest/15 px-1.5 py-0.5 rounded text-surface-container-lowest self-start font-medium"}>
                    {"Awaiting Out-of-Band Signoff"}
                  </div>
                </div>
                <div className={"p-space-sm rounded-lg bg-surface-container flex flex-col gap-1 opacity-70"}>
                  <div className={"flex items-center justify-between"}>
                    <span className={"font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold"}>
                      {"Stage 05"}
                    </span>
                    {" "}
                    <span className={"material-symbols-outlined text-outline text-[18px]"}>
                      {"lock"}
                    </span>
                  </div>
                  <div className={"font-label-md text-label-md text-on-surface-variant font-semibold"}>
                    {"Genesis Revalidation"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Firmware release lock engaged"}
                  </div>
                  <div className={"mt-1 font-mono text-[10px] text-outline"}>
                    {"LOCKED BY POLICY"}
                  </div>
                </div>
              </div>
            </div>
            <div className={"mb-space-lg"} id={"status-alert-container"}>
              <div className={"p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between"} id={"alert-awaiting"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-primary text-[20px]"}>
                      {"fingerprint"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                      {"Awaiting Verification Authority Attestation"}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Independent hardware probe sampling complete. 3 of 3 telemetry points acquired. Digital counter-signature required to seal block."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold"}>
                  {"Probe Consensus 100%"}
                </span>
              </div>
              <div className={"hidden p-space-md rounded-xl bg-emerald-500/10 text-on-surface shadow-sm flex items-center justify-between"} id={"alert-passed"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-emerald-600/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-emerald-700 text-[20px]"}>
                      {"verified"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-emerald-950 font-bold"}>
                      {"Independent Attestation Signed • Genesis Seal Authorized"}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-emerald-900"}>
                      {"Certificate CRT-9942-ELENA broadcasted to Ledger. Node #04 signed Merkle root. Stage 5 Genesis seal is now unlocked."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-emerald-600/20 text-emerald-900 font-label-sm text-label-sm font-bold"}>
                  {"READY FOR REVALIDATION"}
                </span>
              </div>
              <div className={"hidden p-space-md rounded-xl bg-error-container text-on-error-container shadow-sm flex items-center justify-between"} id={"alert-failed"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-error/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-error text-[20px]"}>
                      {"crisis_alert"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-on-error-container font-bold"}>
                      {"Verification Failed — Unresolved Deficit Detected"}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-on-error-container"}>
                      {"Independent probes discovered delta mismatch in Obligation 804B cert payload. Recovery plan REC-2024-9942 has been automatically reopened."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold"}>
                  {"FLAGGED DEFICIT"}
                </span>
              </div>
              <div className={"hidden p-space-md rounded-xl bg-amber-500/10 text-on-surface shadow-sm flex items-center justify-between"} id={"alert-gap"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-amber-800 text-[20px]"}>
                      {"wifi_off"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-amber-950 font-bold"}>
                      {"Telemetry Discontinuity — Enclave Probe #04 Heartbeat Missed"}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-amber-900"}>
                      {"Missing hardware TPM PCR[07] attestation chunk for timestamp 14:26:00-14:28:00 UTC. Zero-trust barrier prevents signoff until replay is fulfilled."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-amber-600/20 text-amber-950 font-label-sm text-label-sm font-semibold"}>
                  {"REPLAY REQUIRED"}
                </span>
              </div>
              <div className={"hidden p-space-md rounded-xl bg-surface-container-high text-on-surface shadow-sm flex items-center justify-between"} id={"alert-denied"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-outline/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-on-surface text-[20px]"}>
                      {"shield_person"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                      {"Access Restricted: Clearance & Key Boundary"}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Active user lacks TS/SCI cryptographic sign-key authorization for Stage 4 execution verification. View-only mode enforced."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold"}>
                  {"CLEARANCE BOUNDARY"}
                </span>
              </div>
              <div className={"hidden p-space-md rounded-xl bg-surface-container shadow-sm flex items-center justify-between animate-pulse"} id={"alert-loading"}>
                <div className={"flex items-center gap-space-sm"}>
                  <div className={"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-primary text-[20px] animate-spin"}>
                      {"refresh"}
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                      {"Ingesting Raw Hardware Telemetry & Nonces..."}
                    </h4>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Validating Merkle inclusion tree roots against Raytheon Cold-Standby Cluster nodes. Standby..."}
                    </p>
                  </div>
                </div>
                <span className={"px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-mono"}>
                  {"STREAMING (87%)"}
                </span>
              </div>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start"}>
              <div className={"lg:col-span-8 flex flex-col gap-space-md"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-sm"}>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between pb-space-xs mb-space-sm"}>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"material-symbols-outlined text-secondary text-[18px]"}>
                            {"account_box"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-bold"}>
                            {"Executor Self-Reported Telemetry"}
                          </span>
                        </div>
                        <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"}>
                          {"Informational Only"}
                        </span>
                      </div>
                      <div className={"bg-surface-container-low rounded-lg p-space-sm mb-space-sm"}>
                        <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1"}>
                          <span className={"font-semibold text-on-surface"}>
                            {"Executor Authority:"}
                          </span>
                          {" "}
                          <span>
                            {"Col. Marcus Vance (SecOps Lead)"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant"}>
                          <span>
                            {"Execution Finished:"}
                          </span>
                          {" "}
                          <span className={"font-mono text-on-surface font-medium"}>
                            {"14:22:04 UTC"}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-2"}>
                        <div className={"p-space-xs rounded bg-surface-container-low flex flex-col gap-0.5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm font-bold text-on-surface"}>
                              {"ACT-01: Raytheon HSM Certificate Replacement"}
                            </span>
                            {" "}
                            <span className={"text-tertiary-container font-mono text-[11px] font-bold"}>
                              {"Claimed PASS"}
                            </span>
                          </div>
                          <div className={"font-mono text-[11px] text-on-surface-variant truncate"}>
                            {"SHA-256: 0x3b11ef949021da44e05b76ca55848bb01948e"}
                          </div>
                          <div className={"font-body-sm text-body-sm text-secondary"}>
                            {"\"Ingested valid defense root cert to buffer\""}
                          </div>
                        </div>
                        <div className={"p-space-xs rounded bg-surface-container-low flex flex-col gap-0.5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm font-bold text-on-surface"}>
                              {"ACT-02: WASM Rule #804 Redaction Container"}
                            </span>
                            {" "}
                            <span className={"text-tertiary-container font-mono text-[11px] font-bold"}>
                              {"Claimed PASS"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant"}>
                            <span>
                              {"Self-Reported Latency:"}
                            </span>
                            {" "}
                            <span className={"font-mono font-semibold text-on-surface"}>
                              {"8.4 ms"}
                            </span>
                          </div>
                          <div className={"flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant"}>
                            <span>
                              {"Redaction Accuracy:"}
                            </span>
                            {" "}
                            <span className={"font-mono font-semibold text-on-surface"}>
                              {"100.0%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-sm pt-space-xs flex items-center gap-1.5 text-secondary"}>
                      <span className={"material-symbols-outlined text-[15px] text-secondary"}>
                        {"warning"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm"}>
                        {"Untrusted Executor Claim — Non-binding without out-of-band attestation."}
                      </span>
                    </div>
                  </div>
                  <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"}>
                    <div>
                      <div className={"flex items-center justify-between pb-space-xs mb-space-sm"}>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"material-symbols-outlined text-primary text-[18px]"}>
                            {"verified_user"}
                          </span>
                          {" "}
                          <span className={"font-label-md text-label-md text-on-surface font-bold"}>
                            {"Independently Observed Evidence"}
                          </span>
                        </div>
                        <span className={"px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold"}>
                          {"Hardware Out-of-Band"}
                        </span>
                      </div>
                      <div className={"bg-primary/5 rounded-lg p-space-sm mb-space-sm"}>
                        <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1"}>
                          <span className={"font-semibold text-primary"}>
                            {"Observation Node:"}
                          </span>
                          {" "}
                          <span className={"font-mono font-bold text-primary"}>
                            {"Verifier Node #04 (Air-Gapped)"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant"}>
                          <span>
                            {"TPM PCR[07] Hash:"}
                          </span>
                          {" "}
                          <span className={"font-mono text-on-surface font-bold text-[11px]"}>
                            {"881a:ff02:3c4e:90d1"}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-2"}>
                        <div className={"p-space-xs rounded bg-surface-container-low flex flex-col gap-0.5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm font-bold text-on-surface"}>
                              {"DoD Root CA Chain Probe"}
                            </span>
                            {" "}
                            <span className={"px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-900 font-label-sm text-label-sm font-bold"}>
                              {"Cryptographically Valid"}
                            </span>
                          </div>
                          <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {"Direct CRL query verified at 14:28:10 UTC; WORM anchor confirmed at block #8,941,222."}
                          </div>
                        </div>
                        <div className={"p-space-xs rounded bg-surface-container-low flex flex-col gap-0.5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm font-bold text-on-surface"}>
                              {"Live Tier-1 Synthetic Jamming Inject"}
                            </span>
                            {" "}
                            <span className={"px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-900 font-label-sm text-label-sm font-bold"}>
                              {"Resilient (9.2ms)"}
                            </span>
                          </div>
                          <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                            {"50,000 egress test vectors injected; 0 unredacted PII/CUI payloads observed."}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"mt-space-sm pt-space-xs flex items-center justify-between text-tertiary-container font-label-sm text-label-sm"}>
                      <span className={"flex items-center gap-1 font-semibold"}>
                        <span className={"material-symbols-outlined text-[15px]"}>
                          {"lock_clock"}
                        </span>
                        {" FIPS 140-3 Monotonic Counter Verified "}
                      </span>
                      {" "}
                      <span className={"font-mono text-[11px]"}>
                        {"DELTA: 0.00ms"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex flex-wrap items-center justify-between pb-space-sm mb-space-md"}>
                    <div className={"flex items-center gap-2"}>
                      <div className={"w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"difference"}
                        </span>
                      </div>
                      <div>
                        <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Three-Way Comparative Diff Matrix"}
                        </h3>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                          {"Deterministic verification: Expected Policy Target vs. Executor Self-Claim vs. Out-of-Band Hardware Truth"}
                        </p>
                      </div>
                    </div>
                    <div className={"flex items-center gap-2"}>
                      <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                        {"Resolution Formula:"}
                      </span>
                      {" "}
                      <span className={"font-mono text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold"}>
                        {"V = (Expected ∩ Observed) ∖ Claim"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-md"}>
                    <div className={"bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"flex flex-wrap items-center justify-between gap-2 pb-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold"}>
                            {"OBL-804B"}
                          </span>
                          {" "}
                          <span className={"font-label-lg text-label-lg text-on-surface font-bold"}>
                            {"Subcontractor Key Escrow & HSM Cryptographic Authority"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-900 font-label-sm text-label-sm font-bold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"check_circle"}
                            </span>
                            {" MATCH & VERIFIED "}
                          </span>
                        </div>
                      </div>
                      <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-sm text-body-sm font-body-sm"}>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                            {"Target Spec (DEC-14820)"}
                          </span>
                          <div className={"font-medium text-on-surface"}>
                            {"FIPS 140-3 Level 3 valid RSA 4096 bundle signed by Root DoD PKI CA."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-on-surface-variant"}>
                            {"Alg: RSA-PSS 4096 SHA-384"}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                              {"Executor Claim (Col. Vance)"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-on-surface-variant"}>
                              {"14:22:04 UTC"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"Payload Ingested: "}
                            <code className={"font-mono text-[11px] text-primary"}>
                              {"0x3b11ef949021da44e05b76ca55848bb01..."}
                            </code>
                          </div>
                          <div className={"mt-auto pt-2 font-body-sm text-body-sm text-secondary"}>
                            {"Reported HSM partition zeroization complete."}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 bg-emerald-500/5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-emerald-950 uppercase font-bold"}>
                              {"Independent Node #04 Probe"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-emerald-950 font-bold"}>
                              {"14:28:10 UTC"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"Root chain verified via DoD CRL query. Hardware WORM leaf anchor confirmed at Block #8,941,222."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-emerald-950 font-bold"}>
                            {"Cert Chain Status: VALID (Exp: 2029)"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"flex flex-wrap items-center justify-between gap-2 pb-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold"}>
                            {"OBL-804C"}
                          </span>
                          {" "}
                          <span className={"font-label-lg text-label-lg text-on-surface font-bold"}>
                            {"Rule #804 Egress Latency & Jamming Resilience Baseline"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-900 font-label-sm text-label-sm font-bold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"check_circle"}
                            </span>
                            {" PASS (WITHIN 12ms THRESHOLD) "}
                          </span>
                        </div>
                      </div>
                      <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-sm text-body-sm font-body-sm"}>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                            {"Target Spec (DEC-14820)"}
                          </span>
                          <div className={"font-medium text-on-surface"}>
                            {"Latency ≤ 12.0 ms under active Tier-1 synthetic jamming; Zero unredacted PII/CUI tokens in egress."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-on-surface-variant"}>
                            {"SLA Ceiling: 12.000 ms"}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                              {"Executor Claim (Col. Vance)"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-on-surface-variant"}>
                              {"Self-Bench"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"Claimed Latency: "}
                            <span className={"font-mono font-bold text-on-surface"}>
                              {"8.4 ms"}
                            </span>
                            {" (Warning: EW jamming module was bypassed in local sandbox test)."}
                          </div>
                          <div className={"mt-auto pt-2 font-body-sm text-body-sm text-secondary"}>
                            {"Partial condition testing only."}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 bg-emerald-500/5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-emerald-950 uppercase font-bold"}>
                              {"Independent Node #04 Probe"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-emerald-950 font-bold"}>
                              {"Live Inject Run"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"True Jamming Latency: "}
                            <span className={"font-mono font-bold text-primary"}>
                              {"9.2 ms"}
                            </span>
                            {". 0 CUI leakage detected in 50,000 egress test vectors."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-emerald-950 font-bold"}>
                            {"SLA Margin: +2.8 ms Headroom"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                      <div className={"flex flex-wrap items-center justify-between gap-2 pb-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold"}>
                            {"OBL-911A"}
                          </span>
                          {" "}
                          <span className={"font-label-lg text-label-lg text-on-surface font-bold"}>
                            {"Model Weight Decoupling (AGT-4402 & SYS-7719)"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-900 font-label-sm text-label-sm font-bold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px]"}>
                              {"verified"}
                            </span>
                            {" ZERO TAINT CONFIRMED "}
                          </span>
                        </div>
                      </div>
                      <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-sm text-body-sm font-body-sm"}>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                            {"Target Spec (DEC-14820)"}
                          </span>
                          <div className={"font-medium text-on-surface"}>
                            {"Merkle inclusion hash "}
                            <code className={"font-mono text-[11px] text-primary"}>
                              {"sha256(root_41)"}
                            </code>
                            {" unchanged. Zero weight taint tolerated during HSM roll."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-on-surface-variant"}>
                            {"Baseline: 0x8a9f...e01"}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                              {"Executor Claim (Col. Vance)"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-on-surface-variant"}>
                              {"Attested Statement"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"\"No operational modifications made to neural weights or fine-tune adapter layers.\""}
                          </div>
                          <div className={"mt-auto pt-2 font-body-sm text-body-sm text-secondary"}>
                            {"Manual declaration."}
                          </div>
                        </div>
                        <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 bg-emerald-500/5"}>
                          <div className={"flex items-center justify-between"}>
                            <span className={"font-label-sm text-label-sm text-emerald-950 uppercase font-bold"}>
                              {"Independent Node #04 Probe"}
                            </span>
                            {" "}
                            <span className={"font-mono text-[10px] text-emerald-950 font-bold"}>
                              {"Bitwise Verify"}
                            </span>
                          </div>
                          <div className={"font-medium text-on-surface"}>
                            {"Bitwise diff delta is "}
                            <span className={"font-mono font-bold text-on-surface"}>
                              {"0x00000000"}
                            </span>
                            {". Merkle branch "}
                            <code className={"font-mono text-[11px] text-primary"}>
                              {"0x8a9fe...e01"}
                            </code>
                            {" completely identical."}
                          </div>
                          <div className={"mt-auto pt-2 font-mono text-[10px] text-emerald-950 font-bold"}>
                            {"Taint Probability: 0.0000000%"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"show_chart"}
                      </span>
                      {" "}
                      <span className={"font-label-lg text-label-lg text-on-surface font-bold"}>
                        {"Independent Jamming Latency Observation Profile (Sub-12ms Gate)"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-sm font-label-sm text-label-sm"}>
                      <span className={"flex items-center gap-1 text-on-surface-variant"}>
                        <span className={"w-2.5 h-0.5 bg-primary rounded"} />
                        {" Live Observed (9.2ms Avg) "}
                      </span>
                      {" "}
                      <span className={"flex items-center gap-1 text-error"}>
                        <span className={"w-2.5 h-0.5 bg-error rounded"} />
                        {" 12.0ms Hard Governance Ceiling "}
                      </span>
                    </div>
                  </div>
                  <div className={"w-full bg-surface-container-low rounded-lg p-space-sm relative overflow-hidden"}>
                    <svg className={"w-full h-24 text-primary"} preserveAspectRatio={"none"} viewBox={"0 0 760 110"}>
                      <line stroke={"currentColor"} strokeDasharray={"3,3"} strokeOpacity={"0.08"} x1={"0"} x2={"760"} y1={"20"} y2={"20"} />
                      <line stroke={"currentColor"} strokeDasharray={"3,3"} strokeOpacity={"0.08"} x1={"0"} x2={"760"} y1={"50"} y2={"50"} />
                      <line stroke={"currentColor"} strokeDasharray={"3,3"} strokeOpacity={"0.08"} x1={"0"} x2={"760"} y1={"80"} y2={"80"} />
                      <line stroke={"#ba1a1a"} strokeDasharray={"4,4"} strokeWidth={"1.5"} x1={"0"} x2={"760"} y1={"25"} y2={"25"} />
                      <text fill={"#ba1a1a"} fontFamily={"Inter"} fontSize={"10"} fontWeight={"600"} x={"640"} y={"20"}>
                        {"Threshold: 12.0ms"}
                      </text>
                      <defs>
                        <lineargradient id={"chartGradient"} x1={"0"} x2={"0"} y1={"0"} y2={"1"}>
                          <stop offset={"0%"} stopColor={"#00288e"} stopOpacity={"0.25"} />
                          <stop offset={"100%"} stopColor={"#00288e"} stopOpacity={"0.0"} />
                        </lineargradient>
                      </defs>
                      <path d={"M 0,80 Q 70,68 140,62 T 280,58 T 420,54 T 560,52 T 700,56 L 760,55 L 760,110 L 0,110 Z"} fill={"url(#chartGradient)"} />
                      <path d={"M 0,80 Q 70,68 140,62 T 280,58 T 420,54 T 560,52 T 700,56 L 760,55"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.5"} />
                      <circle cx={"140"} cy={"62"} fill={"#00288e"} r={"3.5"} />
                      <circle cx={"280"} cy={"58"} fill={"#00288e"} r={"3.5"} />
                      <circle cx={"420"} cy={"54"} fill={"#00288e"} r={"3.5"} />
                      <circle cx={"560"} cy={"52"} fill={"#00288e"} r={"3.5"} />
                      <circle cx={"700"} cy={"56"} fill={"#00288e"} r={"3.5"} />
                    </svg>
                    <div className={"flex items-center justify-between text-on-surface-variant font-mono text-[10px] mt-1"}>
                      <span>
                        {"T-00:15:00"}
                      </span>
                      {" "}
                      <span>
                        {"T-00:10:00 (Jamming Start)"}
                      </span>
                      {" "}
                      <span>
                        {"T-00:05:00"}
                      </span>
                      {" "}
                      <span>
                        {"T-00:00:00 (Target Stabilized @ 9.2ms)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-4 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                  <div className={"flex items-center justify-between pb-space-xs"}>
                    <div className={"flex items-center gap-1.5"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"badge"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md text-on-surface font-bold"}>
                        {"Independent Authority"}
                      </span>
                    </div>
                    <span className={"px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold"}>
                      {"Active Verifier"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low"}>
                    <div className={"w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shrink-0"}>
                      <span className={"material-symbols-outlined text-[24px]"}>
                        {"verified_user"}
                      </span>
                    </div>
                    <div className={"flex flex-col min-w-0"}>
                      <span className={"font-label-lg text-label-lg text-on-surface font-bold truncate"}>
                        {"Dr. Elena Rostova"}
                      </span>
                      {" "}
                      <span className={"font-body-sm text-body-sm text-on-surface-variant leading-tight"}>
                        {"Lead AI Risk Auditor & Cryptographic Verifier"}
                      </span>
                      {" "}
                      <span className={"font-mono text-[11px] text-primary font-semibold mt-0.5"}>
                        {"PIV-CAC #99420-ROSTOVA"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-1.5 pt-1 text-body-sm font-body-sm"}>
                    <div className={"flex items-center justify-between py-1"}>
                      <span className={"text-on-surface-variant"}>
                        {"Security Clearance:"}
                      </span>
                      {" "}
                      <span className={"font-semibold text-on-surface bg-surface-container px-2 py-0.5 rounded font-mono text-[11px]"}>
                        {"TS/SCI-SAR (DoD-AF)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between py-1"}>
                      <span className={"text-on-surface-variant"}>
                        {"Hardware Enclave:"}
                      </span>
                      {" "}
                      <span className={"font-mono text-[11px] text-on-surface font-semibold"}>
                        {"TPM 2.0 PCR[07] Valid"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between py-1"}>
                      <span className={"text-on-surface-variant"}>
                        {"Monotonic Hardware Clock:"}
                      </span>
                      {" "}
                      <span className={"font-mono text-[11px] text-tertiary-container font-bold"}>
                        {"14:31:45 UTC"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                  <div className={"flex items-center justify-between pb-space-xs"}>
                    <div className={"flex items-center gap-1.5"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"draw"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md text-on-surface font-bold"}>
                        {"Attestation Memo & Rationale"}
                      </span>
                    </div>
                    <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                      {"Formal Record"}
                    </span>
                  </div>
                  <div className={"flex flex-col gap-1.5"}>
                    <label className={"font-label-sm text-label-sm text-on-surface-variant font-semibold"} htmlFor={"attestation-memo"}>
                      {"Auditor Verifiable Rationale (Non-Repudiable):"}
                    </label>
                    <textarea className={"w-full p-2.5 rounded bg-surface text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none leading-relaxed"} id={"attestation-memo"} placeholder={"Enter formal justification for cryptographic certificate release..."} rows={"4"} defaultValue={"Independent out-of-band probe Node #04 confirmed HSM certificate signature against Root DoD PKI CA with active CRL confirmation at 14:28:10 UTC. Synthetic jamming inject benchmark recorded 9.2ms latency (pass ceiling 12.0ms) with zero PII/CUI leakage observed. Model Merkle root confirmed intact. Verification conditions satisfied."} />
                  </div>
                  <div className={"flex flex-col gap-1"}>
                    <span className={"font-label-sm text-label-sm text-secondary font-medium"}>
                      {"Insert Quick Proof Stamping Badges:"}
                    </span>
                    <div className={"flex flex-wrap gap-1.5"}>
                      <button className={"px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-left"} onClick={legacy("insertStamp('+ FIPS 140-3 Out-of-Band Attested')")} type={"button"}>
                        {" + FIPS 140-3 Out-of-Band Attested "}
                      </button>
                      {" "}
                      <button className={"px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-left"} onClick={legacy("insertStamp('+ Sub-12ms EW Jamming Verified')")} type={"button"}>
                        {" + Sub-12ms EW Jamming Verified "}
                      </button>
                      {" "}
                      <button className={"px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-left"} onClick={legacy("insertStamp('+ Zero-Taint Merkle Seal Validated')")} type={"button"}>
                        {" + Zero-Taint Merkle Seal Validated "}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-2 pt-space-xs mt-space-xs"}>
                    <button className={"w-full py-2.5 px-space-md rounded bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg font-bold shadow-sm transition-all flex items-center justify-center gap-2"} id={"btn-attest-primary"} onClick={legacy("triggerAttestationModal()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"verified"}
                      </span>
                      {" "}
                      <span>
                        {"Attest & Issue Verification Certificate"}
                      </span>
                    </button>
                    {" "}
                    <button className={"w-full py-2 px-space-md rounded bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-2"} onClick={legacy("rejectVerificationAction()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"cancel"}
                      </span>
                      {" "}
                      <span>
                        {"Reject Verification & Reopen Plan"}
                      </span>
                    </button>
                    {" "}
                    <button className={"w-full py-2 px-space-md rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors flex items-center justify-center gap-2"} onClick={legacy("triggerResampleAction()")} type={"button"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"sensors"}
                      </span>
                      {" "}
                      <span>
                        {"Trigger Independent Re-Sampling Probe"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"}>
                  <div className={"flex items-center justify-between pb-space-xs"}>
                    <div className={"flex items-center gap-1.5"}>
                      <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                        {"lock"}
                      </span>
                      {" "}
                      <span className={"font-label-md text-label-md text-on-surface font-bold"}>
                        {"WORM Cryptographic Ledger Stamp"}
                      </span>
                    </div>
                    <span className={"font-mono text-[10px] text-tertiary-container font-bold"}>
                      {"IMMUTABLE"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1.5 font-mono text-[11px]"}>
                    <div>
                      <span className={"text-secondary"}>
                        {"Merkle Root (SHA-384):"}
                      </span>
                      <div className={"text-on-surface font-semibold break-all"}>
                        {"f98a83c74902aef1b83901bcae884109cd9820f12..."}
                      </div>
                    </div>
                    <div>
                      <span className={"text-secondary"}>
                        {"Hardware Enclave Signature:"}
                      </span>
                      <div className={"text-primary break-all"}>
                        {"SIG_ED25519_TPM2_0x9942_891af02..."}
                      </div>
                    </div>
                    <div>
                      <span className={"text-secondary"}>
                        {"WORM Storage Ledger Anchor:"}
                      </span>
                      <div className={"text-on-surface"}>
                        {"Block #8,941,222 • Tx #14 • Epoch 982"}
                      </div>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1"}>
                    <span className={"flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px] text-tertiary-container"}>
                        {"done_all"}
                      </span>
                      {" "}
                      <span>
                        {"FIPS 140-3 Hardware Sealed"}
                      </span>
                    </span>
                    {" "}
                    <span className={"font-mono text-[11px] text-secondary"}>
                      {"0.000% Revocation Risk"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-4"} id={"attest-modal"}>
              <div className={"bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-2xl flex flex-col gap-space-md"}>
                <div className={"flex items-start justify-between pb-space-xs"}>
                  <div className={"flex items-center gap-2"}>
                    <div className={"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"}>
                      <span className={"material-symbols-outlined text-[24px]"}>
                        {"verified"}
                      </span>
                    </div>
                    <div>
                      <h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
                        {"Authorize Attestation Certificate"}
                      </h3>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Issue non-repudiable Stage 4 clearance for VRF-2024-9942-V05"}
                      </p>
                    </div>
                  </div>
                  <button className={"text-on-surface-variant hover:text-on-surface"} onClick={legacy("closeAttestationModal()")} type={"button"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className={"p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2 font-body-sm text-body-sm"}>
                  <div className={"flex justify-between"}>
                    <span className={"text-on-surface-variant"}>
                      {"Verifier Identity:"}
                    </span>
                    {" "}
                    <span className={"font-semibold text-on-surface"}>
                      {"Dr. Elena Rostova"}
                    </span>
                  </div>
                  <div className={"flex justify-between"}>
                    <span className={"text-on-surface-variant"}>
                      {"Certificate Identity:"}
                    </span>
                    {" "}
                    <span className={"font-mono text-primary font-bold"}>
                      {"CRT-9942-ELENA-PASS"}
                    </span>
                  </div>
                  <div className={"flex justify-between"}>
                    <span className={"text-on-surface-variant"}>
                      {"Next Lifecycle Action:"}
                    </span>
                    {" "}
                    <span className={"text-emerald-950 font-bold bg-emerald-500/10 px-1.5 rounded"}>
                      {"Unlocks Stage 5 (Genesis Revalidation)"}
                    </span>
                  </div>
                </div>
                <p className={"font-body-sm text-body-sm text-secondary"}>
                  {" By clicking \"Sign with PIV-CAC\", you commit an immutable audit record to the FIPS 140-3 enclave hardware ledger. This action cannot be revoked by the executor. "}
                </p>
                <div className={"flex items-center justify-end gap-2 pt-space-xs"}>
                  <button className={"px-4 py-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors"} onClick={legacy("closeAttestationModal()")} type={"button"}>
                    {" Cancel "}
                  </button>
                  {" "}
                  <button className={"px-5 py-2 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-bold shadow-sm transition-all flex items-center gap-1.5"} onClick={legacy("executeAttestationSignoff()")} type={"button"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"key"}
                    </span>
                    {" "}
                    <span>
                      {"Sign with PIV-CAC & Authorize Seal"}
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
