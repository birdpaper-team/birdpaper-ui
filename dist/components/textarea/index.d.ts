import { App } from "vue";
import _textarea from "./src/textarea.vue";
declare const Textarea: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean;
            modelValue?: string;
            readonly?: boolean;
            isDanger?: boolean;
            placeholder?: string;
            maxlength?: number;
            showLimit?: boolean;
            rows?: number;
            onInput?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onKeypress?: (...args: any[]) => any;
            onKeyup?: (...args: any[]) => any;
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
        $emit: (event: "update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            isDanger: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            maxlength: {
                type: NumberConstructor;
                default: any;
            };
            rows: {
                type: NumberConstructor;
                default: number;
            };
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], string, {
            disabled: boolean;
            modelValue: string;
            readonly: boolean;
            isDanger: boolean;
            placeholder: string;
            maxlength: number;
            showLimit: boolean;
            rows: number;
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
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        isDanger: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        maxlength: {
            type: NumberConstructor;
            default: any;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
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
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    isDanger: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], "update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup", {
    disabled: boolean;
    modelValue: string;
    readonly: boolean;
    isDanger: boolean;
    placeholder: string;
    maxlength: number;
    showLimit: boolean;
    rows: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type TextareaInstance = InstanceType<typeof _textarea>;
export default Textarea;
