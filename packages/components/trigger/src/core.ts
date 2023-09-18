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
/**
 * 获取弹层定位信息
 * @param el 包含元素
 * @param position 定位类型
 * @param wrapperSize 容器尺寸
 * @param popupOffset 偏移量
 */
export const getPositionData = (
  el: Element,
  position: TriggerPosition,
  wrapperSize: SizeInfo,
  popupOffset?: number
): PositionInfo => {
  const rect = el && el?.getBoundingClientRect();
  if (!rect) return new PositionInfo();

  const { top, left, width, height } = rect;
  const scrollTop = document.documentElement.scrollTop || 0;

  let positionData: PositionInfo = new PositionInfo();
  switch (position) {
    case "top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height,
        left: left + width / 2 - wrapperSize.width / 2,
      };
      break;
    case "bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset,
        left: left + width / 2 - wrapperSize.width / 2,
      };
      break;
    case "left":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2,
        left: left - popupOffset - wrapperSize.width,
      };
      break;
    case "right":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2,
        left: left + width + popupOffset,
      };
      break;
    default:
      break;
  }

  positionData.width = width;
  return positionData;
};

/**
 * 获取容器尺寸
 * @param el 容器元素
 * @returns SizeInfo
 */
export const getWrapperSize = (el: Element): SizeInfo => {
  el.setAttribute("style", `display:block;opacity:0;visibility: hidden;`);
  const { width, height } = el && el?.getBoundingClientRect();

  el.setAttribute("style", `display:none`);
  return { width, height };
};

/**
 * 获取需要设置的定位样式
 * @param top 距离顶部
 * @param left 距离左侧
 * @param visible 是否 display
 * @param width 自定义宽度
 * @returns string
 */
export const getWrapperPositionStyle = (top: number, left: number, visible: boolean, width?: number): string => {
  let innerStyleStr = `top:${top}px;left:${left}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px`);

  return innerStyleStr;
};
