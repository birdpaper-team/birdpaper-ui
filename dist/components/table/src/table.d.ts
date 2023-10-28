export declare const useTable: (props: any, slots: any) => {
    initColumns: () => {
        title?: string;
        type: "radio" | "inner" | "checkbox";
        dataIndex?: string;
        width?: number;
        minWidth?: number;
        align: "left" | "center" | "right";
        scope?: {
            customRender: string;
        };
    }[];
    bpTable: any;
    table_width: import("vue").Ref<any>;
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
};
