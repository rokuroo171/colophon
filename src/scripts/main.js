import { initMobileMenu } from "./mobile-menu.js";
import { initCopyButtons } from "./copy-to-clipboard.js";
import { initInstallTabs } from "./install-tabs.js";

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initCopyButtons();
  initInstallTabs();
});

