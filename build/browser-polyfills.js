// Replaces `next/dist/build/polyfills/polyfill-module`, which Next.js imports
// unconditionally from its client entry (`next/dist/client/app-globals`).
//
// That module shims Symbol.prototype.description, String.prototype.trimStart /
// trimEnd, Array.prototype.flat / flatMap / at, Promise.prototype.finally,
// Object.fromEntries, Object.hasOwn and URL.canParse. Every one of those except
// URL.canParse is already native in this project's build targets — Next's
// MODERN_BROWSERSLIST_TARGET of chrome 111, edge 111, firefox 111 and safari
// 16.4 — so shipping them costs bytes and parse time for no behaviour.
//
// URL.canParse is the exception: it landed in chrome 120, firefox 115 and
// safari 17, all above the target floor, so it is still needed.
//
// Keep this list in step with the upstream polyfill when Next.js is upgraded:
// anything added there that the target floor lacks must be added here too.
if (!("canParse" in URL)) {
  URL.canParse = function canParse(url, base) {
    try {
      return Boolean(new URL(url, base));
    } catch {
      return false;
    }
  };
}
