// AUTO-GENERATED from Consequence-Graph-page.html by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { legacy, useLegacyScript } from '../../lib/legacy';
import script from '../../legacy/consequence-graph.js?raw';

const exportsList = ["switchState","toggleLegend","selectNode"];

export default function ConsequenceGraph() {
  useLegacyScript(script, exportsList);
  return (
    <>
      <div className={"pl-72"}>
        <header className={"fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter"}>
          <div className={"flex items-center gap-space-md"}>
            <div className={"flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"}>
              <span className={"text-on-surface-variant"}>
                {"Global Aerospace & Defense"}
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
                {"Il • Verified"}
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
          <div className={"flex flex-col w-full text-on-surface"}>
            <div className={"flex items-center justify-between px-space-md py-space-xs bg-surface-container-high text-on-surface-variant rounded-lg mb-space-md"}>
              <div className={"flex items-center gap-space-sm"}>
                <span className={"material-symbols-outlined text-primary text-[18px]"}>
                  {"alt_route"}
                </span>
                {" "}
                <span className={"font-label-sm text-label-sm tracking-wider uppercase font-semibold text-primary"}>
                  {"Simulation Scenario Viewport"}
                </span>
                {" "}
                <span className={"text-outline text-label-sm"}>
                  {"|"}
                </span>
                {" "}
                <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  {"Switch perspective to inspect runtime states:"}
                </span>
              </div>
              <div className={"flex items-center gap-space-xs"} id={"state-switcher"}>
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-primary text-on-primary transition-all"} id={"btn-state-active"} onClick={legacy("switchState('active')")}>
                  {"Active Canvas (Default)"}
                </button>
                {" "}
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"} id={"btn-state-inspector"} onClick={legacy("switchState('inspector')")}>
                  {"Node Inspector Focus"}
                </button>
                {" "}
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"} id={"btn-state-containment"} onClick={legacy("switchState('containment')")}>
                  {"Containment Isolation"}
                </button>
                {" "}
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"} id={"btn-state-loading"} onClick={legacy("switchState('loading')")}>
                  {"Traversal Running"}
                </button>
                {" "}
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"} id={"btn-state-empty"} onClick={legacy("switchState('empty')")}>
                  {"Empty Ledger"}
                </button>
                {" "}
                <button className={"px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"} id={"btn-state-error"} onClick={legacy("switchState('error')")}>
                  {"Cycle Detected"}
                </button>
              </div>
            </div>
            <div className={"flex flex-col gap-space-xs mb-space-lg"}>
              <div className={"flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant"}>
                <span>
                  {"Global Aerospace & Defense"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span>
                  {"Evidence & Proofs"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span>
                  {"Consequence & Dependency Graph"}
                </span>
                {" "}
                <span className={"material-symbols-outlined text-[14px]"}>
                  {"chevron_right"}
                </span>
                {" "}
                <span className={"text-primary font-semibold"}>
                  {"DEC-14820 Traversal"}
                </span>
              </div>
              <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mt-space-xs"}>
                <div>
                  <div className={"flex items-center gap-space-sm flex-wrap"}>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                      {"Consequence & Dependency Graph Analysis"}
                    </h1>
                    <span className={"px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"} />
                      {" Cascade Containment Active "}
                    </span>
                    {" "}
                    <span className={"px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm"}>
                      {" Merkle Traversal: 14 Nodes Evaluated "}
                    </span>
                    {" "}
                    <span className={"px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"shield"}
                      </span>
                      {" FIPS 140-3 Boundary Enforced "}
                    </span>
                  </div>
                  <p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
                    {" Deterministic blast radius & containment boundary traversal for Trigger "}
                    <span className={"font-semibold text-on-surface font-mono"}>
                      {"EVT-9041"}
                    </span>
                    {" on "}
                    <span className={"font-semibold text-primary font-mono"}>
                      {"DEC-14820"}
                    </span>
                    {" (Dual-Use Flight Envelope Autonomous Override Policy v2.4 Draft) "}
                  </p>
                </div>
                <div className={"flex items-center gap-space-xs flex-wrap"}>
                  <button className={"px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"refresh"}
                    </span>
                    {" "}
                    <span>
                      {"Re-calculate Blast Radius"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"data_object"}
                    </span>
                    {" "}
                    <span>
                      {"Export Manifest (JSON-LD)"}
                    </span>
                  </button>
                  {" "}
                  <button className={"px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-space-xs"} data-nav="/recovery">
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"build_circle"}
                    </span>
                    {" "}
                    <span>
                      {"Launch Minimum Recovery Plan"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-sm mb-space-md"}>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider"}>
                    {"Evaluated Nodes"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"hub"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-on-surface"}>
                    {"14"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Across 4 isolated enclaves"}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider text-error"}>
                    {"Root Cause Origin"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-error"}>
                    {"crisis_alert"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-error"}>
                    {"1 "}
                    <span className={"font-label-md text-label-md text-on-surface-variant font-normal"}>
                      {"Decision"}
                    </span>
                  </div>
                  <div className={"font-body-sm text-body-sm text-error truncate font-mono"}>
                    {"DEC-14820 Reval Mandate"}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider text-error"}>
                    {"Cascading Affected"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-error"}>
                    {"dynamic_feed"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-error"}>
                    {"3"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>
                    {"1 Agent, 1 Rule, 1 Signoff"}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider text-tertiary-container"}>
                    {"Cryptographic Shield"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-tertiary-container"}>
                    {"verified"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-tertiary-container"}>
                    {"10"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Disjoint Merkle subpaths"}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider"}>
                    {"Containment Health"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"security"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-primary"}>
                    {"100%"}
                  </div>
                  <div className={"font-body-sm text-body-sm text-tertiary truncate"}>
                    {"Bounded by Rule #804 sandbox"}
                  </div>
                </div>
              </div>
              <div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between"}>
                <div className={"flex items-center justify-between text-on-surface-variant mb-space-xs"}>
                  <span className={"font-label-sm text-label-sm uppercase tracking-wider text-primary"}>
                    {"Recovery Workload"}
                  </span>
                  {" "}
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"fact_check"}
                  </span>
                </div>
                <div>
                  <div className={"font-headline-lg text-headline-lg text-primary"}>
                    {"2 "}
                    <span className={"font-label-md text-label-md text-on-surface-variant font-normal"}>
                      {"Tasks"}
                    </span>
                  </div>
                  <div className={"font-body-sm text-body-sm text-on-surface-variant truncate"}>
                    {"Cert renewal + Dual-Key attestation"}
                  </div>
                </div>
              </div>
            </div>
            <div className={"bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col xl:flex-row items-center justify-between gap-space-sm mb-space-md"}>
              <div className={"flex items-center gap-space-sm w-full xl:w-auto flex-wrap"}>
                <div className={"flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface-variant flex-1 sm:w-80"}>
                  <span className={"material-symbols-outlined text-[18px] text-outline"}>
                    {"search"}
                  </span>
                  {" "}
                  <input className={"bg-transparent text-on-surface font-body-sm text-body-sm focus:outline-none w-full placeholder:text-outline"} placeholder={"Search node, model, rule, approval..."} type={"text"} />
                  {" "}
                  <kbd className={"px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm"}>
                    {"⌘K"}
                  </kbd>
                </div>
                <div className={"flex items-center gap-space-xs"}>
                  <select className={"bg-surface-container-low text-on-surface font-label-md text-label-md px-space-sm py-1.5 rounded-lg border-none focus:outline-none"}>
                    <option>
                      {"All Object Types (Nodes)"}
                    </option>
                    <option>
                      {"Decisions"}
                    </option>
                    <option>
                      {"AI Models"}
                    </option>
                    <option>
                      {"Policies & Rules"}
                    </option>
                    <option>
                      {"Obligations"}
                    </option>
                    <option>
                      {"Approval Gates"}
                    </option>
                    <option>
                      {"Runtime Enclaves"}
                    </option>
                  </select>
                  <select className={"bg-surface-container-low text-on-surface font-label-md text-label-md px-space-sm py-1.5 rounded-lg border-none focus:outline-none"}>
                    <option>
                      {"All Impact States"}
                    </option>
                    <option>
                      {"Direct Target (1)"}
                    </option>
                    <option>
                      {"Cascading Impact (3)"}
                    </option>
                    <option>
                      {"Cryptographically Shielded (10)"}
                    </option>
                  </select>
                  <div className={"flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded-lg text-on-surface-variant"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"stairs"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm"}>
                      {"Depth: "}
                      <strong className={"text-on-surface"}>
                        {"3 Hops"}
                      </strong>
                      {" (Max 5)"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"flex items-center gap-space-xs w-full xl:w-auto justify-end flex-wrap"}>
                <div className={"flex items-center bg-surface-container-low rounded-lg p-0.5"}>
                  <button className={"px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm"}>
                    {"Hierarchical DAG"}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"}>
                    {"Force-Directed"}
                  </button>
                  {" "}
                  <button className={"px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"}>
                    {"Containment Clusters"}
                  </button>
                </div>
                <div className={"h-5 w-px bg-surface-container-high mx-1 hidden sm:block"} />
                <div className={"flex items-center gap-1 bg-surface-container-low rounded-lg p-0.5"}>
                  <button className={"p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"} title={"Zoom in"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"add"}
                    </span>
                  </button>
                  {" "}
                  <button className={"p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"} title={"Zoom out"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"remove"}
                    </span>
                  </button>
                  {" "}
                  <button className={"p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"} title={"Fit Viewport"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"crop_free"}
                    </span>
                  </button>
                  {" "}
                  <button className={"p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"} title={"Reset Pan"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"center_focus_strong"}
                    </span>
                  </button>
                </div>
                <button className={"px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1"} id={"toggle-legend-btn"} onClick={legacy("toggleLegend()")}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    {"info"}
                  </span>
                  {" "}
                  <span>
                    {"Legend"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"grid grid-cols-12 gap-space-md mb-space-md"} id={"view-active-canvas"}>
              <div className={"col-span-12 xl:col-span-8 flex flex-col relative bg-surface-container-lowest rounded-2xl shadow-sm min-h-[720px] overflow-hidden select-none"} id={"canvas-column"}>
                <div className={"absolute top-4 left-4 z-20 flex items-center gap-space-xs pointer-events-none"}>
                  <div className={"bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-1 rounded-lg shadow-sm flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-[16px] text-tertiary-container"}>
                      {"grid_4x4"}
                    </span>
                    {" "}
                    <span className={"font-label-sm text-label-sm text-on-surface"}>
                      {"DAG Engine: Deterministic Merkle v4.18"}
                    </span>
                    {" "}
                    <span className={"text-outline text-label-sm"}>
                      {"•"}
                    </span>
                    {" "}
                    <span className={"font-mono text-label-sm text-on-surface-variant"}>
                      {"viewport: (x:140, y:20, s:1.00)"}
                    </span>
                  </div>
                </div>
                <div className={"absolute top-4 right-4 z-20 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-md p-1 rounded-lg shadow-sm"}>
                  <span className={"px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                    {"100% SCALE"}
                  </span>
                  {" "}
                  <button className={"p-1 rounded text-on-surface-variant hover:bg-surface-container-low"} title={"Export SVG Snapshot"}>
                    <span className={"material-symbols-outlined text-[16px]"}>
                      {"photo_camera"}
                    </span>
                  </button>
                </div>
                <div className={"relative w-full h-[720px] overflow-x-auto overflow-y-hidden bg-gradient-to-br from-surface-container-lowest via-surface-container-low/40 to-surface-container-lowest"}>
                  <svg className={"absolute inset-0 w-[1200px] h-[720px] pointer-events-none"} xmlns={"http://www.w3.org/2000/svg"}>
                    <defs>
                      <marker id={"arrow-blue"} markerHeight={"6"} markerWidth={"6"} orient={"auto-start-reverse"} refX={"8"} refY={"5"} viewBox={"0 0 10 10"}>
                        <path d={"M 0 1 L 9 5 L 0 9 z"} fill={"#1e40af"} />
                      </marker>
                      <marker id={"arrow-rose"} markerHeight={"6"} markerWidth={"6"} orient={"auto-start-reverse"} refX={"8"} refY={"5"} viewBox={"0 0 10 10"}>
                        <path d={"M 0 1 L 9 5 L 0 9 z"} fill={"#ba1a1a"} />
                      </marker>
                      <marker id={"arrow-emerald"} markerHeight={"6"} markerWidth={"6"} orient={"auto-start-reverse"} refX={"8"} refY={"5"} viewBox={"0 0 10 10"}>
                        <path d={"M 0 1 L 9 5 L 0 9 z"} fill={"#00554e"} />
                      </marker>
                      <marker id={"arrow-grey"} markerHeight={"6"} markerWidth={"6"} orient={"auto-start-reverse"} refX={"8"} refY={"5"} viewBox={"0 0 10 10"}>
                        <path d={"M 0 1 L 9 5 L 0 9 z"} fill={"#757684"} />
                      </marker>
                    </defs>
                    <rect fill={"#ba1a1a"} fillOpacity={"0.03"} height={"420"} rx={"16"} stroke={"#ba1a1a"} strokeDasharray={"6,4"} strokeOpacity={"0.3"} strokeWidth={"1.5"} width={"460"} x={"350"} y={"50"} />
                    <text fill={"#ba1a1a"} fontSize={"11"} fontWeight={"600"} letterSpacing={"0.5"} x={"365"} y={"75"}>
                      {"ENCLAVE SEC-9942 CONTAINMENT PERIMETER (BLAST RADIUS STRICTLY BOUNDED)"}
                    </text>
                    <rect fill={"#00554e"} fillOpacity={"0.02"} height={"205"} rx={"16"} stroke={"#00554e"} strokeDasharray={"6,4"} strokeOpacity={"0.25"} strokeWidth={"1.5"} width={"760"} x={"350"} y={"490"} />
                    <text fill={"#00554e"} fontSize={"11"} fontWeight={"600"} letterSpacing={"0.5"} x={"365"} y={"512"}>
                      {"SEC-1088 COLD-CHAIN & TELEMETRY PARTITIONS (DISJOINT MERKLE ROOTS • ZERO IMPACT)"}
                    </text>
                    <path d={"M 230 200 C 300 200, 310 200, 380 200"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeWidth={"2.5"} />
                    <path d={"M 580 180 C 625 180, 640 120, 680 120"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeWidth={"2"} />
                    <path d={"M 580 200 C 625 200, 640 240, 680 240"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeWidth={"2"} />
                    <path d={"M 580 220 C 625 220, 630 360, 680 360"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeDasharray={"4,2"} strokeWidth={"2"} />
                    <path d={"M 880 120 C 920 120, 925 180, 960 180"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeWidth={"1.8"} />
                    <path d={"M 880 240 C 920 240, 925 200, 960 200"} fill={"none"} markerEnd={"url(#arrow-rose)"} stroke={"#ba1a1a"} strokeWidth={"1.8"} />
                    <path d={"M 880 360 C 920 360, 930 360, 960 360"} fill={"none"} markerEnd={"url(#arrow-blue)"} stroke={"#1e40af"} strokeWidth={"1.8"} />
                    <path d={"M 580 560 C 620 560, 640 560, 680 560"} fill={"none"} markerEnd={"url(#arrow-emerald)"} stroke={"#00554e"} strokeWidth={"1.5"} />
                    <path d={"M 880 560 C 920 560, 930 560, 960 560"} fill={"none"} markerEnd={"url(#arrow-emerald)"} stroke={"#00554e"} strokeWidth={"1.5"} />
                    <path d={"M 480 250 C 480 380, 480 470, 480 530"} fill={"none"} opacity={"0.6"} stroke={"#757684"} strokeDasharray={"3,3"} strokeWidth={"1"} />
                    <text fill={"#757684"} fontFamily={"Inter"} fontSize={"10"} x={"485"} y={"440"}>
                      {"Decoupled Merkle Branch (Disjoint)"}
                    </text>
                  </svg>
                  {" "}
                  <div className={"absolute left-6 top-36 w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-md border-l-4 border-l-primary hover:shadow-lg transition-all cursor-pointer group"} onClick={legacy("selectNode('EVT-9041')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-bold"}>
                        {"TRIGGER EVT-9041"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-primary text-[16px]"}>
                        {"electric_bolt"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface line-clamp-1"}>
                      {"Raytheon SecOps Cert"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug"}>
                      {"Subcontractor Transit Key Escrow breach (Block #8,941,209)"}
                    </p>
                    <div className={"mt-2 pt-2 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm"}>
                      <span>
                        {"Hop 0 • Origin"}
                      </span>
                      {" "}
                      <span className={"text-error font-semibold"}>
                        {"Revocation"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-96 top-32 w-56 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg ring-2 ring-primary ring-offset-2 hover:shadow-xl transition-all cursor-pointer"} id={"node-DEC-14820"} onClick={legacy("selectNode('DEC-14820')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-semibold"}>
                        {"DECISION RECORD"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-error text-[18px]"}>
                        {"emergency_home"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface"}>
                      {"DEC-14820"}
                    </div>
                    <div className={"font-label-md text-label-md text-primary font-medium truncate mt-0.5"}>
                      {"Flight Envelope Override v2.4"}
                    </div>
                    <div className={"mt-2 bg-error-container/40 p-1.5 rounded flex items-center gap-1.5 text-error"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"warning"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm font-semibold uppercase"}>
                        {"Revalidation Mandated"}
                      </span>
                    </div>
                    <div className={"mt-2 pt-1.5 border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"}>
                      <span>
                        {"Enclave: SEC-9942"}
                      </span>
                      {" "}
                      <span className={"text-error font-semibold font-mono"}>
                        {"100% Critical"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[680px] top-16 w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('AGT-4402')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium"}>
                        {"AUTONOMOUS AGENT"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-error text-[16px]"}>
                        {"smart_toy"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"AGT-4402 Trajectory"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Switched to Fallback Inertial Dead-Reckoning"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-error-container/50 text-error font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"schedule"}
                      </span>
                      {" "}
                      <span>
                        {"Fallback Mode Engaged"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[680px] top-44 w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('GATE-SIGN-02')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-medium"}>
                        {"APPROVAL GATE"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-error text-[16px]"}>
                        {"lock_clock"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"Dir. Sterling Dual-Key"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Blocked by OBL-804B cert escrow deficit"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-error-container/50 text-error font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"gpp_bad"}
                      </span>
                      {" "}
                      <span>
                        {"Cryptographically Blocked"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[680px] top-[305px] w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('RULE-804-v3')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium"}>
                        {"POLICY RULE"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-error text-[16px]"}>
                        {"rule"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"RULE-804 Boundary"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Subcontractor HSM escrow certificate invalid"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-error-container/50 text-error font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"block"}
                      </span>
                      {" "}
                      <span>
                        {"Zero-Tolerance Breach"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[960px] top-28 w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('WORKFLOW-F35')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium"}>
                        {"AUTONOMY WORKFLOW"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-tertiary-container text-[16px]"}>
                        {"flight_takeoff"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"F-35A Mission Enclave"}
                    </div>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"shield_lock"}
                      </span>
                      {" "}
                      <span>
                        {"Restricted Envelope (Non-Kinetic)"}
                      </span>
                    </div>
                    <div className={"mt-1 font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Zero cloud leak • Hardware bounded"}
                    </div>
                  </div>
                  <div className={"absolute left-[960px] top-[305px] w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('AUDIT-LEDGER')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-medium"}>
                        {"COMPLIANCE LEDGER"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-primary text-[16px]"}>
                        {"history_edu"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"DoD IG Compliance Log"}
                    </div>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"check_circle"}
                      </span>
                      {" "}
                      <span>
                        {"Event Stamped (Zero Taint)"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[380px] top-[535px] w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('UC-8821')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary font-semibold"}>
                        {"USE CASE BOUNDARY"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-tertiary-container text-[16px]"}>
                        {"verified_user"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"UC-8821 Cold-Chain"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Disjoint Merkle leaf sha256(root_41)"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary-container font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"lock"}
                      </span>
                      {" "}
                      <span>
                        {"Shielded • Zero Casualty"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[680px] top-[535px] w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('SYS-7719')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary font-semibold"}>
                        {"AI MODEL PIPELINE"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-tertiary-container text-[16px]"}>
                        {"memory"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"SYS-7719 Classifier"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Enclave B frozen weights in WORM"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary-container font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"lock"}
                      </span>
                      {" "}
                      <span>
                        {"Shielded • Runtime Isolated"}
                      </span>
                    </div>
                  </div>
                  <div className={"absolute left-[960px] top-[535px] w-52 bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"} onClick={legacy("selectNode('DEC-4402')")}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary font-semibold"}>
                        {"DECISION RECORD"}
                      </span>
                      {" "}
                      <span className={"material-symbols-outlined text-tertiary-container text-[16px]"}>
                        {"verified"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                      {"DEC-4402 Logistics"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1 leading-tight"}>
                      {"Independent genesis cryptographic seal"}
                    </p>
                    <div className={"mt-2 px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary-container font-label-sm text-label-sm flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[12px]"}>
                        {"lock"}
                      </span>
                      {" "}
                      <span>
                        {"Shielded • Untouched"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"absolute bottom-4 left-4 z-20 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-xl shadow-md w-72 transition-all"} id={"graph-legend-box"}>
                  <div className={"flex items-center justify-between pb-1.5 mb-1.5 border-b border-surface-container"}>
                    <span className={"font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface"}>
                      {"Topology Legend"}
                    </span>
                    {" "}
                    <button className={"text-on-surface-variant hover:text-on-surface"} onClick={legacy("toggleLegend()")}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"close"}
                      </span>
                    </button>
                  </div>
                  <div className={"flex flex-col gap-1.5 text-label-sm font-label-sm"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"w-3 h-3 rounded bg-primary"} />
                      {" "}
                      <span className={"text-on-surface font-medium"}>
                        {"Root Trigger (Event Ingestion)"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                      <span className={"w-3 h-3 rounded bg-error"} />
                      {" "}
                      <span className={"text-on-surface font-medium"}>
                        {"Direct Target (Reval Mandate)"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                      <span className={"w-3 h-3 rounded border border-dashed border-error bg-error/20"} />
                      {" "}
                      <span className={"text-on-surface font-medium"}>
                        {"Cascading Impact (Degraded Mode)"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                      <span className={"w-3 h-3 rounded bg-tertiary-container"} />
                      {" "}
                      <span className={"text-on-surface font-medium"}>
                        {"Shielded / Disjoint (Zero Casualty)"}
                      </span>
                    </div>
                    <div className={"pt-1 mt-1 border-t border-surface-container flex flex-col gap-1 text-on-surface-variant text-[11px]"}>
                      <div className={"flex items-center gap-2"}>
                        <span className={"w-5 h-0.5 bg-primary"} />
                        {" "}
                        <span>
                          {"Deterministic Flow"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <span className={"w-5 h-0.5 bg-error"} />
                        {" "}
                        <span>
                          {"Obligation Deficit"}
                        </span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <span className={"w-5 h-0.5 border-b border-dashed border-outline"} />
                        {" "}
                        <span>
                          {"Disjoint Path"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-span-12 xl:col-span-4 flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm p-space-md min-h-[720px] justify-between"} id={"inspector-column"}>
                <div>
                  <div className={"flex items-start justify-between pb-space-sm border-b border-surface-container mb-space-sm"}>
                    <div>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-mono font-semibold"}>
                          {"SELECTED NODE"}
                        </span>
                        {" "}
                        <span className={"font-label-sm text-label-sm text-on-surface-variant font-mono"}>
                          {"ID: DEC-14820"}
                        </span>
                      </div>
                      <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
                        {"Dual-Use Flight Envelope Autonomous Override"}
                      </h2>
                      <div className={"flex items-center gap-2 mt-1 text-on-surface-variant font-label-sm text-label-sm"}>
                        <span>
                          {"Decision Record (v2.4)"}
                        </span>
                        {" "}
                        <span>
                          {"•"}
                        </span>
                        {" "}
                        <span className={"text-primary font-mono font-medium"}>
                          {"Enclave SEC-9942"}
                        </span>
                      </div>
                    </div>
                    <div className={"w-9 h-9 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"policy"}
                      </span>
                    </div>
                  </div>
                  <div className={"bg-error-container/20 p-space-sm rounded-xl mb-space-md"}>
                    <div className={"flex items-center justify-between mb-1"}>
                      <span className={"font-label-sm text-label-sm font-semibold uppercase tracking-wider text-error"}>
                        {"Impact Classification"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm px-2 py-0.5 rounded bg-error text-on-error font-bold"}>
                        {"CRITICAL TIER 1"}
                      </span>
                    </div>
                    <div className={"font-headline-sm text-headline-sm text-error font-semibold"}>
                      {"DIRECT TARGET — REVALIDATION MANDATED"}
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface mt-1"}>
                      {" Autonomous execution privileges suspended across flight sector A-14. "}
                    </p>
                  </div>
                  <div className={"space-y-space-sm mb-space-md"}>
                    <div className={"bg-surface-container-low p-space-sm rounded-xl"}>
                      <div className={"flex items-center gap-1.5 text-on-surface font-label-md text-label-md font-semibold mb-1"}>
                        <span className={"material-symbols-outlined text-[16px] text-error"}>
                          {"help_outline"}
                        </span>
                        {" "}
                        <span>
                          {"Why is this object affected?"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                        {" Trigger "}
                        <span className={"font-mono text-on-surface font-semibold"}>
                          {"EVT-9041"}
                        </span>
                        {" revoked the intermediate HSM certificate for Subcontractor Raytheon Corp. Because DEC-14820 explicitly binds obligation "}
                        <span className={"font-mono text-primary font-semibold"}>
                          {"OBL-804B"}
                        </span>
                        {" as a hard prerequisite for dual-key sealing, the decision cannot transition to Sealed Genesis until re-attested. "}
                      </p>
                    </div>
                    <div className={"bg-surface-container-low p-space-sm rounded-xl"}>
                      <div className={"flex items-center gap-1.5 text-on-surface font-label-md text-label-md font-semibold mb-1"}>
                        <span className={"material-symbols-outlined text-[16px] text-tertiary-container"}>
                          {"verified"}
                        </span>
                        {" "}
                        <span>
                          {"Why do downstream items remain unaffected?"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                        <span className={"font-mono text-on-surface font-semibold"}>
                          {"UC-8821"}
                        </span>
                        {" and "}
                        <span className={"font-mono text-on-surface font-semibold"}>
                          {"SYS-7719"}
                        </span>
                        {" are provably decoupled via Merkle branch separation. Weights in Enclave Partition B are frozen, preventing any parameter drift or taint propagation. "}
                      </p>
                    </div>
                  </div>
                  <div className={"grid grid-cols-2 gap-space-sm mb-space-md"}>
                    <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm"}>
                      <div className={"flex items-center justify-between text-on-surface-variant mb-1.5"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold"}>
                          {"Upstream (2)"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"arrow_upward"}
                        </span>
                      </div>
                      <div className={"space-y-1"}>
                        <div className={"flex items-center justify-between p-1 bg-surface-container-low rounded text-label-sm font-label-sm"}>
                          <span className={"font-mono font-semibold text-error truncate"}>
                            {"EVT-9041"}
                          </span>
                          {" "}
                          <span className={"text-error text-[10px]"}>
                            {"Revocation"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between p-1 bg-surface-container-low rounded text-label-sm font-label-sm"}>
                          <span className={"font-mono font-semibold text-error truncate"}>
                            {"OBL-804B"}
                          </span>
                          {" "}
                          <span className={"text-error text-[10px]"}>
                            {"Deficit"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={"p-space-sm rounded-xl bg-surface-container-lowest shadow-sm"}>
                      <div className={"flex items-center justify-between text-on-surface-variant mb-1.5"}>
                        <span className={"font-label-sm text-label-sm uppercase font-semibold"}>
                          {"Downstream (5)"}
                        </span>
                        {" "}
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"arrow_downward"}
                        </span>
                      </div>
                      <div className={"space-y-1"}>
                        <div className={"flex items-center justify-between p-1 bg-surface-container-low rounded text-label-sm font-label-sm"}>
                          <span className={"font-mono font-semibold text-error truncate"}>
                            {"AGT-4402"}
                          </span>
                          {" "}
                          <span className={"text-error text-[10px]"}>
                            {"Fallback"}
                          </span>
                        </div>
                        <div className={"flex items-center justify-between p-1 bg-surface-container-low rounded text-label-sm font-label-sm"}>
                          <span className={"font-mono font-semibold text-error truncate"}>
                            {"GATE-SIGN-02"}
                          </span>
                          {" "}
                          <span className={"text-error text-[10px]"}>
                            {"Gated"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container-low p-space-sm rounded-xl mb-space-md"}>
                    <div className={"flex items-center justify-between mb-2"}>
                      <span className={"font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary"}>
                        {"Minimum Recovery Path"}
                      </span>
                      {" "}
                      <span className={"font-label-sm text-label-sm text-on-surface-variant"}>
                        {"2 Steps Mandatory"}
                      </span>
                    </div>
                    <ol className={"space-y-2 font-body-sm text-body-sm text-on-surface"}>
                      <li className={"flex items-start gap-2"}>
                        <span className={"w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5"}>
                          {"1"}
                        </span>
                        {" "}
                        <span>
                          {"Ingest renewed Raytheon HSM 4096-bit RSA certificate into Transit Key Ring."}
                        </span>
                      </li>
                      <li className={"flex items-start gap-2"}>
                        <span className={"w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5"}>
                          {"2"}
                        </span>
                        {" "}
                        <span>
                          {"Re-run Rule #804 deterministic zero-trust cryptographic validator."}
                        </span>
                      </li>
                      <li className={"flex items-start gap-2 text-on-surface-variant"}>
                        <span className={"w-4 h-4 rounded-full bg-surface-container text-on-surface text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5"}>
                          {"3"}
                        </span>
                        {" "}
                        <span>
                          {"Dispatch PIV-CAC attestation prompt to Dir. Sarah Sterling for genesis seal."}
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className={"flex flex-col gap-space-xs pt-space-sm border-t border-surface-container"}>
                  <button className={"w-full py-space-xs px-space-md rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-space-xs"} data-nav="/revalidation">
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"open_in_new"}
                    </span>
                    {" "}
                    <span>
                      {"Open in Revalidation Workspace (DEC-14820)"}
                    </span>
                  </button>
                  <div className={"grid grid-cols-2 gap-space-xs"}>
                    <button className={"py-space-xs px-space-sm rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"call_split"}
                      </span>
                      {" "}
                      <span>
                        {"Simulate Override"}
                      </span>
                    </button>
                    {" "}
                    <button className={"py-space-xs px-space-sm rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"fingerprint"}
                      </span>
                      {" "}
                      <span>
                        {"Proof Path (JSON)"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={"hidden flex-col items-center justify-center py-20 bg-surface-container-lowest rounded-2xl shadow-sm text-center mb-space-md"} id={"view-loading"}>
              <div className={"w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-space-md relative"}>
                <span className={"material-symbols-outlined text-[36px] animate-spin"}>
                  {"refresh"}
                </span>
              </div>
              <div className={"font-headline-md text-headline-md text-on-surface font-semibold"}>
                {"Traversing Merkle Hash Trees..."}
              </div>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-1"}>
                {" Evaluating recursive node containment boundaries across Enclaves SEC-9942, SEC-1088, and NATO-TAC-04. "}
              </p>
              <div className={"w-64 h-1.5 bg-surface-container rounded-full overflow-hidden mt-space-md"}>
                <div className={"h-full bg-primary w-2/3 animate-pulse"} />
              </div>
              <div className={"font-mono text-label-sm text-label-sm text-on-surface-variant mt-space-xs"}>
                {"Analyzing Hop 3/5: Leaf 0x9b41..."}
              </div>
            </div>
            <div className={"hidden flex-col items-center justify-center py-24 bg-surface-container-lowest rounded-2xl shadow-sm text-center mb-space-md"} id={"view-empty"}>
              <div className={"w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant mb-space-md"}>
                <span className={"material-symbols-outlined text-[36px]"}>
                  {"filter_vintage"}
                </span>
              </div>
              <div className={"font-headline-md text-headline-md text-on-surface font-semibold"}>
                {"No Traversal Cascade Detected"}
              </div>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mt-1"}>
                {" Selected event trigger does not have active bindings with governed AI decision graphs in this enclave scope. "}
              </p>
              <button className={"mt-space-md px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors"}>
                {" Select Different Event Trigger "}
              </button>
            </div>
            <div className={"hidden flex-col items-center justify-center py-20 bg-error-container/20 rounded-2xl shadow-sm text-center mb-space-md p-space-lg"} id={"view-error"}>
              <div className={"w-16 h-16 rounded-2xl bg-error-container text-error flex items-center justify-center mb-space-md"}>
                <span className={"material-symbols-outlined text-[36px]"}>
                  {"sync_problem"}
                </span>
              </div>
              <div className={"font-headline-md text-headline-md text-error font-semibold"}>
                {"Deterministic Traversal Aborted: Circular Dependency Found"}
              </div>
              <p className={"font-body-md text-body-md text-on-surface max-w-xl mt-1"}>
                {" Graph cycle detected between "}
                <span className={"font-mono font-semibold"}>
                  {"DEC-14820"}
                </span>
                {", "}
                <span className={"font-mono font-semibold"}>
                  {"RULE-804"}
                </span>
                {", and recursive self-attestation "}
                <span className={"font-mono font-semibold"}>
                  {"GATE-SIGN-02"}
                </span>
                {". The DAG property is violated. "}
              </p>
              <div className={"p-space-sm bg-surface-container-lowest rounded-xl shadow-sm mt-space-md font-mono text-body-sm text-error text-left max-w-lg w-full"}>
                {" Cycle Vector: DEC-14820 -> AGT-4402 -> RULE-804-v3 -> GATE-SIGN-02 -> DEC-14820 (Loop depth: 4) "}
              </div>
              <div className={"flex items-center gap-space-xs mt-space-md"}>
                <button className={"px-space-md py-space-xs rounded bg-error text-on-error font-label-md text-label-md hover:bg-on-error-container transition-colors"}>
                  {" Break Circular Reference "}
                </button>
                {" "}
                <button className={"px-space-md py-space-xs rounded bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors"} onClick={legacy("switchState('active')")}>
                  {" Dismiss Error "}
                </button>
              </div>
            </div>
            <div className={"sticky bottom-4 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md"}>
              <div className={"flex items-center gap-space-md w-full md:w-auto"}>
                <div className={"w-10 h-10 rounded-xl bg-tertiary-container/15 text-tertiary-container flex items-center justify-center shrink-0"}>
                  <span className={"material-symbols-outlined text-[24px]"}>
                    {"verified_user"}
                  </span>
                </div>
                <div>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                      {"Blast Radius Confirmed: 1 Root • 3 Cascades • 10 Shielded"}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {" Cryptographic blast containment guarantees "}
                    <strong className={"text-on-surface"}>
                      {"zero risk"}
                    </strong>
                    {" to outer flight control avionics. "}
                  </p>
                </div>
              </div>
              <div className={"flex items-center gap-space-xs w-full md:w-auto justify-end"}>
                <button className={"px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"download"}
                  </span>
                  {" "}
                  <span>
                    {"Download Topology (.DOT / Cytoscape)"}
                  </span>
                </button>
                {" "}
                <button className={"px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-space-xs"} data-nav="/recovery">
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"play_circle"}
                  </span>
                  {" "}
                  <span>
                    {"Proceed to Minimum Recovery Plan (2 Pending Steps)"}
                  </span>
                  {" "}
                  <kbd className={"px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm"}>
                    {"↵ Enter"}
                  </kbd>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
