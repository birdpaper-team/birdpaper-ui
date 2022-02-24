/**
 * @Author: Sam
 * @Date: 2022-01-11 19:21:52
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-01-11 19:21:52
 */

export const useDesign = () => {

  // 设计规范中约束的尺寸值
  const DESIGN_SIZE_LIST = ["mini", "small", "normal", "large"];

  // 设计规范中约束的主题类型
  const DESIGN_THEME_LIST = ["primary", "success", "warning", "danger"];

  /**
   * 尺寸验证器
   * @param {String} v
   * @returns Boolean
   */
  const sizeValidator = (v) => DESIGN_SIZE_LIST.includes(v);
  /**
   * 主题类型验证器
   * @param {String} v
   * @returns Boolean
   */
  const themeValidator = (v) => DESIGN_THEME_LIST.includes(v);

  return {
    DESIGN_SIZE_LIST,
    DESIGN_THEME_LIST,
    sizeValidator,
    themeValidator
  }

}