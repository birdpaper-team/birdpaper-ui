import { App } from "vue";
declare const Table: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export default Table;
