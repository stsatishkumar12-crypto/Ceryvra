// Original page script from Governed-Chat-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: (none)
// Scenario State Switcher Logic
  const stateTabs = document.querySelectorAll('.state-tab');
  const viewActiveChat = document.getElementById('view-active-chat');
  const viewEmptyState = document.getElementById('view-empty-state');
  const viewAlertState = document.getElementById('view-alert-state');
  const viewDeniedSource = document.getElementById('view-denied-source');

  const views = {
    'active-chat': viewActiveChat,
    'empty-state': viewEmptyState,
    'alert-state': viewAlertState,
    'denied-source': viewDeniedSource
  };

  stateTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      stateTabs.forEach(t => {
        t.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-sm');
        t.classList.add('text-on-surface-variant');
      });
      tab.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm');
      tab.classList.remove('text-on-surface-variant');

      const selectedState = tab.getAttribute('data-state');
      Object.keys(views).forEach(key => {
        if (key === selectedState) {
          views[key].classList.remove('hidden');
          views[key].classList.add('flex');
        } else {
          views[key].classList.add('hidden');
          views[key].classList.remove('flex');
        }
      });
    });
  });

  // Right Panel Evidence Tabs
  const evidenceTabs = document.querySelectorAll('.evidence-tab');
  const tabSources = document.getElementById('tab-sources');
  const tabGuardrails = document.getElementById('tab-guardrails');
  const tabExport = document.getElementById('tab-export');

  const evidenceViews = {
    'sources': tabSources,
    'guardrails': tabGuardrails,
    'export': tabExport
  };

  evidenceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      evidenceTabs.forEach(t => {
        t.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
        t.classList.add('text-on-surface-variant');
      });
      tab.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
      tab.classList.remove('text-on-surface-variant');

      const selectedTab = tab.getAttribute('data-tab');
      Object.keys(evidenceViews).forEach(key => {
        if (key === selectedTab) {
          evidenceViews[key].classList.remove('hidden');
          evidenceViews[key].classList.add('flex');
        } else {
          evidenceViews[key].classList.add('hidden');
          evidenceViews[key].classList.remove('flex');
        }
      });
    });
  });

  // Right Panel Collapse / Expand Toggle
  const toggleBtn = document.getElementById('toggle-evidence-panel');
  const chatColumn = document.getElementById('chat-column');
  const evidenceColumn = document.getElementById('evidence-column');
  const panelLabel = document.getElementById('evidence-panel-label');
  let panelExpanded = true;

  toggleBtn.addEventListener('click', () => {
    panelExpanded = !panelExpanded;
    if (!panelExpanded) {
      evidenceColumn.classList.add('hidden');
      chatColumn.classList.remove('lg:col-span-8');
      chatColumn.classList.add('col-span-12');
      panelLabel.textContent = 'Open Evidence (4)';
    } else {
      evidenceColumn.classList.remove('hidden');
      chatColumn.classList.remove('col-span-12');
      chatColumn.classList.add('lg:col-span-8');
      panelLabel.textContent = 'Evidence Inspector (4)';
    }
  });

  // Citations hash visibility toggle
  const toggleCitationsBtn = document.getElementById('toggle-citations-body');
  const citationsContainer = document.getElementById('citations-container');
  let citationsExpanded = true;

  if (toggleCitationsBtn && citationsContainer) {
    toggleCitationsBtn.addEventListener('click', () => {
      citationsExpanded = !citationsExpanded;
      if (citationsExpanded) {
        citationsContainer.classList.remove('hidden');
        toggleCitationsBtn.textContent = 'Toggle All Hashes';
      } else {
        citationsContainer.classList.add('hidden');
        toggleCitationsBtn.textContent = 'Show All Hashes (3)';
      }
    });
  }

  // Pre-Decision Package Trigger
  const exportPkgBtn = document.getElementById('btn-export-pkg');
  if (exportPkgBtn) {
    exportPkgBtn.addEventListener('click', () => {
      evidenceTabs.forEach(t => {
        if (t.getAttribute('data-tab') === 'export') {
          t.click();
        }
      });
    });
  }
