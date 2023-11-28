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
exports.buildType = exports.buildIconIndex = exports.generateIconComponent = exports.getIconComponents = void 0;
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const jsdom_1 = require("jsdom");
const svgo_1 = require("svgo");
const svgo_config_1 = __importDefault(require("./svgo.config"));
const vue_template_1 = require("./vue-template");
const helper_1 = require("../utils/helper");
const root = process.cwd();
/** SVG 资源路径 */
const svgIconCwd = (0, helper_1.resolvePath)(root, "./components/icon_svg");
const paths = {
    icon: (0, helper_1.resolvePath)("./components/icon"),
};
/**
 * 获取需要转换的 Icon 列表
 * @returns IconData[]
 */
function getIconComponents() {
    try {
        const iconList = [];
        const files = glob_1.default.sync(`${svgIconCwd}/**/*.svg`, { cwd: svgIconCwd, absolute: true });
        for (const filePath of files) {
            const name = `icon-${path_1.default.basename(filePath, ".svg")}`;
            iconList.push({
                name,
                path: filePath,
                componentName: `${(0, helper_1.toPascalCase)(name)}`,
            });
        }
        return iconList;
    }
    catch (error) {
        console.log("[ error ]-getIconComponents", error);
        return [];
    }
}
exports.getIconComponents = getIconComponents;
/**
 * 构建 Icon 的 Vue 组件
 * @param iconList IconData[]
 */
function generateIconComponent(iconList) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs_extra_1.default.emptyDir(path_1.default.resolve(root, "components/icon"));
        for (let i = 0; i < iconList.length; i++) {
            const item = iconList[i];
            const svgFile = fs_extra_1.default.readFileSync(item.path, "utf8");
            const optimizedSvg = (0, svgo_1.optimize)(svgFile, Object.assign({ path: item.path }, svgo_config_1.default));
            if ("data" in optimizedSvg) {
                const { data } = optimizedSvg;
                const svgElement = jsdom_1.JSDOM.fragment(data).firstElementChild;
                if (svgElement) {
                    fs_extra_1.default.outputFile(path_1.default.resolve(paths.icon, `${item.name}/${item.name}.vue`), (0, vue_template_1.getIconVueComponent)({
                        name: item.name,
                        componentName: item.componentName,
                        svgHtml: svgElement.outerHTML,
                    }), (err) => {
                        if (err) {
                            console.log(`BuildComponents ${item.componentName} Failed: ${err}`);
                            return;
                        }
                        console.log(`BuildComponents ${item.componentName} Success!`);
                    });
                }
            }
            fs_extra_1.default.outputFile(path_1.default.resolve(paths.icon, `${item.name}/index.ts`), (0, vue_template_1.getComponentIndex)(item), err => {
                if (err) {
                    console.log(`BuildIndex ${item.componentName} Failed: ${err}`);
                    return;
                }
                console.log(`BuildIndex ${item.componentName} Success!`);
            });
        }
    });
}
exports.generateIconComponent = generateIconComponent;
/**
 * 构建 Icon 集合 birdpaper-ui-icon.ts && index.ts
 * @param data IconData[]
 */
function buildIconIndex(data) {
    const imports = [];
    const exports = [];
    const components = [];
    for (const item of data) {
        components.push(item.componentName);
        imports.push(`import ${item.componentName} from './${item.name}';`);
        exports.push(`export { default as ${item.componentName} } from './${item.name}';`);
    }
    const bpContent = (0, vue_template_1.getBpVueIcon)({ imports, components });
    const indexContent = (0, vue_template_1.getIndex)({ exports });
    fs_extra_1.default.outputFile(path_1.default.resolve(paths.icon, "birdpaper-ui-icon.ts"), bpContent, err => {
        if (err) {
            console.log(`Build BpVueIcon Failed: ${err}`);
            return;
        }
        console.log("Build BpVueIcon Success!");
    });
    fs_extra_1.default.outputFile(path_1.default.resolve(paths.icon, "index.ts"), indexContent, err => {
        if (err) {
            console.log(`Build Index Failed: ${err}`);
            return;
        }
        console.log("Build Index Success!");
    });
    // fs.outputFile(
    //   path.resolve(paths.icon, 'icons.json'),
    //   JSON.stringify(data, null, 2),
    //   (err) => {
    //     if (err) {
    //       console.log(`Build JSON Failed: ${err}`);
    //     } else {
    //       console.log('Build JSON Success!');
    //     }
    //   }
    // );
}
exports.buildIconIndex = buildIconIndex;
/**
 * 构建 icon-components.ts
 * @param data IconData[]
 */
function buildType(data) {
    const exports = [];
    for (const item of data) {
        exports.push(`${item.componentName}: typeof import('birdpaper-ui/components/icon')['${item.componentName}'];`);
    }
    const typeContent = (0, vue_template_1.getType)({ exports });
    fs_extra_1.default.outputFile(path_1.default.resolve(paths.icon, "icon-components.ts"), typeContent, err => {
        if (err) {
            console.log(`Build Type Failed: ${err}`);
            return;
        }
        console.log("Build Type Success!");
    });
}
exports.buildType = buildType;
//# sourceMappingURL=index.js.map