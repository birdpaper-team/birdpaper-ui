import type { App } from 'vue';
import _IconLaptopOne from './icon-laptop-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLaptopOne.name = getComponentsPrefix() + _IconLaptopOne.name;

const IconLaptopOne = Object.assign(_IconLaptopOne, {
  install: (app: App) => {
    app.component(_IconLaptopOne.name, _IconLaptopOne);
  }
});

export default IconLaptopOne;