import type { App } from 'vue';
import _IconDelivery from './icon-delivery.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDelivery.name = getComponentsPrefix() + _IconDelivery.name;

const IconDelivery = Object.assign(_IconDelivery, {
  install: (app: App) => {
    app.component(_IconDelivery.name, _IconDelivery);
  }
});

export default IconDelivery;