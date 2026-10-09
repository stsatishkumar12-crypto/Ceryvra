// Original page script from Recovery-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: switchWorkspaceState, executeActionOne, triggerMasterExecution, signQuorumModal, previewDiffModal, closeModal, confirmModalAction, simulateDryRun, exportManifestJSON
let currentModalAction = '';

  function switchWorkspaceState(state) {
    const tabs = ['active', 'drawer', 'verification', 'blocked', 'denied', 'cleared'];
    tabs.forEach(t => {
      const el = document.getElementById('tab-' + t);
      if (el) {
        if (t === state) {
          el.className = 'px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all bg-surface-container-lowest text-primary font-semibold shadow-sm flex items-center gap-1';
        } else {
          el.className = 'px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1';
        }
      }
    });

    const actionCard1 = document.getElementById('action-card-1');
    const actionCard2 = document.getElementById('action-card-2');
    const detailCol = document.getElementById('detail-inspector-column');

    if (state === 'cleared') {
      actionCard1.style.display = 'none';
      actionCard2.style.display = 'none';
      alert('Simulation State: All recovery items cleared. System Merkle root healthy.');
    } else if (state === 'blocked') {
      actionCard1.style.display = 'flex';
      actionCard2.style.display = 'flex';
      alert('Simulation State: Enclave hardware TPM PCR[07] mismatch detected. Execution blocked until certified key is re-imported.');
    } else if (state === 'verification') {
      actionCard1.style.display = 'flex';
      actionCard2.style.display = 'flex';
      alert('Simulation State: Minimum recovery executed. Now at Stage 5: Awaiting Independent Verification by Lead Auditor.');
    } else if (state === 'denied') {
      alert('Simulation State: Clearance level insufficient. TS/SCI cryptographic key delegation required.');
    } else {
      actionCard1.style.display = 'flex';
      actionCard2.style.display = 'flex';
    }
  }

  function executeActionOne() {
    const btn = document.getElementById('btn-exec-01');
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Injecting Key...</span>';
    setTimeout(() => {
      btn.className = 'px-space-md py-1.5 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md shadow-sm flex items-center gap-1.5';
      btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">done_all</span><span>Key Ingested & Verified</span>';
      
      const btn2 = document.getElementById('btn-exec-02');
      if (btn2) {
        btn2.disabled = false;
        btn2.className = 'px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm flex items-center gap-1.5 cursor-pointer';
        btn2.innerHTML = '<span class="material-symbols-outlined text-[18px]">play_circle</span><span>Execute Re-run #804</span>';
      }
      alert('Success: Renewed 4096-bit RSA transit key injected into Enclave SEC-9942 slot 0x04. PCR[07] attestation valid.');
    }, 1000);
  }

  function triggerMasterExecution() {
    const btn = document.getElementById('btn-master-exec');
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Executing Minimum Plan...</span>';
    setTimeout(() => {
      btn.className = 'w-full py-2.5 px-space-md rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md shadow-md flex items-center justify-center gap-space-xs';
      btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">verified</span><span>Plan Executed • Gate Set to Stage 5</span>';
      alert('Minimum Recovery Plan Executed: 2 obligations addressed. Enclave is now in Stage 5: Awaiting Independent Verification.');
    }, 1200);
  }

  function signQuorumModal() {
    currentModalAction = 'quorum';
    document.getElementById('modal-title').innerText = 'Dual-Key Quorum Countersign';
    document.getElementById('modal-body').innerHTML = `
      <div class="flex flex-col gap-2">
        <p>You are countersigning on behalf of <strong>Dir. Sarah Sterling (Chief Compliance & Legal)</strong>.</p>
        <div class="p-2 rounded bg-surface-container font-mono text-xs">
          Token: CERT-AUTH-88921-GOV<br/>
          Scope: OBL-804B Key Ingestion & Redaction Run
        </div>
      </div>
    `;
    document.getElementById('interactive-modal').style.display = 'flex';
  }

  function previewDiffModal() {
    currentModalAction = 'diff';
    document.getElementById('modal-title').innerText = 'Certificate Artifact Diff';
    document.getElementById('modal-body').innerHTML = `
      <div class="flex flex-col gap-2 text-xs font-mono">
        <div class="p-2 bg-error-container/30 text-on-surface rounded">
          - Serial: 77:1A:00:99:41:BB<br/>
          - Revocation CRL: 0x9f4a...2110 (Compromised HSM Transit)
        </div>
        <div class="p-2 bg-tertiary-container/30 text-on-surface rounded">
          + Serial: 88:9C:44:11:00:FA<br/>
          + Public Key: RSA 4096-bit FIPS 140-3 L3 Validated
        </div>
      </div>
    `;
    document.getElementById('interactive-modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('interactive-modal').style.display = 'none';
  }

  function confirmModalAction() {
    if (currentModalAction === 'quorum') {
      const q = document.getElementById('quorum-custodian-2');
      if (q) {
        q.innerHTML = `
          <div class="flex items-center gap-space-sm">
            <div class="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold text-label-sm">
              <span class="material-symbols-outlined text-[16px]">check</span>
            </div>
            <div class="flex flex-col">
              <span class="font-label-md text-label-md font-semibold text-on-surface">Dir. Sarah Sterling</span>
              <span class="font-body-sm text-[11px] text-on-surface-variant">Chief Compliance & Legal • PIV Validated</span>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary-container font-label-sm text-label-sm font-semibold">COUNTERSIGNED</span>
        `;
      }
    }
    closeModal();
  }

  function simulateDryRun() {
    alert('Dry-Run Simulation: 0 discrepancies found. WASM execution completed in 11.4ms (within 12ms mission threshold).');
  }

  function exportManifestJSON() {
    alert('Recovery Manifest Exported: REC-2024-9942-R01-manifest.jsonld generated with cryptographic Merkle proof.');
  }
