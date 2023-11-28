import type { App } from 'vue';
import _IconTransaction from './icon-transaction.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransaction.name = getComponentsPrefix() + _IconTransaction.name;

const IconTransaction = Object.assign(_IconTransaction, {
  install: (app: App) => {
    app.component(_IconTransaction.name, _IconTransaction);
  }
});

export default IconTransaction;