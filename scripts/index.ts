#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import buildComponent from "./buildComponent";
import buildStyle from "./buildStyle";

const program = new Command();

const packageContent = fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("bp-vue-scripts").usage("command [options]");

program
  .command("build:components")
  .description("build:components...")
  .option("-u, --umd", "build with UMD file")
  .action(async ({ umd }) => {
    await buildComponent({ umd });
  });

program
  .command("build:style")
  .description("build:style...")
  .action(async () => {
    await buildStyle();
  });

program.parse(process.argv);
