import type { App } from 'vue';
import _IconCircleHouse from './icon-circle-house.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleHouse.name = getComponentsPrefix() + _IconCircleHouse.name;

const IconCircleHouse = Object.assign(_IconCircleHouse, {
  install: (app: App) => {
    app.component(_IconCircleHouse.name, _IconCircleHouse);
  }
});

export default IconCircleHouse;