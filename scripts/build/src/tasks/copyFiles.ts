import { join } from "path";
import { bpUIRoot, distPkgRoot, projRoot, themeRoot } from "../paths";
import { cpFile, cpFolder } from "../utils";

export const copyFiles = async () => {
  /** Files to be copied. */
  const files: string[][] = [
    [join(distPkgRoot, "theme/index.css"), join(distPkgRoot, "/dist/index.css")],
    [join(bpUIRoot, "package.json"), join(distPkgRoot, "package.json")],
    [join(projRoot, "global.d.ts"), join(distPkgRoot, "global.d.ts")],
    [join(projRoot, "README.md"), join(distPkgRoot, "README.md")],
  ];

  /** Folders to be copied. */
  const folders: string[][] = [[join(themeRoot, "src/"), join(distPkgRoot, "theme/scss/")]];

  return new Promise<void>((resolve, reject) => {
    files.map(async ([from, to]: string[]) => {
      return await cpFile(from, to)
        .then(() => console.log("File copied successfully."))
        .catch((err) => console.error("Error copying file:", err));
    });

    folders.map(async ([from, to]: string[]) => {
      return cpFolder(from, to)
        .then(() => {
          console.log("Folder copied successfully.");
          resolve();
        })
        .catch((err) => {
          console.error("Error copying folder:", err);
          reject();
        });
    });
  });
};
