// Original page script from Missing-Evidence-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: filterObligations, setWorkspaceState, triggerUploadModal, closeUploadModal, openUploadModalFor, fileSelected, submitEvidenceMock, requestVendorAttestation, requestEmergencyWaiver, triggerReverification, reattestTpm, pingPendingApprovers, compareDiffModal, inspectMerkleProof, reevaluateRules, requestBatchAttestation, setViewMode, showToast
// Filter Functionality
  function filterObligations() {
    const searchVal = document.getElementById('obligation-search').value.toLowerCase();
    const statusVal = document.getElementById('filter-status').value;
    const logicVal = document.getElementById('filter-logic').value;
    const priorityVal = document.getElementById('filter-priority').value;

    const items = document.querySelectorAll('.obligation-item');
    let visibleCount = 0;

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      const status = item.getAttribute('data-status');
      const logic = item.getAttribute('data-logic');
      const priority = item.getAttribute('data-priority');

      const matchesSearch = text.includes(searchVal);
      const matchesStatus = (statusVal === 'all') || (status === statusVal);
      const matchesLogic = (logicVal === 'all') || (logic === logicVal);
      const matchesPriority = (priorityVal === 'all') || (priority === priorityVal);

      if (matchesSearch && matchesStatus && matchesLogic && matchesPriority) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    document.getElementById('visible-count').innerText = visibleCount;
  }

  // State Switcher (Demo Simulator)
  function setWorkspaceState(state) {
    const banner = document.getElementById('status-banner-card');
    const buttons = ['deficient', 'compliant', 'evaluating', 'error'];
    
    buttons.forEach(b => {
      const btn = document.getElementById('btn-state-' + b);
      if (b === state) {
        btn.classList.remove('bg-surface-container', 'text-on-surface');
        btn.classList.add('bg-primary-container', 'text-on-primary');
      } else {
        btn.classList.remove('bg-primary-container', 'text-on-primary');
        btn.classList.add('bg-surface-container', 'text-on-surface');
      }
    });

    if (state === 'compliant') {
      banner.className = 'bg-surface-container p-space-md lg:p-space-lg rounded-xl shadow-sm mb-space-lg';
      banner.innerHTML = `
        <div class="flex items-center gap-space-md">
          <div class="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[24px]">verified</span>
          </div>
          <div>
            <span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary uppercase font-semibold">ALL OBLIGATIONS SATISFIED (7/7 • 100%)</span>
            <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">DECISION STATUS: SEALED GENESIS READY</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">All deterministic obligations pass quorum and cryptographic verification. Col. Vance and Dir. Sterling may execute dual-key signoff.</p>
          </div>
        </div>
      `;
      showToast('Ledger Simulator: All obligations marked compliant', 'verified');
    } else if (state === 'evaluating') {
      banner.className = 'bg-surface-container-high p-space-md lg:p-space-lg rounded-xl shadow-sm mb-space-lg animate-pulse';
      banner.innerHTML = `
        <div class="flex items-center gap-space-md">
          <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 animate-spin">
            <span class="material-symbols-outlined text-[24px]">sync</span>
          </div>
          <div>
            <span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary uppercase font-semibold">CALCULATING PROOF MATRICES...</span>
            <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">EVALUATING ENCLAVE RULES (BLOCK #8,941,211)</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">Validating Zero-Knowledge Snark telemetry against hardware HSM root certificates.</p>
          </div>
        </div>
      `;
      showToast('Re-evaluating cryptographic ledger rules...', 'sync');
    } else if (state === 'error') {
      banner.className = 'bg-error text-on-error p-space-md lg:p-space-lg rounded-xl shadow-sm mb-space-lg';
      banner.innerHTML = `
        <div class="flex items-center gap-space-md">
          <div class="w-10 h-10 rounded-full bg-on-error text-error flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[24px]">cloud_off</span>
          </div>
          <div>
            <span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container uppercase font-semibold">LEDGER DISCONNECTED</span>
            <h2 class="font-headline-md text-headline-md text-on-error font-bold mt-1">NODE VERIFIER SYNC FAILURE</h2>
            <p class="font-body-md text-body-md text-on-error opacity-90 mt-0.5">Enclave HSM unreachable on Defense GovCloud VPC subnet. Obligations cached in read-only mode.</p>
          </div>
        </div>
      `;
      showToast('Ledger sync lost. Check cryptographic node gateway.', 'error');
    } else {
      location.reload();
    }
  }

  // Modal Handlers
  function triggerUploadModal() {
    document.getElementById('upload-modal').classList.remove('hidden');
    document.getElementById('upload-modal').classList.add('flex');
  }

  function closeUploadModal() {
    document.getElementById('upload-modal').classList.add('hidden');
    document.getElementById('upload-modal').classList.remove('flex');
  }

  function openUploadModalFor(oblId) {
    document.getElementById('modal-obligation-select').value = oblId;
    triggerUploadModal();
  }

  function fileSelected(input) {
    if (input.files && input.files[0]) {
      const label = document.getElementById('selected-file-label');
      label.innerText = input.files[0].name + ' (' + (input.files[0].size / 1024).toFixed(1) + ' KB)';
      label.classList.remove('hidden');
    }
  }

  function submitEvidenceMock() {
    closeUploadModal();
    showToast('Evidence successfully uploaded and submitted to HSM for signing', 'check_circle');
  }

  function requestVendorAttestation(oblId) {
    showToast('Sent automated compliance notice to Raytheon Tier-2 SecOps for ' + oblId, 'send');
  }

  function requestEmergencyWaiver(oblId) {
    showToast('Initiated Formal Emergency Waiver ticket for ' + oblId + ' to Lead Risk Officer', 'warning');
  }

  function triggerReverification(oblId) {
    showToast('Dispatched verification runner job to Node #04 for ' + oblId, 'refresh');
  }

  function reattestTpm(oblId) {
    showToast('Dispatched TPM 2.0 PCR Quote challenge to enclave module', 'bolt');
  }

  function pingPendingApprovers(oblId) {
    showToast('Pinged MITRE Corporation & Internal SecOps node for ' + oblId, 'notifications_active');
  }

  function compareDiffModal(oblId) {
    showToast('Telemetry delta inspector opened for ' + oblId, 'difference');
  }

  function inspectMerkleProof(oblId) {
    showToast('Merkle inclusion proof verified at leaf #4409', 'verified');
  }

  function reevaluateRules() {
    showToast('Re-evaluating entire obligations graph against current ledger...', 'sync');
  }

  function requestBatchAttestation() {
    showToast('Batch attestation requests dispatched to 3 external verification authorities', 'send_time_extension');
  }

  function setViewMode(mode) {
    const btnTree = document.getElementById('btn-view-tree');
    const btnFlat = document.getElementById('btn-view-flat');
    if (mode === 'tree') {
      btnTree.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btnTree.classList.remove('text-on-surface-variant');
      btnFlat.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btnFlat.classList.add('text-on-surface-variant');
      showToast('Switched to Clause Logic Tree View', 'account_tree');
    } else {
      btnFlat.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btnFlat.classList.remove('text-on-surface-variant');
      btnTree.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btnTree.classList.add('text-on-surface-variant');
      showToast('Switched to Flat Priority List View', 'view_agenda');
    }
  }

  // Micro Toast
  function showToast(msg, icon) {
    const toast = document.getElementById('toast-notification');
    document.getElementById('toast-message').innerText = msg;
    document.getElementById('toast-icon').innerText = icon || 'info';
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 4000);
  }
