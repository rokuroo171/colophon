export function initInstallTabs() {
  const tabButtons = document.querySelectorAll("[data-install-tab]");
  if (!tabButtons.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const index = button.getAttribute("data-install-tab");

      tabButtons.forEach(function (btn) {
        const isActive = btn.getAttribute("data-install-tab") === index;
        btn.setAttribute("aria-selected", String(isActive));
        btn.classList.toggle("border-b-2", isActive);
        btn.classList.toggle("border-terracotta", isActive);
        btn.classList.toggle("text-ink", isActive);
      });

      document.querySelectorAll("[data-install-panel]").forEach(function (panel) {
        const isActive = panel.getAttribute("data-install-panel") === index;
        panel.classList.toggle("hidden", !isActive);
      });
    });

    button.addEventListener("keydown", function (e) {
      const tabs = Array.from(tabButtons);
      const currentIndex = tabs.indexOf(button);
      let nextIndex = -1;

      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }

      if (nextIndex >= 0) {
        e.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  });
}

