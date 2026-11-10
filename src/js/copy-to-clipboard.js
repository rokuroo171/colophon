export function initCopyButtons() {
  document.addEventListener("click", function (e) {
    const button = e.target.closest("[data-copy-button]");
    if (!button) return;

    const codeBlock = button.closest(".relative")?.querySelector("code");
    if (!codeBlock) return;

    const text = codeBlock.textContent || "";
    navigator.clipboard.writeText(text).then(function () {
      const original = button.textContent;
      button.textContent = button.closest("[lang='id']") ? "Tersalin!" : "Copied!";
      button.setAttribute("aria-live", "polite");
      setTimeout(function () {
        button.textContent = original;
      }, 1500);
    });
  });
}

