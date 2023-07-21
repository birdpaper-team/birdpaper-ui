import { App } from "vue";
import _table from "./src/table.vue";
declare const Table: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type TableInstance = InstanceType<typeof _table>;
export default Table;
