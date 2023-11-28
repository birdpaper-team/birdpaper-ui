import type { App } from 'vue';
import _IconDrone from './icon-drone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDrone.name = getComponentsPrefix() + _IconDrone.name;

const IconDrone = Object.assign(_IconDrone, {
  install: (app: App) => {
    app.component(_IconDrone.name, _IconDrone);
  }
});

export default IconDrone;