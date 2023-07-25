import { App } from "vue";
import _pagination from "./src/pagination.vue";
declare const Pagination: {
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
            componentsList: import("vue").ComputedRef<import("./src/types").PageinationComponent[]>;
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
        componentsList: import("vue").ComputedRef<import("./src/types").PageinationComponent[]>;
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
    componentsList: import("vue").ComputedRef<import("./src/types").PageinationComponent[]>;
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
    install: (app: App) => void;
};
export declare type PaginationInstance = InstanceType<typeof _pagination>;
export default Pagination;
