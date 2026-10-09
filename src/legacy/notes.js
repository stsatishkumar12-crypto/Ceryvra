// Original page script from Notes-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: setScenario
function setScenario(scenario) {
    const views = {
      workspace: document.getElementById('view-workspace'),
      empty: document.getElementById('view-empty'),
      loading: document.getElementById('view-loading'),
      denied: document.getElementById('view-denied')
    };

    const buttons = {
      workspace: document.getElementById('btn-scenario-workspace'),
      empty: document.getElementById('btn-scenario-empty'),
      loading: document.getElementById('btn-scenario-loading'),
      denied: document.getElementById('btn-scenario-denied')
    };

    // Hide all views
    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.add('hidden');
        if (key === 'workspace' || key === 'loading') {
          views[key].classList.remove('grid');
        } else {
          views[key].classList.remove('flex');
        }
      }
      if (buttons[key]) {
        buttons[key].className = 'px-2.5 py-1 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all flex items-center gap-1';
      }
    });

    // Show selected view
    if (views[scenario]) {
      views[scenario].classList.remove('hidden');
      if (scenario === 'workspace' || scenario === 'loading') {
        views[scenario].classList.add('grid');
      } else {
        views[scenario].classList.add('flex');
      }
    }

    if (buttons[scenario]) {
      buttons[scenario].className = 'px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary font-semibold shadow-sm transition-all flex items-center gap-1';
    }
  }
