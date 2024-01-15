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

/**
 * 事件埋点触发
 * @param name
 */
export const eventTrack = (name: string) => {
  try {
    // @ts-ignore
    LA.track(name);
  } catch (error) {
    console.error("[ eventTrack ]", error);
  }
};

/**
 * 跳转外部链接
 * @param url
 */
export const goToLink = (url: string) => {
  if (!url) return;

  window.open(url);
};

/**
 * 获取 URL 参数
 * @returns
 */
export function getUrlParams(): { [key: string]: string } {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const params: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}