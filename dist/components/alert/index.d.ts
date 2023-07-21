import { App } from "vue";
import _alert from "./src/alert.vue";
declare const Alert: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type AlertInstance = InstanceType<typeof _alert>;
export default Alert;
