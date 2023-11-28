import type { App } from 'vue';
import _IconFinance from './icon-finance.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFinance.name = getComponentsPrefix() + _IconFinance.name;

const IconFinance = Object.assign(_IconFinance, {
  install: (app: App) => {
    app.component(_IconFinance.name, _IconFinance);
  }
});

export default IconFinance;