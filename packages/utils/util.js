/*
 * @Author: Sam
 * @Date: 2020-01-11 10:27:23
 * @Last Modified by: Sam
 * @Last Modified time: 2020-01-29 16:58:03
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
  bind(el, binding, vnode) {
    function handleClick(e) {
      // 如果为元素本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 如果绑定了函数，则返回执行
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = handleClick;
    document.addEventListener('click', handleClick);
  },
  // 解除事件监听
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};