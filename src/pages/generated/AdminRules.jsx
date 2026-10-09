// AUTO-GENERATED from AdminRules&Evidence-configuration-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/admin-rules.js?raw';

const exportsList = ["selectRule","switchSimulationMode","toggleAuditDrawer","exportJsonLd","addNewPolicyRule","duplicateRule","viewHistory","discardDraft","dryRunSimulation","saveStageDraft","promotePolicyEnforce","filterRules"];

export default function AdminRules() {
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
                {"Compliance & Policies"}
              </span>
              <span className={"material-symbols-outlined text-[14px]"}>
                {"chevron_right"}
              </span>
              <span className={"text-on-surface font-semibold text-primary"}>
                {"Admin Rules & Configuration"}
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
            <div className={"w-full bg-surface-container px-space-md py-space-xs rounded-xl shadow-sm mb-space-md flex flex-wrap items-center justify-between gap-space-sm"}>
              <div className={"flex flex-wrap items-center gap-space-xs"}>
                <span className={"font-label-sm text-label-sm uppercase text-secondary font-semibold tracking-wider flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[14px] text-primary"}>
                    {"tune"}
                  </span>
                  {" Engine State: "}
                </span>
                <div className={"inline-flex p-0.5 rounded-lg bg-surface-container-highest gap-1"}>
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary font-semibold shadow-sm transition-all flex items-center gap-1"} id={"mode-active"} onClick={legacy("switchSimulationMode('active')")}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                    {" Active Policy Builder "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all"} id={"mode-nested"} onClick={legacy("switchSimulationMode('nested')")}>
                    {" Logic Preview "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all"} id={"mode-draft"} onClick={legacy("switchSimulationMode('draft')")}>
                    {" Draft History (v3.2) "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all"} id={"mode-readonly"} onClick={legacy("switchSimulationMode('readonly')")}>
                    {" Read-Only Admin "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all"} id={"mode-error"} onClick={legacy("switchSimulationMode('error')")}>
                    {" Validation Drift State "}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all"} id={"mode-empty"} onClick={legacy("switchSimulationMode('empty')")}>
                    {" Empty Enclave "}
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm"}>
                <div className={"flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant shadow-sm"}>
                  <span className={"material-symbols-outlined text-primary text-[14px]"}>
                    {"shield_locked"}
                  </span>
                  {" "}
                  <span>
                    {"SEC-9942 Enclave v4.8"}
                  </span>
                </div>
                <div className={"flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-tertiary font-semibold shadow-sm"}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                  {" "}
                  <span>
                    {"Merkle Ledger Binding: Monotonic Valid"}
                  </span>
                </div>
                <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold"}>
                  {" FIPS 140-3 L3 Sealed "}
                </span>
              </div>
            </div>
            <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg"}>
              <div className={"flex flex-col max-w-3xl"}>
                <div className={"flex items-center gap-2 mb-1"}>
                  <span className={"px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase font-semibold"}>
                    {" Declarative Engine • Core Subsystem 03 "}
                  </span>
                  {" "}
                  <span className={"text-secondary font-label-sm text-label-sm"}>
                    {"|"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                    {"ROOT_SPEC: urn:ceryvra:policy:v4.8:sec-gov"}
                  </span>
                </div>
                <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold"}>
                  {" Governance Rules & Evidence Configuration Engine "}
                </h1>
                <p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
                  {" Administer mission-critical compliance policies, evidence completeness structures (ALL, ANY, K-of-N, Temporal, Weighted), authority tiers, and hardware threshold constraints without writing runtime code. "}
                </p>
              </div>
              <div className={"flex flex-wrap items-center gap-space-sm"}>
                <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all shadow-sm flex items-center gap-1.5"} onClick={legacy("toggleAuditDrawer()")}>
                  <span className={"material-symbols-outlined text-[18px] text-secondary"}>
                    {"history"}
                  </span>
                  {" "}
                  <span>
                    {"Audit Log & Diff History"}
                  </span>
                </button>
                {" "}
                <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all shadow-sm flex items-center gap-1.5"} onClick={legacy("exportJsonLd()")}>
                  <span className={"material-symbols-outlined text-[18px] text-secondary"}>
                    {"file_download"}
                  </span>
                  {" "}
                  <span>
                    {"Export JSON-LD Policy"}
                  </span>
                </button>
                {" "}
                <button className={"px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-md flex items-center gap-1.5"} onClick={legacy("addNewPolicyRule()")}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"add_circle"}
                  </span>
                  {" "}
                  <span>
                    {"Create New Policy Rule"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm mb-space-lg"}>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Active Bound Rules"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-primary"}>
                    {"24"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-tertiary-container font-semibold"}>
                    {"+2 staged"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-primary h-1 rounded-full w-full"} />
                </div>
              </div>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Evidence Obligations"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-on-surface"}>
                    {"18"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-secondary"}>
                    {"Verified Lib"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-tertiary-container h-1 rounded-full w-10/12"} />
                </div>
              </div>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Compound Trees"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-on-surface"}>
                    {"8"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                    {"K-of-N: 5"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-secondary h-1 rounded-full w-8/12"} />
                </div>
              </div>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Quorum Signers"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-on-surface"}>
                    {"6 Tiers"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-secondary"}>
                    {"Dual-Key Active"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-primary h-1 rounded-full w-11/12"} />
                </div>
              </div>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Telemetry Gates"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-on-surface"}>
                    {"12 Bounds"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-tertiary font-mono"}>
                    {"< 15.0ms"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-tertiary-container h-1 rounded-full w-full"} />
                </div>
              </div>
              <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"}>
                <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                  {"Simulated Drift"}
                </span>
                <div className={"flex items-baseline gap-2 mt-1"}>
                  <span className={"font-headline-md text-headline-md font-semibold text-tertiary"}>
                    {"0.00%"}
                  </span>
                  {" "}
                  <span className={"font-label-sm text-label-sm text-tertiary font-semibold"}>
                    {"Invariant"}
                  </span>
                </div>
                <div className={"w-full bg-surface-container rounded-full h-1 mt-2"}>
                  <div className={"bg-tertiary-container h-1 rounded-full w-full"} />
                </div>
              </div>
            </div>
            <div className={"flex items-center gap-space-xs overflow-x-auto pb-space-xs mb-space-md"}>
              <button className={"px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-sm flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Governance Rules & Policies"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm"}>
                  {"24 Active"}
                </span>
              </button>
              {" "}
              <button className={"px-space-md py-space-xs rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Evidence Requirements Library"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                  {"18 Definitions"}
                </span>
              </button>
              {" "}
              <button className={"px-space-md py-space-xs rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Completeness Logic & Quorum Rules"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                  {"8 Compound Trees"}
                </span>
              </button>
              {" "}
              <button className={"px-space-md py-space-xs rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Authorities & Signing Quorums"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                  {"6 Tiers"}
                </span>
              </button>
              {" "}
              <button className={"px-space-md py-space-xs rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Thresholds & Metric Bounds"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                  {"12 Telemetry Gates"}
                </span>
              </button>
              {" "}
              <button className={"px-space-md py-space-xs rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 whitespace-nowrap"}>
                <span>
                  {"Temporal & Epoch Constraints"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                  {"4 Sync Windows"}
                </span>
              </button>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg"}>
              <div className={"lg:col-span-7 flex flex-col gap-space-md"}>
                <div className={"p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs"}>
                  <div className={"flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg"}>
                    <span className={"material-symbols-outlined text-secondary text-[18px]"}>
                      {"search"}
                    </span>
                    {" "}
                    <input className={"w-full bg-transparent border-0 font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none"} id={"rule-filter-input"} onKeyUp={legacy("filterRules(this.value)")} placeholder={"Filter rules by ID, standard (e.g. FIPS, DoD 8140, NIST AI RMF), authority, or bound use-case..."} type={"text"} />
                    {" "}
                    <kbd className={"px-1.5 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm shadow-sm hidden sm:inline-block"}>
                      {"⌘K"}
                    </kbd>
                  </div>
                  <div className={"flex flex-wrap items-center justify-between gap-space-xs pt-1"}>
                    <div className={"flex flex-wrap items-center gap-space-xs"}>
                      <div className={"flex items-center gap-1 bg-surface-container px-space-xs py-1 rounded text-on-surface"}>
                        <span className={"material-symbols-outlined text-secondary text-[14px]"}>
                          {"category"}
                        </span>
                        <select className={"bg-transparent font-label-sm text-label-sm text-on-surface font-semibold focus:outline-none cursor-pointer"}>
                          <option>
                            {"Domain: All Policy Domains"}
                          </option>
                          <option>
                            {"Flight Envelope Controls"}
                          </option>
                          <option>
                            {"Model Decoupling & Hash"}
                          </option>
                          <option>
                            {"PII/CUI Telemetry Transit"}
                          </option>
                          <option>
                            {"Executive Orders & Parity"}
                          </option>
                        </select>
                      </div>
                      <div className={"flex items-center gap-1 bg-surface-container px-space-xs py-1 rounded text-on-surface"}>
                        <span className={"material-symbols-outlined text-secondary text-[14px]"}>
                          {"toggle_on"}
                        </span>
                        <select className={"bg-transparent font-label-sm text-label-sm text-on-surface font-semibold focus:outline-none cursor-pointer"}>
                          <option>
                            {"Status: Enforced & Active"}
                          </option>
                          <option>
                            {"Draft In-Review"}
                          </option>
                          <option>
                            {"Staged for PIV Multi-Sig"}
                          </option>
                          <option>
                            {"Deprecated v1.x"}
                          </option>
                        </select>
                      </div>
                      <div className={"flex items-center gap-1 bg-surface-container px-space-xs py-1 rounded text-on-surface"}>
                        <span className={"material-symbols-outlined text-secondary text-[14px]"}>
                          {"account_tree"}
                        </span>
                        <select className={"bg-transparent font-label-sm text-label-sm text-on-surface font-semibold focus:outline-none cursor-pointer"}>
                          <option>
                            {"Logic: All Compound Types"}
                          </option>
                          <option>
                            {"K-of-N Quorum"}
                          </option>
                          <option>
                            {"ALL (Conjunctive)"}
                          </option>
                          <option>
                            {"Weighted Sum >= %"}
                          </option>
                          <option>
                            {"Sequential Monotonic"}
                          </option>
                        </select>
                      </div>
                    </div>
                    <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                      {"Showing 4 of 24 Rules"}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-sm"} id={"rule-card-stack"}>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all cursor-pointer relative"} id={"card-rule-804"} onClick={legacy("selectRule('RULE-804')")}>
                    <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl"} />
                    <div className={"flex flex-col gap-space-xs"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"font-label-lg text-label-lg font-bold text-primary font-mono tracking-tight"}>
                            {"RULE-804"}
                          </span>
                          {" "}
                          <span className={"text-on-surface font-headline-sm text-headline-sm"}>
                            {"Real-Time CUI Redaction & Zero-Trust Telemetry Transit"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold uppercase"}>
                            {" Critical Tier 1 "}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold"}>
                            {" Active v3.1 "}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center gap-1.5 py-0.5"}>
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" Enclave SEC-9942 "}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" DoD Directive 8140.03-M "}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" FIPS 140-3 Level 3 "}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                        {" Enforces deterministic zero-leakage egress redaction and cryptographic transit envelope verification under simulated EW jamming environments prior to outbound enclave telemetry serialization. "}
                      </p>
                      <div className={"p-space-xs rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold flex items-center gap-1"}>
                            <span className={"material-symbols-outlined text-[14px] text-primary"}>
                              {"schema"}
                            </span>
                            {" Completeness Logic Specification: "}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-primary font-semibold"}>
                            {"Strict Monotonic"}
                          </span>
                        </div>
                        <p className={"font-body-sm text-body-sm font-mono text-on-surface font-semibold bg-surface-container-lowest p-space-xs rounded"}>
                          {" (ALL of [OBL-804A, OBL-804B]) AND (K-of-N [2 of 3 Telemetry Probes]) WITHIN 12.0ms Monotonic Window "}
                        </p>
                      </div>
                      <div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-xs pt-1"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-secondary text-[16px]"}>
                            {"verified"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                              {"Authority Requirement"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>
                              {"Dual-Key Quorum (TS/SCI Lead + SecOps Custodian)"}
                            </span>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-secondary text-[16px]"}>
                            {"hub"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-label-sm text-label-sm text-secondary uppercase"}>
                              {"Bound Decisions & Agents"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface font-mono font-semibold"}>
                              {"DEC-14820, DEC-15002, AGT-4402"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center justify-between pt-space-xs mt-space-xs bg-surface-container-low p-space-xs rounded-lg"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"w-2 h-2 rounded-full bg-tertiary-container animate-pulse"} />
                          {" "}
                          <span className={"font-label-sm text-label-sm text-on-surface font-semibold"}>
                            {"Genesis Ledger: Block #88,419 (Immutable)"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                          <button className={"px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shadow-sm transition-all"} onClick={legacy("duplicateRule('RULE-804')")}>
                            {" Duplicate "}
                          </button>
                          {" "}
                          <button className={"px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shadow-sm transition-all"} onClick={legacy("viewHistory('RULE-804')")}>
                            {" Merkle Diff (v1.0 → v3.1) "}
                          </button>
                          {" "}
                          <button className={"px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold shadow-sm transition-all"}>
                            {" Active in Inspector → "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative"} id={"card-rule-911"} onClick={legacy("selectRule('RULE-911')")}>
                    <div className={"flex flex-col gap-space-xs"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"font-label-lg text-label-lg font-bold text-on-surface-variant font-mono"}>
                            {"RULE-911"}
                          </span>
                          {" "}
                          <span className={"text-on-surface font-headline-sm text-headline-sm"}>
                            {"Algorithmic Weight Decoupling & Frozen Invariant Guard"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold uppercase"}>
                            {" High Tier 2 "}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold"}>
                            {" Active v2.0 "}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center gap-1.5 py-0.5"}>
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" NIST AI RMF 1.0 §Gov-2.2 "}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" Zero-Taint Bitwise "}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {" Prevents autonomous flight control model parameter drift by calculating cryptographic digest parity across all runtime weights prior to mission execution handshake. "}
                      </p>
                      <div className={"p-space-xs rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                          {"Completeness Formula"}
                        </span>
                        <p className={"font-body-sm text-body-sm font-mono text-on-surface"}>
                          {" Weighted Threshold: Sum(Weights) ≥ 95% with Zero-Taint Bitwise Hash Verification (OBL-911A required) "}
                        </p>
                      </div>
                      <div className={"flex items-center justify-between pt-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary"}>
                          {"Signoff: Authority-Ranked Tier 1 (AI Integrity Lead only)"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                          {"Bound: DEC-14820, UC-8821"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative"} id={"card-rule-462"} onClick={legacy("selectRule('RULE-462')")}>
                    <div className={"flex flex-col gap-space-xs"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"font-label-lg text-label-lg font-bold text-on-surface-variant font-mono"}>
                            {"RULE-462"}
                          </span>
                          {" "}
                          <span className={"text-on-surface font-headline-sm text-headline-sm"}>
                            {"Demographic Parity & Real-Time Disparate Impact Bounds"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold uppercase"}>
                            {" Medium Tier 3 "}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"}>
                            {" Active v1.4 "}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center gap-1.5 py-0.5"}>
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" Executive Order 14110 "}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" Fairness Metric Gateway "}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {" Monitors continuous human-in-the-loop predictive evaluations across personnel task assignments, triggering immediate enclave quarantine if ratio bounds violate 0.80 parity. "}
                      </p>
                      <div className={"p-space-xs rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                          {"Completeness Formula"}
                        </span>
                        <p className={"font-body-sm text-body-sm font-mono text-on-surface"}>
                          {" Temporal Rolling Window: Minimum 50,000 continuous inferences with Disparate Impact Ratio ≥ 0.80 within 24h Epoch "}
                        </p>
                      </div>
                      <div className={"flex items-center justify-between pt-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary"}>
                          {"Signoff: Senior Civil Liberties Officer"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                          {"Bound: DEC-4402"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative"} id={"card-rule-1024"} onClick={legacy("selectRule('RULE-1024')")}>
                    <div className={"flex flex-col gap-space-xs"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"font-label-lg text-label-lg font-bold text-secondary font-mono"}>
                            {"RULE-1024-DRAFT"}
                          </span>
                          {" "}
                          <span className={"text-on-surface font-headline-sm text-headline-sm"}>
                            {"Autonomous Flight Envelope Post-Quantum Dilithium Handshake"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                          <span className={"px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold uppercase"}>
                            {" Staged Draft v0.9 "}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold"}>
                            {" Pending Dual PIV Sign "}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center gap-1.5 py-0.5"}>
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" CNSA 2.0 PQC Suite "}
                        </span>
                        {" "}
                        <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                          {" CRYSTALS-Dilithium "}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {" Replaces legacy RSA-4096 telemetry handshake with post-quantum lattice-based signature algorithms for all unmanned aerial vehicle communications. "}
                      </p>
                      <div className={"p-space-xs rounded-lg bg-surface-container-low flex flex-col gap-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                          {"Completeness Formula"}
                        </span>
                        <p className={"font-body-sm text-body-sm font-mono text-on-surface"}>
                          {" Sequential Ordered: Step 1 (HSM PCR[07] Read) → Step 2 (PQC Kyber-1024 Key Agreement) → Dilithium Sign "}
                        </p>
                      </div>
                      <div className={"flex items-center justify-between pt-1"}>
                        <span className={"font-label-sm text-label-sm text-secondary font-semibold"}>
                          {"Awaiting Key Generation Ceremony"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-primary font-semibold"}>
                          {"Review Staged Schema →"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xl shadow-sm text-on-surface-variant"}>
                  <span className={"font-label-sm text-label-sm"}>
                    {"Displaying page 1 of 6 • 24 Rules Registered"}
                  </span>
                  <div className={"flex items-center gap-1"}>
                    <button className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high"}>
                      {"Previous"}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold"}>
                      {"1"}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high"}>
                      {"2"}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high"}>
                      {"3"}
                    </button>
                    {" "}
                    <button className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high"}>
                      {"Next"}
                    </button>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-5 flex flex-col gap-space-md"}>
                <div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md"}>
                  <div className={"flex flex-col gap-space-xs pb-space-xs bg-surface-container-low p-space-sm rounded-lg"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-sm text-label-sm text-primary font-mono font-bold uppercase tracking-wider"}>
                        {" Rule Configurator & Completeness Engine "}
                      </span>
                      {" "}
                      <span className={"px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold"}>
                        {" ENFORCED IN ENCLAVE "}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between"}>
                      <h2 className={"font-headline-sm text-headline-sm font-semibold text-on-surface"}>
                        {" RULE-804 (v3.1) Configuration "}
                      </h2>
                      <div className={"flex items-center gap-1 bg-surface-container-lowest p-0.5 rounded shadow-sm"}>
                        <button className={"px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold"}>
                          {" v3.1 Active "}
                        </button>
                        {" "}
                        <button className={"px-2 py-0.5 rounded text-secondary hover:text-on-surface font-label-sm text-label-sm"}>
                          {" Draft v3.2 Edit "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-md text-label-md text-primary font-semibold uppercase tracking-wider flex items-center gap-1.5"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"verified_user"}
                        </span>
                        {" Section 1: Identity & Signing Quorum "}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                        {"SPEC_ID: 804-GOV"}
                      </span>
                    </div>
                    <div className={"grid grid-cols-2 gap-space-xs"}>
                      <div className={"flex flex-col gap-1"}>
                        <label className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                          {"Rule Identifier"}
                        </label>
                        {" "}
                        <input className={"bg-surface-container px-space-sm py-1.5 rounded font-mono font-bold text-body-sm text-on-surface cursor-not-allowed"} readOnly type={"text"} defaultValue={"RULE-804"} />
                      </div>
                      <div className={"flex flex-col gap-1"}>
                        <label className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                          {"Rule Name"}
                        </label>
                        {" "}
                        <input className={"bg-surface-container-low px-space-sm py-1.5 rounded font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest"} type={"text"} defaultValue={"Real-Time CUI Redaction & Zero-Trust Transit"} />
                      </div>
                    </div>
                    <div className={"flex flex-col gap-1 mt-1"}>
                      <label className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                        {"Governance Standard / Mandate Anchor"}
                      </label>
                      <select className={"bg-surface-container-low px-space-sm py-1.5 rounded font-body-sm text-body-sm text-on-surface font-semibold focus:outline-none"} defaultValue={"DoD Directive 8140.03-M & FIPS 140-3 Level 3 (Airborne Autonomous)"}>
                        <option>
                          {"DoD Directive 8140.03-M & FIPS 140-3 Level 3 (Airborne Autonomous)"}
                        </option>
                        <option>
                          {"NIST AI Risk Management Framework 1.0 (NIST AI RMF)"}
                        </option>
                        <option>
                          {"Executive Order 14110 • Safe, Secure Trustworthy AI"}
                        </option>
                        <option>
                          {"CMMC 2.0 Level 3 Telemetry Safeguard Spec"}
                        </option>
                      </select>
                    </div>
                    <div className={"p-space-xs rounded-lg bg-surface-container-low flex flex-col gap-space-xs mt-1"}>
                      <span className={"font-label-sm text-label-sm text-on-surface font-semibold flex items-center justify-between"}>
                        <span>
                          {"Required Signing Quorum Structure:"}
                        </span>
                        {" "}
                        <span className={"font-mono text-primary font-bold"}>
                          {"2 of 2 Mandatory Keys"}
                        </span>
                      </span>
                      <div className={"grid grid-cols-4 gap-1"}>
                        <button className={"py-1 text-center rounded bg-surface-container text-secondary font-label-sm text-label-sm"}>
                          {"Single"}
                        </button>
                        {" "}
                        <button className={"py-1 text-center rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-sm"}>
                          {"Dual-Key"}
                        </button>
                        {" "}
                        <button className={"py-1 text-center rounded bg-surface-container text-secondary font-label-sm text-label-sm"}>
                          {"Ranked"}
                        </button>
                        {" "}
                        <button className={"py-1 text-center rounded bg-surface-container text-secondary font-label-sm text-label-sm"}>
                          {"Multi-Sig (3/5)"}
                        </button>
                      </div>
                      <div className={"flex items-center justify-between p-space-xs rounded bg-surface-container-lowest"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold"}>
                            {"K1"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>
                              {"Dr. Elena Rostova"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-secondary"}>
                              {"Lead AI Risk Auditor • Clearance TS/SCI"}
                            </span>
                          </div>
                        </div>
                        <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                          {"verified"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between p-space-xs rounded bg-surface-container-lowest"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"w-6 h-6 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold"}>
                            {"K2"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>
                              {"Col. Marcus Vance"}
                            </span>
                            {" "}
                            <span className={"font-label-sm text-label-sm text-secondary"}>
                              {"SecOps Cryptographic Custodian"}
                            </span>
                          </div>
                        </div>
                        <span className={"material-symbols-outlined text-tertiary-container text-[18px]"}>
                          {"verified"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between pt-1"}>
                        <div className={"flex flex-col"}>
                          <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>
                            {"Strict Separation of Duties (SoD)"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-secondary"}>
                            {"Execution Authority cannot certify verification"}
                          </span>
                        </div>
                        <label className={"relative inline-flex items-center cursor-pointer"}>
                          <input defaultChecked className={"sr-only peer"} type={"checkbox"} />
                          <div className={"w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"} />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-md text-label-md text-primary font-semibold uppercase tracking-wider flex items-center gap-1.5"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"account_tree"}
                        </span>
                        {" Section 2: Visual Completeness Tree Builder "}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                        {"AST Tree: 3 Nodes"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-space-sm relative"}>
                      <div className={"flex items-center justify-between p-space-xs rounded-lg bg-primary text-on-primary shadow-sm"}>
                        <div className={"flex items-center gap-2"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"alt_route"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm uppercase font-bold tracking-wider"}>
                            {"ROOT OPERATOR"}
                          </span>
                          {" "}
                          <span className={"px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-mono text-label-sm font-bold"}>
                            {"AND (All Conjunctive Branches)"}
                          </span>
                        </div>
                        <button className={"p-1 hover:bg-surface-container/20 rounded"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"more_vert"}
                          </span>
                        </button>
                      </div>
                      <div className={"ml-4 pl-3 flex flex-col gap-space-xs relative"}>
                        <div className={"absolute -left-3 top-2 bottom-2 w-0.5 bg-surface-container-highest rounded"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold flex items-center gap-1"}>
                            <span className={"w-2 h-2 rounded-full bg-primary"} />
                            {" Branch A • Conjunction Group [AND] "}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                            {"2 Mandatory Proofs"}
                          </span>
                        </div>
                        <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"material-symbols-outlined text-primary text-[16px]"}>
                              {"description"}
                            </span>
                            <div className={"flex flex-col"}>
                              <span className={"font-body-sm text-body-sm text-on-surface font-semibold font-mono"}>
                                {"OBL-804A"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-secondary"}>
                                {"Subcontractor Key Escrow • FIPS 140-3 L3"}
                              </span>
                            </div>
                          </div>
                          <div className={"flex items-center gap-1"}>
                            <span className={"px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm"}>
                              {"Mandatory Strict"}
                            </span>
                            {" "}
                            <button className={"p-1 hover:bg-surface-container rounded text-secondary hover:text-error"}>
                              <span className={"material-symbols-outlined text-[14px]"}>
                                {"close"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"material-symbols-outlined text-primary text-[16px]"}>
                              {"verified"}
                            </span>
                            <div className={"flex flex-col"}>
                              <span className={"font-body-sm text-body-sm text-on-surface font-semibold font-mono"}>
                                {"OBL-804B"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-secondary"}>
                                {"Renewed X.509 v3 Hardware Certificate Anchor"}
                              </span>
                            </div>
                          </div>
                          <div className={"flex items-center gap-1"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                              {"> 180 Days Expiry"}
                            </span>
                            {" "}
                            <button className={"p-1 hover:bg-surface-container rounded text-secondary hover:text-error"}>
                              <span className={"material-symbols-outlined text-[14px]"}>
                                {"close"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"ml-4 pl-3 flex flex-col gap-space-xs relative"}>
                        <div className={"absolute -left-3 top-2 bottom-2 w-0.5 bg-surface-container-highest rounded"} />
                        <div className={"flex items-center justify-between"}>
                          <div className={"flex items-center gap-1.5"}>
                            <span className={"w-2 h-2 rounded-full bg-secondary"} />
                            {" "}
                            <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold"}>
                              {" Branch B • K-of-N Quorum Operator "}
                            </span>
                          </div>
                          <div className={"flex items-center gap-1"}>
                            <span className={"font-label-sm text-label-sm text-on-surface font-semibold"}>
                              {"Pass At Least:"}
                            </span>
                            <select className={"bg-surface-container-lowest px-1 py-0.5 rounded font-label-sm text-label-sm font-bold text-primary shadow-sm focus:outline-none"}>
                              <option>
                                {"2 of 3"}
                              </option>
                              <option>
                                {"1 of 3"}
                              </option>
                              <option>
                                {"3 of 3 (Unanimous)"}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"material-symbols-outlined text-secondary text-[16px]"}>
                              {"sensors"}
                            </span>
                            <div className={"flex flex-col"}>
                              <span className={"font-body-sm text-body-sm text-on-surface"}>
                                {"Synthetic Jamming Resilience Test (Zero CUI Egress)"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                                {"Weight: 1.0 • Bound to RF-SIM-04"}
                              </span>
                            </div>
                          </div>
                          <span className={"px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"}>
                            {"Active Probe"}
                          </span>
                        </div>
                        <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"material-symbols-outlined text-secondary text-[16px]"}>
                              {"security"}
                            </span>
                            <div className={"flex flex-col"}>
                              <span className={"font-body-sm text-body-sm text-on-surface"}>
                                {"Independent Out-of-Band Verifier Node #04 Proof"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                                {"Weight: 1.0 • Merkle Root Attested"}
                              </span>
                            </div>
                          </div>
                          <span className={"px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"}>
                            {"Active Probe"}
                          </span>
                        </div>
                        <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between"}>
                          <div className={"flex items-center gap-2"}>
                            <span className={"material-symbols-outlined text-secondary text-[16px]"}>
                              {"hardware"}
                            </span>
                            <div className={"flex flex-col"}>
                              <span className={"font-body-sm text-body-sm text-on-surface"}>
                                {"Air-Gapped TPM Monotonic Hardware Counter Check"}
                              </span>
                              {" "}
                              <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                                {"Weight: 1.0 • PCR[12] Validated"}
                              </span>
                            </div>
                          </div>
                          <span className={"px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"}>
                            {"Active Probe"}
                          </span>
                        </div>
                      </div>
                      <div className={"ml-4 pl-3 flex flex-col gap-space-xs relative"}>
                        <div className={"absolute -left-3 top-2 bottom-2 w-0.5 bg-surface-container-highest rounded"} />
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold flex items-center gap-1"}>
                            <span className={"w-2 h-2 rounded-full bg-tertiary-container"} />
                            {" Branch C • Temporal & Hardware Bound Constraints "}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-primary font-mono font-semibold"}>
                            {"Strict Monotonic"}
                          </span>
                        </div>
                        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-space-xs"}>
                          <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1"}>
                            <span className={"font-label-sm text-label-sm text-secondary"}>
                              {"Max Execution Latency"}
                            </span>
                            <div className={"flex items-center gap-1"}>
                              <input className={"w-16 bg-surface-container px-1 py-0.5 rounded font-mono font-bold text-body-sm text-on-surface"} step={"0.1"} type={"number"} defaultValue={"12.0"} />
                              {" "}
                              <span className={"font-label-sm text-label-sm font-mono text-secondary"}>
                                {"ms"}
                              </span>
                            </div>
                          </div>
                          <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1"}>
                            <span className={"font-label-sm text-label-sm text-secondary"}>
                              {"Revocation Grace"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>
                              {"0 Hours (Zero Grace)"}
                            </span>
                          </div>
                          <div className={"p-space-xs rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1"}>
                            <span className={"font-label-sm text-label-sm text-secondary"}>
                              {"Epoch Rotation"}
                            </span>
                            {" "}
                            <span className={"font-body-sm text-body-sm text-on-surface font-semibold font-mono"}>
                              {"30 Days Clock"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center gap-1.5 pt-1"}>
                        <button className={"px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1 transition-all"}>
                          <span className={"material-symbols-outlined text-[14px] text-primary"}>
                            {"add"}
                          </span>
                          {" Add Nested Logic Group "}
                        </button>
                        {" "}
                        <button className={"px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1 transition-all"}>
                          <span className={"material-symbols-outlined text-[14px] text-primary"}>
                            {"add"}
                          </span>
                          {" Add Evidence Leaf "}
                        </button>
                        {" "}
                        <button className={"px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1 transition-all"}>
                          <span className={"material-symbols-outlined text-[14px] text-primary"}>
                            {"add"}
                          </span>
                          {" Add Temporal Gate "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between"}>
                      <span className={"font-label-sm text-label-sm text-secondary uppercase font-semibold flex items-center gap-1"}>
                        <span className={"material-symbols-outlined text-[16px] text-primary"}>
                          {"subtitles"}
                        </span>
                        {" Section 3: Deterministic Rule Synthesis (Natural Language) "}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-tertiary font-semibold"}>
                        {"Compiler Output: Valid"}
                      </span>
                    </div>
                    <div className={"p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface leading-relaxed"}>
                      <p className={"font-mono text-on-surface text-body-sm"}>
                        <strong className={"text-primary font-bold"}>
                          {"RULE-804"}
                        </strong>
                        {" enforces that ANY autonomous or human decision bound to this policy will be flagged as "}
                        <span className={"px-1 py-0.5 rounded bg-error-container text-on-error-container font-bold"}>
                          {"DEFICIENT"}
                        </span>
                        {" unless BOTH obligations "}
                        <strong className={"text-on-surface font-bold"}>
                          {"OBL-804A"}
                        </strong>
                        {" and "}
                        <strong className={"text-on-surface font-bold"}>
                          {"OBL-804B"}
                        </strong>
                        {" are cryptographically validated AND at least 2 of 3 independent telemetry probes pass within 12.0ms. Dual-key PIV-CAC attestation is mandatory prior to Genesis seal minting. "}
                      </p>
                    </div>
                  </div>
                  <div className={"p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-space-xs"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-primary text-[18px]"}>
                        {"gavel"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-on-surface font-semibold"}>
                        {" Enclave Genesis Safety Gate: Modification Triggers Re-evaluation Warning "}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-secondary"}>
                      {" Promoting rule alterations updates the root Merkle tree and requires active PIV card signatures from both Dr. Rostova and Col. Vance. "}
                    </p>
                    <div className={"flex flex-wrap items-center justify-between gap-space-xs pt-space-xs"}>
                      <button className={"px-space-sm py-1.5 rounded bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all"} onClick={legacy("discardDraft()")}>
                        {" Discard Draft "}
                      </button>
                      <div className={"flex items-center gap-space-xs"}>
                        <button className={"px-space-sm py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 transition-all"} onClick={legacy("dryRunSimulation()")}>
                          <span className={"material-symbols-outlined text-[16px] text-primary"}>
                            {"science"}
                          </span>
                          {" "}
                          <span>
                            {"Dry-Run (42 Decisions)"}
                          </span>
                        </button>
                        {" "}
                        <button className={"px-space-md py-1.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold shadow-sm hover:bg-primary transition-all"} onClick={legacy("saveStageDraft()")}>
                          {" Save & Stage v3.2 "}
                        </button>
                        {" "}
                        <button className={"px-space-md py-1.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold shadow-md flex items-center gap-1.5 hover:opacity-90 transition-all"} onClick={legacy("promotePolicyEnforce()")}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"verified"}
                          </span>
                          {" "}
                          <span>
                            {"Promote & Enforce"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm mt-space-lg flex flex-wrap items-center justify-between gap-space-sm"}>
              <div className={"flex items-center gap-space-sm"}>
                <div className={"flex items-center gap-2"}>
                  <span className={"w-2.5 h-2.5 rounded-full bg-tertiary-container animate-ping"} />
                  {" "}
                  <span className={"font-label-sm text-label-sm text-on-surface font-semibold"}>
                    {" Configuration Engine: Cryptographically Synced with Enclave SEC-9942 "}
                  </span>
                </div>
                <span className={"text-secondary font-label-sm text-label-sm"}>
                  {"|"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm text-tertiary font-mono"}>
                  {"0 Unsaved Invariant Drift"}
                </span>
                {" "}
                <span className={"text-secondary font-label-sm text-label-sm"}>
                  {"|"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm text-secondary font-mono"}>
                  {"Ledger Depth: 124,008 Blocks"}
                </span>
              </div>
              <div className={"flex items-center gap-space-md"}>
                <div className={"flex items-center gap-1 font-mono font-label-sm text-label-sm text-on-surface-variant"}>
                  <span className={"text-secondary"}>
                    {"Active Root Policy Hash:"}
                  </span>
                  {" "}
                  <span className={"text-primary font-bold"}>
                    {"0x4e88...a21f"}
                  </span>
                  {" "}
                  <button className={"p-0.5 hover:bg-surface-container rounded ml-1"} title={"Copy Hash"}>
                    <span className={"material-symbols-outlined text-[14px] text-secondary"}>
                      {"content_copy"}
                    </span>
                  </button>
                </div>
                <div className={"flex items-center gap-1.5"}>
                  <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono"}>
                    {" TPM PCR[07]: MATCH "}
                  </span>
                  {" "}
                  <span className={"px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold"}>
                    {" ZERO RISK "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
