import { App } from "vue";
import _modal from "./src/modal.vue";
declare const Modal: ((props: Record<string, any> & {}) => any) & {
    install: (app: App) => void;
};
export declare type ModalInstance = InstanceType<typeof _modal>;
export default Modal;
