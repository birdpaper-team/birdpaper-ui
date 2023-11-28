import type { App } from 'vue';
import _IconLightHouse from './icon-light-house.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLightHouse.name = getComponentsPrefix() + _IconLightHouse.name;

const IconLightHouse = Object.assign(_IconLightHouse, {
  install: (app: App) => {
    app.component(_IconLightHouse.name, _IconLightHouse);
  }
});

export default IconLightHouse;