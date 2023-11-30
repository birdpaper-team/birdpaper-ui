"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_plugin_cssjs_1 = __importDefault(require("../plugins/vite-plugin-cssjs"));
const config = {
    mode: 'production',
    build: {
        target: 'modules',
        outDir: '../es',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            external: /less$/,
            output: [
                {
                    format: 'es',
                    dir: '../es',
                    entryFileNames: '[name].js',
                },
                {
                    format: 'commonjs',
                    dir: '../lib',
                    entryFileNames: '[name].js',
                },
            ],
        },
        // 开启lib模式，但不使用下面配置
        lib: {
            entry: '',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [(0, vite_plugin_cssjs_1.default)()],
};
exports.default = config;
//# sourceMappingURL=vite.prod.style.js.map