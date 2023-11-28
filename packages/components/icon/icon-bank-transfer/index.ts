import type { App } from 'vue';
import _IconBankTransfer from './icon-bank-transfer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBankTransfer.name = getComponentsPrefix() + _IconBankTransfer.name;

const IconBankTransfer = Object.assign(_IconBankTransfer, {
  install: (app: App) => {
    app.component(_IconBankTransfer.name, _IconBankTransfer);
  }
});

export default IconBankTransfer;