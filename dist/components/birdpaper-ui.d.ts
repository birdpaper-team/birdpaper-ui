import { App } from "vue";
export { default as Message } from "./message";
declare const _default: {
    install: (app: App<any>) => void;
    Button: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Input: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Textarea: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Radio: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Checkbox: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Switch: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Select: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Pagination: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Table: ((props: Record<string, any> & {}) => any) & {
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
    Alert: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Tag: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Modal: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Spin: ((props: Record<string, any> & {}) => any) & {
        install: (app: App<any>) => void;
    };
    Grid: ((props: Record<string, any> & {}) => any) & {
        Col: (props: Record<string, any> & {}) => any;
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
                onClick?: (ev: MouseEvent) => any;
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
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: App<any>) => void;
    };
    Message: any;
};
export default _default;
