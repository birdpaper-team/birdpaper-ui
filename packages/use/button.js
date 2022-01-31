/**
 * @Author: Sam
 * @Date: 2022-01-11 19:21:52
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-01-11 19:21:52
 */

export const useButton = () => {

  // 按钮组件的类型
  const BUTTON_TYPE_LIST = ["text", "default", "primary", "success", "warning", "danger"];

  /**
   * 按钮类型校验器
   * @param {String} v
   * @returns Boolean
   */
  const typeValidator = (v) => BUTTON_TYPE_LIST.includes(v);

  /**
   * 创建 a 标签并跳转
   * @param {String} href
   * @param {String} target
   */
  const clickByLink = (href = "", target = "_self") => {
    var a = document.createElement("a");
    a.setAttribute("href", href);
    a.setAttribute("target", target);
    document.body.appendChild(a);
    return a.click();
  };

  return {
    BUTTON_TYPE_LIST,
    typeValidator,
    clickByLink
  }

}