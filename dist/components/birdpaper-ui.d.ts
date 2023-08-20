import { App } from "vue";
export { default as Message } from "./message";
declare const _default: {
    install: (app: App<any>) => void;
    Button: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("./button").ButtonType;
                size?: import("./button").ButtonSize;
                shape?: import("./button").ButtonShape;
                status?: import("./button").ButtonStatus;
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
                    type: import("vue").PropType<import("./button").ButtonType>;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("./button").ButtonSize>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("./button").ButtonShape>;
                    default: string;
                };
                status: {
                    type: import("vue").PropType<import("./button").ButtonStatus>;
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
                type: import("./button").ButtonType;
                size: import("./button").ButtonSize;
                shape: import("./button").ButtonShape;
                status: import("./button").ButtonStatus;
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
                type: import("vue").PropType<import("./button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./button").ButtonSize>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("./button").ButtonShape>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("./button").ButtonStatus>;
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
            type: import("vue").PropType<import("./button").ButtonType>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("./button").ButtonSize>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("./button").ButtonShape>;
            default: string;
        };
        status: {
            type: import("vue").PropType<import("./button").ButtonStatus>;
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
        type: import("./button").ButtonType;
        size: import("./button").ButtonSize;
        shape: import("./button").ButtonShape;
        status: import("./button").ButtonStatus;
        loading: boolean;
        disabled: boolean;
        icon: string;
        block: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Input: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("./input").InputType;
                size?: import("./input").InputSize;
                disabled?: boolean;
                modelValue?: string;
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
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: import("vue").PropType<import("./input").InputType>;
                    default: import("./input").InputType;
                };
                size: {
                    type: import("vue").PropType<import("./input").InputSize>;
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
                inpType: import("vue").ComputedRef<import("./input").InputType>;
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
                type: import("./input").InputType;
                size: import("./input").InputSize;
                disabled: boolean;
                modelValue: string;
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
                type: StringConstructor;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("./input").InputType>;
                default: import("./input").InputType;
            };
            size: {
                type: import("vue").PropType<import("./input").InputSize>;
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
            inpType: import("vue").ComputedRef<import("./input").InputType>;
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
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("./input").InputType>;
            default: import("./input").InputType;
        };
        size: {
            type: import("vue").PropType<import("./input").InputSize>;
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
        inpType: import("vue").ComputedRef<import("./input").InputType>;
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
        type: import("./input").InputType;
        size: import("./input").InputSize;
        disabled: boolean;
        modelValue: string;
        readonly: boolean;
        isDanger: boolean;
        placeholder: string;
        maxlength: number;
        showLimit: boolean;
        clearable: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Textarea: {
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
        install: (app: App<any>) => void;
    };
    Radio: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                value?: string | number | boolean;
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
            }>> & {
                "onUpdate:modelValue"?: (...args: any[]) => any;
                onChange?: (...args: any[]) => any;
            }, {
                name: string;
                handleInput: () => void;
                isCheck: import("vue").ComputedRef<boolean>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], string, {
                value: string | number | boolean;
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
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    }, {
        name: string;
        handleInput: () => void;
        isCheck: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", {
        value: string | number | boolean;
        disabled: boolean;
        modelValue: string | number | boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Checkbox: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                disabled?: boolean;
                modelValue?: boolean;
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
            $emit: (event: "update:modelValue", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                "onUpdate:modelValue"?: (...args: any[]) => any;
            }, {
                cls: import("vue").ComputedRef<string[]>;
                name: string;
                isCheck: import("vue").ComputedRef<boolean>;
                handleClick: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
                disabled: boolean;
                modelValue: boolean;
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
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            cls: import("vue").ComputedRef<string[]>;
            name: string;
            isCheck: import("vue").ComputedRef<boolean>;
            handleClick: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        cls: import("vue").ComputedRef<string[]>;
        name: string;
        isCheck: import("vue").ComputedRef<boolean>;
        handleClick: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
        disabled: boolean;
        modelValue: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Switch: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                disabled?: boolean;
                modelValue?: boolean;
                checkValue?: string | number | boolean;
                uncheckValue?: string | number | boolean;
                onBeforeOk?: Function;
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
            $emit: (event: "update:modelValue", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                checkValue: {
                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                    default: boolean;
                };
                uncheckValue: {
                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                    default: boolean;
                };
                onBeforeOk: {
                    type: FunctionConstructor;
                    default: () => boolean;
                };
            }>> & {
                "onUpdate:modelValue"?: (...args: any[]) => any;
            }, {
                name: string;
                cls: import("vue").ComputedRef<string[]>;
                isCheck: import("vue").ComputedRef<boolean>;
                loading: import("vue").Ref<boolean>;
                handleClick: () => Promise<void>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
                disabled: boolean;
                modelValue: boolean;
                checkValue: string | number | boolean;
                uncheckValue: string | number | boolean;
                onBeforeOk: Function;
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
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            uncheckValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            onBeforeOk: {
                type: FunctionConstructor;
                default: () => boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            cls: import("vue").ComputedRef<string[]>;
            isCheck: import("vue").ComputedRef<boolean>;
            loading: import("vue").Ref<boolean>;
            handleClick: () => Promise<void>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkValue: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        uncheckValue: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        onBeforeOk: {
            type: FunctionConstructor;
            default: () => boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        name: string;
        cls: import("vue").ComputedRef<string[]>;
        isCheck: import("vue").ComputedRef<boolean>;
        loading: import("vue").Ref<boolean>;
        handleClick: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
        disabled: boolean;
        modelValue: boolean;
        checkValue: string | number | boolean;
        uncheckValue: string | number | boolean;
        onBeforeOk: Function;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Select: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                disabled?: boolean;
                modelValue?: import("./select/src/type").SelectBindValue;
                placeholder?: string;
                clearable?: boolean;
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
                    type: import("vue").PropType<import("./select/src/type").SelectBindValue>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: {
                    type: StringConstructor;
                    default: string;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                "onUpdate:modelValue"?: (...args: any[]) => any;
                onChange?: (...args: any[]) => any;
            }, {
                name: string;
                selectRef: import("vue").Ref<any>;
                inpRef: import("vue").Ref<any>;
                optionBoxRef: import("vue").Ref<any>;
                currentSelect: {
                    label: string;
                    value: import("./select/src/type").SelectBindValue;
                };
                isFocus: import("vue").Ref<boolean>;
                clsName: import("vue").ComputedRef<string[]>;
                handleClick: () => void;
                onClickOutside: () => boolean;
                onMouseleave: () => any;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], string, {
                disabled: boolean;
                modelValue: import("./select/src/type").SelectBindValue;
                placeholder: string;
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
                type: import("vue").PropType<import("./select/src/type").SelectBindValue>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            selectRef: import("vue").Ref<any>;
            inpRef: import("vue").Ref<any>;
            optionBoxRef: import("vue").Ref<any>;
            currentSelect: {
                label: string;
                value: import("./select/src/type").SelectBindValue;
            };
            isFocus: import("vue").Ref<boolean>;
            clsName: import("vue").ComputedRef<string[]>;
            handleClick: () => void;
            onClickOutside: () => boolean;
            onMouseleave: () => any;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./select/src/type").SelectBindValue>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
    }, {
        name: string;
        selectRef: import("vue").Ref<any>;
        inpRef: import("vue").Ref<any>;
        optionBoxRef: import("vue").Ref<any>;
        currentSelect: {
            label: string;
            value: import("./select/src/type").SelectBindValue;
        };
        isFocus: import("vue").Ref<boolean>;
        clsName: import("vue").ComputedRef<string[]>;
        handleClick: () => void;
        onClickOutside: () => boolean;
        onMouseleave: () => any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", {
        disabled: boolean;
        modelValue: import("./select/src/type").SelectBindValue;
        placeholder: string;
        clearable: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Pagination: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                layout?: string;
                total?: number;
                current?: number;
                pageSize?: number;
                sizesList?: unknown[];
                prevText?: string;
                nextText?: string;
                maxPager?: number;
                totalTmpString?: string;
                jumperTmpString?: string;
                sizesTmpString?: string;
                "onUpdate:current"?: (...args: any[]) => any;
                "onUpdate:pageSize"?: (...args: any[]) => any;
                "onPage-change"?: (...args: any[]) => any;
                "onSize-change"?: (...args: any[]) => any;
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
            $emit: (event: "update:current" | "update:pageSize" | "page-change" | "size-change", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                layout: {
                    type: StringConstructor;
                    default: string;
                };
                total: {
                    type: NumberConstructor;
                    default: number;
                };
                current: {
                    type: NumberConstructor;
                    default: number;
                };
                pageSize: {
                    type: NumberConstructor;
                    default: () => number;
                };
                sizesList: {
                    type: ArrayConstructor;
                    default: () => number[];
                };
                prevText: {
                    type: StringConstructor;
                    default: string;
                };
                nextText: {
                    type: StringConstructor;
                    default: string;
                };
                maxPager: {
                    type: NumberConstructor;
                    default: number;
                };
                totalTmpString: {
                    type: StringConstructor;
                    default: string;
                };
                jumperTmpString: {
                    type: StringConstructor;
                    default: string;
                };
                sizesTmpString: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & {
                "onUpdate:current"?: (...args: any[]) => any;
                "onUpdate:pageSize"?: (...args: any[]) => any;
                "onPage-change"?: (...args: any[]) => any;
                "onSize-change"?: (...args: any[]) => any;
            }, {
                name: string;
                componentsList: import("vue").ComputedRef<import("./pagination/src/types").PageinationComponent[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:current" | "update:pageSize" | "page-change" | "size-change")[], string, {
                layout: string;
                total: number;
                current: number;
                pageSize: number;
                sizesList: unknown[];
                prevText: string;
                nextText: string;
                maxPager: number;
                totalTmpString: string;
                jumperTmpString: string;
                sizesTmpString: string;
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
            layout: {
                type: StringConstructor;
                default: string;
            };
            total: {
                type: NumberConstructor;
                default: number;
            };
            current: {
                type: NumberConstructor;
                default: number;
            };
            pageSize: {
                type: NumberConstructor;
                default: () => number;
            };
            sizesList: {
                type: ArrayConstructor;
                default: () => number[];
            };
            prevText: {
                type: StringConstructor;
                default: string;
            };
            nextText: {
                type: StringConstructor;
                default: string;
            };
            maxPager: {
                type: NumberConstructor;
                default: number;
            };
            totalTmpString: {
                type: StringConstructor;
                default: string;
            };
            jumperTmpString: {
                type: StringConstructor;
                default: string;
            };
            sizesTmpString: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            "onUpdate:current"?: (...args: any[]) => any;
            "onUpdate:pageSize"?: (...args: any[]) => any;
            "onPage-change"?: (...args: any[]) => any;
            "onSize-change"?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            componentsList: import("vue").ComputedRef<import("./pagination/src/types").PageinationComponent[]>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        layout: {
            type: StringConstructor;
            default: string;
        };
        total: {
            type: NumberConstructor;
            default: number;
        };
        current: {
            type: NumberConstructor;
            default: number;
        };
        pageSize: {
            type: NumberConstructor;
            default: () => number;
        };
        sizesList: {
            type: ArrayConstructor;
            default: () => number[];
        };
        prevText: {
            type: StringConstructor;
            default: string;
        };
        nextText: {
            type: StringConstructor;
            default: string;
        };
        maxPager: {
            type: NumberConstructor;
            default: number;
        };
        totalTmpString: {
            type: StringConstructor;
            default: string;
        };
        jumperTmpString: {
            type: StringConstructor;
            default: string;
        };
        sizesTmpString: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:current"?: (...args: any[]) => any;
        "onUpdate:pageSize"?: (...args: any[]) => any;
        "onPage-change"?: (...args: any[]) => any;
        "onSize-change"?: (...args: any[]) => any;
    }, {
        name: string;
        componentsList: import("vue").ComputedRef<import("./pagination/src/types").PageinationComponent[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:current" | "update:pageSize" | "page-change" | "size-change")[], "update:current" | "update:pageSize" | "page-change" | "size-change", {
        layout: string;
        total: number;
        current: number;
        pageSize: number;
        sizesList: unknown[];
        prevText: string;
        nextText: string;
        maxPager: number;
        totalTmpString: string;
        jumperTmpString: string;
        sizesTmpString: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Table: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                data?: unknown[];
                loading?: boolean;
                cols?: import("./table/src/types").ColumnsItem[];
                height?: string;
                border?: boolean;
                stripe?: boolean;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                cols: {
                    type: import("vue").PropType<import("./table/src/types").ColumnsItem[]>;
                    default: () => any[];
                };
                data: {
                    type: ArrayConstructor;
                    default: () => any[];
                };
                height: {
                    type: StringConstructor;
                    default: string;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                stripe: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any>;
                }>;
                bpTable: any;
                columns: import("vue").Ref<{
                    title?: string;
                    dataIndex?: string;
                    width?: number;
                    minWidth?: number;
                    scope?: {
                        customRender: string;
                    };
                }[]>;
                table_width: import("vue").Ref<any>;
                isEmpty: import("vue").ComputedRef<boolean>;
                bodyAreaStyle: import("vue").ComputedRef<string>;
                innerClass: import("vue").ComputedRef<(string | {
                    "bp-table-border": boolean;
                    "bp-table-stripe"?: undefined;
                    "bp-table-fixed-header"?: undefined;
                } | {
                    "bp-table-stripe": boolean;
                    "bp-table-border"?: undefined;
                    "bp-table-fixed-header"?: undefined;
                } | {
                    "bp-table-fixed-header": string;
                    "bp-table-border"?: undefined;
                    "bp-table-stripe"?: undefined;
                })[]>;
                tdClass: (v: any) => string[];
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                data: unknown[];
                loading: boolean;
                cols: import("./table/src/types").ColumnsItem[];
                height: string;
                border: boolean;
                stripe: boolean;
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
            cols: {
                type: import("vue").PropType<import("./table/src/types").ColumnsItem[]>;
                default: () => any[];
            };
            data: {
                type: ArrayConstructor;
                default: () => any[];
            };
            height: {
                type: StringConstructor;
                default: string;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            bpTable: any;
            columns: import("vue").Ref<{
                title?: string;
                dataIndex?: string;
                width?: number;
                minWidth?: number;
                scope?: {
                    customRender: string;
                };
            }[]>;
            table_width: import("vue").Ref<any>;
            isEmpty: import("vue").ComputedRef<boolean>;
            bodyAreaStyle: import("vue").ComputedRef<string>;
            innerClass: import("vue").ComputedRef<(string | {
                "bp-table-border": boolean;
                "bp-table-stripe"?: undefined;
                "bp-table-fixed-header"?: undefined;
            } | {
                "bp-table-stripe": boolean;
                "bp-table-border"?: undefined;
                "bp-table-fixed-header"?: undefined;
            } | {
                "bp-table-fixed-header": string;
                "bp-table-border"?: undefined;
                "bp-table-stripe"?: undefined;
            })[]>;
            tdClass: (v: any) => string[];
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        cols: {
            type: import("vue").PropType<import("./table/src/types").ColumnsItem[]>;
            default: () => any[];
        };
        data: {
            type: ArrayConstructor;
            default: () => any[];
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        bpTable: any;
        columns: import("vue").Ref<{
            title?: string;
            dataIndex?: string;
            width?: number;
            minWidth?: number;
            scope?: {
                customRender: string;
            };
        }[]>;
        table_width: import("vue").Ref<any>;
        isEmpty: import("vue").ComputedRef<boolean>;
        bodyAreaStyle: import("vue").ComputedRef<string>;
        innerClass: import("vue").ComputedRef<(string | {
            "bp-table-border": boolean;
            "bp-table-stripe"?: undefined;
            "bp-table-fixed-header"?: undefined;
        } | {
            "bp-table-stripe": boolean;
            "bp-table-border"?: undefined;
            "bp-table-fixed-header"?: undefined;
        } | {
            "bp-table-fixed-header": string;
            "bp-table-border"?: undefined;
            "bp-table-stripe"?: undefined;
        })[]>;
        tdClass: (v: any) => string[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        data: unknown[];
        loading: boolean;
        cols: import("./table/src/types").ColumnsItem[];
        height: string;
        border: boolean;
        stripe: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Space: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("./space/src/types").SpaceType;
                size?: import("./space/src/types").SizeType;
                justify?: string;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("./space/src/types").SizeType>;
                    default: string;
                };
                type: {
                    type: import("vue").PropType<import("./space/src/types").SpaceType>;
                    default: string;
                };
                justify: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                type: import("./space/src/types").SpaceType;
                size: import("./space/src/types").SizeType;
                justify: string;
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
            size: {
                type: import("vue").PropType<import("./space/src/types").SizeType>;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("./space/src/types").SpaceType>;
                default: string;
            };
            justify: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("./space/src/types").SizeType>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("./space/src/types").SpaceType>;
            default: string;
        };
        justify: {
            type: StringConstructor;
            default: string;
        };
    }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        type: import("./space/src/types").SpaceType;
        size: import("./space/src/types").SizeType;
        justify: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Alert: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("./alert/src/types").AlertType;
                title?: string;
                closeable?: boolean;
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
                onClose?: (...args: any[]) => any;
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
            $emit: (event: "close", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: import("vue").PropType<import("./alert/src/types").AlertType>;
                    default: string;
                };
                title: {
                    type: StringConstructor;
                    default: string;
                };
                closeable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onClose?: (...args: any[]) => any;
            }, {
                name: string;
                cls: import("vue").ComputedRef<string[]>;
                isRender: import("vue").Ref<boolean>;
                handleClose: () => void;
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], string, {
                type: import("./alert/src/types").AlertType;
                title: string;
                closeable: boolean;
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
                type: import("vue").PropType<import("./alert/src/types").AlertType>;
                default: string;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            cls: import("vue").ComputedRef<string[]>;
            isRender: import("vue").Ref<boolean>;
            handleClose: () => void;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./alert/src/types").AlertType>;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClose?: (...args: any[]) => any;
    }, {
        name: string;
        cls: import("vue").ComputedRef<string[]>;
        isRender: import("vue").Ref<boolean>;
        handleClose: () => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", {
        type: import("./alert/src/types").AlertType;
        title: string;
        closeable: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Tag: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                status?: string;
                closeable?: boolean;
                dot?: boolean;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: StringConstructor;
                    default: string;
                };
                dot: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closeable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                name: string;
                cls: import("vue").ComputedRef<string[]>;
                visible: import("vue").Ref<boolean>;
                handleClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                status: string;
                closeable: boolean;
                dot: boolean;
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
            status: {
                type: StringConstructor;
                default: string;
            };
            dot: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            name: string;
            cls: import("vue").ComputedRef<string[]>;
            visible: import("vue").Ref<boolean>;
            handleClose: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        status: {
            type: StringConstructor;
            default: string;
        };
        dot: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        name: string;
        cls: import("vue").ComputedRef<string[]>;
        visible: import("vue").Ref<boolean>;
        handleClose: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        status: string;
        closeable: boolean;
        dot: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Modal: {
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
        install: (app: App<any>) => void;
    };
    Spin: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                loading?: boolean;
                tip?: string;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tip: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                name: string;
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                loading: boolean;
                tip: string;
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
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            tip: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            name: string;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        tip: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        name: string;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        loading: boolean;
        tip: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Grid: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                justify?: import("./grid/src/types").Justify;
                gutter?: string | number;
                align?: import("./grid/src/types").Align;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                gutter: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                };
                justify: {
                    type: import("vue").PropType<import("./grid/src/types").Justify>;
                    default: string;
                };
                align: {
                    type: import("vue").PropType<import("./grid/src/types").Align>;
                    default: string;
                };
            }>>, {
                rowRef: import("vue").Ref<any>;
                name: string;
                cls: import("vue").ComputedRef<string[]>;
                init: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                justify: import("./grid/src/types").Justify;
                gutter: string | number;
                align: import("./grid/src/types").Align;
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
            gutter: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            justify: {
                type: import("vue").PropType<import("./grid/src/types").Justify>;
                default: string;
            };
            align: {
                type: import("vue").PropType<import("./grid/src/types").Align>;
                default: string;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            rowRef: import("vue").Ref<any>;
            name: string;
            cls: import("vue").ComputedRef<string[]>;
            init: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        gutter: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        justify: {
            type: import("vue").PropType<import("./grid/src/types").Justify>;
            default: string;
        };
        align: {
            type: import("vue").PropType<import("./grid/src/types").Align>;
            default: string;
        };
    }>>, {
        rowRef: import("vue").Ref<any>;
        name: string;
        cls: import("vue").ComputedRef<string[]>;
        init: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        justify: import("./grid/src/types").Justify;
        gutter: string | number;
        align: import("./grid/src/types").Align;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Col: import("vue").DefineComponent<{
            span: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            offset: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
        }, {
            name: string;
            cls: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            offset: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
        }>>, {
            span: string | number;
            offset: string | number;
        }, {}>;
        install: (app: App<any>) => void;
    };
    Link: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                status?: import("./link/src/types").LinkStatus;
                loading?: boolean;
                disabled?: boolean;
                href?: string;
                target?: string;
                onClick?: (ev: MouseEvent) => any;
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
            $emit: (event: "click", ev: MouseEvent) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                href: {
                    type: StringConstructor;
                    default: string;
                };
                status: {
                    type: import("vue").PropType<import("./link/src/types").LinkStatus>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                target: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & {
                onClick?: (ev: MouseEvent) => any;
            }, {
                name: string;
                clsName: import("vue").ComputedRef<string[]>;
                handleClick: (e: MouseEvent) => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (ev: MouseEvent) => true;
            }, string, {
                status: import("./link/src/types").LinkStatus;
                loading: boolean;
                disabled: boolean;
                href: string;
                target: string;
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
            href: {
                type: StringConstructor;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("./link/src/types").LinkStatus>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            target: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onClick?: (ev: MouseEvent) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            clsName: import("vue").ComputedRef<string[]>;
            handleClick: (e: MouseEvent) => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        href: {
            type: StringConstructor;
            default: string;
        };
        status: {
            type: import("vue").PropType<import("./link/src/types").LinkStatus>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        target: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onClick?: (ev: MouseEvent) => any;
    }, {
        name: string;
        clsName: import("vue").ComputedRef<string[]>;
        handleClick: (e: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (ev: MouseEvent) => true;
    }, string, {
        status: import("./link/src/types").LinkStatus;
        loading: boolean;
        disabled: boolean;
        href: string;
        target: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Popconfirm: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("./popconfirm/src/types").PopconfirmType;
                onBeforeOk?: Function;
                okText?: string;
                cancleText?: string;
                content?: string;
                position?: import("./popconfirm/src/types").PopconfirmPosition;
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
            $emit: (event: "ok" | "cancle", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                content: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmType>;
                    default: string;
                };
                position: {
                    type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmPosition>;
                    default: string;
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
                onOk?: (...args: any[]) => any;
                onCancle?: (...args: any[]) => any;
            }, {
                name: string;
                show: import("vue").Ref<boolean>;
                slotRef: import("vue").Ref<any>;
                innerRef: import("vue").Ref<any>;
                okLoading: import("vue").Ref<boolean>;
                handleClick: () => void;
                handleCancle: () => void;
                handleOk: () => Promise<void>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ok" | "cancle")[], string, {
                type: import("./popconfirm/src/types").PopconfirmType;
                onBeforeOk: Function;
                okText: string;
                cancleText: string;
                content: string;
                position: import("./popconfirm/src/types").PopconfirmPosition;
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
            content: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmType>;
                default: string;
            };
            position: {
                type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmPosition>;
                default: string;
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
            onOk?: (...args: any[]) => any;
            onCancle?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            show: import("vue").Ref<boolean>;
            slotRef: import("vue").Ref<any>;
            innerRef: import("vue").Ref<any>;
            okLoading: import("vue").Ref<boolean>;
            handleClick: () => void;
            handleCancle: () => void;
            handleOk: () => Promise<void>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmType>;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("./popconfirm/src/types").PopconfirmPosition>;
            default: string;
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
        onOk?: (...args: any[]) => any;
        onCancle?: (...args: any[]) => any;
    }, {
        name: string;
        show: import("vue").Ref<boolean>;
        slotRef: import("vue").Ref<any>;
        innerRef: import("vue").Ref<any>;
        okLoading: import("vue").Ref<boolean>;
        handleClick: () => void;
        handleCancle: () => void;
        handleOk: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ok" | "cancle")[], "ok" | "cancle", {
        type: import("./popconfirm/src/types").PopconfirmType;
        onBeforeOk: Function;
        okText: string;
        cancleText: string;
        content: string;
        position: import("./popconfirm/src/types").PopconfirmPosition;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Image: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                title?: string;
                src?: string;
                fit?: import("./image/src/types").ImageFit;
                alt?: string;
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
                readonly height?: string | number;
                readonly width?: string | number;
                onError?: (...args: any[]) => any;
                onLoad?: (...args: any[]) => any;
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
            $emit: (event: "error" | "load", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                src: {
                    type: StringConstructor;
                    default: string;
                };
                fit: {
                    type: import("vue").PropType<import("./image/src/types").ImageFit>;
                    default: string;
                };
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                title: {
                    type: StringConstructor;
                    default: string;
                };
                width: {
                    type: import("vue").PropType<string | number>;
                };
                height: {
                    type: import("vue").PropType<string | number>;
                };
            }>> & {
                onError?: (...args: any[]) => any;
                onLoad?: (...args: any[]) => any;
            }, {
                name: string;
                imageRef: import("vue").Ref<any>;
                loadStatus: import("vue").Ref<"loading" | "error" | "load">;
                onLoad: () => void;
                onError: () => void;
                imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                fitStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                isLoading: import("vue").ComputedRef<boolean>;
                isError: import("vue").ComputedRef<boolean>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], string, {
                title: string;
                src: string;
                fit: import("./image/src/types").ImageFit;
                alt: string;
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
            src: {
                type: StringConstructor;
                default: string;
            };
            fit: {
                type: import("vue").PropType<import("./image/src/types").ImageFit>;
                default: string;
            };
            alt: {
                type: StringConstructor;
                default: string;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: import("vue").PropType<string | number>;
            };
            height: {
                type: import("vue").PropType<string | number>;
            };
        }>> & {
            onError?: (...args: any[]) => any;
            onLoad?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            name: string;
            imageRef: import("vue").Ref<any>;
            loadStatus: import("vue").Ref<"loading" | "error" | "load">;
            onLoad: () => void;
            onError: () => void;
            imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            fitStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            isLoading: import("vue").ComputedRef<boolean>;
            isError: import("vue").ComputedRef<boolean>;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            default: string;
        };
        fit: {
            type: import("vue").PropType<import("./image/src/types").ImageFit>;
            default: string;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: import("vue").PropType<string | number>;
        };
        height: {
            type: import("vue").PropType<string | number>;
        };
    }>> & {
        onError?: (...args: any[]) => any;
        onLoad?: (...args: any[]) => any;
    }, {
        name: string;
        imageRef: import("vue").Ref<any>;
        loadStatus: import("vue").Ref<"loading" | "error" | "load">;
        onLoad: () => void;
        onError: () => void;
        imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        fitStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        isLoading: import("vue").ComputedRef<boolean>;
        isError: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", {
        title: string;
        src: string;
        fit: import("./image/src/types").ImageFit;
        alt: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Drawer: {
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
        hideFooter: boolean;
        hideClose: boolean;
        maskClosable: boolean;
        okLoading: boolean;
        okText: string;
        cancleText: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Tooltip: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                content?: string;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                content: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                name: string;
                slotRef: import("vue").Ref<any>;
                containerRef: import("vue").Ref<any>;
                show: import("vue").Ref<boolean>;
                visible: import("vue").Ref<boolean>;
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any>;
                }>;
                mouseenter: () => void;
                mouseleave: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                content: string;
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
            content: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            name: string;
            slotRef: import("vue").Ref<any>;
            containerRef: import("vue").Ref<any>;
            show: import("vue").Ref<boolean>;
            visible: import("vue").Ref<boolean>;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            mouseenter: () => void;
            mouseleave: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        name: string;
        slotRef: import("vue").Ref<any>;
        containerRef: import("vue").Ref<any>;
        show: import("vue").Ref<boolean>;
        visible: import("vue").Ref<boolean>;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        mouseenter: () => void;
        mouseleave: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        content: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Message: any;
};
export default _default;
