import { App } from "vue";
import _input from "./src/input.vue";
export type { InputSize, InputType } from "./src/types";
declare const Input: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type InputInstance = InstanceType<typeof _input>;
export default Input;
