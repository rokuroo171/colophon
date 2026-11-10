export const data = {
  layout: "layouts/base.11ty.js"
};

export function render(data) {
  const { lang, kind, status, version, title, tagline, download, repo, content, features, installTabs, changelog } = data;
  const isId = lang === "id";

  const kindLabel =
    kind === "desktop"
      ? (isId ? "Aplikasi Desktop" : "Desktop App")
      : kind === "service"
      ? (isId ? "Layanan" : "Service")
      : (isId ? "Perkakas" : "Tool");

  const statusClass =
    status === "stable"
      ? "bg-forest/10 text-forest"
      : status === "beta"
      ? "bg-terracotta/10 text-terracotta"
      : "bg-sand text-stone";

  const statusLabel =
    status === "stable"
      ? (isId ? "Stabil" : "Stable")
      : status === "beta"
      ? "Beta"
      : "Alpha";

  const featuresHtml = features && features.length
    ? `
    <section class="mb-16" aria-labelledby="features-heading">
      <h2 id="features-heading" class="font-heading text-2xl font-semibold text-ink mb-8">
        ${isId ? "Fitur" : "Features"}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${features
          .map(
            (f) => `
          <div class="p-6 bg-card border border-line rounded-lg">
            <h3 class="font-heading text-lg font-semibold text-ink mb-2">${f.title}</h3>
            <p class="text-sm text-stone leading-relaxed">${f.description}</p>
          </div>`
          )
          .join("")}
      </div>
    </section>`
    : "";

  const installTabsHtml = installTabs && installTabs.length
    ? `
    <section class="mb-16" aria-labelledby="install-heading">
      <h2 id="install-heading" class="font-heading text-2xl font-semibold text-ink mb-6">
        ${isId ? "Instalasi" : "Install"}
      </h2>
      <div class="bg-card border border-line rounded-lg overflow-hidden">
        <div class="flex border-b border-line" role="tablist" aria-label="${isId ? "Platform instalasi" : "Install platform"}">
          ${installTabs
            .map(
              (tab, idx) => `
            <button
              role="tab"
              type="button"
              id="tab-${idx + 1}"
              aria-selected="${idx === 0 ? "true" : "false"}"
              aria-controls="tabpanel-${idx + 1}"
              class="px-4 py-3 text-sm font-mono text-stone hover:text-ink transition-colors duration-200 ${idx === 0 ? "border-b-2 border-terracotta text-ink font-semibold" : ""}"
              data-install-tab="${idx + 1}"
            >
              ${tab.label}
            </button>`
            )
            .join("")}
        </div>
        ${installTabs
          .map(
            (tab, idx) => `
          <div
            role="tabpanel"
            id="tabpanel-${idx + 1}"
            aria-labelledby="tab-${idx + 1}"
            class="p-4 ${idx !== 0 ? "hidden" : ""}"
            data-install-panel="${idx + 1}"
          >
            <div class="relative">
              <pre class="bg-sand rounded p-4 overflow-x-auto text-sm font-mono text-ink"><code>${tab.code}</code></pre>
              <button
                type="button"
                class="absolute top-2 right-2 px-2.5 py-1 text-xs font-mono text-stone bg-card border border-line rounded hover:text-ink hover:border-stone transition-colors duration-200"
                data-copy-button
                aria-label="${isId ? "Salin perintah" : "Copy command"}"
              >
                ${isId ? "Salin" : "Copy"}
              </button>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </section>`
    : "";

  const changelogHtml = changelog && changelog.length
    ? `
    <section class="mb-16" aria-labelledby="changelog-heading">
      <h2 id="changelog-heading" class="font-heading text-2xl font-semibold text-ink mb-6">
        ${isId ? "Perubahan terbaru" : "Recent changes"}
      </h2>
      <ul class="space-y-4 list-none m-0 p-0">
        ${changelog
          .map(
            (item) => `
          <li class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-4 border-b border-line last:border-b-0">
            <span class="text-xs font-mono text-stone whitespace-nowrap">v${item.version} &middot; ${item.date}</span>
            <span class="text-sm text-ink">${item.summary}</span>
          </li>`
          )
          .join("")}
      </ul>
    </section>`
    : "";

  return `
<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
  <header class="mb-12">
    <div class="flex flex-wrap items-center gap-3 mb-4">
      <span class="inline-block px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide uppercase rounded bg-sand text-stone">
        ${kindLabel}
      </span>
      <span class="inline-block px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide rounded ${statusClass}">
        ${statusLabel} &middot; v${version}
      </span>
    </div>

    <h1 class="font-heading text-4xl sm:text-5xl font-semibold text-ink mb-4">${title}</h1>
    <p class="text-xl text-stone leading-relaxed max-w-2xl">${tagline}</p>

    <div class="flex flex-wrap gap-3 mt-8">
      ${download ? `
        <a href="${download}" class="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-white font-body text-sm font-medium rounded no-underline hover:bg-terracotta/90 transition-colors duration-200">
          ${isId ? "Unduh" : "Download"}
        </a>` : ""}
      ${repo ? `
        <a href="${repo}" class="inline-flex items-center gap-2 px-5 py-2.5 border border-line text-ink font-body text-sm font-medium rounded no-underline hover:border-stone transition-colors duration-200" rel="noopener noreferrer" target="_blank">
          ${isId ? "Lihat repo" : "View repo"}
        </a>` : ""}
    </div>
  </header>

  ${content && content.trim() ? `
    <section class="prose max-w-none mb-16 text-stone leading-relaxed" aria-label="${isId ? "Deskripsi" : "Description"}">
      ${content}
    </section>` : ""}

  ${featuresHtml}
  ${installTabsHtml}
  ${changelogHtml}
</article>`;
}

