/** 水平对齐方式类型 */
export declare type Justify = "start" | "center" | "end" | "around" | "between" | "evenly";
/** 垂直对齐方式类型 */
export declare type Align = "start" | "center" | "end" | "baseline" | "stretch";
/** 栏位 */
export declare type ColSpan = string | number;
/** 偏移量 */
export declare type ColOffset = string | number;
/** 响应式配置 */
export declare type ColResponsive = number | {
    span: ColSpan;
    offset: ColOffset;
};
