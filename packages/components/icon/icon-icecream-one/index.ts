import type { App } from 'vue';
import _IconIcecreamOne from './icon-icecream-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIcecreamOne.name = getComponentsPrefix() + _IconIcecreamOne.name;

const IconIcecreamOne = Object.assign(_IconIcecreamOne, {
  install: (app: App) => {
    app.component(_IconIcecreamOne.name, _IconIcecreamOne);
  }
});

export default IconIcecreamOne;