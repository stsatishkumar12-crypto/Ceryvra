// Converts the client-provided Stitch/Tailwind HTML pages into React page components.
// Markup is kept 1:1 (same classes, same structure); each page's inline <script> is
// moved to src/legacy/<name>.js and executed after mount by useLegacyScript().
//
// Usage: node scripts/convert-html.mjs   (run from the project root)

import fs from 'node:fs';
import path from 'node:path';
import { parse, NodeType } from 'node-html-parser';
import * as acorn from 'acorn';

const SRC_DIR = path.resolve('..');
const PAGES_DIR = path.resolve('src/pages/generated');
const LEGACY_DIR = path.resolve('src/legacy');

// Global buttons that appear in every page header.
const GLOBAL_NAV = [{ text: 'New Decision', to: '/decision-record' }];

const PAGES = [
  {
    file: 'home-dashboard.html', name: 'HomeDashboard',
    nav: [
      { text: 'Register Governed Use Case', to: '/governance-inventory' },
      { text: 'Create First Governed Use Case', to: '/governance-inventory' },
      { text: 'Open Governed Enclave', to: '/governed-chat' },
      { text: 'Record Policy Decision', to: '/decision-record' },
      { text: 'Review & Attest Evidence', to: '/missing-evidence' },
      { text: 'Inspect Audit Log', to: '/audit-history' },
      { text: 'Open Complete Ledger Audit Trail', to: '/audit-history' },
      { text: 'Rotate & Re-verify', to: '/revalidation' },
      { text: 'Verify Proof', to: '/verification' },
      { text: 'Submit Full Evidence', to: '/missing-evidence' },
    ],
  },
  {
    file: 'Governance-Inventory-page.html', name: 'GovernanceInventory',
    nav: [{ text: 'Audit Proof Ledger', to: '/audit-history' }],
  },
  {
    file: 'Governed-Chat-page.html', name: 'GovernedChat',
    nav: [
      { text: 'Convert to Use Case', to: '/governance-inventory' },
      { text: 'Save to Decision Ledger', to: '/decision-record' },
      { text: 'Review Missing Proof', to: '/missing-evidence' },
      { text: 'Submit for Multi-Sig Verification', to: '/verification' },
    ],
  },
  {
    file: 'Notes-page.html', name: 'Notes',
    nav: [
      { text: 'Elevate to Decision', to: '/decision-record' },
      { text: 'Link Decision Proof', to: '/decision-record' },
      { text: '[Decision #14,820', to: '/decision-record' },
      { text: '[SRC-02: Vendor-Audit]', to: '/governed-chat' },
    ],
  },
  { file: 'Decision-Record-page.html', name: 'DecisionRecord', nav: [] },
  {
    file: 'Missing-Evidence-page.html', name: 'MissingEvidence',
    nav: [{ text: 'Audit Package', to: '/audit-history' }],
  },
  {
    file: 'Change-Detection-page.html', name: 'ChangeDetection',
    nav: [
      { text: 'Initiate Targeted Revalidation', to: '/revalidation' },
      { text: 'Launch Revalidation Wizard', to: '/revalidation' },
      { text: 'View Audit Stamp', to: '/audit-history' },
      { text: 'View Raw Cryptographic Audit Bundle', to: '/audit-history' },
    ],
  },
  { file: 'Revalidation-page.html', name: 'Revalidation', nav: [] },
  {
    file: 'Consequence-Graph-page.html', name: 'ConsequenceGraph',
    nav: [
      { text: 'Launch Minimum Recovery Plan', to: '/recovery' },
      { text: 'Proceed to Minimum Recovery Plan', to: '/recovery' },
      { text: 'Open in Revalidation Workspace', to: '/revalidation' },
    ],
  },
  {
    file: 'Recovery-page.html', name: 'Recovery',
    nav: [{ text: 'Dependency Graph', to: '/consequence-graph' }],
  },
  {
    file: 'Verification-page.html', name: 'Verification',
    nav: [
      { text: 'View Telemetry DAG', to: '/consequence-graph' },
      { text: 'Export Ledger Proof', to: '/audit-history' },
    ],
  },
  {
    file: 'Audit-History-page.html', name: 'AuditHistory',
    nav: [
      { text: 'DAG Blast Graph', to: '/consequence-graph' },
      { text: 'Verification Cert', to: '/verification' },
    ],
  },
  { file: 'AdminRules&Evidence-configuration-page.html', name: 'AdminRules', nav: [] },
  { file: 'Tenant&MSPAdministration-page.html', name: 'TenantMsp', nav: [] },
];

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', minlength: 'minLength', colspan: 'colSpan', rowspan: 'rowSpan',
  autocomplete: 'autoComplete', autofocus: 'autoFocus', spellcheck: 'spellCheck',
  contenteditable: 'contentEditable', novalidate: 'noValidate', crossorigin: 'crossOrigin',
  srcset: 'srcSet', datetime: 'dateTime', enctype: 'encType', viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio', 'xlink:href': 'xlinkHref',
  'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace', gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform', patternunits: 'patternUnits',
  markerwidth: 'markerWidth', markerheight: 'markerHeight', refx: 'refX', refy: 'refY',
  stddeviation: 'stdDeviation', allowfullscreen: 'allowFullScreen', inputmode: 'inputMode',
};
const EVENT_MAP = {
  onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit',
  onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onkeypress: 'onKeyPress', onfocus: 'onFocus',
  onblur: 'onBlur', onmouseover: 'onMouseOver', onmouseout: 'onMouseOut',
  onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', ondragover: 'onDragOver',
  ondragleave: 'onDragLeave', ondrop: 'onDrop', ondblclick: 'onDoubleClick',
};
const BOOLEAN_ATTRS = new Set(['required', 'disabled', 'multiple', 'hidden', 'open', 'autofocus', 'readonly', 'novalidate', 'allowfullscreen']);
const VOID = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'col', 'area', 'wbr']);

// Whitespace next to these elements never renders, so it can be dropped from the JSX.
const BLOCK = new Set(['div', 'section', 'header', 'footer', 'main', 'nav', 'aside', 'article',
  'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'form', 'fieldset',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'dl', 'dt', 'dd', 'details', 'summary', 'figure',
  'g', 'defs', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'text',
  'lineargradient', 'radialgradient', 'stop', 'marker', 'option', 'select', 'textarea', 'pre', 'hr', 'br']);

const isWs = (n) => n.nodeType === NodeType.TEXT_NODE && !/\S/.test(n.text);
const tagOf = (n) => (n && n.rawTagName ? n.rawTagName.toLowerCase() : null);

function meaningfulChildren(parent, pre) {
  const kids = parent.childNodes.filter((c) => c.nodeType !== NodeType.COMMENT_NODE);
  if (pre) return kids;
  return kids.filter((c, i) => {
    if (!isWs(c)) return true;
    const prev = kids[i - 1];
    const next = kids[i + 1];
    if (!prev || !next) return false; // leading/trailing whitespace collapses away
    if (isWs(prev)) return false;
    if (BLOCK.has(tagOf(prev)) || BLOCK.has(tagOf(next))) return false;
    return true;
  });
}

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const q = (s) => JSON.stringify(s);
const norm = (s) => s.replace(/\s+/g, ' ').trim();

function styleToObject(style) {
  const parts = style.split(';').map((p) => p.trim()).filter(Boolean);
  const entries = parts.map((p) => {
    const i = p.indexOf(':');
    const k = p.slice(0, i).trim();
    const v = p.slice(i + 1).trim();
    const key = k.startsWith('--') ? q(k) : camel(k.toLowerCase());
    return `${key}: ${q(v)}`;
  });
  return `{{ ${entries.join(', ')} }}`;
}

function textOf(node) {
  return norm(node.text || '');
}

function navTarget(el, navRules) {
  const tag = el.rawTagName?.toLowerCase();
  if (tag !== 'button' && tag !== 'a') return null;
  const t = textOf(el);
  for (const r of navRules) {
    if (t.includes(r.text) && t.length <= r.text.length + 40) return r.to;
  }
  return null;
}

function emit(node, ctx, depth) {
  const pad = '  '.repeat(depth);
  if (node.nodeType === NodeType.COMMENT_NODE) return '';
  if (node.nodeType === NodeType.TEXT_NODE) {
    let t = node.text; // decoded entities
    if (!ctx.pre) t = t.replace(/\s+/g, ' ');
    if (t === '') return '';
    return `${pad}{${q(t)}}\n`;
  }
  const tag = node.rawTagName;
  if (!tag) return node.childNodes.map((c) => emit(c, ctx, depth)).join('');
  const lower = tag.toLowerCase();
  if (lower === 'script' || lower === 'style') return '';

  const attrs = node.attributes; // decoded values
  const out = [];
  const nav = navTarget(node, ctx.navRules);
  let children = meaningfulChildren(node, ctx.pre || lower === 'pre');
  let selectDefault = null;

  if (lower === 'select') {
    const opt = node.querySelectorAll('option').find((o) => o.hasAttribute('selected'));
    if (opt) selectDefault = opt.hasAttribute('value') ? opt.getAttribute('value') : textOf(opt);
  }

  for (const [rawName, value] of Object.entries(attrs)) {
    const name = rawName.toLowerCase();
    if (name.startsWith('on')) {
      if (nav) continue; // navigation replaces the original mock handler
      const ev = EVENT_MAP[name] || camel('on-' + name.slice(2));
      out.push(`${ev}={legacy(${q(value)})}`);
      continue;
    }
    if (name === 'style') { out.push(`style=${styleToObject(value)}`); continue; }
    if (name === 'selected' && lower === 'option') continue;
    if (name === 'checked') { out.push('defaultChecked'); continue; }
    if (name === 'value' && (lower === 'input' || lower === 'textarea')) {
      out.push(`defaultValue={${q(value)}}`); continue;
    }
    if (name.startsWith('data-') || name.startsWith('aria-')) { out.push(`${name}={${q(value)}}`); continue; }
    const jsxName = ATTR_MAP[name] || (name.includes('-') ? camel(name) : name);
    if (BOOLEAN_ATTRS.has(name) && (value === '' || value === name)) { out.push(jsxName); continue; }
    out.push(`${jsxName}={${q(value)}}`);
  }
  if (nav) out.push(`data-nav=${q(nav)}`);
  if (selectDefault !== null) out.push(`defaultValue={${q(selectDefault)}}`);
  if (lower === 'form' && !('onsubmit' in Object.fromEntries(Object.keys(attrs).map((k) => [k.toLowerCase(), 1])))) {
    out.push('onSubmit={preventSubmit}');
  }
  if (lower === 'textarea') {
    const txt = node.text;
    if (txt.trim()) out.push(`defaultValue={${q(txt.replace(/^\n/, ''))}}`);
    children = [];
  }
  if ('contenteditable' in attrs) out.push('suppressContentEditableWarning');

  const open = `<${tag}${out.length ? ' ' + out.join(' ') : ''}`;
  if (VOID.has(lower) || children.length === 0) return `${pad}${open} />\n`;
  const childCtx = { ...ctx, pre: ctx.pre || lower === 'pre' };
  const inner = children.map((c) => emit(c, childCtx, depth + 1)).join('');
  if (!inner) return `${pad}${open} />\n`;
  return `${pad}${open}>\n${inner}${pad}</${tag}>\n`;
}

function topLevelFunctions(code) {
  const names = [];
  try {
    const ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'script' });
    for (const n of ast.body) {
      if (n.type === 'FunctionDeclaration') names.push(n.id.name);
      if (n.type === 'VariableDeclaration') {
        for (const d of n.declarations) {
          if (d.id.type === 'Identifier' && d.init && /Function/.test(d.init.type)) names.push(d.id.name);
        }
      }
    }
  } catch (e) {
    console.warn('  ! could not parse script:', e.message);
  }
  return names;
}

fs.mkdirSync(PAGES_DIR, { recursive: true });
fs.mkdirSync(LEGACY_DIR, { recursive: true });

const bodyClasses = {};
for (const page of PAGES) {
  const html = fs.readFileSync(path.join(SRC_DIR, page.file), 'utf8');
  const root = parse(html, { comment: false, blockTextElements: { script: true, style: true, pre: true, textarea: true } });
  const body = root.querySelector('body');
  bodyClasses[page.name] = body.getAttribute('class') || '';

  const scripts = body.querySelectorAll('script').filter((s) => !s.getAttribute('src'));
  const code = scripts.map((s) => s.rawText || s.innerHTML).join('\n;\n');
  const fns = topLevelFunctions(code);
  const slug = page.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  fs.writeFileSync(
    path.join(LEGACY_DIR, `${slug}.js`),
    `// Original page script from ${page.file} (kept as-is for the clickable prototype).\n` +
    `// Exported to window so inline handlers in the markup can call them: ${fns.join(', ') || '(none)'}\n` +
    code.trim() + '\n'
  );

  const ctx = { navRules: [...page.nav, ...GLOBAL_NAV], pre: false };
  const kids = meaningfulChildren(body, false).filter((c) => !(c.rawTagName && c.rawTagName.toLowerCase() === 'aside'));
  const jsx = kids.map((c) => emit(c, ctx, 3)).join('');

  const imports = ['legacy(', 'preventSubmit}']
    .filter((token) => jsx.includes(token))
    .map((token) => token.replace(/[(}]/, ''))
    .concat('useLegacyScript')
    .join(', ');
  const component =
`// AUTO-GENERATED from ${page.file} by scripts/convert-html.mjs. Markup mirrors the client design 1:1.
import { ${imports} } from '../../lib/legacy';
import script from '../../legacy/${slug}.js?raw';

const exportsList = ${JSON.stringify(fns)};

export default function ${page.name}() {
  useLegacyScript(script, exportsList);
  return (
    <>
${jsx}    </>
  );
}
`;
  fs.writeFileSync(path.join(PAGES_DIR, `${page.name}.jsx`), component);
  console.log(`✓ ${page.file} -> ${page.name}.jsx  (fns: ${fns.length}, nav: ${(jsx.match(/data-nav=/g) || []).length})`);
}

fs.writeFileSync(
  path.join(PAGES_DIR, 'bodyClasses.json'),
  JSON.stringify(bodyClasses, null, 2) + '\n'
);
