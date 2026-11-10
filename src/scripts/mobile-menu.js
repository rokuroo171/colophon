export function initMobileMenu() {
  const toggle = document.querySelector("[data-mobile-menu-toggle]");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("hidden");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.classList.contains("hidden")) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.add("hidden");
      toggle.focus();
    }
  });
}

