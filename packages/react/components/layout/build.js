import { run } from "@front/esbuild-config";
import pkg from "./package.json" assert { type: "json" };
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const config = {
  plugins: [vanillaExtractPlugin()],
};

run({
  pkg,
  config,
});
