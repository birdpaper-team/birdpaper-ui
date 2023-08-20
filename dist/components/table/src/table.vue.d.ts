import { PropType } from "vue";
import { ColumnsItem } from "./types";
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
}, {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    data: unknown[];
    loading: boolean;
    cols: ColumnsItem[];
    height: string;
    border: boolean;
    stripe: boolean;
}, {}>;
export default _sfc_main;
