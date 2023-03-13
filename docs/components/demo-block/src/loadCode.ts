import fs from "fs";
import path from "path";
import { getHighlighter } from "shiki";
import { getTagLabel } from "../../util/helper";
const { resolve } = path;

let codeToHtml: any = null;
(async () => {
  let res = await getHighlighter({
    theme: "min-light",
  });
  codeToHtml = res.codeToHtml;
})();

export default (md: any) => {
  const render = md.render;
  md.render = (...args: any[]) => {
    let result = render.call(md, ...args);
    const demoReg = new RegExp(/<demo-block([\s\S]*?)(<\/demo-block>|\/>)/, "g");
    const demoTagList = result.match(demoReg);

    demoTagList?.forEach(async (tagText: any) => {
      const src = getTagLabel(tagText, "demo-block", "src");
      const lang = getTagLabel(tagText, "demo-block", "lang") || "vue";
      let codeString = "";

      codeString = codeToHtml(fs.readFileSync(resolve(`./src/${src}.vue`)).toString(), { lang });
      let demoStr = tagText.replace(">", ` codeString="${encodeURIComponent(codeString)}">`);
      result = result.replace(tagText, demoStr);
    });
    return result;
  };
};
