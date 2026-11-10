export function initInstallTabs() {
  const tabContainers = document.querySelectorAll("[data-tabs-container]");
  if (!tabContainers.length) return;

  tabContainers.forEach(function (container) {
    const tabButtons = container.querySelectorAll("[data-install-tab]");
    const panels = container.querySelectorAll("[data-install-panel]");
    if (!tabButtons.length || !panels.length) return;

    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const index = button.getAttribute("data-install-tab");

        tabButtons.forEach(function (btn) {
          const isActive = btn.getAttribute("data-install-tab") === index;
          btn.setAttribute("aria-selected", String(isActive));
          btn.classList.toggle("border-b-2", isActive);
          btn.classList.toggle("border-terracotta", isActive);
          btn.classList.toggle("text-ink", isActive);
          btn.classList.toggle("font-semibold", isActive);
        });

        panels.forEach(function (panel) {
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
          const target = tabs[nextIndex];
          if (target instanceof HTMLElement) {
            target.focus();
            target.click();
          }
        }
      });
    });
  });
}

