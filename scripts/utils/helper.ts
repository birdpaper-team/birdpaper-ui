import path from "path";

/**
 * 转换短横线命名
 * @param string
 * @returns
 */
export const toKebabCase = (string: string): string => {
  return string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? "-" : ""}${match.toLocaleLowerCase()}`;
  });
};

/**
 * 帕斯卡命名（首字母大写）
 * @param string
 * @returns
 */
export const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, match => match.toLocaleUpperCase())
    .replace(/-(.)/g, (match, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};

export const resolvePath = (root: string, ...relativePath: string[]) => {
  return path.resolve(root, ...relativePath);
};
