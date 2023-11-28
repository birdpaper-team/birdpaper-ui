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
const less_1 = __importDefault(require("less"));
const clean_css_1 = __importDefault(require("clean-css"));
const glob_1 = __importDefault(require("glob"));
const vite_1 = require("vite");
const helper_1 = require("../utils/helper");
const vite_prod_style_1 = __importDefault(require("../configs/vite.prod.style"));
const root = process.cwd();
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const files = glob_1.default.sync("**/*.{less,js}", {
        cwd: (0, helper_1.resolvePath)("components"),
    });
    for (const filename of files) {
        const absolute = (0, helper_1.resolvePath)(`components/${filename}`);
        fs_extra_1.default.copySync(absolute, (0, helper_1.resolvePath)(`../es/${filename}`));
        fs_extra_1.default.copySync(absolute, (0, helper_1.resolvePath)(`../lib/${filename}`));
        if (/index\.less$/.test(filename)) {
            console.log(`building ${filename}`);
            const lessContent = fs_extra_1.default.readFileSync(absolute, "utf8");
            less_1.default.render(lessContent, {
                filename,
                paths: [(0, helper_1.resolvePath)(`components/${path_1.default.dirname(filename)}`), root],
            }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else if (result && result.css) {
                    const cssFilename = filename.replace(".less", ".css");
                    fs_extra_1.default.writeFileSync((0, helper_1.resolvePath)(`../es/${cssFilename}`), result.css);
                    fs_extra_1.default.writeFileSync((0, helper_1.resolvePath)(`../lib/${cssFilename}`), result.css);
                    console.log(`${filename} build success`);
                }
            });
        }
    }
    const indexLessPath = (0, helper_1.resolvePath)("components/index.less");
    fs_extra_1.default.copySync(indexLessPath, (0, helper_1.resolvePath)("../es/index.less"));
    fs_extra_1.default.copySync(indexLessPath, (0, helper_1.resolvePath)("../lib/index.less"));
    const indexLess = fs_extra_1.default.readFileSync(indexLessPath, "utf8");
    const result = yield less_1.default.render(indexLess, {
        paths: [(0, helper_1.resolvePath)("./components")],
    });
    fs_extra_1.default.ensureDirSync((0, helper_1.resolvePath)("../dist"));
    fs_extra_1.default.writeFileSync((0, helper_1.resolvePath)("../dist/index.less"), "@import '../es/index.less';\n\n");
    fs_extra_1.default.writeFileSync((0, helper_1.resolvePath)("../dist/index.css"), result.css);
    const compress = new clean_css_1.default().minify(result.css);
    fs_extra_1.default.writeFileSync((0, helper_1.resolvePath)("../dist/index.min.css"), compress.styles);
    const indexFiles = glob_1.default.sync("components/**/style/index.ts", {
        cwd: root,
    });
    const rollupInput = indexFiles.reduce((pre, cur) => {
        pre[cur.slice(11, -3)] = cur;
        return pre;
    }, {});
    const buildIndex = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if ((_a = vite_prod_style_1.default === null || vite_prod_style_1.default === void 0 ? void 0 : vite_prod_style_1.default.build) === null || _a === void 0 ? void 0 : _a.rollupOptions) {
            vite_prod_style_1.default.build.rollupOptions.input = rollupInput;
        }
        yield (0, vite_1.build)(vite_prod_style_1.default);
    });
    yield buildIndex();
});
exports.default = run;
//# sourceMappingURL=index.js.map