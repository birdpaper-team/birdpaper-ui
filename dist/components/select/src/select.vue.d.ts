import { PropType } from "vue";
import { SelectBindValue } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    selectRef: import("vue").Ref<any>;
    inpRef: import("vue").Ref<any>;
    optionBoxRef: import("vue").Ref<any>;
    inpVal: {
        label: string;
        value: SelectBindValue;
    };
    isFocus: import("vue").Ref<boolean>;
    handleClick: () => void;
    onClickOutside: () => void;
    onMouseleave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: PropType<SelectBindValue>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
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
