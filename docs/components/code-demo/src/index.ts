import fs from "fs";
import path from "path";
import { getHighlighter } from "shiki";
const { resolve } = path;
// 同步定义shiki的codeToHtml
let codeToHtml: any = null;
(async () => {
  let res = await getHighlighter({
    theme: "nord",
  });
  codeToHtml = res.codeToHtml;
})();


export default (md: any) => {
  const render = md.render;
  md.render = (...args: any[]) => {
    // let docPath = args[1].path; // 文档路径
    let result = render.call(md, ...args); // md转之后的text
    const demoReg = /<demo([\s\S]*?)(<\/demo>|\/>)/; // 匹配demo标签(支持单双标签)
    const demoReg_g = new RegExp(demoReg, "g");
    const demoLabels = result.match(demoReg_g); // 获取所有的demo标签
    demoLabels?.forEach(async (demo: any) => {
      let codeStr = ""; //demo中间字符串
      let htmlStr = ""; //demo的html字符串
      let descStr = ""; //demo的desc字符串
      // const demoSrc = getDemoLabel(demo, "src"); //demo src
      // const demoDesc = getDemoLabel(demo, "desc"); //demo desc
      // const demoLang = getDemoLabel(demo, "lang") || "vue"; //demo lang
      // const demoPath = resolve(docPath, "../", demoSrc); //demo md的绝对路径
      // const existSrc = demoSrc && fs.existsSync(demoPath); // 判断 src 是否存在且正确
      if (true) {
        codeStr = fs.readFileSync(resolve("./src/example/button/basic.vue")).toString(); //demo中间字符串
      }
      htmlStr = codeToHtml(codeStr, { lang: "vue" }); //demo的html字符串
      // descStr = md.renderInline(demoDesc) || ""; //demo的desc字符串
      let demoStr = demo.replace(">", ` codeStr="${encodeURIComponent(codeStr)}" htmlStr="${encodeURIComponent(htmlStr)}">`);
      result = result.replace(demo, demoStr);
    });
    return result;
  };
};
