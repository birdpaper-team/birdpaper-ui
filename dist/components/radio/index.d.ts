import { App } from "vue";
import _radio from "./src/radio.vue";
import _radioGroup from "./src/radioGroup.vue";
declare const Radio: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type RadioInstance = InstanceType<typeof _radio>;
export declare type RadioGroupInstance = InstanceType<typeof _radioGroup>;
export default Radio;
