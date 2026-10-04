// Eksportuje ikonę Tempo z options.html do icon-180.png i icon-512.png obok index.html.
// Użycie: node icons/render.mjs [wariant]   — domyślnie „glass” (klepsydra).
// Pozostałe warianty w options.html: orb, wedge, mono. Wymaga Playwright z Chromium.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url)), out = join(here, "..");
const variant = process.argv[2] || "glass";
const browser = await chromium.launch();
for (const size of [180, 512]) {
  const p = await browser.newPage({ viewport: { width: size, height: size } });
  await p.goto("file://" + join(here, "options.html") + "?solo=" + variant);
  await p.waitForTimeout(300);
  await p.screenshot({ path: join(out, `icon-${size}.png`), clip: { x: 0, y: 0, width: size, height: size } });
  await p.close();
}
await browser.close();
console.log("ikona:", variant);
