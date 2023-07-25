declare const _sfc_main: import("vue").DefineComponent<{
    cols: {
        type: ArrayConstructor;
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
    bpTable: any;
    columns: import("vue").Ref<any[]>;
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
        type: ArrayConstructor;
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
    cols: unknown[];
    height: string;
    border: boolean;
    stripe: boolean;
}, {}>;
export default _sfc_main;
