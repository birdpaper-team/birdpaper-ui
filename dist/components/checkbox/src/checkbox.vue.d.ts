import { PropType } from "vue";
import { CheckboxValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<CheckboxValue>;
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 复选框的值 */
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
}, {
    cls: import("vue").ComputedRef<string[]>;
    name: string;
    isCheck: import("vue").ComputedRef<boolean>;
    handleClick: () => false | void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<CheckboxValue>;
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 复选框的值 */
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    disabled: boolean;
    modelValue: CheckboxValue;
}, {}>;
export default _sfc_main;
