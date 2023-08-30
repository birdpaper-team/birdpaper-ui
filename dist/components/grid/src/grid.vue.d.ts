import { PropType } from "vue";
import { Align, Justify } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 栏位间隔 Field spacing */
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** 水平对齐方式 Horizontal alignment */
    justify: {
        type: PropType<Justify>;
        default: string;
    };
    /** 垂直对齐方式 Vertical alignment */
    align: {
        type: PropType<Align>;
        default: string;
    };
}, {
    rowRef: import("vue").Ref<any>;
    name: string;
    cls: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 栏位间隔 Field spacing */
    gutter: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** 水平对齐方式 Horizontal alignment */
    justify: {
        type: PropType<Justify>;
        default: string;
    };
    /** 垂直对齐方式 Vertical alignment */
    align: {
        type: PropType<Align>;
        default: string;
    };
}>>, {
    justify: Justify;
    align: Align;
    gutter: string | number;
}, {}>;
export default _sfc_main;
