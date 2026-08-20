import { Plugin } from "vite";
import { resolve } from "path";
import { distPkgRoot, themeRoot, projRoot } from "../paths";
import { readFile, writeFile, mkdir, readdir, stat } from "fs/promises";
import { existsSync } from "fs";

// 文件复制和样式合并插件
export function copyAndConcatFilesPlugin(): Plugin {
  return {
    name: "copy-and-concat-files",
    apply: "build",
    closeBundle: async () => {
      // 确保目录存在
      const cssDir = resolve(distPkgRoot, "theme/src");
      const scssDir = resolve(distPkgRoot, "theme/scss");
      
      if (!existsSync(cssDir)) await mkdir(cssDir, { recursive: true });
      if (!existsSync(scssDir)) await mkdir(scssDir, { recursive: true });

      try {
        // 合并 SCSS 文件
        const indexScssPath = resolve(distPkgRoot, "theme/scss/index.scss");
        const esStylePath = resolve(distPkgRoot, "es/style.css");
        
        let indexScssContent = "";
        let esStyleContent = "";
        
        if (existsSync(indexScssPath)) {
          indexScssContent = await readFile(indexScssPath, "utf-8");
        }
        
        if (existsSync(esStylePath)) {
          esStyleContent = await readFile(esStylePath, "utf-8");
        }
        
        const mergedScss = indexScssContent + "\n" + esStyleContent;
        await writeFile(resolve(scssDir, "index.scss"), mergedScss);
        
        // 合并 CSS 文件
        const indexPath = resolve(distPkgRoot, "theme/index.css");
        
        let indexContent = "";
        if (existsSync(indexPath)) {
          indexContent = await readFile(indexPath, "utf-8");
        }
        
        const mergedCss = indexContent + "\n" + esStyleContent;
        await writeFile(resolve(cssDir, "index.css"), mergedCss);
        
        console.log("样式文件合并完成");
      } catch (error) {
        console.error("样式文件合并失败:", error);
      }

      // 复制文件
      const files: Array<[string, string]> = [
        [resolve(distPkgRoot, "theme/index.css"), resolve(distPkgRoot, "dist/index.css")],
        [resolve(projRoot, "packages/birdpaper-ui/package.json"), resolve(distPkgRoot, "package.json")],
        [resolve(projRoot, "global.d.ts"), resolve(distPkgRoot, "global.d.ts")],
        [resolve(projRoot, "packages/birdpaper-ui/web-types.json"), resolve(distPkgRoot, "web-types.json")],
        [resolve(projRoot, "README.md"), resolve(distPkgRoot, "README.md")],
      ];

      const folders: Array<[string, string]> = [
        [resolve(themeRoot, "src/"), resolve(distPkgRoot, "theme/scss/")],
      ];

      try {
        // 复制文件
        for (const [from, to] of files) {
          if (existsSync(from)) {
            const content = await readFile(from);
            await writeFile(to, content);
            console.log(`文件复制成功: ${from} -> ${to}`);
          }
        }

        // 复制文件夹
        for (const [from, to] of folders) {
          if (existsSync(from)) {
            await copyFolder(from, to);
            console.log(`文件夹复制成功: ${from} -> ${to}`);
          }
        }
        
        console.log("文件复制完成");
      } catch (error) {
        console.error("文件复制失败:", error);
      }
    },
  };
}

// 递归复制文件夹
async function copyFolder(src: string, dest: string) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src);
  
  for (const entry of entries) {
    const srcPath = resolve(src, entry);
    const destPath = resolve(dest, entry);
    
    const entryStat = await stat(srcPath);
    
    if (entryStat.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      const content = await readFile(srcPath);
      await writeFile(destPath, content);
    }
  }
}