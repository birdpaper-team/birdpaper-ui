import { build, type UserConfig } from "vite";
import { esConfig, cjsConfig, bundleConfig, themeConfig } from "../config/vite.configs";
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

/** Theme shared/token CSS files — do not treat as component on-demand targets via filename. */
const THEME_SHARED_STEMS = new Set([
  "index",
  "base",
  "color",
  "sizes",
  "extend",
  "function",
  "mixins",
  "zindex",
]);

function kebabToCamel(name: string): string {
  return name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

/** Split UnoCSS vue-scoped output into per-scopeId chunks. */
function splitCssByScope(css: string): Map<string, string> {
  const map = new Map<string, string[]>();
  const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
  let match: RegExpExecArray | null;

  while ((match = ruleRe.exec(css))) {
    const selector = match[1].trim();
    const body = match[2];
    const scopes = [...new Set(selector.match(/data-v-[0-9a-f]+/g) || [])];
    if (scopes.length === 0) continue;

    const rule = `${selector}{${body}}`;
    for (const scope of scopes) {
      const list = map.get(scope) || [];
      list.push(rule);
      map.set(scope, list);
    }
  }

  return new Map([...map.entries()].map(([scope, rules]) => [scope, rules.join("")]));
}

/**
 * Map each Vue SFC __scopeId to theme CSS stems that should receive its Uno styles.
 * - Always: packages/components/{folder} → theme/{folder}.css (when present)
 * - Also: vue filename camelCase → theme/{name}.css (e.g. date-table → dateTable.css),
 *   skipping shared token files like index/sizes/base.
 */
async function collectScopeThemeTargets(): Promise<Map<string, Set<string>>> {
  const themeDir = resolve(distPkgRoot, "theme");
  const themeStems = new Set(
    (await readdir(themeDir))
      .filter((f) => f.endsWith(".css"))
      .map((f) => f.replace(/\.css$/, "")),
  );

  const targets = new Map<string, Set<string>>();
  const vueFiles = await glob("**/*.vue.mjs", {
    cwd: resolve(distPkgRoot, "es"),
    absolute: true,
    onlyFiles: true,
  });

  for (const file of vueFiles) {
    const content = await readFile(file, "utf-8");
    const scopeMatch = content.match(/\["__scopeId",\s*"(data-v-[0-9a-f]+)"\]/);
    if (!scopeMatch) continue;

    const scopeId = scopeMatch[1];
    const parts = file.split(/[/\\]/);
    const compIdx = parts.lastIndexOf("components");
    if (compIdx < 0 || compIdx + 1 >= parts.length) continue;

    const folder = parts[compIdx + 1];
    const baseName = file.replace(/\.vue\.mjs$/, "").split(/[/\\]/).pop() || "";
    const camelName = kebabToCamel(baseName);

    const stems = targets.get(scopeId) || new Set<string>();
    if (themeStems.has(folder)) stems.add(folder);
    if (themeStems.has(camelName) && !THEME_SHARED_STEMS.has(camelName)) {
      stems.add(camelName);
    }
    if (stems.size > 0) targets.set(scopeId, stems);
  }

  return targets;
}

/** Merge UnoCSS into full theme entries and per-component on-demand CSS. */
async function injectUnoStyles(unoCss: string) {
  if (!unoCss.trim()) {
    console.warn("未找到 UnoCSS 产物 (es/style.css)，跳过样式注入");
    return;
  }

  const themeIndexPath = resolve(distPkgRoot, "theme/index.css");
  const distIndexPath = resolve(distPkgRoot, "dist/index.css");
  const themeSrcIndexPath = resolve(distPkgRoot, "theme/src/index.css");

  let themeIndexContent = "";
  if (existsSync(themeIndexPath)) {
    themeIndexContent = await readFile(themeIndexPath, "utf-8");
  }

  const mergedIndexCss = `${themeIndexContent}\n${unoCss}`.trim() + "\n";
  await writeFile(themeIndexPath, mergedIndexCss);

  // Keep theme/src/index.css as the same full entry for any existing consumers.
  await mkdir(resolve(distPkgRoot, "theme/src"), { recursive: true });
  await writeFile(themeSrcIndexPath, mergedIndexCss);

  await mkdir(resolve(distPkgRoot, "dist"), { recursive: true });
  await writeFile(distIndexPath, mergedIndexCss);

  // On-demand: append each component's scoped Uno rules to its theme/*.css
  const cssByScope = splitCssByScope(unoCss);
  const scopeTargets = await collectScopeThemeTargets();
  const stemCss = new Map<string, string[]>();

  for (const [scopeId, stems] of scopeTargets) {
    const chunk = cssByScope.get(scopeId);
    if (!chunk) continue;
    for (const stem of stems) {
      const list = stemCss.get(stem) || [];
      list.push(chunk);
      stemCss.set(stem, list);
    }
  }

  let injectedCount = 0;
  for (const [stem, chunks] of stemCss) {
    if (THEME_SHARED_STEMS.has(stem)) continue;
    const filePath = resolve(distPkgRoot, "theme", `${stem}.css`);
    if (!existsSync(filePath)) continue;

    const existing = await readFile(filePath, "utf-8");
    const unoBlock = chunks.join("");
    await writeFile(filePath, `${existing}\n${unoBlock}`.trim() + "\n");
    injectedCount++;
  }

  console.log(
    `UnoCSS 已合并至 theme/index.css、dist/index.css，并注入 ${injectedCount} 个按需主题文件`,
  );
}

// 文件复制和样式合并
export async function copyAndConcatFiles() {
  const cssDir = resolve(distPkgRoot, "theme/src");
  const scssDir = resolve(distPkgRoot, "theme/scss");

  if (!existsSync(cssDir)) await mkdir(cssDir, { recursive: true });
  if (!existsSync(scssDir)) await mkdir(scssDir, { recursive: true });

  try {
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

    await injectUnoStyles(esStyleContent);
  } catch (error) {
    console.error("样式文件合并失败:", error);
    throw error;
  }

  // 复制文件（theme/index.css 已含 Uno，再同步到 dist/index.css 作为兜底）
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
    for (const [from, to] of files) {
      if (existsSync(from)) {
        const content = await readFile(from);
        await writeFile(to, content);
        console.log(`文件复制成功: ${from} -> ${to}`);
      }
    }

    for (const [from, to] of folders) {
      if (existsSync(from)) {
        await copyFolder(from, to);
        console.log(`文件夹复制成功: ${from} -> ${to}`);
      }
    }

    console.log("文件复制完成");
  } catch (error) {
    console.error("文件复制失败:", error);
    throw error;
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