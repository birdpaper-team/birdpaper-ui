import { App } from "vue";
import _modal from "./src/modal.vue";
declare const Modal: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            modelValue?: boolean;
            onBeforeOk?: Function;
            border?: boolean;
            title?: string;
            width?: string;
            titleAlign?: string;
            top?: string;
            hideFooter?: boolean;
            hideClose?: boolean;
            maskClosable?: boolean;
            okLoading?: boolean;
            okText?: string;
            cancleText?: string;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            key?: string | number | symbol;
            ref?: import("vue").VNodeRef;
            ref_for?: boolean;
            ref_key?: string;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            class?: unknown;
            style?: unknown;
            onOk?: (...args: any[]) => any;
            onCancle?: (...args: any[]) => any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: "update:modelValue" | "ok" | "cancle", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            titleAlign: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: StringConstructor;
                default: string;
            };
            top: {
                type: StringConstructor;
                default: string;
            };
            hideFooter: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            okLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: {
                type: StringConstructor;
                default: string;
            };
            cancleText: {
                type: StringConstructor;
                default: string;
            };
            onBeforeOk: {
                type: FunctionConstructor;
                default: () => boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onOk?: (...args: any[]) => any;
            onCancle?: (...args: any[]) => any;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "ok" | "cancle")[], string, {
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
        }, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        titleAlign: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: StringConstructor;
            default: string;
        };
        top: {
            type: StringConstructor;
            default: string;
        };
        hideFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: boolean;
        };
        okLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        okText: {
            type: StringConstructor;
            default: string;
        };
        cancleText: {
            type: StringConstructor;
            default: string;
        };
        onBeforeOk: {
            type: FunctionConstructor;
            default: () => boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onOk?: (...args: any[]) => any;
        onCancle?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titleAlign: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    hideFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancleText: {
        type: StringConstructor;
        default: string;
    };
    onBeforeOk: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
    onCancle?: (...args: any[]) => any;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "ok" | "cancle")[], "update:modelValue" | "ok" | "cancle", {
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type ModalInstance = InstanceType<typeof _modal>;
export default Modal;
