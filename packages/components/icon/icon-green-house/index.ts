import type { App } from 'vue';
import _IconGreenHouse from './icon-green-house.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGreenHouse.name = getComponentsPrefix() + _IconGreenHouse.name;

const IconGreenHouse = Object.assign(_IconGreenHouse, {
  install: (app: App) => {
    app.component(_IconGreenHouse.name, _IconGreenHouse);
  }
});

export default IconGreenHouse;