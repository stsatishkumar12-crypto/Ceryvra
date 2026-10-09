// Original page script from Change-Detection-page.html (kept as-is for the clickable prototype).
// Exported to window so inline handlers in the markup can call them: (none)
// Dynamic Workspace Micro-interactions
  (function initChangeDetectionWorkspace() {
    const feedContainer = document.getElementById('change-feed-container');
    const inspectorPanel = document.getElementById('inspector-panel');
    const feedList = document.getElementById('feed-list');
    const zeroState = document.getElementById('zero-state-container');
    const skeletonContainer = document.getElementById('skeleton-container');
    
    // View Switcher Tabs
    const tabActive = document.getElementById('view-active');
    const tabDrawer = document.getElementById('view-drawer');
    const tabZero = document.getElementById('view-zero');
    const tabSkeleton = document.getElementById('view-skeleton');
    const allTabs = [tabActive, tabDrawer, tabZero, tabSkeleton];

    function setTabActive(activeTab) {
      allTabs.forEach(t => {
        t.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
        t.classList.add('text-on-surface-variant');
      });
      activeTab.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
      activeTab.classList.remove('text-on-surface-variant');
    }

    // Tab 1: Default View
    tabActive?.addEventListener('click', () => {
      setTabActive(tabActive);
      zeroState.classList.add('hidden');
      zeroState.classList.remove('flex');
      skeletonContainer.classList.add('hidden');
      skeletonContainer.classList.remove('flex');
      feedList.classList.remove('hidden');
      inspectorPanel.classList.remove('hidden');
      feedContainer.className = 'col-span-12 xl:col-span-7 flex flex-col gap-space-sm transition-all duration-300';
    });

    // Tab 2: Side Drawer Open / Expanded Inspector
    tabDrawer?.addEventListener('click', () => {
      setTabActive(tabDrawer);
      zeroState.classList.add('hidden');
      zeroState.classList.remove('flex');
      skeletonContainer.classList.add('hidden');
      skeletonContainer.classList.remove('flex');
      feedList.classList.remove('hidden');
      inspectorPanel.classList.remove('hidden');
      feedContainer.className = 'col-span-12 xl:col-span-7 flex flex-col gap-space-sm transition-all duration-300';
      inspectorPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Tab 3: Zero Changes / All Clear State
    tabZero?.addEventListener('click', () => {
      setTabActive(tabZero);
      feedList.classList.add('hidden');
      skeletonContainer.classList.add('hidden');
      skeletonContainer.classList.remove('flex');
      inspectorPanel.classList.add('hidden');
      zeroState.classList.remove('hidden');
      zeroState.classList.add('flex');
      feedContainer.className = 'col-span-12 flex flex-col gap-space-sm transition-all duration-300';
    });

    // Tab 4: Scan Running / Skeleton
    tabSkeleton?.addEventListener('click', () => {
      setTabActive(tabSkeleton);
      feedList.classList.add('hidden');
      zeroState.classList.add('hidden');
      zeroState.classList.remove('flex');
      skeletonContainer.classList.remove('hidden');
      skeletonContainer.classList.add('flex');
      inspectorPanel.classList.remove('hidden');
      feedContainer.className = 'col-span-12 xl:col-span-7 flex flex-col gap-space-sm transition-all duration-300';
    });

    document.getElementById('btn-reset-zero')?.addEventListener('click', () => {
      tabActive.click();
    });

    // Close Inspector button toggle
    document.getElementById('btn-close-inspector')?.addEventListener('click', () => {
      inspectorPanel.classList.add('hidden');
      feedContainer.className = 'col-span-12 flex flex-col gap-space-sm transition-all duration-300';
    });

    // Re-open Inspector when clicking on "Review Change & Open Diff" or "Inspect Telemetry"
    document.querySelectorAll('.btn-inspect-diff').forEach(btn => {
      btn.addEventListener('click', () => {
        inspectorPanel.classList.remove('hidden');
        feedContainer.className = 'col-span-12 xl:col-span-7 flex flex-col gap-space-sm transition-all duration-300';
        setTabActive(tabDrawer);
      });
    });

    // Materiality Filter Behavior
    const filterMateriality = document.getElementById('filter-materiality');
    const searchInput = document.getElementById('search-events');
    const cards = document.querySelectorAll('.change-card');

    function applyFilters() {
      const selectedMat = filterMateriality.value;
      const searchVal = (searchInput.value || '').toLowerCase().trim();

      cards.forEach(card => {
        const mat = card.getAttribute('data-materiality');
        const text = card.textContent.toLowerCase();
        
        let matchesMat = (selectedMat === 'ALL') || (mat === selectedMat);
        let matchesSearch = !searchVal || text.includes(searchVal);

        if (matchesMat && matchesSearch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    filterMateriality?.addEventListener('change', applyFilters);
    searchInput?.addEventListener('input', applyFilters);

    // Clear Filters
    document.getElementById('btn-clear-filters')?.addEventListener('click', () => {
      filterMateriality.value = 'ALL';
      searchInput.value = '';
      applyFilters();
    });

    // Batch Triage Button Notification Demo
    const btnBatch = document.getElementById('btn-batch-triage');
    btnBatch?.addEventListener('click', () => {
      const originalText = btnBatch.innerHTML;
      btnBatch.innerHTML = '<span class="material-symbols-outlined text-[18px] text-tertiary">done_all</span><span>9 Non-Material Auto-Archived</span>';
      setTimeout(() => {
        btnBatch.innerHTML = originalText;
      }, 3000);
    });

    // Diff Scan Button Demo
    const btnScan = document.getElementById('btn-diff-scan');
    btnScan?.addEventListener('click', () => {
      tabSkeleton.click();
      setTimeout(() => {
        tabActive.click();
      }, 1500);
    });
  })();
