// Original page script from Decision-Record-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: setViewState, toggleAccordion, copyGenomeId
function setViewState(viewKey) {
      const views = ['active', 'sealed', 'diff', 'audit-modal', 'skeleton'];
      views.forEach(v => {
        const el = document.getElementById('view-' + v);
        const btn = document.getElementById('btn-tab-' + v);
        if (el) {
          if (v === viewKey) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        }
        if (btn) {
          if (v === viewKey) {
            btn.className = "flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-sm cursor-pointer transition-all";
          } else {
            btn.className = "flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md cursor-pointer transition-all";
          }
        }
      });
    }

    function toggleAccordion(id) {
      const el = document.getElementById(id);
      const icon = document.getElementById(id + '-icon');
      if (el) {
        if (el.classList.contains('hidden')) {
          el.classList.remove('hidden');
          if (icon) icon.innerText = 'expand_less';
        } else {
          el.classList.add('hidden');
          if (icon) icon.innerText = 'expand_more';
        }
      }
    }

    function copyGenomeId() {
      navigator.clipboard?.writeText('DEC-GENOME-2024-9942-A8');
      const badge = document.getElementById('copy-indicator');
      if (badge) {
        badge.innerText = 'Copied!';
        setTimeout(() => { badge.innerText = 'copy'; }, 2000);
      }
    }
