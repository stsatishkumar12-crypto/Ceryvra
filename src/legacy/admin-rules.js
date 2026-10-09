// Original page script from AdminRules&Evidence-configuration-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: selectRule, switchSimulationMode, toggleAuditDrawer, exportJsonLd, addNewPolicyRule, duplicateRule, viewHistory, discardDraft, dryRunSimulation, saveStageDraft, promotePolicyEnforce, filterRules
function selectRule(ruleId) {
      // Remove active indicator from all cards
      ['card-rule-804', 'card-rule-911', 'card-rule-462', 'card-rule-1024'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.classList.remove('shadow-md');
          const borderIndicator = el.querySelector('.absolute.left-0');
          if (borderIndicator) borderIndicator.remove();
        }
      });

      // Add indicator to active target
      let targetId = 'card-rule-804';
      if (ruleId === 'RULE-911') targetId = 'card-rule-911';
      if (ruleId === 'RULE-462') targetId = 'card-rule-462';
      if (ruleId === 'RULE-1024') targetId = 'card-rule-1024';

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.classList.add('shadow-md');
        const indicator = document.createElement('div');
        indicator.className = 'absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl';
        targetEl.appendChild(indicator);
      }
    }

    function switchSimulationMode(mode) {
      const modes = ['active', 'nested', 'draft', 'readonly', 'error', 'empty'];
      modes.forEach(m => {
        const btn = document.getElementById('mode-' + m);
        if (btn) {
          btn.className = 'px-space-sm py-0.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all';
        }
      });
      const activeBtn = document.getElementById('mode-' + mode);
      if (activeBtn) {
        activeBtn.className = 'px-space-sm py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary font-semibold shadow-sm transition-all flex items-center gap-1';
      }

      if (mode === 'readonly') {
        alert("Enclave Mode Switched: Administrator session downgraded to READ-ONLY AUDITOR. Policy mutation commands locked.");
      } else if (mode === 'error') {
        alert("Simulation Drift Injected: 1 Active Rule has incomplete temporal constraints. Ledger re-evaluation flagged warnings on DEC-14820.");
      } else if (mode === 'empty') {
        alert("Switched to Isolated Cold Enclave: 0 Policies defined. Ready for clean initialization from DoD Baseline Catalog.");
      }
    }

    function toggleAuditDrawer() {
      alert("Opening Merkle Ledger Cryptographic Audit Trail for Enclave SEC-9942 (24 Active Policies / 18 Signed Revisions).");
    }

    function exportJsonLd() {
      const dummySchema = {
        "@context": "https://ceryvra.gov/schema/v4/policy.jsonld",
        "id": "RULE-804",
        "type": "GovernancePolicyRule",
        "enclave": "SEC-9942",
        "version": "3.1.0",
        "quorum": "DualKey_ElenaRostova_MarcusVance",
        "formula": "(ALL [OBL-804A, OBL-804B]) AND (K-of-N 2 3 [P1, P2, P3])"
      };
      const blob = new Blob([JSON.stringify(dummySchema, null, 2)], { type: 'application/ld+json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RULE-804-policy-spec.jsonld';
      a.click();
    }

    function addNewPolicyRule() {
      alert("Initiating New Declarative Rule Workflow: Assigning RULE-1025 identifier in Enclave Workspace.");
    }

    function duplicateRule(id) {
      alert("Duplicating " + id + " into Staged Draft namespace as " + id + "-COPY.");
    }

    function viewHistory(id) {
      alert("Displaying cryptographic diff history for " + id + ": v1.0 (2024-03) -> v2.0 -> v3.1 (Enforced).");
    }

    function discardDraft() {
      if (confirm("Discard all pending uncommitted changes in current editor workspace?")) {
        alert("Draft discarded. Restored Enclave SEC-9942 active version v3.1.");
      }
    }

    function dryRunSimulation() {
      alert("Executing Zero-Impact Policy Dry Run against 42 Production Inferences... RESULT: 42 of 42 Compliant (0 Failures, Average Verification Latency: 4.8ms).");
    }

    function saveStageDraft() {
      alert("Rule staged into Enclave Staging Buffer as Draft v3.2. Ready for Dual PIV Signoff.");
    }

    function promotePolicyEnforce() {
      alert("Hardware Token Required: Please present PIV-CAC Card for Dr. Elena Rostova and Col. Marcus Vance to commit Merkle Root.");
    }

    function filterRules(val) {
      const q = val.toLowerCase();
      const stack = document.getElementById('rule-card-stack');
      const cards = stack.children;
      for (let i = 0; i < cards.length; i++) {
        const text = cards[i].innerText.toLowerCase();
        if (text.includes(q)) {
          cards[i].style.display = 'block';
        } else {
          cards[i].style.display = 'none';
        }
      }
    }
