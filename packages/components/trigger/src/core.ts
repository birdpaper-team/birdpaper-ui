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
  position: TriggerPosition,
  left: number,
  width: number,
  wrapperWidth: number,
  popupOffset: number,
  translate: number = 0
): number => {
  const containerRect = document.documentElement.getBoundingClientRect();

  const baseLeft = left + translate - containerRect.left;
  const centerLeft = left + width / 2 - wrapperWidth / 2 + translate - containerRect.left;
  const leftWithPopup = left - wrapperWidth - popupOffset + translate - containerRect.left;
  const rightWithPopup = left + width + popupOffset + translate - containerRect.left;

  return {
    top: centerLeft,
    bottom: centerLeft,
    left: leftWithPopup,
    right: rightWithPopup,
    "top-left": baseLeft,
    "bottom-left": baseLeft,
    "top-right": left + width - wrapperWidth + translate - containerRect.left,
    "bottom-right": left + width - wrapperWidth + translate - containerRect.left,
    "upper-left": left - wrapperWidth + translate,
    "low-left": left - wrapperWidth + translate,
    "upper-right": left + width + translate - containerRect.left,
    "low-right": left + width + translate - containerRect.left,
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
): number => {
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
  const { width, height } = el && el.getBoundingClientRect();

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
  if (isNaN(top) || isNaN(left)) {
    throw new Error("Invalid top or left value");
  }

  const topStr = top.toString();
  const leftStr = left.toString();

  let innerStyleStr = `top:${topStr}px;left:${leftStr}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px`);

  return innerStyleStr;
};
