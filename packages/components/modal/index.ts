import { App } from "vue";
import _modal from "./src/modal.vue";
import { getComponentsPrefix } from "../../utils/config";

_modal.name = getComponentsPrefix() + _modal.name;

const Modal = Object.assign(_modal, {
  install: (app: App) => {
    app.component(_modal.name, _modal);
  },
});

export type ModalInstance = InstanceType<typeof _modal>;
export default Modal;
