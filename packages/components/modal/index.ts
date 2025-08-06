import _modal from "./src/modal.vue";
import ModalManager from "./src/instance";
import { isString } from "radash";
import { AppContext } from "vue";
import { ModalItem, ModalType } from "./src/types";

let modal: ModalManager;
const types = ["info", "success", "warning", "error", "confirm"] as const;

const _modalInstance = types.reduce((pre, value) => {
  pre[value] = (config: ModalInstance, appContext?: AppContext) => {
    if (isString(config)) {
      config = { content: config as string } as ModalItem;
    }

    const _defaultConfig = {
      type: value as ModalType,
      showBorder: false,
      width: "400px",
      hideClose: true,
      hideCancel: value !== "confirm",
      maskClosable: value !== "confirm",
      isMethod: true,
    } as ModalItem;

    const _config: ModalItem = { ..._defaultConfig, ...(config as ModalItem) };

    modal = new ModalManager(_config as ModalItem, appContext);
    return modal!.open();
  };
  return pre;
}, {} as any);

export const Modal = Object.assign({
  ..._modal,
  ..._modalInstance,
});

export * from "./src/props";
export * from "./src/types";

export type ModalInstance = InstanceType<typeof Modal>;
export default Modal;
