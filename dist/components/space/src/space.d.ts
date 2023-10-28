import { PropType } from "vue";
import { SizeType, SpaceType } from "./types";
declare const _default: import("vue").DefineComponent<{
    /** 间距大小 */
    size: {
        type: PropType<SizeType>;
        default: string;
    };
    /** 布局类型 */
    type: {
        type: PropType<SpaceType>;
        default: string;
    };
    /** 水平对齐方式 */
    justify: {
        type: StringConstructor;
        default: string;
    };
    /** 垂直对齐方式 */
    align: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 间距大小 */
    size: {
        type: PropType<SizeType>;
        default: string;
    };
    /** 布局类型 */
    type: {
        type: PropType<SpaceType>;
        default: string;
    };
    /** 水平对齐方式 */
    justify: {
        type: StringConstructor;
        default: string;
    };
    /** 垂直对齐方式 */
    align: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: SpaceType;
    size: SizeType;
    align: string;
    justify: string;
}, {}>;
export default _default;
