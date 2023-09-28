import { PropType } from "vue";
import { SelectBindValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 选项的值 */
    value: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    /** 选项文本内容 */
    label: {
        type: StringConstructor;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    clsName: import("vue").ComputedRef<string[]>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 选项的值 */
    value: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    /** 选项文本内容 */
    label: {
        type: StringConstructor;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    value: SelectBindValue;
    disabled: boolean;
    label: string;
}, {}>;
export default _sfc_main;
