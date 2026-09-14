import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// Next.js imports its own `polyfill-module` from the client entry
// (`next/dist/client/app-globals`) on every build, whatever the target. All but
// one of the features it shims are native in this project's supported browsers,
// so build/browser-polyfills.js replaces it with just the remaining shim.
//
// The swap is only sound for the upstream file we reviewed. Pin its hash: if a
// Next.js upgrade changes the polyfill set, fall back to Next's own module and
// warn, so an unreviewed change costs a few hundred bytes rather than breaking
// a browser we still support. Re-review build/browser-polyfills.js, then update
// REVIEWED_POLYFILL_SHA256 to the value the warning prints.
const REVIEWED_POLYFILL_SHA256 = "94c8008b70e41ac5b0360fd6f35ea7a59c20c6927aca7731ef8c6a3c26b9cddf";
const UPSTREAM_POLYFILL = "next/dist/build/polyfills/polyfill-module.js";
const nextPolyfillModule = /[\\/]build[\\/]polyfills[\\/]polyfill-module(\.js)?$/;
const modernPolyfills = path.resolve("build/browser-polyfills.js");

function upstreamPolyfillIsReviewed() {
  try {
    const source = readFileSync(require.resolve(UPSTREAM_POLYFILL));
    const digest = createHash("sha256").update(source).digest("hex");
    if (digest === REVIEWED_POLYFILL_SHA256) return true;
    console.warn(
      `[imc] ${UPSTREAM_POLYFILL} changed (sha256 ${digest}); keeping Next.js's own polyfill. ` +
        "Re-review build/browser-polyfills.js and update REVIEWED_POLYFILL_SHA256 in next.config.ts.",
    );
  } catch (error) {
    console.warn(`[imc] Could not read ${UPSTREAM_POLYFILL}; keeping Next.js's own polyfill.`, error);
  }
  return false;
}

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  // Applies to `npm run build`, which pins webpack. `next dev` uses Turbopack
  // and keeps Next's full polyfill; the production export is what ships.
  webpack: (webpackConfig, { webpack, isServer }) => {
    if (!isServer && upstreamPolyfillIsReviewed()) {
      webpackConfig.plugins.push(
        new webpack.NormalModuleReplacementPlugin(nextPolyfillModule, modernPolyfills),
      );
    }
    return webpackConfig;
  },
};
export default config;
