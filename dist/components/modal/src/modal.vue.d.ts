declare const _sfc_main: import("vue").DefineComponent<{
    /** 对话框显示状态 */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 对话框标题 */
    title: {
        type: StringConstructor;
        default: string;
    };
    /** 标题对齐方式 */
    titleAlign: {
        type: StringConstructor;
        default: string;
    };
    /** 对话框宽度 */
    width: {
        type: StringConstructor;
        default: string;
    };
    /** 对话框宽度 */
    top: {
        type: StringConstructor;
        default: string;
    };
    /** 是否隐藏底部区域 */
    hideFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否隐藏关闭图标 */
    hideClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否展示边框 */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 点击遮罩是否关闭 */
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 确认按钮是否处于加载状态 */
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 确定按钮内容 */
    okText: {
        type: StringConstructor;
        default: string;
    };
    /** 取消按钮内容 */
    cancleText: {
        type: StringConstructor;
        default: string;
    };
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
    confirmLoading: import("vue").Ref<boolean>;
    containerVisable: import("vue").Ref<boolean>;
    handleMaskClick: () => void;
    handleCancle: () => void;
    handleOk: () => Promise<void>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "ok" | "cancle")[], "update:modelValue" | "ok" | "cancle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 对话框显示状态 */
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 对话框标题 */
    title: {
        type: StringConstructor;
        default: string;
    };
    /** 标题对齐方式 */
    titleAlign: {
        type: StringConstructor;
        default: string;
    };
    /** 对话框宽度 */
    width: {
        type: StringConstructor;
        default: string;
    };
    /** 对话框宽度 */
    top: {
        type: StringConstructor;
        default: string;
    };
    /** 是否隐藏底部区域 */
    hideFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否隐藏关闭图标 */
    hideClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否展示边框 */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 点击遮罩是否关闭 */
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 确认按钮是否处于加载状态 */
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 确定按钮内容 */
    okText: {
        type: StringConstructor;
        default: string;
    };
    /** 取消按钮内容 */
    cancleText: {
        type: StringConstructor;
        default: string;
    };
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
    onCancle?: (...args: any[]) => any;
}, {
    modelValue: boolean;
    onBeforeOk: Function;
    border: boolean;
    title: string;
    width: string;
    titleAlign: string;
    top: string;
    hideFooter: boolean;
    hideClose: boolean;
    maskClosable: boolean;
    okLoading: boolean;
    okText: string;
    cancleText: string;
}, {}>;
export default _sfc_main;
