/* ==========================================================================
   Credo Legal | Redesign Prototype | Nav Dropdowns
   --------------------------------------------------------------------------
   Generic dropdown handling for any element with class="services-dropdown".
   Each must contain a .services-toggle button. Click to toggle, click outside
   or press Escape to close. Opening one dropdown closes the others.
   ========================================================================== */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const dropdowns = document.querySelectorAll('.services-dropdown');
    if (!dropdowns.length) return;

    function closeAll(except) {
      dropdowns.forEach(dd => {
        if (dd === except) return;
        dd.dataset.open = 'false';
        const t = dd.querySelector('.services-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }

    dropdowns.forEach(dd => {
      const toggle = dd.querySelector('.services-toggle');
      if (!toggle) return;
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dd.dataset.open === 'true';
        closeAll(dd);
        dd.dataset.open = String(!isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    });

    document.addEventListener('click', (e) => {
      let inside = false;
      dropdowns.forEach(dd => { if (dd.contains(e.target)) inside = true; });
      if (!inside) closeAll();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    });
  }
})();
