// Składa samodzielną wersję Tempo (index.html) z pliku artefaktu (tempo.html).
// tempo.html to treść publikowana jako artefakt Claude — bez <head>, bo szkielet dokleja platforma.
// index.html to pełny dokument z metatagami iOS, gotowy do hostowania (np. GitHub Pages)
// i dodania do ekranu początkowego. Użycie: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, "tempo.html"), "utf8");

// Tytuł i linki do fontów idą do <head>; reszta zostaje w <body>.
const cut = src.indexOf("<style>");
const headBits = src.slice(0, cut).trim();
const body = src.slice(cut);

const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Tempo">
<meta name="theme-color" content="#0D0B14">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" type="image/png" sizes="512x512" href="icon-512.png">
${headBits}
<style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;
writeFileSync(join(here, "index.html"), html);
console.log("index.html:", html.length, "bajtów");
