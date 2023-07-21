import { App } from "vue";
import _select from "./src/select.vue";
declare const Select: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type SelectInstance = InstanceType<typeof _select>;
export default Select;
