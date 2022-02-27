/**
 * @Author: Sam
 * @Date: 2022-02-07 10:48:11
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-02-07 10:48:11
 */

import { useDesign } from "./design";

const { DESIGN_THEME_LIST } = useDesign();

export const useInput = () => {
  // Input 的类型
  const INPUT_TYPE_LIST = ["text", "password", "textarea"];

  const EMITS = ["update:modelValue", "focus", "blur", "keyup", "keydown", "clear", "suffix-click", "input"];

  /**
   * Input 类型验证器
   * @param {String} v
   * @returns Boolean
   */
  const typeValidator = (v) => INPUT_TYPE_LIST.includes(v);

  const initSuffixType = ({ type, showPassword, clearable, showLimit, maxLength }) => {
    if (type === "password" && showPassword) {
      return "psw-eye-line";
    }
    if (clearable) {
      return "clearable";
    }
    if (showLimit && maxLength) {
      return "word-limit";
    }
    return "custom";
  };

  /**
   * 多行文本下高度自适应
   * @param {Dom} ele
   */
  const autoHeight = (ele) => {
    var timer = null;
    const setStyle = (auto = false) => {
      if (auto) ele.style.height = "auto";
      ele.style.height = ele.scrollHeight + "px";
    };
    const delayedResize = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => setStyle(), 200);
    };
    if (ele.addEventListener) {
      ele.addEventListener("input", () => setStyle(), false);
      setStyle();
    } else if (ele.attachEvent) {
      ele.attachEvent("onpropertychange", () => setStyle());
      setStyle();
    }
    if (window.VBArray && window.addEventListener) {
      ele.attachEvent("onkeydown", function () {
        var key = window.event.keyCode;
        if (key == 8 || key == 46) delayedResize();
      });
      ele.attachEvent("oncut", () => delayedResize());
    }
  };

  return {
    EMITS,
    typeValidator,
    initSuffixType,
    autoHeight,
  };
};
