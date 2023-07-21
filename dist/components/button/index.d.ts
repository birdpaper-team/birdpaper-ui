import { App } from "vue";
import _button from "./src/button.vue";
export type { ButtonShape, ButtonType, ButtonSize, ButtonStatus } from "./src/types";
declare const Button: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type ButtonInstance = InstanceType<typeof _button>;
export default Button;
export * from './src/button.vue';
