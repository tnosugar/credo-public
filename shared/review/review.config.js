/* Credo Legal - website-main review widget config.
 *
 * Comments persist to the shared Credo review Firebase Realtime Database
 * (project credo-712c4), the same one used by the harassment-LP and Meta-ads
 * surfaces. The page-slug rule in review-mode.js derives a per-page bucket from
 * the URL pathname, so website-main comments live under their own
 * `/comments/{pushId}` records (page field = the page's path slug) and never
 * collide with the other surfaces' comments.
 *
 * Every website-main page loads review-bootstrap.js (directly for the top-level
 * pages, injected by shared/chrome.js for the Resources pages), so the floating
 * "Comments" button appears everywhere. Reviewers click it -> ?review=1 -> the
 * widget loads on that page.
 */
window.CREDO_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCQvyKmdjRlIBcRW8CbC73Ew9o5uFp9jt0",
    authDomain: "credo-712c4.firebaseapp.com",
    databaseURL: "https://credo-712c4-default-rtdb.firebaseio.com",
    projectId: "credo-712c4",
    storageBucket: "credo-712c4.firebasestorage.app",
    messagingSenderId: "494337801532",
    appId: "1:494337801532:web:298e363efe2ed11807f239"
  },
  REVIEW_LABELS: {
    toggleButton: "Comments",
    toggleButtonTitle: "Open comment review mode",
    bannerTitle: "Review mode · Credo website",
    localOnly: "Local-only - add Firebase config for shared comments",
    exit: "Exit review",
    sidebarTitle: "Comments",
    empty: "No comments on this page yet. Hover any line of text and click the + to add one.",
    add: "+ Comment",
    save: "Post comment",
    cancel: "Cancel",
    edit: "Edit",
    del: "Delete",
    resolve: "Resolve",
    reopen: "Reopen",
    tabOpen: "Open",
    tabResolved: "Resolved",
    resolvePrompt: "Resolution note (what was done):",
    placeholder: "Your feedback…",
    replacementPlaceholder: "Suggested change (optional)…",
    namePrompt: "Your name (so the team knows who left this comment):"
  }
};
