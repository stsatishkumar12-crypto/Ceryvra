// Bridge that lets the client's original page scripts (vanilla DOM code) run inside React.
// The markup is rendered once and never re-rendered, so DOM changes made by these scripts
// (show/hide states, modals, drawers, filters) behave exactly like in the source HTML files.
import { useEffect } from 'react';

const handlerCache = new Map();

// Turns an inline HTML handler string, e.g. "selectRule('RULE-804')", into a React handler.
// `this` is the element and `event` is the React event, as in the original onclick="" code.
export function legacy(code) {
  let fn = handlerCache.get(code);
  if (!fn) {
    let compiled;
    try {
      compiled = new Function('event', code);
    } catch (err) {
      console.warn('[legacy] could not compile handler:', code, err);
      compiled = () => {};
    }
    fn = function handler(e) {
      const result = compiled.call(e.currentTarget, e);
      if (result === false) e.preventDefault();
    };
    handlerCache.set(code, fn);
  }
  return fn;
}

export function preventSubmit(e) {
  e.preventDefault();
}

// Runs a page script after mount. Top-level functions are exposed on window so inline
// handlers can reach them, and timers are cleared when the page unmounts.
const NO_EXPORTS = [];

export function useLegacyScript(code, exportsList = NO_EXPORTS) {
  useEffect(() => {
    if (!code) return undefined;
    const timers = new Set();
    const intervals = new Set();
    const scope = {
      setTimeout: (fn, ms, ...a) => {
        const id = window.setTimeout(() => { timers.delete(id); fn(...a); }, ms);
        timers.add(id);
        return id;
      },
      setInterval: (fn, ms, ...a) => {
        const id = window.setInterval(fn, ms, ...a);
        intervals.add(id);
        return id;
      },
    };
    const exportCode = exportsList
      .map((n) => `try { window[${JSON.stringify(n)}] = ${n}; } catch (e) {}`)
      .join('\n');
    try {
      // eslint-disable-next-line no-new-func
      const run = new Function('setTimeout', 'setInterval', `${code}\n;${exportCode}`);
      run(scope.setTimeout, scope.setInterval);
    } catch (err) {
      console.error('[legacy] page script failed:', err);
    }
    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      exportsList.forEach((n) => { try { delete window[n]; } catch { /* ignore */ } });
    };
  }, [code, exportsList]);
}
