import { series } from "gulp";
import { buildModules, buildBundle, buildTheme, copyFiles, concatFiles } from "./src/tasks";

export default series(buildModules, buildBundle, buildTheme, copyFiles, concatFiles);
