import { ExtractPropTypes } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 布局配置 The layout config */
    layout: {
        type: StringConstructor;
        default: string;
    };
    /** 总数 The total number of */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** 当前页 The current number of pages */
    current: {
        type: NumberConstructor;
        default: number;
    };
    /** 每页显示条数 Size of entries per page */
    pageSize: {
        type: NumberConstructor;
        default: () => number;
    };
    /** 每页显示条数的选项 Option setting to display number of entries per page */
    sizesList: {
        type: ArrayConstructor;
        default: () => number[];
    };
    /** 上一页按钮文案 Replace the icon displayed on the previous page */
    prevText: {
        type: StringConstructor;
        default: string;
    };
    /** 下一页按钮文案 Replace the icon displayed on the next page */
    nextText: {
        type: StringConstructor;
        default: string;
    };
    /** 最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21 */
    maxPager: {
        type: NumberConstructor;
        default: number;
    };
    /** 总条数文案 Replace the total copywriting templates */
    totalTmpString: {
        type: StringConstructor;
        default: string;
    };
    /** 页码跳转文案 Replace the jumper copywriting template */
    jumperTmpString: {
        type: StringConstructor;
        default: string;
    };
    /** 每页条数选项文案 Replace the sizes copywriting template */
    sizesTmpString: {
        type: StringConstructor;
        default: string;
    };
}, {
    name: string;
    componentsList: import("vue").ComputedRef<import("./types").PageinationComponent[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:current" | "update:pageSize" | "page-change" | "size-change")[], "update:current" | "update:pageSize" | "page-change" | "size-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    /** 布局配置 The layout config */
    layout: {
        type: StringConstructor;
        default: string;
    };
    /** 总数 The total number of */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** 当前页 The current number of pages */
    current: {
        type: NumberConstructor;
        default: number;
    };
    /** 每页显示条数 Size of entries per page */
    pageSize: {
        type: NumberConstructor;
        default: () => number;
    };
    /** 每页显示条数的选项 Option setting to display number of entries per page */
    sizesList: {
        type: ArrayConstructor;
        default: () => number[];
    };
    /** 上一页按钮文案 Replace the icon displayed on the previous page */
    prevText: {
        type: StringConstructor;
        default: string;
    };
    /** 下一页按钮文案 Replace the icon displayed on the next page */
    nextText: {
        type: StringConstructor;
        default: string;
    };
    /** 最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21 */
    maxPager: {
        type: NumberConstructor;
        default: number;
    };
    /** 总条数文案 Replace the total copywriting templates */
    totalTmpString: {
        type: StringConstructor;
        default: string;
    };
    /** 页码跳转文案 Replace the jumper copywriting template */
    jumperTmpString: {
        type: StringConstructor;
        default: string;
    };
    /** 每页条数选项文案 Replace the sizes copywriting template */
    sizesTmpString: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:current"?: (...args: any[]) => any;
    "onUpdate:pageSize"?: (...args: any[]) => any;
    "onPage-change"?: (...args: any[]) => any;
    "onSize-change"?: (...args: any[]) => any;
}, {
    layout: string;
    total: number;
    current: number;
    pageSize: number;
    sizesList: unknown[];
    prevText: string;
    nextText: string;
    maxPager: number;
    totalTmpString: string;
    jumperTmpString: string;
    sizesTmpString: string;
}, {}>;
export default _sfc_main;
