/* review-bootstrap.js - inert-by-default loader for the review widget.
 * No ?review=1  -> only a floating entry button (no widget chrome, no backend).
 * ?review=1     -> sets data-review-mode=on, loads review-mode.css + review-mode.js.
 *
 * website-main variant: the engine files (review-mode.css/js) are loaded relative
 * to THIS script's own location (via window.CREDO_REVIEW_BASE, set by chrome.js on
 * injected pages, or document.currentScript for pages that hard-code the tag), so
 * one shared copy works at any page depth.
 */
(function () {
  var THIS = document.currentScript;
  var BASE = window.CREDO_REVIEW_BASE ||
    (THIS && THIS.src ? THIS.src.replace(/[^/]+$/, '') : '');
  var cfg = window.CREDO_REVIEW_CONFIG || {};
  var L = cfg.REVIEW_LABELS || {};
  var active = new URLSearchParams(window.location.search).get('review') === '1';

  if (!active) {
    var inject = function () {
      if (document.querySelector('.review-toggle-btn')) return;
      var st = document.createElement('style');
      st.textContent = '.review-toggle-btn{position:fixed;bottom:20px;right:20px;z-index:9990;background:#DC4646;color:#fff;border:none;padding:12px 20px;border-radius:999px;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:.04em;box-shadow:0 4px 14px rgba(31,32,36,.18);transition:transform .15s,box-shadow .15s,background .15s;display:inline-flex;align-items:center;gap:8px}.review-toggle-btn:hover{transform:translateY(-1px);background:#b23a3a;box-shadow:0 6px 20px rgba(31,32,36,.22)}.review-toggle-btn:active{transform:translateY(0)}.review-toggle-btn::before{content:"\\1F4AC";font-size:14px;line-height:1}@media print{.review-toggle-btn{display:none}}';
      document.head.appendChild(st);
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'review-toggle-btn'; b.setAttribute('data-review-skip', '');
      b.title = L.toggleButtonTitle || 'Open comment review mode';
      b.textContent = L.toggleButton || 'Comments';
      b.addEventListener('click', function () {
        var u = new URL(window.location.href); u.searchParams.set('review', '1'); window.location.href = u.toString();
      });
      document.body.appendChild(b);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject); else inject();
    return;
  }

  document.documentElement.setAttribute('data-review-mode', 'on');
  var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = BASE + 'review-mode.css'; document.head.appendChild(css);
  var js = document.createElement('script'); js.src = BASE + 'review-mode.js'; document.body.appendChild(js);
})();
