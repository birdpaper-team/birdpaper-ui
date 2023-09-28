import { PropType } from "vue";
import { SelectBindValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** 是否允许清空 Clearable or not */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    inpRef: import("vue").Ref<any>;
    currentSelect: {
        label: string;
        value: SelectBindValue;
    };
    isFocus: import("vue").Ref<boolean>;
    clsName: import("vue").ComputedRef<string[]>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    showClear: import("vue").Ref<boolean>;
    hancleClear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** 是否允许清空 Clearable or not */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    disabled: boolean;
    modelValue: SelectBindValue;
    placeholder: string;
    clearable: boolean;
}, {}>;
export default _sfc_main;
