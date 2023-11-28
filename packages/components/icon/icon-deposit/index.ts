import type { App } from 'vue';
import _IconDeposit from './icon-deposit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeposit.name = getComponentsPrefix() + _IconDeposit.name;

const IconDeposit = Object.assign(_IconDeposit, {
  install: (app: App) => {
    app.component(_IconDeposit.name, _IconDeposit);
  }
});

export default IconDeposit;