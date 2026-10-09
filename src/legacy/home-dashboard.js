// Original page script from home-dashboard.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: switchDashboardState, filterTriageMatrix, filterRolePerspective, setTimeRange, handleQuickAction, exportGovernanceLedger, rotateKeyAction, verifyProofAction, submitEvidenceAction, openConflictModal, closeConflictModal, confirmConflictResolution
// State switcher controller
    function switchDashboardState(state) {
      const activeContainer = document.getElementById('state-view-active');
      const skeletonContainer = document.getElementById('state-view-skeleton');
      const emptyContainer = document.getElementById('state-view-empty');

      const tabActive = document.getElementById('tab-state-active');
      const tabSkeleton = document.getElementById('tab-state-skeleton');
      const tabEmpty = document.getElementById('tab-state-empty');

      // Reset tabs styling
      [tabActive, tabSkeleton, tabEmpty].forEach(tab => {
        tab.className = "px-space-sm py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5";
      });

      // Hide all states
      activeContainer.classList.add('hidden');
      skeletonContainer.classList.add('hidden');
      emptyContainer.classList.add('hidden');

      if (state === 'active') {
        activeContainer.classList.remove('hidden');
        tabActive.className = "px-space-sm py-1 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm transition-all flex items-center gap-1.5";
      } else if (state === 'skeleton') {
        skeletonContainer.classList.remove('hidden');
        tabSkeleton.className = "px-space-sm py-1 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm transition-all flex items-center gap-1.5";
      } else if (state === 'empty') {
        emptyContainer.classList.remove('hidden');
        tabEmpty.className = "px-space-sm py-1 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm transition-all flex items-center gap-1.5";
      }
    }

    // Triage Matrix category filter
    function filterTriageMatrix(category, element) {
      const buttons = document.querySelectorAll('.triage-filter-btn');
      buttons.forEach(btn => {
        btn.className = "triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all";
      });
      element.className = "triage-filter-btn px-2.5 py-1 rounded-md font-label-sm text-label-sm bg-primary text-on-primary font-semibold transition-all";

      const items = document.querySelectorAll('.triage-card');
      items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // Role Perspective Filtering Feedback
    function filterRolePerspective(role) {
      const badge = document.getElementById('role-selector');
      // Subtle pulse to acknowledge perspective change
      badge.classList.add('ring-2', 'ring-primary-container');
      setTimeout(() => badge.classList.remove('ring-2', 'ring-primary-container'), 500);
    }

    // Time window selector
    function setTimeRange(range, el) {
      const pills = document.querySelectorAll('.time-pill');
      pills.forEach(p => {
        p.className = "time-pill px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all";
      });
      el.className = "time-pill px-2.5 py-1 rounded font-label-sm text-label-sm bg-primary text-on-primary transition-all";
    }

    // Interactive Action Triggers
    function handleQuickAction(actionName) {
      alert(`Initiated action: [${actionName}] in Enclave: Global Aerospace & Defense (US-Gov)`);
    }

    function exportGovernanceLedger() {
      alert('Generating FedRAMP High compliant Merkle audit export (SHA-256 validated packages)...');
    }

    function rotateKeyAction(target) {
      alert(`Rotating cryptographic keys for ${target} via enclave TPM.`);
    }

    function verifyProofAction(target) {
      alert(`Opened verification runner for ${target}. Running fairness check assertions...`);
    }

    function submitEvidenceAction(target) {
      alert(`Opened submission drawer for ${target}. Ready for hash sealing.`);
    }

    // Conflict Resolution Modal Handlers
    function openConflictModal(modelName) {
      document.getElementById('modal-model-title').textContent = modelName;
      const modal = document.getElementById('conflict-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeConflictModal() {
      const modal = document.getElementById('conflict-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function confirmConflictResolution() {
      alert('Conflict resolved. Tamper-evident ledger entry committed to Block #8,941,210.');
      closeConflictModal();
    }
