// Original page script from Consequence-Graph-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: switchState, toggleLegend, selectNode
// Interactive Simulation State Controller
  function switchState(state) {
    const states = ['active', 'inspector', 'containment', 'loading', 'empty', 'error'];
    
    // Update button states
    states.forEach(s => {
      const btn = document.getElementById('btn-state-' + s);
      if (btn) {
        if (s === state) {
          btn.className = 'px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-primary text-on-primary transition-all';
        } else {
          btn.className = 'px-space-sm py-0.5 rounded text-label-sm font-label-sm bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all';
        }
      }
    });

    // Content container visibility
    const activeCanvas = document.getElementById('view-active-canvas');
    const loadingView = document.getElementById('view-loading');
    const emptyView = document.getElementById('view-empty');
    const errorView = document.getElementById('view-error');
    const canvasCol = document.getElementById('canvas-column');
    const inspectorCol = document.getElementById('inspector-column');

    activeCanvas.classList.add('hidden');
    loadingView.classList.add('hidden');
    emptyView.classList.add('hidden');
    errorView.classList.add('hidden');

    if (state === 'active') {
      activeCanvas.classList.remove('hidden');
      canvasCol.className = 'col-span-12 xl:col-span-8 flex flex-col relative bg-surface-container-lowest rounded-2xl shadow-sm min-h-[720px] overflow-hidden select-none';
      inspectorCol.classList.remove('hidden');
    } else if (state === 'inspector') {
      activeCanvas.classList.remove('hidden');
      canvasCol.className = 'col-span-12 xl:col-span-7 flex flex-col relative bg-surface-container-lowest rounded-2xl shadow-sm min-h-[720px] overflow-hidden select-none';
      inspectorCol.className = 'col-span-12 xl:col-span-5 flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm p-space-md min-h-[720px] justify-between';
      inspectorCol.classList.remove('hidden');
    } else if (state === 'containment') {
      activeCanvas.classList.remove('hidden');
      canvasCol.className = 'col-span-12 flex flex-col relative bg-surface-container-lowest rounded-2xl shadow-sm min-h-[720px] overflow-hidden select-none';
      inspectorCol.classList.add('hidden');
    } else if (state === 'loading') {
      loadingView.classList.remove('hidden');
      loadingView.classList.add('flex');
    } else if (state === 'empty') {
      emptyView.classList.remove('hidden');
      emptyView.classList.add('flex');
    } else if (state === 'error') {
      errorView.classList.remove('hidden');
      errorView.classList.add('flex');
    }
  }

  // Toggle Legend panel
  function toggleLegend() {
    const legend = document.getElementById('graph-legend-box');
    if (legend.classList.contains('hidden')) {
      legend.classList.remove('hidden');
    } else {
      legend.classList.add('hidden');
    }
  }

  // Node Selection micro-interaction
  function selectNode(nodeId) {
    // Highlight selected node visual feedback
    const activeHalo = document.getElementById('node-DEC-14820');
    if (nodeId === 'DEC-14820') {
      if (activeHalo) activeHalo.classList.add('ring-2', 'ring-primary');
    }
  }
