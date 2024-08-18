import { series, parallel } from "gulp";
import path from "path";
import fs, { copyFile, mkdir } from "fs/promises";
import { buildModules, buildBundle, buildTheme } from "./src/tasks";
import {
  bpUIRoot,
  distPkgRoot,
  distRoot,
  projRoot,
  themeRoot,
} from "./src/paths";

async function copyDir(src: string, dest: string) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  await fs.mkdir(dest, { recursive: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

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
  await copyFile(
    path.resolve(projRoot, "README.md"),
    path.resolve(distRoot, "birdpaper-ui/README.md")
  );
  copyDir(
    path.resolve(themeRoot, "src/"),
    path.resolve(distPkgRoot, "theme/scss/")
  )
    .then(() => console.log("Folder copied successfully"))
    .catch((err) => console.error("Error copying folder:", err));
};

export default series(
  parallel(buildModules, buildBundle, buildTheme),
  copyThemeIndex,
  copyOthers
);
