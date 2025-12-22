import { Component } from "vue";

// 使用const断言创建更严格的类型
export const ButtonType = {
  SECONDARY: "secondary",
  NORMAL: "normal",
  PLAIN: "plain",
  DASHED: "dashed",
  TEXT: "text"
} as const;

export type ButtonType = typeof ButtonType[keyof typeof ButtonType];

export const ButtonStatus = {
  GRAY: "gray",
  PRIMARY: "primary",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger"
} as const;

export type ButtonStatus = typeof ButtonStatus[keyof typeof ButtonStatus];

export const ButtonNavtiveType = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset"
} as const;

export type ButtonNavtiveType = typeof ButtonNavtiveType[keyof typeof ButtonNavtiveType];

export const ButtonShape = {
  SQUARE: "square",
  ROUND: "round",
  CIRCLE: "circle"
} as const;

export type ButtonShape = typeof ButtonShape[keyof typeof ButtonShape];

export const ButtonSize = {
  MINI: "mini",
  SMALL: "small",
  DEFAULT: "default",
  LARGE: "large"
} as const;

export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];

/**
 * @description 按钮图标 Button icon.
 */
export type ButtonIcon = Component;

/**
 * @description 按钮加载图标 Button loading icon, Number type which 1 to 5. Or the icon component.
 */
export type ButtonLoadingIcon = number | ButtonIcon;
