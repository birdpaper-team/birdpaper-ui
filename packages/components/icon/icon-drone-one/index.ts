import type { App } from 'vue';
import _IconDroneOne from './icon-drone-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDroneOne.name = getComponentsPrefix() + _IconDroneOne.name;

const IconDroneOne = Object.assign(_IconDroneOne, {
  install: (app: App) => {
    app.component(_IconDroneOne.name, _IconDroneOne);
  }
});

export default IconDroneOne;