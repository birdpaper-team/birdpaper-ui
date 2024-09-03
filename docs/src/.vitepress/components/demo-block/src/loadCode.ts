import fs from "fs";
import path from "path";
import { getHighlighter } from "shiki";
const { resolve } = path;

let codeToHtml: any = () => {};
(async () => {
  let res = await getHighlighter({
    theme: "dark-plus",
  });
  codeToHtml = res.codeToHtml;
})();

/**
 * 获取标签属性
 * @param tagText
 * @param tagName
 * @param attr
 * @returns
 */
export const getTagLabel = (
  tagText: string,
  tagName: string,
  attr?: string
): string => {
  let reg = attr
    ? new RegExp(`<${tagName}[^>]+${attr}=['"]([^'"]+)['"]`)
    : /<demo-block[\s\S]*?>([\s\S]*?)(<\/demo-block>|\/>)$/;
  let match = tagText.match(reg);

  if (match && match.length >= 1) {
    return match[1] || "";
  }
  return "";
};

export default (md: any) => {
  const render = md.render;
  md.render = (...args: any[]) => {
    let result = render.call(md, ...args);
    const demoReg = new RegExp(
      /<demo-block([\s\S]*?)(<\/demo-block>|\/>)/,
      "g"
    );
    const demoTagList = result.match(demoReg);

    demoTagList?.forEach(async (tagText: any) => {
      const src = getTagLabel(tagText, "demo-block", "src");
      const lang = getTagLabel(tagText, "demo-block", "lang") || "vue";
      let codeString = "";
      codeString = codeToHtml(
        fs.readFileSync(resolve(`./src/example/${src}.vue`)).toString(),
        { lang }
      );
      let demoStr = tagText.replace(
        ">",
        ` codeStr="${encodeURIComponent(codeString)}">`
      );
      result = result.replace(tagText, demoStr);
    });
    return result;
  };
};
