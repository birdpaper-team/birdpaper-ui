import { App } from "vue";
import _textarea from "./src/textarea.vue";
declare const Textarea: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type TextareaInstance = InstanceType<typeof _textarea>;
export default Textarea;
