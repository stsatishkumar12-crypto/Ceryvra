// Original page script from Verification-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: setSimState, insertStamp, triggerAttestationModal, closeAttestationModal, executeAttestationSignoff, rejectVerificationAction, triggerResampleAction
function setSimState(state) {
      // Update simulator buttons
      const buttons = document.querySelectorAll('#sim-state-buttons .sim-btn');
      buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm', 'active-sim');
        btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
      });

      const alerts = [
        'alert-awaiting',
        'alert-passed',
        'alert-failed',
        'alert-gap',
        'alert-denied',
        'alert-loading'
      ];
      alerts.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      });

      const currentAlert = document.getElementById('alert-' + state);
      if (currentAlert) currentAlert.classList.remove('hidden');

      // Highlight active clicked button
      if (event && event.currentTarget) {
        event.currentTarget.classList.add('bg-primary', 'text-on-primary', 'shadow-sm', 'active-sim');
        event.currentTarget.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
      }

      // Action button updates based on simulation
      const attestBtn = document.getElementById('btn-attest-primary');
      if (state === 'denied') {
        attestBtn.disabled = true;
        attestBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else if (state === 'failed') {
        attestBtn.disabled = true;
        attestBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        attestBtn.disabled = false;
        attestBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    }

    function insertStamp(stampText) {
      const memo = document.getElementById('attestation-memo');
      if (!memo.value.includes(stampText)) {
        memo.value += '\n\n' + stampText;
      }
      memo.focus();
    }

    function triggerAttestationModal() {
      document.getElementById('attest-modal').classList.remove('hidden');
    }

    function closeAttestationModal() {
      document.getElementById('attest-modal').classList.add('hidden');
    }

    function executeAttestationSignoff() {
      closeAttestationModal();
      setSimState('passed');
    }

    function rejectVerificationAction() {
      if (confirm('Confirm rejection of VRF-2024-9942-V05? This flags an unresolved deficit and immediately reopens the recovery plan.')) {
        setSimState('failed');
      }
    }

    function triggerResampleAction() {
      setSimState('loading');
      setTimeout(() => {
        setSimState('awaiting');
      }, 1500);
    }
