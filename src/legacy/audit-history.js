// Original page script from Audit-History-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: switchScenario, toggleDeficitsOnly, filterOnlyDeficits, resetFilters, selectEvent, setInspectorTab, triggerLiveProbe
// Forensic Scenario Switcher Function
  function switchScenario(scenario) {
    const defaultContent = document.getElementById('main-content-area');
    const verifyingBanner = document.getElementById('sim-verifying-banner');
    const emptyState = document.getElementById('sim-empty-state');
    const deniedState = document.getElementById('sim-denied-state');
    const queryInput = document.getElementById('query-input');

    // Reset button states
    document.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.classList.remove('bg-primary-container', 'text-on-primary');
      btn.classList.add('text-on-surface-variant');
    });

    const activeBtn = document.querySelector(`.scenario-btn[data-scenario="${scenario}"]`);
    if (activeBtn) {
      activeBtn.classList.add('bg-primary-container', 'text-on-primary');
      activeBtn.classList.remove('text-on-surface-variant');
    }

    // Hide all scenario specific views
    defaultContent.classList.remove('hidden');
    verifyingBanner.classList.add('hidden');
    emptyState.classList.add('hidden');
    deniedState.classList.add('hidden');

    if (scenario === 'verifying') {
      defaultContent.classList.add('hidden');
      verifyingBanner.classList.remove('hidden');
      verifyingBanner.classList.add('flex');
    } else if (scenario === 'empty') {
      defaultContent.classList.add('hidden');
      emptyState.classList.remove('hidden');
      emptyState.classList.add('flex');
    } else if (scenario === 'denied') {
      defaultContent.classList.add('hidden');
      deniedState.classList.remove('hidden');
      deniedState.classList.add('flex');
    } else if (scenario === 'failures') {
      queryInput.value = 'severity:CRITICAL status:quarantine_mandated';
      filterOnlyDeficits(true);
    } else if (scenario === 'reconstruction') {
      queryInput.value = 'case:DEC-14820 lifecycle:complete_trace';
      filterOnlyDeficits(false);
      selectEvent('evt-revocation');
    } else {
      queryInput.value = 'case:DEC-14820 state:quarantined_or_recovered';
      filterOnlyDeficits(false);
      selectEvent('evt-revocation');
    }
  }

  // Filter Chain Breakers / Deficits Only
  let deficitsOnlyActive = false;
  function toggleDeficitsOnly() {
    deficitsOnlyActive = !deficitsOnlyActive;
    filterOnlyDeficits(deficitsOnlyActive);
  }

  function filterOnlyDeficits(active) {
    const btn = document.getElementById('toggle-deficits-btn');
    const rows = document.querySelectorAll('.audit-row');

    if (active) {
      btn.classList.add('bg-error', 'text-on-error');
      btn.classList.remove('bg-error-container', 'text-on-error-container');
      rows.forEach(r => {
        if (r.getAttribute('data-id') === 'evt-revocation') {
          r.style.display = '';
        } else {
          r.style.display = 'none';
        }
      });
    } else {
      btn.classList.remove('bg-error', 'text-on-error');
      btn.classList.add('bg-error-container', 'text-on-error-container');
      rows.forEach(r => {
        r.style.display = '';
      });
    }
  }

  function resetFilters() {
    document.getElementById('query-input').value = '';
    filterOnlyDeficits(false);
    switchScenario('default');
  }

  // Row selection & inspector sync
  const eventDetailsMap = {
    'evt-genesis': {
      title: 'EVT-8941-200-GEN',
      time: '2024-10-14 09:12:14.412 UTC',
      hash: '0x12a9...89b1',
      hw: 'TPM 2.0 PCR[07] WORM Sealed',
      agent: 'Col. Marcus Vance (SecOps)',
      critical: false
    },
    'evt-revocation': {
      title: 'EVT-8941-220-REV',
      time: '2024-10-14 11:20:00.104 UTC',
      hash: '0x9f4a...2110',
      hw: 'TPM 2.0 PCR[07] WORM Sealed',
      agent: 'CRL Ingestion Daemon',
      critical: true
    },
    'evt-traversal': {
      title: 'EVT-8941-214-TRV',
      time: '2024-10-14 11:20:04.881 UTC',
      hash: '0x33c1...aa89',
      hw: 'TPM 2.0 PCR[07] Invariant Verified',
      agent: 'Consequence Engine v4.18',
      critical: false
    },
    'evt-recovery': {
      title: 'EVT-8941-219-REC',
      time: '2024-10-14 12:45:10.009 UTC',
      hash: '0x88ea...f012',
      hw: 'Dual-PIV Hardware Token Armed',
      agent: 'Dr. Elena Rostova',
      critical: false
    },
    'evt-execution': {
      title: 'EVT-8941-222-EXE',
      time: '2024-10-14 14:22:18.330 UTC',
      hash: '0xbb41...99ef',
      hw: 'WASM Sandbox Attested',
      agent: 'Col. Marcus Vance',
      critical: false
    },
    'evt-attestation': {
      title: 'EVT-8941-225-ATTEST',
      time: '2024-10-14 14:31:45.092 UTC',
      hash: '0x89f4...2e09',
      hw: 'FIPS 140-3 L3 Sealed Certificate',
      agent: 'Dr. Elena Rostova (Independent Verifier)',
      critical: false
    }
  };

  function selectEvent(eventId) {
    document.querySelectorAll('.audit-row').forEach(row => {
      row.classList.remove('bg-surface-container-high', 'bg-error-container/20');
      if (row.getAttribute('data-id') === eventId) {
        row.classList.add(eventId === 'evt-revocation' ? 'bg-error-container/20' : 'bg-surface-container-high');
      }
    });

    const data = eventDetailsMap[eventId];
    if (data) {
      document.getElementById('inspector-event-title').textContent = data.title;
    }
  }

  // Inspector Tabs Navigation
  function setInspectorTab(tabId) {
    document.querySelectorAll('#inspector-tabs-nav .tab-btn').forEach(btn => {
      btn.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
      btn.classList.add('text-on-surface-variant');
    });

    const activeBtn = document.querySelector(`#inspector-tabs-nav .tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) {
      activeBtn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
      activeBtn.classList.remove('text-on-surface-variant');
    }

    document.querySelectorAll('.inspector-tab-content').forEach(content => {
      content.classList.add('hidden');
      content.classList.remove('flex');
    });

    const selectedTab = document.getElementById(`tab-${tabId}`);
    if (selectedTab) {
      selectedTab.classList.remove('hidden');
      selectedTab.classList.add('flex');
    }
  }

  function triggerLiveProbe() {
    switchScenario('verifying');
    setTimeout(() => {
      switchScenario('default');
    }, 1800);
  }
