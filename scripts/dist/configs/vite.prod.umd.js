"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const plugin_vue_jsx_1 = __importDefault(require("@vitejs/plugin-vue-jsx"));
const vite_plugin_dts_1 = __importDefault(require("vite-plugin-dts"));
exports.default = (type) => {
    const entry = "components/index.ts";
    const entryFileName = "birdpaper-ui";
    const name = "BirdpaperUI";
    return {
        mode: "production",
        build: {
            target: "modules",
            outDir: "../dist",
            emptyOutDir: false,
            sourcemap: true,
            minify: false,
            rollupOptions: {
                external: ["vue"],
                output: [
                    {
                        format: "umd",
                        name,
                        entryFileNames: `${entryFileName}.js`,
                        globals: {
                            vue: "Vue",
                        },
                    },
                    {
                        format: "umd",
                        name,
                        entryFileNames: `${entryFileName}.min.js`,
                        globals: {
                            vue: "Vue",
                        },
                    },
                ],
            },
            // 开启lib模式
            lib: {
                entry,
                formats: ["umd"],
                name,
            },
        },
        // @ts-ignore vite内部类型错误
        plugins: [
            Object.assign(Object.assign({}, (0, plugin_vue_1.default)()), { apply: config => {
                    return config.mode === "test";
                } }),
            (0, vite_plugin_dts_1.default)(),
            (0, plugin_vue_jsx_1.default)(),
        ],
    };
};
//# sourceMappingURL=vite.prod.umd.js.map