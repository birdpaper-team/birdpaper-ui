import { App } from "vue";
import _switch from "./src/switch.vue";
declare const Switch: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type SwitchInstance = InstanceType<typeof _switch>;
export default Switch;
