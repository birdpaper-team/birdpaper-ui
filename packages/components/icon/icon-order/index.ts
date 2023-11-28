import type { App } from 'vue';
import _IconOrder from './icon-order.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrder.name = getComponentsPrefix() + _IconOrder.name;

const IconOrder = Object.assign(_IconOrder, {
  install: (app: App) => {
    app.component(_IconOrder.name, _IconOrder);
  }
});

export default IconOrder;