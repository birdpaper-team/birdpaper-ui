import type { App } from 'vue';
import _IconIcecream from './icon-icecream.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecream.name = getComponentsPrefix() + _IconIcecream.name;

const IconIcecream = Object.assign(_IconIcecream, {
  install: (app: App) => {
    app.component(_IconIcecream.name, _IconIcecream);
  }
});

export default IconIcecream;