import { App } from "vue";
import _checkbox from "./src/checkbox.vue";
declare const Checkbox: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type checkboxInstance = InstanceType<typeof _checkbox>;
export default Checkbox;
