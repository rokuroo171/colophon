import { renderHeader } from "../partials/header.js";
import { renderFooter } from "../partials/footer.js";

export function render(data) {
  const { lang, pageTitle, pageDescription, site, page, content } = data;
  const isId = lang === "id";
  const currentUrl = page.url || "/";
  const cleanEnUrl = currentUrl.replace(/^\/id(\/|$)/, "/") || "/";
  const cleanIdUrl = cleanEnUrl === "/" ? "/id/" : `/id${cleanEnUrl}`;
  const title = pageTitle ? `${pageTitle} | ${site.name}` : site.name;
  const description = pageDescription || (isId ? site.descriptionId : site.description);

  return `<!DOCTYPE html>
<html lang="${lang || "en"}" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">

  <link rel="alternate" hreflang="en" href="${site.url}${cleanEnUrl}">
  <link rel="alternate" hreflang="id" href="${site.url}${cleanIdUrl}">
  <link rel="alternate" hreflang="x-default" href="${site.url}${cleanEnUrl}">

  <link rel="stylesheet" href="/css/main.css">
  <link rel="icon" href="/assets/icon.png" type="image/png">
</head>
<body class="min-h-screen flex flex-col bg-paper text-ink font-body">
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-terracotta focus:text-white focus:rounded focus:font-body focus:text-sm">
    ${isId ? "Langsung ke konten" : "Skip to content"}
  </a>

  ${renderHeader(data)}

  <main id="main-content" class="flex-1">
    ${content}
  </main>

  ${renderFooter(data)}

  <script type="module" src="/js/main.js"></script>
</body>
</html>`;
}

