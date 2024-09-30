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
  popupTranslate: [number, number] = [0, 0]
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
  const allowLeft = triggerLeft - wrapperSize.width > 0;
  const allowLeftWithHalf = triggerLeftIncludeHalfWidth - wrapperSize.width / 2 > 0;
  const allowLeftWithTrigger = triggerLeftIncludeWidth - wrapperSize.width > 0;

  const allowRight = triggerRight - wrapperSize.width > 0;
  const allowHalfRight = triggerRightIncludeHalfWidth - wrapperSize.width / 2 > 0;
  const allowRightWithTrigger = triggerRightIncludeWidth - wrapperSize.width > 0;

  const allowTop = triggerTop - wrapperSize.height > 0;
  const allowHalfTop = triggerTopIncludeHalfHeight - wrapperSize.height / 2 > 0;

  const allowBottom = triggerBottom - wrapperSize.height > 0;
  const allowHalfBottom = triggerBottomIncludeHalfHeight - wrapperSize.height / 2 > 0;

  const isAllow = {
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

  let allowPosition: TriggerPosition[] = [position];
  if (!isAllow[position]()) {
    allowPosition = [];

    for (let i = 0; i < positionArr.length; i++) {
      if (positionArr[i] === position) continue;

      if (isAllow[positionArr[i]]()) {
        allowPosition.push(positionArr[i]);
      }
    }
  }

  return allowPosition.length === 0 ? position : allowPosition[0];
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
  const clientRect = el && el?.getBoundingClientRect();
  if (!clientRect) return positionData;

  const { top, left, width, height } = clientRect;
  const scrollTop = document.documentElement.scrollTop || 0;
  const wrapperWidth = autoFitWidth ? width : wrapperSize.width;

  positionData.top = getTopPosition(position, top, scrollTop, popupOffset, height, wrapperSize, popupTranslate[1]);
  positionData.left = getLeftPosition(position, left, width, wrapperWidth, popupOffset, popupTranslate[0]);
  positionData.width = width;
  return positionData;
};

const getLeftPosition = (
  position,
  left: number,
  width: number,
  wrapperWidth: number,
  popupOffset: number,
  translate: number = 0
) => {
  const baseLeft = left + translate;
  const centerLeft = left + width / 2 - wrapperWidth / 2 + translate;
  const leftWithPopup = left - wrapperWidth - popupOffset + translate;
  const rightWithPopup = left + width + popupOffset + translate;

  return {
    top: centerLeft,
    bottom: centerLeft,
    left: leftWithPopup,
    right: rightWithPopup,
    "top-left": baseLeft,
    "bottom-left": baseLeft,
    "top-right": left + width - wrapperWidth + translate,
    "bottom-right": left + width - wrapperWidth + translate,
    "upper-left": left - wrapperWidth + translate,
    "low-left": left - wrapperWidth + translate,
    "upper-right": left + width + translate,
    "low-right": left + width + translate,
  }[position];
};

const getTopPosition = (
  position: string,
  top: number,
  scrollTop: number,
  popupOffset: number,
  height: number,
  wrapperSize: SizeInfo,
  translate: number = 0
) => {
  const topPosition = {
    down: top + scrollTop + popupOffset + height + translate,
    middle: top + scrollTop + height / 2 - wrapperSize.height / 2 + translate,
    up: top + scrollTop - popupOffset - wrapperSize.height + translate,
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
  el.setAttribute("style", `display:block;opacity:0;visibility: hidden;`);
  const { width, height } = el && el?.getBoundingClientRect();

  el.setAttribute("style", `display:none`);
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
export const getWrapperPositionStyle = (top: number, left: number, visible: boolean, width?: number): string => {
  let innerStyleStr = `top:${top}px;left:${left}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px`);

  return innerStyleStr;
};
