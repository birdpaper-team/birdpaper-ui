import { App } from "vue";
import _button from "./src/button.vue";
export type { ButtonShape, ButtonType, ButtonSize, ButtonStatus } from "./src/types";
declare const Button: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            type?: import("./src/types").ButtonType;
            size?: import("./src/types").ButtonSize;
            shape?: import("./src/types").ButtonShape;
            status?: import("./src/types").ButtonStatus;
            loading?: boolean;
            disabled?: boolean;
            icon?: string;
            block?: boolean;
            onClick?: (...args: any[]) => any;
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
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<import("./src/types").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./src/types").ButtonSize>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("./src/types").ButtonShape>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("./src/types").ButtonStatus>;
                default: string;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            icon: {
                type: StringConstructor;
                default: string;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        }, {
            isDisabled: import("vue").ComputedRef<boolean>;
            btnClass: import("vue").ComputedRef<(string | {
                "has-default-slot": boolean;
                "is-block"?: undefined;
            } | {
                "is-block": boolean;
                "has-default-slot"?: undefined;
            })[]>;
            btnIcon: import("vue").ComputedRef<string>;
            onClick: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            type: import("./src/types").ButtonType;
            size: import("./src/types").ButtonSize;
            shape: import("./src/types").ButtonShape;
            status: import("./src/types").ButtonStatus;
            loading: boolean;
            disabled: boolean;
            icon: string;
            block: boolean;
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
        type: {
            type: import("vue").PropType<import("./src/types").ButtonType>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("./src/types").ButtonSize>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("./src/types").ButtonShape>;
            default: string;
        };
        status: {
            type: import("vue").PropType<import("./src/types").ButtonStatus>;
            default: string;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: StringConstructor;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        isDisabled: import("vue").ComputedRef<boolean>;
        btnClass: import("vue").ComputedRef<(string | {
            "has-default-slot": boolean;
            "is-block"?: undefined;
        } | {
            "is-block": boolean;
            "has-default-slot"?: undefined;
        })[]>;
        btnIcon: import("vue").ComputedRef<string>;
        onClick: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./src/types").ButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./src/types").ButtonSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./src/types").ButtonShape>;
        default: string;
    };
    status: {
        type: import("vue").PropType<import("./src/types").ButtonStatus>;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    isDisabled: import("vue").ComputedRef<boolean>;
    btnClass: import("vue").ComputedRef<(string | {
        "has-default-slot": boolean;
        "is-block"?: undefined;
    } | {
        "is-block": boolean;
        "has-default-slot"?: undefined;
    })[]>;
    btnIcon: import("vue").ComputedRef<string>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    type: import("./src/types").ButtonType;
    size: import("./src/types").ButtonSize;
    shape: import("./src/types").ButtonShape;
    status: import("./src/types").ButtonStatus;
    loading: boolean;
    disabled: boolean;
    icon: string;
    block: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type ButtonInstance = InstanceType<typeof _button>;
export default Button;
