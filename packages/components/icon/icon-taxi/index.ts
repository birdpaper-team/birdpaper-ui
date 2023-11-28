import type { App } from 'vue';
import _IconTaxi from './icon-taxi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTaxi.name = getComponentsPrefix() + _IconTaxi.name;

const IconTaxi = Object.assign(_IconTaxi, {
  install: (app: App) => {
    app.component(_IconTaxi.name, _IconTaxi);
  }
});

export default IconTaxi;