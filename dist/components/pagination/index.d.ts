import { App } from "vue";
import _pagination from "./src/pagination.vue";
declare const Pagination: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type PaginationInstance = InstanceType<typeof _pagination>;
export default Pagination;
