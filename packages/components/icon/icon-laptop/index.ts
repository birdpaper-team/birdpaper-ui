import type { App } from 'vue';
import _IconLaptop from './icon-laptop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLaptop.name = getComponentsPrefix() + _IconLaptop.name;

const IconLaptop = Object.assign(_IconLaptop, {
  install: (app: App) => {
    app.component(_IconLaptop.name, _IconLaptop);
  }
});

export default IconLaptop;