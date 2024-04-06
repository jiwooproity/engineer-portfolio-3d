import { build } from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";
import { copy } from "esbuild-plugin-copy";

build({
  entryPoints: ["./src/main.tsx"],
  bundle: true,
  //   outfile: "./build/bundle.js",
  outdir: "./dist",
  platform: "browser",
  // jsx, tsx를 js와 ts로 구별
  loader: {
    ".js": "jsx",
    ".ts": "tsx",
  },
  minify: true, // 번들 파일 축소
  metafile: true, // meta 파일 활성화
  external: ["/images/*"], // 외부 파일로 인식 및 빌드에서 제외
  define: {
    "import.meta.env.MODE": '"production"', // import.meta 개발 환경 분기 적용
  },
  plugins: [
    copy({
      // 번들 파일에 필요한 리소스 빌드 파일로 복사
      assets: [
        {
          from: ["./public/models/**/*"],
          to: ["./models"],
        },
        {
          from: ["./public/fonts/*"],
          to: ["./fonts"],
        },
        {
          from: ["./public/images/**/*"],
          to: ["./images"],
        },
        {
          from: ["./public/interior/*"],
          to: ["./interior"],
        },
        {
          from: ["./public/logo/*"],
          to: ["./logo"],
        },
        {
          from: ["./public/sound/*"],
          to: ["./sound"],
        },
        {
          from: ["./public/svgs/*"],
          to: ["./svgs"],
        },
      ],
    }),
    // react root index.html 템플릿과 번들 js, css 연결
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
