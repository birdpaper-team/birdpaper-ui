/**
 * 获取标签属性
 * @param tagText
 * @param tagName
 * @param attr
 * @returns
 */
export const getTagLabel = (tagText: string, tagName: string, attr?: string): string => {
  let reg = attr
    ? new RegExp(`<${tagName}[^>]+${attr}=['"]([^'"]+)['"]`)
    : /<demo-block[\s\S]*?>([\s\S]*?)(<\/demo-block>|\/>)$/;
  let match = tagText.match(reg);

  if (match && match.length >= 1) {
    return match[1] || "";
  }
  return "";
};
