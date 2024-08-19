import { series, parallel } from "gulp";
import { buildModules, buildBundle, buildTheme, copyFiles } from "./src/tasks";

export default series(
  parallel(buildModules, buildBundle, buildTheme),
  copyFiles
);
