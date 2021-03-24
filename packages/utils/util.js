/*
 * @Author: Sam
 * @Date: 2020-01-11 10:27:23
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-02 09:04:59
 */

/**
 * isNull
 * 判断是否为 null
 * @param {*} data
 */
export const isNull = (data) => {
  return !data && data != 0;
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
    document.addEventListener('click', handleClick);
  },
  // 解除事件监听
  unmounted(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
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
  }
}