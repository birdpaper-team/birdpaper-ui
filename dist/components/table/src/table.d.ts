export declare const useTable: (props: any, slots: any) => {
    initColumns: () => {
        title?: string;
        dataIndex?: string;
        width?: number;
        minWidth?: number;
        scope?: {
            customRender: string;
        };
    }[];
    bpTable: any;
    table_width: import("vue").Ref<any>;
    columns: import("vue").Ref<{
        title?: string;
        dataIndex?: string;
        width?: number;
        minWidth?: number;
        scope?: {
            customRender: string;
        };
    }[]>;
};
