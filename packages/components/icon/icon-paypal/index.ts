import type { App } from 'vue';
import _IconPaypal from './icon-paypal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaypal.name = getComponentsPrefix() + _IconPaypal.name;

const IconPaypal = Object.assign(_IconPaypal, {
  install: (app: App) => {
    app.component(_IconPaypal.name, _IconPaypal);
  }
});

export default IconPaypal;