// Inserts extra demo UI into a generated client page without editing the generated markup.
// The content is placed just before the card that contains `anchorText` (or at the end of <main>).
import { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

function findCard(main, anchorText) {
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.nodeValue.includes(anchorText)) {
      return node.parentElement.closest('.rounded-xl') || null;
    }
  }
  return null;
}

export default function PageExtension({ id, anchorText, className = '', children }) {
  const [host, setHost] = useState(null);
  const { hash } = useLocation();

  useLayoutEffect(() => {
    const main = document.querySelector('main');
    if (!main) return undefined;
    const el = document.createElement('div');
    el.id = id;
    el.className = className;
    el.setAttribute('data-extension', '');
    const card = anchorText ? findCard(main, anchorText) : null;
    if (card) card.parentNode.insertBefore(el, card);
    else main.appendChild(el);
    setHost(el);
    return () => el.remove();
  }, [id, anchorText, className]);

  // Deep links such as /recovery#ms-action scroll to this panel, also within the same page.
  useEffect(() => {
    if (host && hash === `#${id}`) {
      requestAnimationFrame(() => host.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [host, hash, id]);

  return host ? createPortal(children, host) : null;
}
