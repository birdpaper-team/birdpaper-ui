import { series, parallel } from "gulp";
import path from "path";
import { copyFile } from "fs/promises";
import { buildModules, buildBundle, buildTheme } from "./src/tasks";
import { bpUIRoot, distRoot, pkgRoot, projRoot } from "./src/paths";

export const copyThemeIndex = async () => {
  await copyFile(
    path.resolve(distRoot, "birdpaper-ui/theme/src/index.css"),
    path.resolve(distRoot, "birdpaper-ui/dist/index.css")
  );
};

export const copyOthers = async () => {
  await copyFile(
    path.resolve(bpUIRoot, "package.json"),
    path.resolve(distRoot, "birdpaper-ui/package.json")
  );
  await copyFile(
    path.resolve(projRoot, "global.d.ts"),
    path.resolve(distRoot, "birdpaper-ui/global.d.ts")
  );
};

export default series(
  parallel(buildModules, buildBundle, buildTheme),
  copyThemeIndex,
  copyOthers
);
