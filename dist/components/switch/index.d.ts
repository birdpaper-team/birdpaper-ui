import { App } from "vue";
import _switch from "./src/switch.vue";
declare const Switch: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type switchInstance = InstanceType<typeof _switch>;
export default Switch;
