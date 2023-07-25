declare const _sfc_main: import("vue").DefineComponent<{
    /** 对话框显示状态 */
    visible: {
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
}, {
    name: string;
    cls: import("vue").ComputedRef<string[]>;
    containerVisable: import("vue").Ref<boolean>;
    handleMaskClick: () => void;
    handleCancle: () => void;
    handleOk: () => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "ok" | "cancle")[], "update:visible" | "ok" | "cancle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 对话框显示状态 */
    visible: {
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
}>> & {
    "onUpdate:visible"?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
    onCancle?: (...args: any[]) => any;
}, {
    border: boolean;
    title: string;
    visible: boolean;
    titleAlign: string;
    width: string;
    top: string;
    hideFooter: boolean;
    hideClose: boolean;
    maskClosable: boolean;
}, {}>;
export default _sfc_main;
