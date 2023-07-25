declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: StringConstructor;
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
    /** 行数 */
    rows: {
        type: NumberConstructor;
        default: number;
    };
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    name: string;
    inpRef: import("vue").Ref<any>;
    inpClass: import("vue").ComputedRef<string[]>;
    getStatus: () => "normal" | "danger" | "disabled" | "readonly";
    showWordLimit: import("vue").ComputedRef<boolean>;
    limitText: import("vue").ComputedRef<string>;
    onFocus: () => void;
    onBlur: () => void;
    onKeypress: () => void;
    onKeyup: () => void;
    onInput: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], "update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: StringConstructor;
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
    /** 行数 */
    rows: {
        type: NumberConstructor;
        default: number;
    };
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: {
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
    disabled: boolean;
    modelValue: string;
    readonly: boolean;
    isDanger: boolean;
    placeholder: string;
    maxlength: number;
    showLimit: boolean;
    rows: number;
}, {}>;
export default _sfc_main;
