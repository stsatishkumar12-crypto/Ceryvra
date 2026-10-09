// AUTO-GENERATED from Tenant&MSPAdministration-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/tenant-msp.js?raw';

const exportsList = ["triggerContextSwitchModal","closeSwitchModal","executeSwitchContext","updateLivePreview","updateColorPickers","setSimState"];

export default function TenantMsp() {
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
            <div className={"w-full bg-surface-container py-space-xs px-space-md mb-space-md rounded flex flex-wrap items-center justify-between gap-space-sm shadow-sm"}>
              <div className={"flex items-center gap-space-sm"}>
                <span className={"flex h-2 w-2 relative"}>
                  <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"} />
                  {" "}
                  <span className={"relative inline-flex rounded-full h-2 w-2 bg-primary"} />
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold"}>
                  {"MSP Admin Simulation Mode:"}
                </span>
                <div className={"inline-flex rounded bg-surface-container-lowest p-0.5"}>
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm bg-primary text-on-primary transition-all"} id={"sim-default"} onClick={legacy("setSimState('default')")}>
                    {"Active MSP Operator (Default)"}
                  </button>
                  {" "}
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all"} id={"sim-switch"} onClick={legacy("setSimState('switch')")}>
                    {"Tenant Switch Warning"}
                  </button>
                  {" "}
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all"} id={"sim-audit"} onClick={legacy("setSimState('audit')")}>
                    {"Delegated Audit Trail"}
                  </button>
                  {" "}
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all"} id={"sim-brand"} onClick={legacy("setSimState('brand')")}>
                    {"White-Label Brand Preview"}
                  </button>
                  {" "}
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all"} id={"sim-isolated"} onClick={legacy("setSimState('isolated')")}>
                    {"Permission Denied (Isolated)"}
                  </button>
                  {" "}
                  <button className={"px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all"} id={"sim-empty"} onClick={legacy("setSimState('empty')")}>
                    {"Empty Tenant Registry"}
                  </button>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm text-label-sm font-label-sm text-on-surface-variant"}>
                <span className={"flex items-center gap-1 font-mono text-[11px]"}>
                  <span className={"material-symbols-outlined text-[14px] text-tertiary"}>
                    {"lock_reset"}
                  </span>
                  {" HSM KEY: 0x9942:ED25519"}
                </span>
                {" "}
                <span className={"px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-bold"}>
                  {"FIPS 140-3 LEVEL 3"}
                </span>
              </div>
            </div>
            <section className={"relative w-full rounded bg-primary-container text-on-primary p-space-lg mb-space-lg shadow-md overflow-hidden"}>
              <div className={"absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary/40 pointer-events-none blur-2xl"} />
              <div className={"absolute right-0 bottom-0 opacity-10 pointer-events-none pr-space-md pb-space-xs"}>
                <span className={"material-symbols-outlined text-[128px]"}>
                  {"shield_person"}
                </span>
              </div>
              <div className={"relative z-10 flex flex-col gap-space-md"}>
                <div className={"flex flex-wrap items-center justify-between gap-space-sm"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-10 h-10 rounded bg-surface-container-lowest text-primary flex items-center justify-center font-bold font-headline-sm shadow-sm"}>
                      {" LM "}
                    </div>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"px-space-xs py-0.5 rounded bg-surface-container-lowest/20 text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold"}>
                          {"Current Active Tenant Context"}
                        </span>
                        {" "}
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-fixed"} />
                        {" "}
                        <span className={"font-label-sm text-label-sm text-primary-fixed"}>
                          {"GovCloud Isolated Enclave"}
                        </span>
                      </div>
                      <h1 className={"font-headline-md text-headline-md font-bold tracking-tight text-white flex items-center gap-space-xs"}>
                        {" Lockheed Martin Space & Autonomous Systems "}
                        <span className={"font-mono text-label-md text-primary-fixed-dim bg-primary/60 px-space-xs py-0.5 rounded"}>
                          {"(TENANT-ID: TEN-US-0841)"}
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-xs"}>
                    <button className={"px-space-md py-space-xs rounded bg-surface-container-lowest text-primary font-label-md text-label-md font-bold hover:bg-surface-bright transition-all shadow-sm flex items-center gap-space-xs"} onClick={legacy("triggerContextSwitchModal('TEN-US-1029', 'Northrop Grumman Cyber')")}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"swap_horiz"}
                      </span>
                      {" "}
                      <span>
                        {"Switch Active Tenant Workspace"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-sm pt-space-xs"}>
                  <div className={"bg-primary/50 backdrop-blur-sm p-space-sm rounded flex flex-col gap-0.5"}>
                    <span className={"font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"security"}
                      </span>
                      {" Enforced Isolation Tier "}
                    </span>
                    {" "}
                    <span className={"font-body-md text-body-md font-semibold text-white"}>
                      {"SEC-9942 Enclave"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-primary-fixed"}>
                      {"Dedicated KMS Partition #419 • Zero-Data-Mixing"}
                    </span>
                  </div>
                  <div className={"bg-primary/50 backdrop-blur-sm p-space-sm rounded flex flex-col gap-0.5"}>
                    <span className={"font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"account_box"}
                      </span>
                      {" Primary Tenant Administrator "}
                    </span>
                    {" "}
                    <span className={"font-body-md text-body-md font-semibold text-white truncate"}>
                      {"Marcus Sterling"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-primary-fixed truncate"}>
                      {"marcus.sterling@lmco.mil (Tier-1 Officer)"}
                    </span>
                  </div>
                  <div className={"bg-primary/50 backdrop-blur-sm p-space-sm rounded flex flex-col gap-0.5"}>
                    <span className={"font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"cloud_done"}
                      </span>
                      {" Region & Security Compliance "}
                    </span>
                    {" "}
                    <span className={"font-body-md text-body-md font-semibold text-white"}>
                      {"AWS GovCloud (US-West)"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-primary-fixed"}>
                      {"DoD IL-5 / FIPS 140-3 Hardware Verified"}
                    </span>
                  </div>
                  <div className={"bg-primary/50 backdrop-blur-sm p-space-sm rounded flex flex-col gap-0.5"}>
                    <span className={"font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"verified"}
                      </span>
                      {" Cryptographic Attestation "}
                    </span>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"w-2 h-2 rounded-full bg-tertiary-fixed"} />
                      {" "}
                      <span className={"font-body-md text-body-md font-semibold text-white"}>
                        {"Signed 14m ago"}
                      </span>
                    </div>
                    <span className={"font-label-sm text-label-sm text-primary-fixed font-mono truncate"}>
                      {"TPM: 8F2D..4E91 [Deterministic]"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className={"flex items-center justify-between border-b border-outline-variant/30 mb-space-lg"}>
              <div className={"flex items-center gap-space-md overflow-x-auto"}>
                <button className={"flex items-center gap-space-xs py-space-sm font-label-md text-label-md font-semibold text-primary border-b-2 border-primary -mb-[1px]"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"domain_add"}
                  </span>
                  {" "}
                  <span>
                    {"Tenant Registry & Switcher"}
                  </span>
                  {" "}
                  <span className={"px-1.5 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-label-sm"}>
                    {"14"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"palette"}
                  </span>
                  {" "}
                  <span>
                    {"Branding & White-Label"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"badge"}
                  </span>
                  {" "}
                  <span>
                    {"Delegated MSP Operators & RBAC"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"key"}
                  </span>
                  {" "}
                  <span>
                    {"HSM Isolation & Partitions"}
                  </span>
                </button>
                {" "}
                <button className={"flex items-center gap-space-xs py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"history_edu"}
                  </span>
                  {" "}
                  <span>
                    {"Cross-Tenant Audit Logs"}
                  </span>
                </button>
              </div>
              <div className={"hidden lg:flex items-center gap-space-xs text-on-surface-variant text-label-sm font-label-sm"}>
                <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                  {"check_circle"}
                </span>
                {" "}
                <span>
                  {"Cross-Tenant Zero-Mixing SLA Active"}
                </span>
              </div>
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"}>
              <div className={"lg:col-span-5 flex flex-col gap-space-md"}>
                <div className={"bg-surface-container-lowest rounded p-space-md shadow-sm"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <div>
                      <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                        {"Tenant Registry"}
                      </h2>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Switch active context or inspect partition bounds"}
                      </p>
                    </div>
                    <button className={"px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"add"}
                      </span>
                      {" "}
                      <span>
                        {"Provision New"}
                      </span>
                    </button>
                  </div>
                  <div className={"flex flex-col gap-space-xs mb-space-md"}>
                    <div className={"relative"}>
                      <span className={"material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-outline"}>
                        {"search"}
                      </span>
                      {" "}
                      <input className={"w-full pl-9 pr-12 py-1.5 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder-outline focus:outline-none focus:bg-surface-container-lowest shadow-inner"} placeholder={"Filter by ID, name, enclave, KMS..."} type={"text"} defaultValue={""} />
                      {" "}
                      <kbd className={"absolute right-2.5 top-2 text-[10px] font-mono px-1 rounded bg-surface-container-highest text-on-surface-variant shadow-sm"}>
                        {"⌘K"}
                      </kbd>
                    </div>
                    <div className={"flex items-center gap-1 overflow-x-auto pt-1 pb-0.5"}>
                      <button className={"px-2 py-0.5 rounded text-label-sm font-label-sm bg-primary text-on-primary font-semibold"}>
                        {"All (14)"}
                      </button>
                      {" "}
                      <button className={"px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"}>
                        {"Active (12)"}
                      </button>
                      {" "}
                      <button className={"px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"}>
                        {"Pending (1)"}
                      </button>
                      {" "}
                      <button className={"px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-low text-error hover:bg-error-container"}>
                        {"Quarantined (1)"}
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-sm"} id={"tenant-roster-list"}>
                    <div className={"rounded p-space-sm bg-surface-container-high shadow-sm relative overflow-hidden transition-all"}>
                      <div className={"absolute left-0 top-0 bottom-0 w-1.5 bg-primary"} />
                      <div className={"flex items-start justify-between gap-space-xs pl-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-label-md"}>
                            {"LM"}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-1.5"}>
                              <span className={"font-label-md text-label-md font-bold text-on-surface truncate max-w-[190px]"}>
                                {"Lockheed Martin Space"}
                              </span>
                              {" "}
                              <span className={"inline-flex items-center px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase"}>
                                {"Active"}
                              </span>
                            </div>
                            <span className={"font-label-sm text-label-sm font-mono text-outline"}>
                              {"TEN-US-0841 • SEC-9942"}
                            </span>
                          </div>
                        </div>
                        <span className={"px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-bold"}>
                          {"Selected"}
                        </span>
                      </div>
                      <div className={"mt-space-xs pt-space-xs pl-space-xs grid grid-cols-3 gap-2 bg-surface-container-lowest/70 p-space-xs rounded"}>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"AI Assistant"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface truncate"}>
                            {"Aegis Flight"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Decisions"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"42 Verified"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Delegated MSP"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"3 Principals"}
                          </span>
                        </div>
                      </div>
                      <div className={"mt-space-xs flex items-center justify-between pl-space-xs pt-1"}>
                        <span className={"text-[11px] font-label-sm text-on-surface-variant flex items-center gap-1"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-container"} />
                          {" Zero-Taint Enclave Validated "}
                        </span>
                        {" "}
                        <button className={"px-space-xs py-1 rounded bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"tune"}
                          </span>
                          {" "}
                          <span>
                            {"Config"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className={"rounded p-space-sm bg-surface-container-low hover:bg-surface-container transition-all"}>
                      <div className={"flex items-start justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-8 h-8 rounded bg-surface-container text-on-surface font-bold text-label-md flex items-center justify-center"}>
                            {"NG"}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-1.5"}>
                              <span className={"font-label-md text-label-md font-bold text-on-surface truncate max-w-[200px]"}>
                                {"Northrop Grumman Cyber"}
                              </span>
                              {" "}
                              <span className={"inline-flex items-center px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase"}>
                                {"Active"}
                              </span>
                            </div>
                            <span className={"font-label-sm text-label-sm font-mono text-outline"}>
                              {"TEN-US-1029 • SEC-8812"}
                            </span>
                          </div>
                        </div>
                        <button className={"px-space-xs py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container shadow-sm flex items-center gap-1"} onClick={legacy("triggerContextSwitchModal('TEN-US-1029', 'Northrop Grumman Cyber')")}>
                          <span>
                            {"Switch"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"login"}
                          </span>
                        </button>
                      </div>
                      <div className={"mt-space-xs grid grid-cols-3 gap-2 bg-surface-container-lowest/50 p-space-xs rounded"}>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"AI Persona"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface truncate"}>
                            {"Stratos Advisor"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Decisions"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"89 Logged"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Isolation"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-tertiary"}>
                            {"Air-gapped"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"rounded p-space-sm bg-surface-container-low hover:bg-surface-container transition-all"}>
                      <div className={"flex items-start justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-8 h-8 rounded bg-surface-container text-on-surface font-bold text-label-md flex items-center justify-center"}>
                            {"GD"}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-1.5"}>
                              <span className={"font-label-md text-label-md font-bold text-on-surface truncate max-w-[200px]"}>
                                {"General Dynamics Mission"}
                              </span>
                              {" "}
                              <span className={"inline-flex items-center px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase"}>
                                {"Active"}
                              </span>
                            </div>
                            <span className={"font-label-sm text-label-sm font-mono text-outline"}>
                              {"TEN-US-0472 • SEC-7104"}
                            </span>
                          </div>
                        </div>
                        <button className={"px-space-xs py-1 rounded bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1"} onClick={legacy("triggerContextSwitchModal('TEN-US-0472', 'General Dynamics Mission')")}>
                          <span>
                            {"Switch"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </div>
                      <div className={"mt-space-xs grid grid-cols-3 gap-2 bg-surface-container-lowest/50 p-space-xs rounded"}>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"AI Persona"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface truncate"}>
                            {"Ceryvra Sentinel"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Decisions"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"19 Logged"}
                          </span>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"text-[10px] font-label-sm text-outline uppercase"}>
                            {"Operators"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"4 Assigned"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"rounded p-space-sm bg-surface-container-low transition-all"}>
                      <div className={"flex items-start justify-between gap-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-8 h-8 rounded bg-error-container text-on-error-container font-bold text-label-md flex items-center justify-center"}>
                            {"RT"}
                          </div>
                          <div className={"flex flex-col"}>
                            <div className={"flex items-center gap-1.5"}>
                              <span className={"font-label-md text-label-md font-bold text-on-surface truncate max-w-[190px]"}>
                                {"Raytheon Intelligence"}
                              </span>
                              {" "}
                              <span className={"inline-flex items-center px-1.5 py-0.2 rounded bg-error-container text-on-error-container text-[10px] font-bold uppercase"}>
                                {"Degraded"}
                              </span>
                            </div>
                            <span className={"font-label-sm text-label-sm font-mono text-error"}>
                              {"EVT-9041: Key Audit Pending"}
                            </span>
                          </div>
                        </div>
                        <button className={"px-space-xs py-1 rounded bg-error-container hover:bg-error/20 text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1"} onClick={legacy("triggerContextSwitchModal('TEN-US-0914', 'Raytheon Space', true)")}>
                          <span>
                            {"Audit Only"}
                          </span>
                          {" "}
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"warning"}
                          </span>
                        </button>
                      </div>
                      <div className={"mt-space-xs p-space-xs bg-error-container/40 rounded flex items-center justify-between text-on-error-container"}>
                        <span className={"font-label-sm text-label-sm font-semibold flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"lock_clock"}
                          </span>
                          {" HSM WORM Key Rotation Pending "}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm font-mono text-outline"}>
                          {"Tier-3 Read-Only"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"hidden flex-col items-center justify-center py-space-xl text-center bg-surface-container-low rounded p-space-md"} id={"tenant-roster-empty"}>
                    <span className={"material-symbols-outlined text-outline text-[48px] mb-space-xs"}>
                      {"domain_disabled"}
                    </span>
                    {" "}
                    <span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                      {"No Tenants Provisioned"}
                    </span>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1"}>
                      {"This MSP Enclave workspace does not currently have delegated permissions to any active tenant HSM partitions."}
                    </p>
                    <button className={"mt-space-md px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md font-bold"}>
                      {"Request MSP Tenant Delegation"}
                    </button>
                  </div>
                  <div className={"mt-space-md pt-space-xs flex items-center justify-between border-t border-outline-variant/30 text-label-sm font-label-sm text-on-surface-variant"}>
                    <span>
                      {"Showing "}
                      <strong className={"text-on-surface"}>
                        {"1 - 4"}
                      </strong>
                      {" of "}
                      <strong className={"text-on-surface"}>
                        {"14"}
                      </strong>
                      {" Managed Tenants"}
                    </span>
                    <div className={"flex items-center gap-1"}>
                      <button className={"px-2 py-1 rounded bg-surface-container-low text-outline cursor-not-allowed"}>
                        {"Prev"}
                      </button>
                      {" "}
                      <button className={"px-2 py-1 rounded bg-surface-container-high text-on-surface font-semibold hover:bg-surface-container"}>
                        {"Next"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded p-space-md shadow-sm"}>
                  <h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-primary text-[20px]"}>
                      {"verified_user"}
                    </span>
                    {" "}
                    <span>
                      {"Zero-Cross-Tenant Isolation Matrix"}
                    </span>
                  </h3>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-sm"}>
                    {" Cryptographic enforcement status across all 14 attached customer enclaves under DoD IL-5 compliance. "}
                  </p>
                  <div className={"flex flex-col gap-space-xs font-mono text-[11px]"}>
                    <div className={"flex items-center justify-between p-space-xs rounded bg-surface-container-low"}>
                      <span className={"text-on-surface-variant"}>
                        {"Shared Host Isolation Index:"}
                      </span>
                      {" "}
                      <span className={"text-tertiary font-bold"}>
                        {"100.0% Dedicated Hardware"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between p-space-xs rounded bg-surface-container-low"}>
                      <span className={"text-on-surface-variant"}>
                        {"Session Key Epoch Lifetime:"}
                      </span>
                      {" "}
                      <span className={"text-on-surface font-bold"}>
                        {"900 Seconds (Auto-Purge on Switch)"}
                      </span>
                    </div>
                    <div className={"flex items-center justify-between p-space-xs rounded bg-surface-container-low"}>
                      <span className={"text-on-surface-variant"}>
                        {"Active Cross-Tenant Taint Leak:"}
                      </span>
                      {" "}
                      <span className={"text-tertiary font-bold flex items-center gap-1"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                        {" 0.0000% (Clean TPM Log)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-7 flex flex-col gap-space-lg"}>
                <div className={"bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col gap-space-md"} id={"panel-branding"}>
                  <div className={"flex flex-col"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"material-symbols-outlined text-primary text-[22px]"}>
                          {"brush"}
                        </span>
                        <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                          {"Tenant Virtual Brand Injection (TEN-US-0841)"}
                        </h2>
                      </div>
                      <span className={"px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold"}>
                        {"Zero-Code Fork Architecture"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
                      {" Configuration dynamically injects brand tokens, logos, and custom assistant personas across all sub-workspaces without modifying shared codebase or violating container immutability. "}
                    </p>
                  </div>
                  <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
                    <div className={"flex flex-col gap-1"}>
                      <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider"}>
                        {"Tenant Display Title"}
                      </label>
                      {" "}
                      <input className={"w-full px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-inner"} id={"brand-tenant-name"} onInput={legacy("updateLivePreview()")} type={"text"} defaultValue={"Lockheed Martin Space & Autonomous Systems"} />
                      {" "}
                      <span className={"text-[11px] font-label-sm text-outline"}>
                        {"Rendered in Top-Nav Enclave workspace header"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-1"}>
                      <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider"}>
                        {"Governed AI Copilot Custom Persona"}
                      </label>
                      {" "}
                      <input className={"w-full px-space-sm py-1.5 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-inner"} id={"brand-copilot-name"} onInput={legacy("updateLivePreview()")} type={"text"} defaultValue={"Aegis AI Assistant - Flight Ops"} />
                      {" "}
                      <span className={"text-[11px] font-label-sm text-outline"}>
                        {"Replaces standard 'Ceryvra Copilot' identity"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-1"}>
                    <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider"}>
                      {"Mandatory DoD / CUI System Disclosure Banner"}
                    </label>
                    <textarea className={"w-full p-space-sm rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-inner"} id={"brand-banner-text"} onInput={legacy("updateLivePreview()")} rows={"2"} defaultValue={"RESTRICTED DOD CUI ENVIRONMENT: Aegis AI is governed by Ceryvra Enclave SEC-9942. All inferences and recommendations are cryptographically logged under FIPS 140-3."} />
                    <span className={"text-[11px] font-label-sm text-outline"}>
                      {"Injected at session bootstrap and chat transcript initiation"}
                    </span>
                  </div>
                  <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs"}>
                    <div className={"flex flex-col gap-space-xs"}>
                      <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider"}>
                        {"Tenant Emblem / Vector Mark"}
                      </label>
                      <div className={"flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low"}>
                        <div className={"w-12 h-12 rounded bg-surface-container-lowest flex items-center justify-center font-bold text-headline-sm text-primary shadow-sm"} id={"preview-logo-box"}>
                          {" LM "}
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-label-sm text-label-sm font-bold text-on-surface"}>
                            {"vector-lockheed-white.svg"}
                          </span>
                          {" "}
                          <span className={"text-[11px] font-label-sm text-outline"}>
                            {"SHA256: 7f38d4..c89a • Verified SVG"}
                          </span>
                          <div className={"flex items-center gap-space-xs mt-1"}>
                            <button className={"text-[11px] font-label-sm text-primary hover:underline font-semibold"}>
                              {"Replace Vector"}
                            </button>
                            {" "}
                            <span className={"text-outline"}>
                              {"|"}
                            </span>
                            {" "}
                            <button className={"text-[11px] font-label-sm text-error hover:underline font-semibold"}>
                              {"Restore Default"}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"p-space-xs border-2 border-dashed border-outline-variant/50 rounded flex flex-col items-center justify-center text-center py-space-sm"}>
                        <span className={"material-symbols-outlined text-[20px] text-outline"}>
                          {"cloud_upload"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                          {"Drop vector mark (Max 2MB, SVG/PNG)"}
                        </span>
                      </div>
                    </div>
                    <div className={"flex flex-col gap-space-xs"}>
                      <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider"}>
                        {"Dynamic Theme Color Tokens"}
                      </label>
                      <div className={"flex items-center justify-between p-space-xs bg-surface-container-low rounded"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-6 h-6 rounded bg-[#002D62] shadow-sm"} id={"swatch-primary"} />
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"Primary Brand Accent"}
                          </span>
                        </div>
                        <input className={"w-24 px-1.5 py-0.5 rounded bg-surface-container-lowest font-mono text-[12px] text-on-surface uppercase text-center shadow-inner"} id={"color-primary-input"} onInput={legacy("updateColorPickers()")} type={"text"} defaultValue={"#002D62"} />
                      </div>
                      <div className={"flex items-center justify-between p-space-xs bg-surface-container-low rounded"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-6 h-6 rounded bg-[#0080FF] shadow-sm"} id={"swatch-accent"} />
                          <span className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
                            {"Secondary Highlight"}
                          </span>
                        </div>
                        <input className={"w-24 px-1.5 py-0.5 rounded bg-surface-container-lowest font-mono text-[12px] text-on-surface uppercase text-center shadow-inner"} id={"color-accent-input"} onInput={legacy("updateColorPickers()")} type={"text"} defaultValue={"#0080FF"} />
                      </div>
                      <div className={"p-space-xs bg-surface-container-low rounded flex items-center justify-between"}>
                        <div className={"flex items-center gap-1"}>
                          <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                            {"check_circle"}
                          </span>
                          {" "}
                          <span className={"font-label-sm text-label-sm text-on-surface"}>
                            {"GovCloud Accessibility"}
                          </span>
                        </div>
                        <span className={"px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold"}>
                          {"WCAG AAA Validated"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs pt-space-xs"}>
                    <label className={"font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider flex items-center justify-between"}>
                      <span>
                        {"In-Flight Virtual Preview: Sub-Workspace Ingestion"}
                      </span>
                      {" "}
                      <span className={"text-outline text-[11px] font-mono"}>
                        {"Simulated Resolution: 1080p"}
                      </span>
                    </label>
                    {" "}
                    <div className={"bg-surface-container-low rounded p-space-sm shadow-inner flex flex-col gap-space-sm"}>
                      <div className={"w-full bg-[#002D62] text-white p-space-xs rounded flex items-center justify-between transition-colors"} id={"preview-mock-header"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <div className={"w-5 h-5 rounded bg-white text-[#002D62] font-bold text-[10px] flex items-center justify-center"}>
                            {"LM"}
                          </div>
                          <span className={"font-label-sm text-label-sm font-bold truncate"} id={"preview-mock-tenant-label"}>
                            {"Lockheed Martin Space & Autonomous Systems"}
                          </span>
                        </div>
                        <div className={"flex items-center gap-2"}>
                          <span className={"px-1.5 py-0.5 rounded bg-white/20 text-white font-label-sm text-[10px] font-semibold"} id={"preview-mock-copilot-pill"}>
                            {"Aegis Flight"}
                          </span>
                          {" "}
                          <span className={"w-2 h-2 rounded-full bg-emerald-400"} />
                        </div>
                      </div>
                      <div className={"bg-surface-container-lowest p-space-xs rounded shadow-sm flex flex-col gap-1"}>
                        <div className={"flex items-center justify-between"}>
                          <span className={"font-label-sm text-label-sm font-bold text-on-surface"} id={"preview-mock-copilot-title"}>
                            {"Aegis AI Assistant - Flight Ops"}
                          </span>
                          {" "}
                          <span className={"px-1 py-0.2 rounded bg-primary-fixed text-primary font-label-sm text-[10px]"}>
                            {"Active Decision Copilot"}
                          </span>
                        </div>
                        <p className={"font-body-sm text-body-sm text-on-surface-variant text-[11px] italic"} id={"preview-mock-disclosure"}>
                          {" RESTRICTED DOD CUI ENVIRONMENT: Aegis AI is governed by Ceryvra Enclave SEC-9942. "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between pt-space-xs border-t border-outline-variant/30"}>
                    <button className={"px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors"}>
                      {" Reset to Standard Ceryvra Monogram "}
                    </button>
                    {" "}
                    <button className={"px-space-lg py-space-xs rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"bolt"}
                      </span>
                      {" "}
                      <span>
                        {"Deploy Branding (Instant CDN Propagate)"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col gap-space-md"} id={"panel-operators"}>
                  <div className={"flex items-center justify-between"}>
                    <div>
                      <h2 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                        {"Delegated MSP Operators & Access Matrix"}
                      </h2>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Separation of duties and hardware PIV/CAC bindings for cross-tenant auditors"}
                      </p>
                    </div>
                    <button className={"px-space-md py-1.5 rounded bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"person_add"}
                      </span>
                      {" "}
                      <span>
                        {"Authorize MSP Principal"}
                      </span>
                    </button>
                  </div>
                  <div className={"overflow-x-auto rounded bg-surface-container-low shadow-inner"}>
                    <table className={"w-full text-left border-collapse"}>
                      <thead>
                        <tr className={"bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider"}>
                          <th className={"p-space-sm font-semibold"}>
                            {"Operator Principal & ID"}
                          </th>
                          <th className={"p-space-sm font-semibold"}>
                            {"Delegated Scope"}
                          </th>
                          <th className={"p-space-sm font-semibold"}>
                            {"Hardware Key"}
                          </th>
                          <th className={"p-space-sm font-semibold"}>
                            {"Tenant Scope"}
                          </th>
                          <th className={"p-space-sm font-semibold"}>
                            {"Last Session"}
                          </th>
                          <th className={"p-space-sm font-semibold text-right"}>
                            {"Actions"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={"divide-y divide-outline-variant/20 font-body-sm text-body-sm text-on-surface"}>
                        <tr className={"hover:bg-surface-container-high/40 transition-colors"}>
                          <td className={"p-space-sm"}>
                            <div className={"flex items-center gap-space-xs"}>
                              <div className={"w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[11px]"}>
                                {"ER"}
                              </div>
                              <div className={"flex flex-col"}>
                                <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                                  {"Dr. Elena Rostova"}
                                </span>
                                {" "}
                                <span className={"text-[11px] font-label-sm text-outline"}>
                                  {"USR-MSP-001 (TS/SCI)"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"px-1.5 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-[11px] font-bold"}>
                              {"Lead Risk Auditor"}
                            </span>
                          </td>
                          <td className={"p-space-sm font-mono text-[11px] text-on-surface-variant"}>
                            {" PIV-99420-ROSTOVA "}
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"font-semibold text-on-surface"}>
                              {"All 14 Tenants"}
                            </span>
                            {" "}
                            <span className={"text-[11px] text-outline block"}>
                              {"Auditor-Only Mode"}
                            </span>
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"inline-flex items-center gap-1 font-semibold text-tertiary"}>
                              <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                              {" Active Now "}
                            </span>
                          </td>
                          <td className={"p-space-sm text-right"}>
                            <button className={"px-2 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-highest"}>
                              {"Manage Grants"}
                            </button>
                          </td>
                        </tr>
                        <tr className={"hover:bg-surface-container-high/40 transition-colors"}>
                          <td className={"p-space-sm"}>
                            <div className={"flex items-center gap-space-xs"}>
                              <div className={"w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[11px]"}>
                                {"MV"}
                              </div>
                              <div className={"flex flex-col"}>
                                <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                                  {"Col. Marcus Vance"}
                                </span>
                                {" "}
                                <span className={"text-[11px] font-label-sm text-outline"}>
                                  {"USR-MSP-088 (DoD Liaison)"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-[11px]"}>
                              {"SecOps Lead"}
                            </span>
                          </td>
                          <td className={"p-space-sm font-mono text-[11px] text-on-surface-variant"}>
                            {" PIV-1049-VANCE "}
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"font-mono text-[11px]"}>
                              {"TEN-0841, TEN-0914"}
                            </span>
                          </td>
                          <td className={"p-space-sm text-on-surface-variant"}>
                            {" 22m ago "}
                          </td>
                          <td className={"p-space-sm text-right"}>
                            <button className={"px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-error"}>
                              {"Revoke"}
                            </button>
                          </td>
                        </tr>
                        <tr className={"hover:bg-surface-container-high/40 transition-colors"}>
                          <td className={"p-space-sm"}>
                            <div className={"flex items-center gap-space-xs"}>
                              <div className={"w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[11px]"}>
                                {"SJ"}
                              </div>
                              <div className={"flex flex-col"}>
                                <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                                  {"Sarah Jenkins"}
                                </span>
                                {" "}
                                <span className={"text-[11px] font-label-sm text-outline"}>
                                  {"USR-MSP-142 (Tier-2 Ops)"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-[11px]"}>
                              {"Read-Only Diagnostics"}
                            </span>
                          </td>
                          <td className={"p-space-sm font-mono text-[11px] text-on-surface-variant"}>
                            {" PIV-8821-JENKINS "}
                          </td>
                          <td className={"p-space-sm"}>
                            <span className={"font-mono text-[11px]"}>
                              {"TEN-0841 Only"}
                            </span>
                          </td>
                          <td className={"p-space-sm text-on-surface-variant"}>
                            {" 4h ago "}
                          </td>
                          <td className={"p-space-sm text-right"}>
                            <button className={"px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-error"}>
                              {"Revoke"}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={"p-space-md rounded bg-surface-container-low flex items-start gap-space-sm"}>
                    <span className={"material-symbols-outlined text-primary text-[24px] mt-0.5"}>
                      {"verified"}
                    </span>
                    <div className={"flex flex-col"}>
                      <span className={"font-label-md text-label-md font-bold text-on-surface"}>
                        {"ZERO CROSS-TENANT MIXING GUARANTEE (FedRAMP High & DoD RMF)"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed"}>
                        {" When an MSP operator transitions active tenant workspaces, Ceryvra terminates ephemeral session state, flushes client memory tokens, re-attests the local TPM hardware signature, and isolates customer database query runners. No cross-tenant metadata or inferred weights persist across workspace switches. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-space-md"} id={"modal-tenant-switch"}>
              <div className={"w-full max-w-xl bg-surface-container-lowest rounded shadow-xl p-space-lg flex flex-col gap-space-md animate-in fade-in zoom-in-95 duration-150"}>
                <div className={"flex items-center gap-space-sm text-primary"}>
                  <div className={"w-10 h-10 rounded bg-primary-fixed text-primary flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-[24px]"}>
                      {"key_off"}
                    </span>
                  </div>
                  <div className={"flex flex-col"}>
                    <span className={"font-label-sm text-label-sm uppercase font-bold tracking-wider text-outline"}>
                      {"Cryptographic Boundary Alert"}
                    </span>
                    <h3 className={"font-headline-md text-headline-md font-bold text-on-surface"}>
                      {"Re-Key Session for Tenant Switch?"}
                    </h3>
                  </div>
                </div>
                <div className={"p-space-sm rounded bg-error-container text-on-error-container flex items-start gap-space-xs"}>
                  <span className={"material-symbols-outlined text-[20px] mt-0.5"}>
                    {"warning"}
                  </span>
                  <div className={"flex flex-col text-label-sm font-label-sm"}>
                    <span className={"font-bold"}>
                      {"CRITICAL TENANT SWITCH WARNING:"}
                    </span>
                    {" "}
                    <span>
                      {"Switching to "}
                      <strong id={"modal-target-tenant-name"}>
                        {"Target Tenant"}
                      </strong>
                      {" will instantly invalidate your current ephemeral authorization tokens. All uncommitted policy staging diffs in "}
                      <span className={"font-mono"}>
                        {"TEN-US-0841"}
                      </span>
                      {" will be discarded."}
                    </span>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-xs font-mono text-[11px] bg-surface-container-low p-space-sm rounded"}>
                  <div className={"flex justify-between text-on-surface-variant"}>
                    <span>
                      {"Source HSM Boundary:"}
                    </span>
                    {" "}
                    <span className={"text-on-surface font-bold"}>
                      {"SEC-9942 (Lockheed Space)"}
                    </span>
                  </div>
                  <div className={"flex justify-between text-on-surface-variant"}>
                    <span>
                      {"Destination Partition:"}
                    </span>
                    {" "}
                    <span className={"text-primary font-bold"} id={"modal-target-id"}>
                      {"TEN-US-1029 (SEC-8812)"}
                    </span>
                  </div>
                  <div className={"flex justify-between text-on-surface-variant"}>
                    <span>
                      {"Required Authentication:"}
                    </span>
                    {" "}
                    <span className={"text-on-surface"}>
                      {"PIV/CAC Re-Attestation Prompt (Hardware PIN)"}
                    </span>
                  </div>
                </div>
                <div className={"flex items-center justify-end gap-space-sm pt-space-xs border-t border-outline-variant/30"}>
                  <button className={"px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold"} onClick={legacy("closeSwitchModal()")}>
                    {" Cancel Context Switch "}
                  </button>
                  {" "}
                  <button className={"px-space-lg py-space-xs rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center gap-1 shadow-sm"} onClick={legacy("executeSwitchContext()")}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"verified"}
                    </span>
                    {" "}
                    <span>
                      {"Sign with PIV-CAC & Switch"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <footer className={"mt-space-xl pt-space-md pb-space-sm border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-md text-on-surface-variant text-label-sm font-label-sm"}>
              <div className={"flex items-center gap-space-md"}>
                <div className={"flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                    {"memory"}
                  </span>
                  {" "}
                  <span>
                    {"Physical Hardware WORM Boundary: "}
                    <strong className={"text-on-surface"}>
                      {"VERIFIED"}
                    </strong>
                  </span>
                </div>
                <span className={"text-outline"}>
                  {"|"}
                </span>
                <div className={"flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[16px] text-primary"}>
                    {"security"}
                  </span>
                  {" "}
                  <span>
                    {"Zero-Taint Cross-Tenant Isolation: "}
                    <strong className={"text-on-surface"}>
                      {"100.0%"}
                    </strong>
                  </span>
                </div>
                <span className={"text-outline"}>
                  {"|"}
                </span>
                <div className={"flex items-center gap-1"}>
                  <span className={"material-symbols-outlined text-[16px] text-secondary"}>
                    {"update"}
                  </span>
                  {" "}
                  <span>
                    {"Monotonic Hardware Clock: "}
                    <span className={"font-mono text-on-surface font-semibold"}>
                      {"SYNCED (PTB-14)"}
                    </span>
                  </span>
                </div>
              </div>
              <div className={"flex items-center gap-space-xs font-mono text-[11px]"}>
                <span className={"text-outline"}>
                  {"Ceryvra MSP Governance v4.19-DoD"}
                </span>
                {" "}
                <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"} />
                {" "}
                <span className={"text-on-surface font-bold"}>
                  {"Node: ENCLAVE-US-WEST-9"}
                </span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
