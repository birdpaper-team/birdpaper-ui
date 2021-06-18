/*
 * @Author: Sam
 * @Date: 2021-06-12 05:43:55
 * @Last Modified by: Sam
 * @Last Modified time: 2021-06-12 05:53:36
 */
// 返回是否是 HTML 元素
export const isHtmlEl = e => e && e.nodeType === 1;

/**
 * 判断目标元素是否在某个容器中
 * @param {Element} target
 * @param {Element} container
 * @returns Boolean
 */
export const isInContainer = (target, container) => {
  if (!target || !container) return false;

  const isNotContainer = [window, document, document.documentElement, null, undefined].includes(container);
  const elClientReact = target.getBoundingClientRect();
  let containerClientRect = null;


  if (!isNotContainer) {
    containerClientRect = container.getBoundingClientRect();
  } else {
    containerClientRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  }

  return (
    elClientReact.top < containerClientRect.bottom &&
    elClientReact.bottom > containerClientRect.top &&
    elClientReact.right > containerClientRect.left &&
    elClientReact.left < containerClientRect.right
  );
}

/**
 * 获取滚动容器
 * @param {Element} el
 * @param {Boolean} isVertical
 * @returns
 */
export const getScrollContainer = (el, isVertical) => {
  let parent = el;

  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }

    if (isScroll(parent, isVertical)) {
      return parent;
    }

    parent = parent.parentNode;
  }
  return parent;
}

/**
 * 判断元素是否含有滚动
 * @param {Element} el
 * @param {Boolean} isVertical
 * @returns Boolean
 */
export const isScroll = (el, isVertical) => {
  const determinedDirection = isVertical === null || isVertical === undefined;

  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x');

  return overflow.match(/(scroll|auto)/);
}

/**
 * 获取元素样式
 * @param {Element} element
 * @param {string} styleName
 * @returns
 */
export const getStyle = function (element, styleName) {
  if (!element || !styleName) return null;

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    const style = element.style[styleName];
    if (style) return style;

    const computed = document.defaultView.getComputedStyle(element, '')
    return computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
}