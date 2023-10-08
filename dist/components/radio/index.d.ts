import { App } from "vue";
import _radio from "./src/radio.vue";
import _radioGroup from "./src/radioGroup";
declare const Radio: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: string | number | boolean;
            type?: import("./src/type").RadioType;
            disabled?: boolean;
            modelValue?: string | number | boolean;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
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
        $emit: (event: "update:modelValue" | "change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            value: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("./src/type").RadioType>;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
        }, {
            name: string;
            handleInput: () => void;
            isCheck: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], string, {
            value: string | number | boolean;
            type: import("./src/type").RadioType;
            disabled: boolean;
            modelValue: string | number | boolean;
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
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        value: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<import("./src/type").RadioType>;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        name: string;
        handleInput: () => void;
        isCheck: import("vue").ComputedRef<boolean>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    value: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<import("./src/type").RadioType>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    name: string;
    handleInput: () => void;
    isCheck: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", {
    value: string | number | boolean;
    type: import("./src/type").RadioType;
    disabled: boolean;
    modelValue: string | number | boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type RadioInstance = InstanceType<typeof _radio>;
export declare type RadioGroupInstance = InstanceType<typeof _radioGroup>;
export default Radio;
