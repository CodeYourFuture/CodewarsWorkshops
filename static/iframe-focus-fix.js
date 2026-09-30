// When a codelab is embedded in an iframe (e.g. on the CYF curriculum site),
// codelab-elements.js focuses the current step on load. Focusing an element
// inside an iframe scrolls the parent page to the iframe, losing the reader's
// place. Force preventScroll on every focus() call, only when embedded.
// Must load before codelab-elements.js.
(function () {
  if (window.self === window.top) return;
  var originalFocus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function (options) {
    var opts = Object.assign({}, options, { preventScroll: true });
    return originalFocus.call(this, opts);
  };
})();
