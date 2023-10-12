declare const _sfc_main: import("vue").DefineComponent<{
    /** 绑定值 Binding value */
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 开启时的值 */
    checkValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 关闭时的值 */
    uncheckValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 开启时的文本内容 */
    checkText: {
        type: StringConstructor;
        default: string;
    };
    /** 关闭时的文本内容 */
    uncheckText: {
        type: StringConstructor;
        default: string;
    };
    /** 触发改变前的回调，返回 false 则中断 */
    onBeforeOk: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
    isCheck: import("vue").ComputedRef<boolean>;
    loading: import("vue").Ref<boolean>;
    handleClick: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 绑定值 Binding value */
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 是否禁用 Disabled or not */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 开启时的值 */
    checkValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 关闭时的值 */
    uncheckValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 开启时的文本内容 */
    checkText: {
        type: StringConstructor;
        default: string;
    };
    /** 关闭时的文本内容 */
    uncheckText: {
        type: StringConstructor;
        default: string;
    };
    /** 触发改变前的回调，返回 false 则中断 */
    onBeforeOk: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    disabled: boolean;
    modelValue: string | number | boolean;
    checkValue: string | number | boolean;
    uncheckValue: string | number | boolean;
    checkText: string;
    uncheckText: string;
    onBeforeOk: Function;
}, {}>;
export default _sfc_main;
