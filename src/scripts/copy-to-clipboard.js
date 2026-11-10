export function initCopyButtons() {
  document.addEventListener("click", function (e) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const button = target.closest("[data-copy-button]");
    if (!button) return;

    const codeContainer = button.closest(".code-container");
    const codeBlock = codeContainer ? codeContainer.querySelector("code") : null;
    if (!codeBlock) return;

    const text = codeBlock.textContent || "";
    navigator.clipboard.writeText(text).then(function () {
      const original = button.textContent;
      const isId = document.documentElement.lang === "id";
      button.textContent = isId ? "Tersalin!" : "Copied!";
      button.setAttribute("aria-live", "polite");
      setTimeout(function () {
        button.textContent = original;
      }, 1500);
    });
  });
}

