// Original page script from Revalidation-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: switchView, insertTemplate, executeMint, rejectRevalidation, requestMoreEvidence
// Interactive View Switcher for the demonstration workspace
  function switchView(mode) {
    const mainContent = document.getElementById('main-revalidation-content');
    const loadingView = document.getElementById('state-loading-view');
    const deniedView = document.getElementById('state-denied-view');
    const emptyView = document.getElementById('state-empty-view');
    const sealedBanner = document.getElementById('sealed-success-banner');
    
    // Reset all selector buttons style
    const buttons = document.querySelectorAll('#view-mode-selector button');
    buttons.forEach(btn => {
      btn.className = "px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all shadow-xs";
    });

    const activeBtn = document.getElementById('btn-view-' + mode);
    if (activeBtn) {
      activeBtn.className = "px-space-sm py-1 rounded font-label-sm text-label-sm bg-primary-container text-on-primary transition-all shadow-sm";
    }

    // Hide all view panels
    loadingView.classList.add('hidden');
    deniedView.classList.add('hidden');
    emptyView.classList.add('hidden');
    sealedBanner.classList.add('hidden');
    mainContent.classList.remove('hidden');

    if (mode === 'loading') {
      mainContent.classList.add('hidden');
      loadingView.classList.remove('hidden');
    } else if (mode === 'denied') {
      mainContent.classList.add('hidden');
      deniedView.classList.remove('hidden');
    } else if (mode === 'empty') {
      mainContent.classList.add('hidden');
      emptyView.classList.remove('hidden');
    } else if (mode === 'sealed') {
      sealedBanner.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (mode === 'diff') {
      // Highlight the side-by-side comparison section
      const diffSection = document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
      if (diffSection) {
        diffSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Active default
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Quick memo template fillers
  function insertTemplate(type) {
    const memo = document.getElementById('auditor-memo');
    if (!memo) return;
    
    let text = "";
    if (type === 'fips') {
      text = " Verified Raytheon HSM token cert 0x3b11...ca55 conforms to FIPS 140-3 Level 3 zero-trust transit protocol. Cryptographic provenance verified in enclave.";
    } else if (type === 'latency') {
      text = " Measured continuous telemetry latency under EW jamming conditions at 8.4ms, well inside the upgraded 12ms safety threshold for DEC-14820.";
    } else if (type === 'isolation') {
      text = " Cascade boundary analysis mathematically isolated 41 upstream models. Disjoint Merkle leaf tree confirms zero semantic leakage.";
    }
    
    memo.value = memo.value ? memo.value + text : text.trim();
    memo.focus();
  }

  function executeMint() {
    const memo = document.getElementById('auditor-memo');
    if (!memo.value.trim()) {
      alert("Please provide an Auditor Attestation Memo & Justification prior to signing.");
      memo.focus();
      return;
    }
    
    const confirmMint = confirm("Initiate hardware token sign-off for DEC-14820 v2.4 (Block #8,941,300)? This will escalate for secondary cryptographic sign-off.");
    if (confirmMint) {
      switchView('sealed');
    }
  }

  function rejectRevalidation() {
    const reason = prompt("Enter formal reason for rejecting proposed Revalidation Draft (will be written to FIPS immutable log):");
    if (reason) {
      alert("Revalidation draft rejected. DEC-14820 held in provisional freeze. Incident ticket logged to SecOps daemon.");
      switchView('active');
    }
  }

  function requestMoreEvidence() {
    alert("Request for additional Subcontractor hardware proofs dispatched to Raytheon Enclave Node #12. Decision retained in provisional state.");
  }
