import type { App } from 'vue';
import _IconLaptopComputer from './icon-laptop-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLaptopComputer.name = getComponentsPrefix() + _IconLaptopComputer.name;

const IconLaptopComputer = Object.assign(_IconLaptopComputer, {
  install: (app: App) => {
    app.component(_IconLaptopComputer.name, _IconLaptopComputer);
  }
});

export default IconLaptopComputer;