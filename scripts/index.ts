#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import { getIconComponents, generateIconComponent, buildIndex, buildType } from "./iconGenerate";
import buildComponent from "./buildComponent";

const program = new Command();

const packageContent = fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("bp-vue-scripts").usage("command [options]");

program
  .command("icon:generate")
  .description("icongenerate...")
  .action(async () => {
    const data = getIconComponents();
    await generateIconComponent(data);
    buildIndex(data);
    buildType(data);
  });

  program
  .command("build:components")
  .description("build:components...")
  .option('-u, --umd', 'build with UMD file')
  .action(async ({ umd }) => {
    await buildComponent({ umd });
  });

program.parse(process.argv);
