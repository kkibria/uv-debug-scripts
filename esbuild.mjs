import { build } from "esbuild";

await build({
  entryPoints: ["src/extension.ts"],
  outfile: "dist/extension.js",
  bundle: true,
  platform: "node",
  format: "cjs",
  sourcemap: true,
  external: ["vscode"], // VS Code provides this at runtime
  target: ["node18"],   // safe baseline for modern VS Code
});

console.log("Bundled to dist/extension.js");