export function renderFooter(data) {
  const { lang, page, site } = data;
  const isId = lang === "id";
  const prefix = isId ? "/id" : "";
  const currentUrl = page.url || "/";
  const cleanEnUrl = currentUrl.replace(/^\/id(\/|$)/, "/") || "/";
  const cleanIdUrl = cleanEnUrl === "/" ? "/id/" : `/id${cleanEnUrl}`;

  return `
<footer class="border-t border-line bg-card mt-auto" role="contentinfo">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <p class="font-heading text-lg font-semibold text-ink mb-3">${site.name}</p>
        <p class="text-sm text-stone leading-relaxed">
          ${isId ? site.descriptionId : site.description}
        </p>
      </div>

      <div>
        <p class="text-sm font-semibold text-ink mb-3 uppercase tracking-wide">${isId ? "Navigasi" : "Navigation"}</p>
        <ul class="list-none m-0 p-0 space-y-2 text-sm">
          <li><a href="${prefix}/releases/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Rilis" : "Releases"}</a></li>
          <li><a href="${prefix}/docs/install/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Dokumentasi" : "Docs"}</a></li>
          <li><a href="${prefix}/blog/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">Blog</a></li>
          <li><a href="${prefix}/roadmap/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Peta Jalan" : "Roadmap"}</a></li>
          <li><a href="${prefix}/support/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Dukungan" : "Support"}</a></li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-ink mb-3 uppercase tracking-wide">${isId ? "Lainnya" : "More"}</p>
        <ul class="list-none m-0 p-0 space-y-2 text-sm">
          <li><a href="${prefix}/vision/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Visi" : "Vision"}</a></li>
          <li><a href="${prefix}/contact/" class="text-stone no-underline hover:text-terracotta transition-colors duration-200">${isId ? "Kontak" : "Contact"}</a></li>
          <li><a href="${site.repo}" class="text-stone no-underline hover:text-terracotta transition-colors duration-200" rel="noopener noreferrer" target="_blank">GitHub</a></li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-ink mb-3 uppercase tracking-wide">${isId ? "Bahasa" : "Language"}</p>
        <ul class="list-none m-0 p-0 space-y-2 text-sm">
          <li><a href="${cleanEnUrl}" class="text-stone no-underline hover:text-terracotta transition-colors duration-200 ${!isId ? "font-semibold text-ink" : ""}" lang="en">English</a></li>
          <li><a href="${cleanIdUrl}" class="text-stone no-underline hover:text-terracotta transition-colors duration-200 ${isId ? "font-semibold text-ink" : ""}" lang="id">Bahasa Indonesia</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-line mt-8 pt-6 text-center text-xs text-stone">
      <p>${isId ? "Dirilis di bawah lisensi sumber terbuka." : "Released under open-source licenses."}</p>
    </div>
  </div>
</footer>
  `;
}

