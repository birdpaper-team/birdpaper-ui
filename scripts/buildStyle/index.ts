import path from "path";
import fs from "fs-extra";
import less from "less";
import CleanCSS from "clean-css";
import glob from "glob";
import { build } from "vite";
import { resolvePath } from "../utils/helper";
import config from "../configs/vite.prod.style";

const root = process.cwd();

const run = async () => {
  const files = glob.sync("**/*.{less,js}", {
    cwd: resolvePath("components"),
  });

  for (const filename of files) {
    const absolute = resolvePath(`components/${filename}`);
    fs.copySync(absolute, resolvePath(`../es/${filename}`));
    fs.copySync(absolute, resolvePath(`../lib/${filename}`));

    if (/index\.less$/.test(filename)) {
      console.log(`building ${filename}`);

      const lessContent = fs.readFileSync(absolute, "utf8");
      less.render(
        lessContent,
        {
          filename,
          paths: [resolvePath(`components/${path.dirname(filename)}`), root],
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else if (result && result.css) {
            const cssFilename = filename.replace(".less", ".css");
            fs.writeFileSync(resolvePath(`../es/${cssFilename}`), result.css);
            fs.writeFileSync(resolvePath(`../lib/${cssFilename}`), result.css);
            console.log(`${filename} build success`);
          }
        }
      );
    }
  }

  const indexLessPath = resolvePath("components/index.less");
  fs.copySync(indexLessPath, resolvePath("../es/index.less"));
  fs.copySync(indexLessPath, resolvePath("../lib/index.less"));

  const indexLess = fs.readFileSync(indexLessPath, "utf8");
  const result = await less.render(indexLess, {
    paths: [resolvePath("./components")],
  });

  fs.ensureDirSync(resolvePath("../dist"));

  fs.writeFileSync(resolvePath("../dist/index.less"), "@import '../es/index.less';\n\n");

  fs.writeFileSync(resolvePath("../dist/index.css"), result.css);

  const compress = new CleanCSS().minify(result.css);

  fs.writeFileSync(resolvePath("../dist/index.min.css"), compress.styles);


  const indexFiles = glob.sync("components/**/style/index.ts", {
    cwd: root,
  });

  const rollupInput = indexFiles.reduce((pre, cur) => {
    pre[cur.slice(11, -3)] = cur;
    return pre;
  }, {} as any);

  const buildIndex = async () => {
    if (config?.build?.rollupOptions) {
      config.build.rollupOptions.input = rollupInput;
    }

    await build(config);
  };

  await buildIndex();
};

export default run;
