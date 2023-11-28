import type { App } from 'vue';
import _IconHomestay from './icon-homestay.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHomestay.name = getComponentsPrefix() + _IconHomestay.name;

const IconHomestay = Object.assign(_IconHomestay, {
  install: (app: App) => {
    app.component(_IconHomestay.name, _IconHomestay);
  }
});

export default IconHomestay;