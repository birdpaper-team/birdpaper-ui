import { copyFile, mkdir, readdir } from "fs/promises";
import path from "path";

/**
 * Copy File.
 * @param fromPath
 * @param toPath
 */
export const cpFile = async (fromPath: string, toPath: string) => {
  await copyFile(path.resolve(fromPath), path.resolve(toPath));
  console.log("[CpFile Success] - From:" + fromPath + " To:" + toPath);
};

/**
 * Copy Folder.
 * @param src
 * @param dest
 */
export const cpFolder = async (src: string, dest: string) => {
  const entries = await readdir(src, { withFileTypes: true });

  await mkdir(dest, { recursive: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await cpFolder(srcPath, destPath);
    }else{
      await copyFile(srcPath, destPath);
    }
  }
};
