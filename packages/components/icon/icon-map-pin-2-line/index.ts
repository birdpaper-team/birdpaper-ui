import type { App } from 'vue';
import _IconMapPin2Line from './icon-map-pin-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMapPin2Line.name = getComponentsPrefix() + _IconMapPin2Line.name;

const IconMapPin2Line = Object.assign(_IconMapPin2Line, {
  install: (app: App) => {
    app.component(_IconMapPin2Line.name, _IconMapPin2Line);
  }
});

export default IconMapPin2Line;