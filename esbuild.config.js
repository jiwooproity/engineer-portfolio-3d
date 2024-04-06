import { build } from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

build({
  entryPoints: ["./src/main.tsx"],
  bundle: true,
  //   outfile: "./build/bundle.js",
  outdir: "./build",
  platform: "browser",
  loader: {
    ".js": "jsx",
    ".ts": "tsx",
  },
  minify: true,
  metafile: true,
  external: ["/images/*"],
  define: {
    "import.meta.env.DEV": true,
  },
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ["./src/main.tsx"],
          filename: "index.html",
          htmlTemplate: `<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/logo/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="프론트엔드 개발자 소지우입니다." />
          <script type="module" defer src="./main.js"></script>
          <link rel="stylesheet" type="text/css" href="./main.css" />
          <title>FE Developer | Jiwoo.So</title>
          </head>
          <body>
          <div id="root"></div>
          </body>
          </html>`,
        },
      ],
    }),
  ],
});
