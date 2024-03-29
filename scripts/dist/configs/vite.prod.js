"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const plugin_vue_jsx_1 = __importDefault(require("@vitejs/plugin-vue-jsx"));
const vite_plugin_external_1 = __importDefault(require("../plugins/vite-plugin-external"));
const vite_plugin_dts_1 = __importDefault(require("vite-plugin-dts"));
const vite_plugin_vue_export_helper_1 = __importDefault(require("../plugins/vite-plugin-vue-export-helper"));
const config = {
    mode: "production",
    build: {
        target: "modules",
        outDir: "../es",
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: ["components/index.ts"],
            output: [
                {
                    format: "es",
                    dir: "../es",
                    entryFileNames: "[name].js",
                    preserveModules: true,
                    preserveModulesRoot: "components",
                },
                {
                    format: "commonjs",
                    dir: "../lib",
                    entryFileNames: "[name].js",
                    preserveModules: true,
                    preserveModulesRoot: "components",
                },
            ],
        },
        // 开启lib模式，但不使用下面配置
        lib: {
            entry: "components/index.ts",
            formats: ["es", "cjs"],
        },
    },
    // @ts-ignore vite内部类型错误
    plugins: [
        (0, vite_plugin_external_1.default)(),
        Object.assign(Object.assign({}, (0, plugin_vue_1.default)()), { apply: (config) => {
                return config.mode === "test";
            } }),
        ,
        (0, plugin_vue_jsx_1.default)(),
        (0, vite_plugin_dts_1.default)(),
        (0, vite_plugin_vue_export_helper_1.default)(),
    ],
};
exports.default = config;
//# sourceMappingURL=vite.prod.js.map