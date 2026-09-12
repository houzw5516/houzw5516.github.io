// Hugo 0.162's CLI resolver reads the first path in a package-manager shim.
// pnpm's NODE_PATH preamble can be mistaken for the entry point. Use a minimal
// shim for this one CLI; the package and its locked dependencies stay unchanged.
const fs = require('node:fs');
const path = require('node:path');
const bin = path.join(__dirname, '..', 'node_modules', '.bin');
fs.mkdirSync(bin, { recursive: true });
fs.writeFileSync(path.join(bin, 'tailwindcss'), '#!/usr/bin/env node\nimport("../@tailwindcss/cli/dist/index.mjs");\n', { mode: 0o755 });
if (process.platform === 'win32') {
  fs.writeFileSync(path.join(bin, 'tailwindcss.cmd'), '@echo off\r\nnode "%~dp0\\..\\@tailwindcss\\cli\\dist\\index.mjs" %*\r\n');
}
