import { Ref } from "vue";
import { TriggerPosition } from "./types";

export class PositionInfo {
  top: number = 0;
  left: number = 0;
  width?: number;
}
export interface SizeInfo {
  width: number;
  height: number;
}

const positionArr: TriggerPosition[] = [
  "top",
  "top-right",
  "upper-right",
  "right",
  "low-right",
  "bottom-right",
  "bottom",
  "bottom-left",
  "low-left",
  "left",
  "upper-left",
  "top-left",
];

export const getPosition = (
  position: TriggerPosition,
  windowSize: { width: Ref<number>; height: Ref<number> },
  triggerBounding: {
    height: Ref<number>;
    bottom: Ref<number>;
    left: Ref<number>;
    right: Ref<number>;
    top: Ref<number>;
    width: Ref<number>;
    x: Ref<number>;
    y: Ref<number>;
  },
  wrapperSize: SizeInfo,
  popupOffset: number = 0,
  popupTranslate: [number, number] = [0, 0],
  boundaryPadding: number = 0
): TriggerPosition => {
  const triggerLeft = triggerBounding.left.value + popupOffset + popupTranslate[0];
  const triggerLeftIncludeWidth = triggerLeft + triggerBounding.width.value;
  const triggerLeftIncludeHalfWidth = triggerLeft + triggerBounding.width.value / 2;

  const triggerRight = windowSize.width.value - triggerBounding.right.value - popupOffset - popupTranslate[0];
  const triggerRightIncludeWidth = triggerRight + triggerBounding.width.value;
  const triggerRightIncludeHalfWidth = triggerRight + triggerBounding.width.value / 2;

  const triggerTop = triggerBounding.y.value - popupOffset - popupTranslate[0];
  const triggerTopIncludeHalfHeight = triggerTop + triggerBounding.height.value / 2;

  const triggerBottom = windowSize.height.value - popupOffset - popupTranslate[1] - triggerBounding.bottom.value;
  const triggerBottomIncludeHalfHeight = triggerBottom + triggerBounding.height.value / 2;

  // Allow position.
  const allowLeft = triggerLeft - wrapperSize.width > boundaryPadding;
  const allowLeftWithHalf = triggerLeftIncludeHalfWidth - wrapperSize.width / 2 > boundaryPadding;
  const allowLeftWithTrigger = triggerLeftIncludeWidth - wrapperSize.width > boundaryPadding;

  const allowRight = triggerRight - wrapperSize.width > boundaryPadding;
  const allowHalfRight = triggerRightIncludeHalfWidth - wrapperSize.width / 2 > boundaryPadding;
  const allowRightWithTrigger = triggerRightIncludeWidth - wrapperSize.width > boundaryPadding;

  const allowTop = triggerTop - wrapperSize.height > boundaryPadding;
  const allowHalfTop = triggerTopIncludeHalfHeight - wrapperSize.height / 2 > boundaryPadding;

  const allowBottom = triggerBottom - wrapperSize.height > boundaryPadding;
  const allowHalfBottom = triggerBottomIncludeHalfHeight - wrapperSize.height / 2 > boundaryPadding;

  const isAllow: Record<TriggerPosition, () => boolean> = {
    top: () => allowTop && allowLeftWithHalf && allowHalfRight,
    bottom: () => allowBottom && allowLeft && allowRight,
    left: () => allowLeft && allowHalfTop && allowHalfBottom,
    right: () => allowRight && allowHalfTop && allowHalfBottom,
    "bottom-left": () => allowBottom && allowRightWithTrigger,
    "bottom-right": () => allowBottom && allowLeftWithTrigger,
    "top-left": () => allowTop && allowRightWithTrigger,
    "top-right": () => allowTop && allowLeftWithTrigger,
    "upper-left": () => allowLeft && allowTop,
    "upper-right": () => allowRight && allowTop,
    "low-left": () => allowLeft && allowBottom,
    "low-right": () => allowRight && allowBottom,
  };

  // Check if the initial position is allowed
  const isInitialPositionAllowed = isAllow[position]();
  if (isInitialPositionAllowed) {
    return position;
  }

  // Find alternative positions
  const allowPositions: TriggerPosition[] = [];
  for (let i = 0; i < positionArr.length; i++) {
    const pos = positionArr[i];
    if (pos === position) continue;

    // Use type assertion to ensure pos is not undefined
    const positionKey = pos as TriggerPosition;
    if (isAllow[positionKey]()) {
      allowPositions.push(positionKey);
    }
  }

  return allowPositions.length === 0 ? position : allowPositions[0]!;
};

/**
 * Get the popup position info.
 * @param el
 * @param position
 * @param wrapperSize
 * @param popupTranslate
 * @param popupOffset
 * @param autoFitWidth
 * @returns: PositionInfo
 */
export const getPositionData = (
  el: Element,
  position: TriggerPosition,
  wrapperSize: SizeInfo,
  popupTranslate: [number, number] = [0, 0],
  popupOffset: number = 0,
  autoFitWidth?: boolean
): PositionInfo => {
  if (!position) {
    throw new Error("Position cannot be empty or undefined.");
  }

  let positionData: PositionInfo = new PositionInfo();
  const clientRect = el?.getBoundingClientRect();
  if (!clientRect) return positionData;

  const { top, left, width, height } = clientRect;
  const wrapperWidth = autoFitWidth ? width : wrapperSize.width;

  // getBoundingClientRect 返回视口坐标，需加上页面滚动偏移转为文档坐标
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft || 0;

  positionData.top = getTopPosition(position, top + scrollTop, height, popupOffset, wrapperSize, popupTranslate[1]);
  positionData.left = getLeftPosition(position, left + scrollLeft, width, wrapperWidth, popupOffset, popupTranslate[0]);
  positionData.width = width;
  return positionData;
};

const getLeftPosition = (
  position: TriggerPosition,
  left: number,
  width: number,
  wrapperWidth: number,
  popupOffset: number,
  translate: number = 0
): number => {
  // left 已是文档坐标（视口 left + scrollLeft），直接计算弹层位置
  const centerLeft = left + width / 2 - wrapperWidth / 2 + translate;
  const leftWithPopup = left - wrapperWidth - popupOffset + translate;
  const rightWithPopup = left + width + popupOffset + translate;

  return {
    top: centerLeft,
    bottom: centerLeft,
    left: leftWithPopup,
    right: rightWithPopup,
    "top-left": left + translate,
    "bottom-left": left + translate,
    "top-right": left + width - wrapperWidth + translate,
    "bottom-right": left + width - wrapperWidth + translate,
    "upper-left": left - wrapperWidth + popupOffset + translate,
    "low-left": left - wrapperWidth + popupOffset + translate,
    "upper-right": left + width + popupOffset + translate,
    "low-right": left + width + popupOffset + translate,
  }[position];
};

const getTopPosition = (
  position: string,
  top: number,
  height: number,
  popupOffset: number,
  wrapperSize: SizeInfo,
  translate: number = 0
): number => {
  // top 已是文档坐标（视口 top + scrollTop），直接计算弹层位置
  const topPosition = {
    down: top + popupOffset + height + translate,
    middle: top + height / 2 - wrapperSize.height / 2 + translate,
    up: top - popupOffset - wrapperSize.height + translate,
  };

  const positions = position.split("-");
  for (const pos of positions) {
    if (pos === "bottom" || pos === "low") {
      return topPosition["down"];
    } else if (pos === "top" || pos === "upper") {
      return topPosition["up"];
    }
  }

  return topPosition["middle"];
};

/**
 * Get wrapper element width and height.
 * @param el
 * @returns: { width, height }
 */
export const getWrapperSize = (el: Element): SizeInfo => {
  const originalStyle = el.getAttribute("style");
  const baseStyle = originalStyle ? `${originalStyle};` : "";

  el.setAttribute("style", `${baseStyle}display:block;opacity:0;visibility:hidden;`);
  const { width, height } = el && el.getBoundingClientRect();

  if (originalStyle === null) {
    el.removeAttribute("style");
  } else {
    el.setAttribute("style", originalStyle);
  }
  return { width, height };
};

/**
 * Get style text.
 * @param top
 * @param left
 * @param visible
 * @param width
 * @returns string
 */
export const getWrapperPositionStyle = (top: number, left: number, visible: boolean, width?: number, zIndex?: number): string => {
  if (isNaN(top) || isNaN(left)) {
    throw new Error("Invalid top or left value");
  }

  const topStr = top.toString();
  const leftStr = left.toString();

  let innerStyleStr = `position:absolute;top:${topStr}px;left:${leftStr}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px;`);
  zIndex && (innerStyleStr += `z-index:${zIndex};`);

  return innerStyleStr;
};
