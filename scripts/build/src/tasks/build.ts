import { build, type UserConfig } from "vite";
import { esConfig, cjsConfig, bundleConfig, themeConfig } from "../config/vite.configs";
import { copyAndConcatFilesPlugin } from "../plugins/build-plugins";
import { resolve } from "path";
import { distPkgRoot, bpUIRoot, themeRoot, projRoot } from "../paths";
import { existsSync, rmSync, mkdirSync } from "fs";
import { readFile, writeFile, mkdir, readdir, stat } from "fs/promises";
import glob from "fast-glob";

// 构建模块化输出（ES/CJS）
export async function buildModules() {
  // 导入 UnoCSS 插件
  const UnoCSS = (await import("unocss/vite")).default;
  
  // 更新配置，添加 UnoCSS 插件
  const esConfigWithPlugins = {
    ...esConfig,
    plugins: [
      ...(esConfig.plugins || []),
      UnoCSS({
        mode: "vue-scoped",
      }),
    ],
  };
  
  const cjsConfigWithPlugins = {
    ...cjsConfig,
    plugins: [
      ...(cjsConfig.plugins || []),
      UnoCSS({
        mode: "vue-scoped",
      }),
    ],
  };

  // 获取所有需要构建的文件
  const files = await glob("**/*.{ts,vue}", {
    cwd: bpUIRoot,
    absolute: true,
    onlyFiles: true,
    ignore: ["node_modules/**/*", "env.d.ts"],
  });

  // 更新配置以支持多入口
  const multiEntryEsConfig: UserConfig = {
    ...esConfigWithPlugins,
    build: {
      ...esConfigWithPlugins.build,
      lib: {
        entry: files,
        formats: ["es"],
      },
      rollupOptions: {
        ...esConfigWithPlugins.build?.rollupOptions,
        input: files,
        output: {
          ...esConfigWithPlugins.build?.rollupOptions?.output,
          preserveModules: true,
          preserveModulesRoot: bpUIRoot,
          entryFileNames: "[name].mjs",
          exports: "named" as const,
        },
      },
    },
  };

  const multiEntryCjsConfig: UserConfig = {
    ...cjsConfigWithPlugins,
    build: {
      ...cjsConfigWithPlugins.build,
      lib: {
        entry: files,
        formats: ["cjs"],
      },
      rollupOptions: {
        ...cjsConfigWithPlugins.build?.rollupOptions,
        input: files,
        output: {
          ...cjsConfigWithPlugins.build?.rollupOptions?.output,
          preserveModules: true,
          preserveModulesRoot: bpUIRoot,
          entryFileNames: "[name].cjs",
          exports: "named" as const,
        },
      },
    },
  };

  // 构建 ES 模块
  await build(multiEntryEsConfig);
  console.log("ES 模块构建完成");

  // 构建 CommonJS 模块
  await build(multiEntryCjsConfig);
  console.log("CommonJS 模块构建完成");
}

// 构建全量打包输出（UMD/IIFE）
export async function buildBundle() {
  // 导入 UnoCSS 插件
  const UnoCSS = (await import("unocss/vite")).default;
  
  // 更新配置，添加 UnoCSS 插件
  const bundleConfigWithPlugins: UserConfig = {
    ...bundleConfig,
    plugins: [
      ...(bundleConfig.plugins || []),
      UnoCSS({
        mode: "vue-scoped",
      }),
    ],
  };

  await build(bundleConfigWithPlugins);
  console.log("全量打包构建完成");
}

// 构建主题样式文件
export async function buildTheme() {
  // 获取所有 SCSS 文件
  const files = await glob("**/*.scss", {
    cwd: themeRoot,
    absolute: true,
    onlyFiles: true,
  });

  if (files.length === 0) {
    throw new Error(`No .scss files found in ${themeRoot}`);
  }

  // 构建所有 SCSS 文件
  const themeConfigWithPlugins: UserConfig = {
    ...themeConfig,
    build: {
      ...themeConfig.build,
      rollupOptions: {
        input: files,
        output: {
          dir: resolve(distPkgRoot, "theme"),
          assetFileNames: "[name][extname]",
        },
      },
    },
  };
  
  await build(themeConfigWithPlugins);
  
  console.log("主题样式构建完成");
}

// 文件复制和样式合并
export async function copyAndConcatFiles() {
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

  await patchTypesEntry();
}

async function patchTypesEntry() {
  const typesIndex = resolve(distPkgRoot, "types/index.d.ts");
  if (!existsSync(typesIndex)) return;

  const ref = '/// <reference path="../global.d.ts" />\n';
  const content = await readFile(typesIndex, "utf-8");
  if (content.includes("global.d.ts")) return;

  await writeFile(typesIndex, ref + content);
  console.log("已将全局组件类型引用写入 types/index.d.ts");
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

// 清理构建目录
export async function clean() {
  const dirsToClean = [
    resolve(distPkgRoot, "es"),
    resolve(distPkgRoot, "lib"),
    resolve(distPkgRoot, "dist"),
    resolve(distPkgRoot, "theme"),
    resolve(distPkgRoot, "types"),
  ];

  for (const dir of dirsToClean) {
    if (existsSync(dir)) {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  
  console.log("构建目录清理完成");
}