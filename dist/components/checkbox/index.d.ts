import { App } from "vue";
import _checkbox from "./src/checkbox.vue";
declare const Checkbox: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type CheckboxInstance = InstanceType<typeof _checkbox>;
export default Checkbox;
