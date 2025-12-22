#!/usr/bin/env node

import { clean, buildModules, buildBundle, buildTheme, copyAndConcatFiles } from "./src/tasks/build";

async function runBuild() {
  try {
    console.log("开始构建 Birdpaper UI 组件库...");
    
    // 清理构建目录
    await clean();
    
    // 构建模块化输出
    await buildModules();
    
    // 构建全量打包输出
    await buildBundle();
    
    // 构建主题样式文件
    await buildTheme();
    
    // 文件复制和样式合并
    await copyAndConcatFiles();
    
    console.log("Birdpaper UI 组件库构建完成!");
  } catch (error) {
    console.error("构建失败:", error);
    process.exit(1);
  }
}

// 执行构建
runBuild();