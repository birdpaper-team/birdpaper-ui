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

export const getPositionData = (
  el: Element,
  position: TriggerPosition,
  wrapperSize: SizeInfo,
  popupTranslate: [number, number] = [0, 0],
  popupOffset: number,
  autoFitWidth?: boolean
): PositionInfo => {
  const rect = el && el?.getBoundingClientRect();
  if (!rect) return new PositionInfo();

  const { top, left, width, height } = rect;
  const scrollTop = document.documentElement.scrollTop || 0;
  const wrapperWidth = autoFitWidth ? width : wrapperSize.width;

  let positionData: PositionInfo = new PositionInfo();
  switch (position) {
    case "top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height + popupTranslate[1] || 0,
        left: left + width / 2 - wrapperWidth / 2 + popupTranslate[0] || 0,
      };
      break;
    case "bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset + popupTranslate[1] || 0,
        left: left + width / 2 - wrapperWidth / 2 + popupTranslate[0] || 0,
      };
      break;
    case "left":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2 + popupTranslate[1] || 0,
        left: left - popupOffset - wrapperWidth + popupTranslate[0] || 0,
      };
      break;
    case "right":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2 + popupTranslate[1] || 0,
        left: left + width + popupOffset + popupTranslate[0] || 0,
      };
      break;
    case "left-top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height + popupTranslate[1] || 0,
        left: left + popupTranslate[0] || 0,
      };
      break;
    case "left-bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset + popupTranslate[1] || 0,
        left: left + popupTranslate[0] || 0,
      };
      break;
    case "right-top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height + popupTranslate[1] || 0,
        left: left - wrapperWidth + width + popupTranslate[0] || 0,
      };
      break;
    case "right-bottom":
      positionData = {
        top: top + scrollTop + popupOffset + height + popupTranslate[1] || 0,
        left: left - wrapperWidth + width + popupTranslate[0] || 0,
      };
      break;
  }

  positionData.width = width;
  return positionData;
};

export const getWrapperSize = (el: Element): SizeInfo => {
  el.setAttribute("style", `display:block;opacity:0;visibility: hidden;`);
  const { width, height } = el && el?.getBoundingClientRect();

  el.setAttribute("style", `display:none`);
  return { width, height };
};

export const getWrapperPositionStyle = (top: number, left: number, visible: boolean, width?: number): string => {
  let innerStyleStr = `top:${top}px;left:${left}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px`);

  return innerStyleStr;
};
