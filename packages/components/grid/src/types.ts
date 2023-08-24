/** 水平对齐方式类型 */
export type Justify = "start" | "center" | "end" | "around" | "between" | "evenly";

/** 垂直对齐方式类型 */
export type Align = "start" | "center" | "end" | "baseline" | "stretch";

/** 栏位 */
export type ColSpan = string | number;

/** 偏移量 */
export type ColOffset = string | number;

/** 响应式配置 */
export type ColResponsive = number | { span: ColSpan; offset: ColOffset };
