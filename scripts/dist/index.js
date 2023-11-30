#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const commander_1 = require("commander");
const buildComponent_1 = __importDefault(require("./buildComponent"));
const buildStyle_1 = __importDefault(require("./buildStyle"));
const program = new commander_1.Command();
const packageContent = fs_extra_1.default.readFileSync(path_1.default.resolve(__dirname, "../package.json"), "utf8");
const packageData = JSON.parse(packageContent);
program.version(packageData.version).name("bp-vue-scripts").usage("command [options]");
program
    .command("build:components")
    .description("build:components...")
    .option("-u, --umd", "build with UMD file")
    .action(({ umd }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, buildComponent_1.default)({ umd });
}));
program
    .command("build:style")
    .description("build:style...")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, buildStyle_1.default)();
}));
program.parse(process.argv);
//# sourceMappingURL=index.js.map