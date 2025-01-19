import { run } from "@front/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
