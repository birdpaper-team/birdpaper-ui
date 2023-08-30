import { App } from "vue";
import _grid from "./src/grid.vue";
import _col from "./src/col.vue";
declare const Grid: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            justify?: import("./src/types").Justify;
            align?: import("./src/types").Align;
            gutter?: string | number;
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
                type: import("vue").PropType<import("./src/types").Justify>;
                default: string;
            };
            align: {
                type: import("vue").PropType<import("./src/types").Align>;
                default: string;
            };
        }>>, {
            rowRef: import("vue").Ref<any>;
            name: string;
            cls: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            justify: import("./src/types").Justify;
            align: import("./src/types").Align;
            gutter: string | number;
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
            type: import("vue").PropType<import("./src/types").Justify>;
            default: string;
        };
        align: {
            type: import("vue").PropType<import("./src/types").Align>;
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<{
        rowRef: import("vue").Ref<any>;
        name: string;
        cls: import("vue").ComputedRef<string[]>;
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
        type: import("vue").PropType<import("./src/types").Justify>;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("./src/types").Align>;
        default: string;
    };
}>>, {
    rowRef: import("vue").Ref<any>;
    name: string;
    cls: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    justify: import("./src/types").Justify;
    align: import("./src/types").Align;
    gutter: string | number;
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
        xs: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        sm: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        md: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        lg: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        xl: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
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
        xs: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        sm: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        md: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        lg: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
        xl: {
            type: import("vue").PropType<import("./src/types").ColResponsive>;
        };
    }>>, {
        span: string | number;
        offset: string | number;
    }, {}>;
    install: (app: App) => void;
};
export declare type GridInstance = InstanceType<typeof _grid>;
export declare type ColInstance = InstanceType<typeof _col>;
export { _col as Col };
export default Grid;
