import { TriggerPosition } from "./types";

class PositionInfo {
  top: number = 0;
  left: number = 0;
  transform?: string;
  width?: number;
}
/**
 * 设置触发器定位信息
 * @param el 包含元素
 * @param position 定位类型
 * @param popupOffset 偏移量
 */
export const setPositionData = (el: Element, position: TriggerPosition, popupOffset?: number): PositionInfo => {
  const rect = el && el?.getBoundingClientRect();
  if (!rect) return new PositionInfo();

  const { top, left, width, height } = rect;
  const scrollTop = document.documentElement.scrollTop || 0;

  let positionData: PositionInfo = new PositionInfo();
  switch (position) {
    case "top":
      positionData = {
        top: top + scrollTop - popupOffset,
        left: left,
        transform: "translateY(-100%);",
      };
      break;
    case "bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset,
        left,
      };
      break;
    case "left":
      positionData = {
        top: top + height / 2 + scrollTop,
        left: left - popupOffset,
        transform: "translateX(-100%) translateY(-50%);",
      };
      break;
    case "right":
      positionData = {
        top: top + height / 2 + scrollTop,
        left: left + width + popupOffset,
        transform: "translateY(-50%);",
      };
      break;
    default:
      break;
  }

  positionData.width = width;

  return positionData;
};
