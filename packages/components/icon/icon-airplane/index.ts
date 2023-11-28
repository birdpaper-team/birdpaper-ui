import type { App } from 'vue';
import _IconAirplane from './icon-airplane.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirplane.name = getComponentsPrefix() + _IconAirplane.name;

const IconAirplane = Object.assign(_IconAirplane, {
  install: (app: App) => {
    app.component(_IconAirplane.name, _IconAirplane);
  }
});

export default IconAirplane;