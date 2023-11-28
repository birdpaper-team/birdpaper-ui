import type { App } from 'vue';
import _IconFunds from './icon-funds.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFunds.name = getComponentsPrefix() + _IconFunds.name;

const IconFunds = Object.assign(_IconFunds, {
  install: (app: App) => {
    app.component(_IconFunds.name, _IconFunds);
  }
});

export default IconFunds;