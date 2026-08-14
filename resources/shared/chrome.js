/* ==========================================================================
   Credo Legal - Resources section chrome
   Injects the standard site nav (with an added "Resources" dropdown) and the
   footer into every Resources page, so hand-authored and generated pages stay
   consistent. Depth-aware: a page declares how deep it sits so links resolve.

     <body data-res-depth="1" data-res-section="hub">      (resources/index.html)
     <body data-res-depth="2" data-res-section="blog">     (resources/blog/index.html)

   depth = number of dirs between the page and website-main/ root.
   Reuses shared/styles.css classes (.nav, .services-dropdown, footer-*).
   Replicates shared/nav.js dropdown behaviour so it works after injection.
   ========================================================================== */
(function () {
  var body = document.body;
  var depth = parseInt(body.getAttribute('data-res-depth') || '1', 10);
  var section = body.getAttribute('data-res-section') || '';
  var ROOT = new Array(depth + 1).join('../');        // → website-main/
  var RES = new Array(depth).join('../') || './';      // → resources/
  var LOGO = 'https://cdn.prod.website-files.com/6903ad8d7b4674d0123baecd/6903af5ee5e121af84994b38_Credo%20Logo%20Red.png';
  var PHONE = '+12124614026', PHONE_DISP = '(212) 461-4026';
  var chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
  var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>';
  function cur(s) { return s === section ? ' style="color: var(--credo-red);"' : ''; }

  var nav =
    '<header class="nav"><div class="container nav-inner">' +
      '<a href="' + ROOT + 'index.html" class="brand"><img class="brand-logo" src="' + LOGO + '" alt="Credo Legal"></a>' +
      '<nav class="nav-links">' +
        '<a href="' + ROOT + 'index.html#what">What we do</a>' +
        '<div class="services-dropdown"><button class="services-toggle" type="button" aria-haspopup="true" aria-expanded="false">Services ' + chev + '</button>' +
          '<div class="services-menu" role="menu">' +
            '<a href="' + ROOT + 'services/credit-card-debt.html">Credit-card debt</a>' +
            '<a href="' + ROOT + 'services/medical-bills.html">Medical bills</a>' +
            '<a href="' + ROOT + 'services/personal-payday-loans.html">Personal &amp; payday loans</a>' +
            '<a href="' + ROOT + 'services/collector-harassment.html">Collector harassment</a>' +
            '<a href="' + ROOT + 'services/lawsuits-summons.html">Lawsuits &amp; summons</a>' +
            '<a href="' + ROOT + 'services/wage-garnishment.html">Wage garnishment</a>' +
          '</div></div>' +
        '<a href="' + ROOT + 'index.html#rights">Your rights</a>' +
        '<div class="services-dropdown"><button class="services-toggle" type="button" aria-haspopup="true" aria-expanded="false">Resources ' + chev + '</button>' +
          '<div class="services-menu" role="menu">' +
            '<a href="' + RES + 'blog/index.html"' + cur('blog') + '>Blog <span class="menu-meta">guides &amp; explainers</span></a>' +
            '<a href="' + RES + 'laws/index.html"' + cur('laws') + '>Laws <span class="menu-meta">statutes we cite</span></a>' +
            '<a href="' + RES + 'faq/index.html"' + cur('faq') + '>FAQ <span class="menu-meta">common questions</span></a>' +
            '<a href="' + RES + 'templates/index.html"' + cur('templates') + '>Templates <span class="menu-meta">what to say</span></a>' +
            '<div class="services-menu-divider"></div>' +
            '<a href="' + RES + 'index.html"' + cur('hub') + '>All resources <span class="menu-meta">overview</span></a>' +
          '</div></div>' +
        '<a href="' + ROOT + 'index.html#about">About</a>' +
        '<a href="tel:' + PHONE + '" class="nav-cta">Get a Free Review</a>' +
      '</nav>' +
    '</div></header>';

  var footer =
    '<footer><div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand"><div class="brand"><img class="brand-logo" src="' + LOGO + '" alt="Credo Legal"></div>' +
          '<p class="footer-tagline">Consumer-debt defense law firm. Federal protections, our attorneys, flat-fee representation.</p></div>' +
        '<div class="footer-col"><h5>Resources</h5><ul>' +
          '<li><a href="' + RES + 'blog/index.html">Blog</a></li>' +
          '<li><a href="' + RES + 'laws/index.html">Laws</a></li>' +
          '<li><a href="' + RES + 'faq/index.html">FAQ</a></li>' +
          '<li><a href="' + RES + 'templates/index.html">Templates</a></li>' +
        '</ul></div>' +
        '<div class="footer-col"><h5>Services</h5><ul>' +
          '<li><a href="' + ROOT + 'services/credit-card-debt.html">Credit-card debt</a></li>' +
          '<li><a href="' + ROOT + 'services/medical-bills.html">Medical bills</a></li>' +
          '<li><a href="' + ROOT + 'services/collector-harassment.html">Collector harassment</a></li>' +
          '<li><a href="' + ROOT + 'services/lawsuits-summons.html">Lawsuits &amp; summons</a></li>' +
        '</ul></div>' +
        '<div class="footer-col"><h5>Company</h5><ul>' +
          '<li><a href="' + ROOT + 'index.html#about">About</a></li>' +
          '<li><a href="' + RES + 'faq/index.html">FAQ</a></li>' +
          '<li><a href="tel:' + PHONE + '">' + PHONE_DISP + '</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-meta"><div class="footer-disclaimer">' +
        '© 2026 Credo Legal. Attorney advertising. Prior results do not guarantee a similar outcome. The information on this site is general in nature and not a substitute for legal advice; engaging Credo Legal does not establish an attorney-client relationship until a representation agreement is signed.' +
      '</div><div>NY · GA · 50 states served</div></div>' +
    '</div></footer>';

  // Inject: nav at top of <body>, footer before the first trailing <script>/end.
  body.insertAdjacentHTML('afterbegin', nav);
  var host = document.getElementById('site-footer');
  if (host) host.outerHTML = footer; else body.insertAdjacentHTML('beforeend', footer);

  // Dropdown behaviour (ported from shared/nav.js).
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll('.services-dropdown'));
  dropdowns.forEach(function (dd) {
    var toggle = dd.querySelector('.services-toggle');
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.getAttribute('data-open') === 'true';
      dropdowns.forEach(function (o) { o.setAttribute('data-open', 'false'); o.querySelector('.services-toggle').setAttribute('aria-expanded', 'false'); });
      dd.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', function (e) {
    var inside = false;
    dropdowns.forEach(function (dd) { if (dd.contains(e.target)) inside = true; });
    if (!inside) dropdowns.forEach(function (dd) { dd.setAttribute('data-open', 'false'); dd.querySelector('.services-toggle').setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') dropdowns.forEach(function (dd) { dd.setAttribute('data-open', 'false'); dd.querySelector('.services-toggle').setAttribute('aria-expanded', 'false'); });
  });

  // Review / commenting widget — one shared copy at website-main/shared/review/.
  // CREDO_REVIEW_BASE makes the depth-safe bootstrap load its engine from there;
  // config then bootstrap are injected in order (async=false).
  window.CREDO_REVIEW_BASE = ROOT + 'shared/review/';
  ['review.config.js', 'review-bootstrap.js'].forEach(function (f) {
    var s = document.createElement('script'); s.src = ROOT + 'shared/review/' + f; s.async = false; document.body.appendChild(s);
  });
})();
