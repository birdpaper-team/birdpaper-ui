import { App } from "vue";
import _table from "./src/table.vue";
import _tableColumn from "./src/components/table-cloumn.vue";
declare const Table: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            data?: unknown[];
            loading?: boolean;
            cols?: import("./src/types").ColumnsItem[];
            height?: string;
            border?: boolean;
            stripe?: boolean;
            selectedKey?: import("./src/types").SelectedValue;
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
            readonly selection?: import("./src/types").SelectionConfig;
            readonly rowKey?: string;
            onSelect?: (...args: any[]) => any;
            "onUpdate:selectedKey"?: (...args: any[]) => any;
            "onSelection-change"?: (...args: any[]) => any;
            "onSelect-all"?: (...args: any[]) => any;
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
        $emit: (event: "update:selectedKey" | "selection-change" | "select-all" | "select", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            cols: {
                type: import("vue").PropType<import("./src/types").ColumnsItem[]>;
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
            rowKey: {
                type: StringConstructor;
            };
            selection: {
                type: import("vue").PropType<import("./src/types").SelectionConfig>;
            };
            selectedKey: {
                type: import("vue").PropType<import("./src/types").SelectedValue>;
                default: () => any[];
            };
        }>> & {
            onSelect?: (...args: any[]) => any;
            "onUpdate:selectedKey"?: (...args: any[]) => any;
            "onSelection-change"?: (...args: any[]) => any;
            "onSelect-all"?: (...args: any[]) => any;
        }, {
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            bpTable: any;
            tableHeaderRef: import("vue").Ref<any>;
            columns: import("vue").Ref<{
                title?: string;
                type: "radio" | "inner" | "checkbox";
                dataIndex?: string;
                width?: number;
                minWidth?: number;
                align: "left" | "center" | "right";
                scope?: {
                    customRender: string;
                };
            }[]>;
            table_width: import("vue").Ref<any>;
            isEmpty: import("vue").ComputedRef<boolean>;
            selectedData: import("vue").Ref<(string | number)[]>;
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
            onSelectChange: (record: unknown) => void;
            onSelectAll: (isSelectAll: boolean) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKey" | "selection-change" | "select-all" | "select")[], string, {
            data: unknown[];
            loading: boolean;
            cols: import("./src/types").ColumnsItem[];
            height: string;
            border: boolean;
            stripe: boolean;
            selectedKey: import("./src/types").SelectedValue;
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
            type: import("vue").PropType<import("./src/types").ColumnsItem[]>;
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
        rowKey: {
            type: StringConstructor;
        };
        selection: {
            type: import("vue").PropType<import("./src/types").SelectionConfig>;
        };
        selectedKey: {
            type: import("vue").PropType<import("./src/types").SelectedValue>;
            default: () => any[];
        };
    }>> & {
        onSelect?: (...args: any[]) => any;
        "onUpdate:selectedKey"?: (...args: any[]) => any;
        "onSelection-change"?: (...args: any[]) => any;
        "onSelect-all"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        bpTable: any;
        tableHeaderRef: import("vue").Ref<any>;
        columns: import("vue").Ref<{
            title?: string;
            type: "radio" | "inner" | "checkbox";
            dataIndex?: string;
            width?: number;
            minWidth?: number;
            align: "left" | "center" | "right";
            scope?: {
                customRender: string;
            };
        }[]>;
        table_width: import("vue").Ref<any>;
        isEmpty: import("vue").ComputedRef<boolean>;
        selectedData: import("vue").Ref<(string | number)[]>;
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
        onSelectChange: (record: unknown) => void;
        onSelectAll: (isSelectAll: boolean) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: import("vue").PropType<import("./src/types").ColumnsItem[]>;
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
    rowKey: {
        type: StringConstructor;
    };
    selection: {
        type: import("vue").PropType<import("./src/types").SelectionConfig>;
    };
    selectedKey: {
        type: import("vue").PropType<import("./src/types").SelectedValue>;
        default: () => any[];
    };
}>> & {
    onSelect?: (...args: any[]) => any;
    "onUpdate:selectedKey"?: (...args: any[]) => any;
    "onSelection-change"?: (...args: any[]) => any;
    "onSelect-all"?: (...args: any[]) => any;
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    bpTable: any;
    tableHeaderRef: import("vue").Ref<any>;
    columns: import("vue").Ref<{
        title?: string;
        type: "radio" | "inner" | "checkbox";
        dataIndex?: string;
        width?: number;
        minWidth?: number;
        align: "left" | "center" | "right";
        scope?: {
            customRender: string;
        };
    }[]>;
    table_width: import("vue").Ref<any>;
    isEmpty: import("vue").ComputedRef<boolean>;
    selectedData: import("vue").Ref<(string | number)[]>;
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
    onSelectChange: (record: unknown) => void;
    onSelectAll: (isSelectAll: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKey" | "selection-change" | "select-all" | "select")[], "update:selectedKey" | "selection-change" | "select-all" | "select", {
    data: unknown[];
    loading: boolean;
    cols: import("./src/types").ColumnsItem[];
    height: string;
    border: boolean;
    stripe: boolean;
    selectedKey: import("./src/types").SelectedValue;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => void;
};
export declare type TableInstance = InstanceType<typeof _table>;
export declare type TableColumnsInstance = InstanceType<typeof _tableColumn>;
export default Table;
