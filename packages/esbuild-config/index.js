const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  // 개발환경에서 줄바꿈 최적화는 필요 없기때문에 개발환경에서는 제외
  const dev = process.argv.includes("--dev");
  const minify = !dev;
  // 코드 상태 변화에 따라 바로바로 변화적용
  // 16버전에서는 빌드파일에서 watch상태를 사용할 수 있지만 그 이상 부터는 메서드를 불러와 사용함
  const watch = process.argv.includes("--watch");

  // 뎁스가 라이브러리 빌드에 필요하지 않기 때문에 제외?
  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints: entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    ...config,
  };

  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
    }),

    // commonjs es module
    build({
      ...baseConfig,
      format: "esm",
      outExtension: {
        ".js": ".cjs",
      },
    }),
  ]).catch(() => {
    // console.error(...data, "Build Fail");
    process.exit(1);
  });
};

module.exports = { run };
