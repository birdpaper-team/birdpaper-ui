import { series, parallel } from "gulp";
import { buildModules, buildBundle } from "./src/tasks";

export default series(parallel(buildModules, buildBundle));
