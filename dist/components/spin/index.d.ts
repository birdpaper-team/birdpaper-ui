import { App } from "vue";
import _spin from "./src/spin.vue";
declare const Spin: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type SpinInstance = InstanceType<typeof _spin>;
export default Spin;
