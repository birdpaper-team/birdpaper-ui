import path from "path";
import glob from "glob";
import fs from "fs-extra";
import { JSDOM } from "jsdom";
import { optimize } from "svgo";
import svgoConfig from "./svgo.config";
import { getIconVueComponent, getComponentIndex, getBpVueIcon, getIndex, getType } from "./vue-template";
import { resolvePath, toPascalCase } from "../utils/helper";

const root = process.cwd();
/** SVG 资源路径 */
const svgIconCwd = resolvePath(root, "./components/icon_svg");

interface IconData {
  name: string;
  path: string;
  componentName: string;
}

/**
 * 获取需要转换的 Icon 列表
 * @returns IconData[]
 */
export function getIconComponents(): IconData[] {
  try {
    const iconList: IconData[] = [];
    const files = glob.sync(`${svgIconCwd}/**/*.svg`, { cwd: svgIconCwd, absolute: true });

    for (const filePath of files) {
      const name = `icon-${path.basename(filePath, ".svg")}`;
      iconList.push({
        name,
        path: filePath,
        componentName: `${toPascalCase(name)}`,
      });
    }

    return iconList;
  } catch (error) {
    console.log("[ error ]-getIconComponents", error);
    return [];
  }
}

/**
 * 构建 Icon 的 Vue 组件
 * @param iconList IconData[]
 */
export async function generateIconComponent(iconList: IconData[]) {
  await fs.emptyDir(path.resolve(root, "components/icon"));

  for (let i = 0; i < iconList.length; i++) {
    const item = iconList[i];
    const svgFile = fs.readFileSync(item.path, "utf8");

    const optimizedSvg = optimize(svgFile, { path: item.path, ...svgoConfig });

    if ("data" in optimizedSvg) {
      const { data } = optimizedSvg;
      const svgElement = JSDOM.fragment(data).firstElementChild;
      if (svgElement) {
        fs.outputFile(
          path.resolve(resolvePath("./components/icon"), `${item.name}/${item.name}.vue`),
          getIconVueComponent({
            name: item.name,
            componentName: item.componentName,
            svgHtml: svgElement.outerHTML,
          }),
          (err: any) => {
            if (err) {
              console.log(`Build ${item.componentName} Failed: ${err}`);
            } else {
              console.log(`Build ${item.componentName} Success!`);
            }
          }
        );
      }
    }

    const indexContent = getComponentIndex({
      name: item.name,
      componentName: item.componentName,
    });

    fs.outputFile(path.resolve(resolvePath("./components/icon"), `${item.name}/index.ts`), indexContent, err => {
      if (err) {
        console.log(`Build ${item.componentName} Failed: ${err}`);
      } else {
        console.log(`Build ${item.componentName} Success!`);
      }
    });
  }
}

export function buildIndex(data: IconData[]) {
  const imports = [];
  const exports = [];
  const components = [];

  for (const item of data) {
    components.push(item.componentName);
    imports.push(`import ${item.componentName} from './${item.name}';`);
    exports.push(`export { default as ${item.componentName} } from './${item.name}';`);
  }

  const bpContent = getBpVueIcon({ imports, components });
  const indexContent = getIndex({ exports });

  fs.outputFile(path.resolve(resolvePath("./components/icon"), "birdpaper-ui-icon.ts"), bpContent, err => {
    if (err) {
      console.log(`Build BpVueIcon Failed: ${err}`);
    } else {
      console.log("Build BpVueIcon Success!");
    }
  });

  fs.outputFile(path.resolve(resolvePath("./components/icon"), "index.ts"), indexContent, err => {
    if (err) {
      console.log(`Build Index Failed: ${err}`);
    } else {
      console.log("Build Index Success!");
    }
  });
}

export function buildType(data: IconData[]) {
  const exports = [];
  for (const item of data) {
    exports.push(`${item.componentName}: typeof import('birdpaper-ui/components/icon')['${item.componentName}'];`);
  }

  const typeContent = getType({ exports });

  fs.outputFile(path.resolve(resolvePath("./components/icon"), "icon-components.ts"), typeContent, err => {
    if (err) {
      console.log(`Build Type Failed: ${err}`);
    } else {
      console.log("Build Type Success!");
    }
  });
}
