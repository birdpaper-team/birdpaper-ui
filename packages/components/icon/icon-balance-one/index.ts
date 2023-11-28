import type { App } from 'vue';
import _IconBalanceOne from './icon-balance-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBalanceOne.name = getComponentsPrefix() + _IconBalanceOne.name;

const IconBalanceOne = Object.assign(_IconBalanceOne, {
  install: (app: App) => {
    app.component(_IconBalanceOne.name, _IconBalanceOne);
  }
});

export default IconBalanceOne;