import type { App } from 'vue';
import _IconBalance from './icon-balance.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBalance.name = getComponentsPrefix() + _IconBalance.name;

const IconBalance = Object.assign(_IconBalance, {
  install: (app: App) => {
    app.component(_IconBalance.name, _IconBalance);
  }
});

export default IconBalance;