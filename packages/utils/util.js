/**
 * @Author: Sam
 * @Date: 2020-01-11 10:27:23
 * @Last Modified by: Sam
 * @Last Modified time: 2022-04-22 05:17:31
 */

/**
 * 判断是否为 null
 * @param {*} data
 * @returns
 */
export const isNull = (data) => !data && data != 0;

/**
 * 判断变量是否为字符串
 * @param {*} data
 * @returns {Boolean}
 */
export const isString = (data) => typeof data === "string";

/**
 * 空格处理
 * @param {String} str
 * @returns
 */
export const trim = (str) => (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");

/**
 * 将字符串转换成对象格式
 * @param {String} str
 * @returns {Object} null
 */
export const strToObject = (str) => {
  var finalObj = null;
  try {
    finalObj = JSON.parse(str);
  } catch (e) {
    finalObj = null;
  }

  return finalObj;
};

/**
 * clickOutside
 * 点击某元素外部事件指令
 */
export const clickOutside = {
  // 初始化事件
  beforeMount(el, binding, vnode) {
    function handleClick(e) {
      // 如果为元素本身，则返回
      if (el.contains(e.target) || e.target.className.includes(binding.arg)) {
        return false;
      }

      // 如果绑定了函数，则返回执行
      binding.value(e);
    }
    el.__vueClickOutside__ = handleClick;
    document.addEventListener("click", handleClick);
  },
  // 解除事件监听
  unmounted(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

/**
 * 函数节流
 */
export const throttle = (fn, delay) => {
  var lastTime;
  var timer;
  var delay = delay || 200;
  return function () {
    var args = arguments;
    // 记录当前函数触发的时间
    var nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // 记录上一次函数触发的时间
        lastTime = nowTime;
        // 修正this指向问题
        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
};

/**
 * 新增事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const on = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};

/**
 * 移除事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const off = function (element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};

/**
 * 判断是否为偶数
 * @param {*} num
 */
export const isEvnetNum = (num) => Number(num) % 2 === 0;

/**
 * 将数值限制为整数
 * @param {*} v
 * @returns
 */
export const beInteger = (v) => {
  let val = v + "";
  return val.replace(/\D/g, "");
};

/**
 * 警告提示处理
 * @param {String} module
 * @param {*} info
 */
export const warn = (module, info) => {
  console.warn(`[ A warning of birdpaper-ui ] - ${module}: ` + info);
};

export const firstToUpper = (str) => {
  return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
};
