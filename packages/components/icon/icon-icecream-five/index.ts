import type { App } from 'vue';
import _IconIcecreamFive from './icon-icecream-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecreamFive.name = getComponentsPrefix() + _IconIcecreamFive.name;

const IconIcecreamFive = Object.assign(_IconIcecreamFive, {
  install: (app: App) => {
    app.component(_IconIcecreamFive.name, _IconIcecreamFive);
  }
});

export default IconIcecreamFive;