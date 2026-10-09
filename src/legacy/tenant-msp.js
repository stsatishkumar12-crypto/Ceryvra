// Original page script from Tenant&MSPAdministration-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: triggerContextSwitchModal, closeSwitchModal, executeSwitchContext, updateLivePreview, updateColorPickers, setSimState
let targetTenantState = { id: '', name: '' };

  function triggerContextSwitchModal(tenantId, tenantName, degraded = false) {
    targetTenantState = { id: tenantId, name: tenantName };
    const modal = document.getElementById('modal-tenant-switch');
    const nameEl = document.getElementById('modal-target-tenant-name');
    const idEl = document.getElementById('modal-target-id');
    
    if (modal && nameEl && idEl) {
      nameEl.textContent = tenantName + ' (' + tenantId + ')';
      idEl.textContent = tenantId + (degraded ? ' [DEGRADED AUDIT ONLY]' : ' [SEC-ENCLAVE]');
      modal.classList.remove('hidden');
    }
  }

  function closeSwitchModal() {
    const modal = document.getElementById('modal-tenant-switch');
    if (modal) modal.classList.add('hidden');
  }

  function executeSwitchContext() {
    closeSwitchModal();
    alert('Cryptographic session rotated. Enclave context successfully shifted to: ' + targetTenantState.name + ' [' + targetTenantState.id + ']. Ephemeral tokens refreshed.');
  }

  function updateLivePreview() {
    const tenantName = document.getElementById('brand-tenant-name').value;
    const copilotName = document.getElementById('brand-copilot-name').value;
    const bannerText = document.getElementById('brand-banner-text').value;

    const mockLabel = document.getElementById('preview-mock-tenant-label');
    const mockCopilotPill = document.getElementById('preview-mock-copilot-pill');
    const mockCopilotTitle = document.getElementById('preview-mock-copilot-title');
    const mockDisclosure = document.getElementById('preview-mock-disclosure');

    if (mockLabel) mockLabel.textContent = tenantName || 'Default Enclave';
    if (mockCopilotPill) mockCopilotPill.textContent = copilotName || 'Copilot';
    if (mockCopilotTitle) mockCopilotTitle.textContent = copilotName || 'Copilot';
    if (mockDisclosure) mockDisclosure.textContent = bannerText;
  }

  function updateColorPickers() {
    const primaryHex = document.getElementById('color-primary-input').value;
    const accentHex = document.getElementById('color-accent-input').value;

    const swatchPri = document.getElementById('swatch-primary');
    const swatchAcc = document.getElementById('swatch-accent');
    const mockHeader = document.getElementById('preview-mock-header');

    if (swatchPri) swatchPri.style.backgroundColor = primaryHex;
    if (swatchAcc) swatchAcc.style.backgroundColor = accentHex;
    if (mockHeader) mockHeader.style.backgroundColor = primaryHex;
  }

  function setSimState(state) {
    const buttons = ['sim-default', 'sim-switch', 'sim-audit', 'sim-brand', 'sim-isolated', 'sim-empty'];
    buttons.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = 'px-space-xs py-0.5 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all';
      }
    });

    const activeBtn = document.getElementById('sim-' + state);
    if (activeBtn) {
      activeBtn.className = 'px-space-xs py-0.5 rounded text-label-sm font-label-sm bg-primary text-on-primary font-bold transition-all';
    }

    const rosterList = document.getElementById('tenant-roster-list');
    const rosterEmpty = document.getElementById('tenant-roster-empty');

    if (state === 'empty') {
      if (rosterList) rosterList.classList.add('hidden');
      if (rosterEmpty) rosterEmpty.classList.remove('hidden');
    } else {
      if (rosterList) rosterList.classList.remove('hidden');
      if (rosterEmpty) rosterEmpty.classList.add('hidden');
    }

    if (state === 'switch') {
      triggerContextSwitchModal('TEN-US-1029', 'Northrop Grumman Cyber Systems');
    } else if (state === 'brand') {
      const brandPanel = document.getElementById('panel-branding');
      if (brandPanel) {
        brandPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        brandPanel.classList.add('ring-2', 'ring-primary');
        setTimeout(() => brandPanel.classList.remove('ring-2', 'ring-primary'), 1200);
      }
    } else if (state === 'isolated') {
      alert('SIMULATION TRIGGERED: Operator attempts cross-tenant query without token re-key. Boundary defense immediately returned HTTP 403 (Zero-Taint Enclave Boundary Enforced).');
    } else if (state === 'audit') {
      const opPanel = document.getElementById('panel-operators');
      if (opPanel) {
        opPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
