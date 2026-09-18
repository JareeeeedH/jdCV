/**
 * Minimal interactions for Jared Huang CV
 */
(function () {
  "use strict";

  // Smooth scroll for in-page anchors (if any are added later)
  document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof target.focus === "function") {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
})();
