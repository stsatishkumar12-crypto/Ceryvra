// Original page script from Governance-Inventory-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: setViewState, openDetailDrawer, closeDetailDrawer, openAttestationModal, closeAttestationModal, sealAttestationSuccess, executeQuarantine, clearFilters
function setViewState(state) {
    const tableEl = document.getElementById('view-inventory');
    const emptyEl = document.getElementById('view-empty');
    const noResultsEl = document.getElementById('view-no-results');
    const skeletonEl = document.getElementById('view-skeleton');
    const drawerEl = document.getElementById('slideover-drawer');
    const modalEl = document.getElementById('attest-modal');

    // Reset buttons
    const btnIds = ['btn-state-active', 'btn-state-drawer', 'btn-state-attest', 'btn-state-empty', 'btn-state-no-results', 'btn-state-skeleton'];
    btnIds.forEach(id => {
      const b = document.getElementById(id);
      if (b) {
        b.className = 'px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-all';
      }
    });

    const activeBtn = document.getElementById('btn-state-' + state);
    if (activeBtn) {
      activeBtn.className = 'px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm shadow-xs transition-all';
    }

    // Hide all view panes
    tableEl.classList.add('hidden');
    emptyEl.classList.add('hidden');
    noResultsEl.classList.add('hidden');
    skeletonEl.classList.add('hidden');
    closeDetailDrawer();
    closeAttestationModal();

    if (state === 'active') {
      tableEl.classList.remove('hidden');
    } else if (state === 'drawer') {
      tableEl.classList.remove('hidden');
      openDetailDrawer();
    } else if (state === 'attest') {
      tableEl.classList.remove('hidden');
      openAttestationModal('SYS-1082');
    } else if (state === 'empty') {
      emptyEl.classList.remove('hidden');
    } else if (state === 'no-results') {
      noResultsEl.classList.remove('hidden');
    } else if (state === 'skeleton') {
      skeletonEl.classList.remove('hidden');
    }
  }

  function openDetailDrawer() {
    const drawer = document.getElementById('slideover-drawer');
    drawer.classList.remove('hidden');
    requestAnimationFrame(() => {
      drawer.classList.remove('opacity-0');
      drawer.classList.remove('pointer-events-none');
    });
  }

  function closeDetailDrawer() {
    const drawer = document.getElementById('slideover-drawer');
    drawer.classList.add('opacity-0');
    drawer.classList.add('pointer-events-none');
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 200);
  }

  function openAttestationModal(assetId) {
    const modal = document.getElementById('attest-modal');
    const label = document.getElementById('modal-asset-id');
    if (label && assetId) {
      label.textContent = 'Mandated Recertification • Asset ID: ' + assetId;
    }
    modal.classList.remove('hidden');
  }

  function closeAttestationModal() {
    const modal = document.getElementById('attest-modal');
    modal.classList.add('hidden');
  }

  function sealAttestationSuccess() {
    alert('Cryptographic signature generated via CAC PIN. Enclave ledger updated to block #8,941,210. Asset certified for 90 days.');
    closeAttestationModal();
    setViewState('active');
  }

  function executeQuarantine() {
    if (confirm('CRITICAL ACTION: Are you sure you wish to Quarantine SYS-1082? All downstream logistics inferencing pipelines will be halted.')) {
      alert('Asset SYS-1082 placed into Hardware Quarantine. Enclave firewall rules committed.');
      closeDetailDrawer();
    }
  }

  function clearFilters() {
    const input = document.getElementById('inventory-search-input');
    if (input) input.value = '';
    setViewState('active');
  }
