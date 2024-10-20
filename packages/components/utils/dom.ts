import { Component, Slots, VNode, VNodeTypes } from "vue";

// 返回是否是 HTML 元素
export const isHtmlEl = (e: any) => e && e.nodeType === 1;

/**
 * 获取滚动容器
 * @param {HTMLElement} el
 * @param {Boolean} isVertical
 * @returns
 */
export const getScrollContainer = (el: HTMLElement, isVertical: boolean) => {
  let parent = el;

  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }

    if (isScroll(parent, isVertical)) {
      return parent;
    }

    parent = parent.parentNode as HTMLElement;
  }
  return parent;
};

/**
 * 判断元素是否含有滚动
 * @param {HTMLElement} el
 * @param {Boolean} isVertical
 * @returns Boolean
 */
export const isScroll = (el: HTMLElement, isVertical: boolean) => {
  const determinedDirection = isVertical === null || isVertical === undefined;

  const overflow = determinedDirection ? getStyle(el, "overflow") : isVertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x");

  return overflow && overflow.match(/(scroll|auto)/);
};

/**
 * 获取元素样式
 * @param {HTMLElement} element
 * @param {string} styleName
 * @returns
 */
export const getStyle = function (element: HTMLElement, styleName: any) {
  if (!element || !styleName) return null;

  if (styleName === "float") {
    styleName = "cssFloat";
  }

  try {
    const style = element.style[styleName];
    if (style) return style;

    const computed = document?.defaultView?.getComputedStyle(element, "");
    return computed ? computed[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};

enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
}

export const isElement = (vn: VNode) => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ELEMENT);
};

export const isComponent = (vn: VNode, type?: VNodeTypes): type is Component => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.COMPONENT);
};

export const isTextChildren = (child: VNode, children: VNode["children"]): children is string => {
  return Boolean(child && child.shapeFlag & 8);
};

export const isArrayChildren = (vn: VNode, children: VNode["children"]): children is VNode[] => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ARRAY_CHILDREN);
};

export const opt = Object.prototype.toString;
export const isArray = (obj: any): obj is any[] => {
  return opt.call(obj) === "[object Array]";
};

export const isSlotsChildren = (vn: VNode, children: VNode["children"]): children is Slots => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.SLOTS_CHILDREN);
};

/**
 * 获取所有元素
 * @param children
 * @param includeText
 * @returns
 */
export const getAllElements = (children: VNode[] | undefined, includeText = false) => {
  const results: VNode[] = [];
  for (const item of children ?? []) {
    if (isElement(item) || isComponent(item) || (includeText && isTextChildren(item, item.children))) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements(item.children.default?.(), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};

/**
 * 判断是否是可滚动元素
 * @param element
 * @returns boolean
 */
export const isScrollElement = (element: HTMLElement) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};

/**
 * 获取可滚动区域元素
 * @param el
 * @returns
 */
export const getScrollElements = (el: HTMLElement | undefined) => {
  const scrollElements: HTMLElement[] = [];
  let element: HTMLElement | undefined = el;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = element.parentElement ?? undefined;
  }
  return scrollElements;
};

/**
 * 获取元素所在父元素的下标
 * @param ele
 * @returns
 */
export const getChildrenIndex = (ele: any) => {
  if (ele.sourceIndex) {
    return ele.sourceIndex - ele.parentNode.sourceIndex - 1;
  }
  var i = 0;
  while ((ele = ele.previousElementSibling)) {
    i++;
  }
  return i;
};
