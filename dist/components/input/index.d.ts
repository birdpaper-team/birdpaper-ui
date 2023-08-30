import { App } from "vue";
import _input from "./src/input.vue";
export type { InputSize, InputType } from "./src/types";
declare const Input: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            type?: import("./src/types").InputType;
            size?: import("./src/types").InputSize;
            disabled?: boolean;
            modelValue?: string | number;
            readonly?: boolean;
            isDanger?: boolean;
            placeholder?: string;
            maxlength?: number;
            showLimit?: boolean;
            clearable?: boolean;
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
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            type: {
                type: import("vue").PropType<import("./src/types").InputType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./src/types").InputSize>;
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
            showLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
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
            inpRef: import("vue").Ref<any>;
            inpType: import("vue").ComputedRef<import("./src/types").InputType>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], string, {
            type: import("./src/types").InputType;
            size: import("./src/types").InputSize;
            disabled: boolean;
            modelValue: string | number;
            readonly: boolean;
            isDanger: boolean;
            placeholder: string;
            maxlength: number;
            showLimit: boolean;
            clearable: boolean;
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
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("./src/types").InputType>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("./src/types").InputSize>;
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
        showLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
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
    } & import("vue").ShallowUnwrapRef<{
        inpRef: import("vue").Ref<any>;
        inpType: import("vue").ComputedRef<import("./src/types").InputType>;
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
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./src/types").InputType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./src/types").InputSize>;
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
    showLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    inpRef: import("vue").Ref<any>;
    inpType: import("vue").ComputedRef<import("./src/types").InputType>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup")[], "update:modelValue" | "input" | "focus" | "blur" | "keypress" | "keyup", {
    type: import("./src/types").InputType;
    size: import("./src/types").InputSize;
    disabled: boolean;
    modelValue: string | number;
    readonly: boolean;
    isDanger: boolean;
    placeholder: string;
    maxlength: number;
    showLimit: boolean;
    clearable: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type InputInstance = InstanceType<typeof _input>;
export default Input;
