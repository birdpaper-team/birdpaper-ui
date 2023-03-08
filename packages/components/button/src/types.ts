/**
 * @ Author: Sam
 * @ Create Time: 2023-02-23 04:14:35
 * @ Modified by: Sam
 * @ Modified time: 2023-03-08 16:11:25
 * @ Description: Button Types
 */

/** 按钮类型，普通、主要、线框、虚线、文本 */
export type ButtonType = "normal" | "primary" | "plain" | "dashed" | "text";

/** 按钮形状，矩形、圆滑 */
export type ButtonShape = "square" | "round" | "circle";

/** 按钮尺寸，迷你、小型、普通、大型 */
export type ButtonSize = "mini" | "small" | "normal" | "large";

/** 按钮状态，普通、主要、成功、警示、危险 */
export type ButtonStatus = "normal" | "primary" | "success" | "warning" | "danger";
