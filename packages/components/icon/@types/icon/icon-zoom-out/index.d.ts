import type { App } from 'vue';
declare const IconZoomOut: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            strokeWidth?: number | undefined;
            strokeLinecap?: string | undefined;
            strokeLinejoin?: string | undefined;
            spin?: boolean | undefined;
            onClick?: ((ev: MouseEvent) => any) | undefined;
            readonly size?: string | undefined;
            readonly rotate?: number | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
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
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "click", ev: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: StringConstructor;
            };
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            strokeLinecap: {
                type: StringConstructor;
                default: string;
                validator: (value: any) => boolean;
            };
            strokeLinejoin: {
                type: StringConstructor;
                default: string;
                validator: (value: any) => boolean;
            };
            rotate: {
                type: NumberConstructor;
            };
            spin: {
                type: BooleanConstructor;
            };
        }>> & {
            onClick?: ((ev: MouseEvent) => any) | undefined;
        }, {
            iconClass: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            onClick: (ev: MouseEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (ev: MouseEvent) => true;
        }, string, {
            strokeWidth: number;
            strokeLinecap: string;
            strokeLinejoin: string;
            spin: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: StringConstructor;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        strokeLinecap: {
            type: StringConstructor;
            default: string;
            validator: (value: any) => boolean;
        };
        strokeLinejoin: {
            type: StringConstructor;
            default: string;
            validator: (value: any) => boolean;
        };
        rotate: {
            type: NumberConstructor;
        };
        spin: {
            type: BooleanConstructor;
        };
    }>> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        iconClass: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        onClick: (ev: MouseEvent) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    strokeLinejoin: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    rotate: {
        type: NumberConstructor;
    };
    spin: {
        type: BooleanConstructor;
    };
}>> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    iconClass: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    onClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, {
    strokeWidth: number;
    strokeLinecap: string;
    strokeLinejoin: string;
    spin: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export default IconZoomOut;
