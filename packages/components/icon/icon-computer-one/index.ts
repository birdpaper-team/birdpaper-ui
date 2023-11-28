import type { App } from 'vue';
import _IconComputerOne from './icon-computer-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconComputerOne.name = getComponentsPrefix() + _IconComputerOne.name;

const IconComputerOne = Object.assign(_IconComputerOne, {
  install: (app: App) => {
    app.component(_IconComputerOne.name, _IconComputerOne);
  }
});

export default IconComputerOne;