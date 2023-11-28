import type { App } from 'vue';
import _IconCustomer from './icon-customer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCustomer.name = getComponentsPrefix() + _IconCustomer.name;

const IconCustomer = Object.assign(_IconCustomer, {
  install: (app: App) => {
    app.component(_IconCustomer.name, _IconCustomer);
  }
});

export default IconCustomer;