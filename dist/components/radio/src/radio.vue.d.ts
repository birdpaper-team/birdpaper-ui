import { PropType } from "vue";
import { RadioType } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 单选框绑定值 */
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 选项的值 */
    value: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 单选框类型 */
    type: {
        type: PropType<RadioType>;
        default: string;
    };
}, {
    name: string;
    handleInput: () => void;
    isCheck: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 单选框绑定值 */
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 选项的值 */
    value: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 是否禁用 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 单选框类型 */
    type: {
        type: PropType<RadioType>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    value: string | number | boolean;
    type: RadioType;
    disabled: boolean;
    modelValue: string | number | boolean;
}, {}>;
export default _sfc_main;
