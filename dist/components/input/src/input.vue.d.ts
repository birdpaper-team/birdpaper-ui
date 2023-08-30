import { PropType } from "vue";
import { InputSize, InputType } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** 输入框类型 Type of the input */
    type: {
        type: PropType<InputType>;
        default: string;
    };
    /** 输入框尺寸 Size of the input */
    size: {
        type: PropType<InputSize>;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否只读状态 Readonly or not */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否警示状态 Danger or not */
    isDanger: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text*/
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** 限制输入最大长度 Restricts the maximum input length */
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否允许清空 Clearable or not */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    inpRef: import("vue").Ref<any>;
    inpType: import("vue").ComputedRef<InputType>;
    inpClass: import("vue").ComputedRef<string[]>;
    showClear: import("vue").ComputedRef<boolean>;
    handleClear: () => void;
    handleFocus: () => any;
    showPassword: import("vue").Ref<boolean>;
    showWordLimit: import("vue").ComputedRef<boolean>;
    limitText: import("vue").ComputedRef<string>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    handleBlur: () => any;
    onFocus: () => void;
    onBlur: () => void;
    onKeypress: () => void;
    onKeyup: () => void;
    onInput: (e: Event) => void;
    triggerPassword: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], "update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** 输入框类型 Type of the input */
    type: {
        type: PropType<InputType>;
        default: string;
    };
    /** 输入框尺寸 Size of the input */
    size: {
        type: PropType<InputSize>;
        default: string;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否只读状态 Readonly or not */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否警示状态 Danger or not */
    isDanger: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 占位提示文字 The placeholder text*/
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** 限制输入最大长度 Restricts the maximum input length */
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否允许清空 Clearable or not */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onInput?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onKeypress?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
}, {
    type: InputType;
    size: InputSize;
    disabled: boolean;
    modelValue: string | number;
    readonly: boolean;
    isDanger: boolean;
    placeholder: string;
    maxlength: number;
    showLimit: boolean;
    clearable: boolean;
}, {}>;
export default _sfc_main;
