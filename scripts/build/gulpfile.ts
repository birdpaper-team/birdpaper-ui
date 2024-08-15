import { series, parallel } from "gulp";
import { buildModules, buildBundle, buildTheme } from "./src/tasks";

export default series(parallel(buildModules, buildBundle, buildTheme));
