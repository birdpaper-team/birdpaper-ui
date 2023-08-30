import { PropType } from "vue";
import { ColResponsive } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** 偏移量 Number of offset*/
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    xs: {
        type: PropType<ColResponsive>;
    };
    sm: {
        type: PropType<ColResponsive>;
    };
    md: {
        type: PropType<ColResponsive>;
    };
    lg: {
        type: PropType<ColResponsive>;
    };
    xl: {
        type: PropType<ColResponsive>;
    };
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** 偏移量 Number of offset*/
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    xs: {
        type: PropType<ColResponsive>;
    };
    sm: {
        type: PropType<ColResponsive>;
    };
    md: {
        type: PropType<ColResponsive>;
    };
    lg: {
        type: PropType<ColResponsive>;
    };
    xl: {
        type: PropType<ColResponsive>;
    };
}>>, {
    span: string | number;
    offset: string | number;
}, {}>;
export default _sfc_main;
