import { PropType } from "vue";
import { ColumnsItem, SelectedValue, SelectionConfig } from "./types";
declare const _sfc_main: import("vue").DefineComponent<{
    cols: {
        type: PropType<ColumnsItem[]>;
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
    /** 行 Key 字段名称 */
    rowKey: {
        type: StringConstructor;
    };
    /** 选择器配置 */
    selection: {
        type: PropType<SelectionConfig>;
    };
    /** 选择数据的Key */
    selectedKey: {
        type: PropType<SelectedValue>;
        default: () => any[];
    };
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:selectedKey" | "selection-change" | "select-all" | "select")[], "update:selectedKey" | "selection-change" | "select-all" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: PropType<ColumnsItem[]>;
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
    /** 行 Key 字段名称 */
    rowKey: {
        type: StringConstructor;
    };
    /** 选择器配置 */
    selection: {
        type: PropType<SelectionConfig>;
    };
    /** 选择数据的Key */
    selectedKey: {
        type: PropType<SelectedValue>;
        default: () => any[];
    };
}>> & {
    onSelect?: (...args: any[]) => any;
    "onUpdate:selectedKey"?: (...args: any[]) => any;
    "onSelection-change"?: (...args: any[]) => any;
    "onSelect-all"?: (...args: any[]) => any;
}, {
    data: unknown[];
    loading: boolean;
    cols: ColumnsItem[];
    height: string;
    border: boolean;
    stripe: boolean;
    selectedKey: SelectedValue;
}, {}>;
export default _sfc_main;
