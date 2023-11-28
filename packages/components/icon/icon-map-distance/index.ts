import type { App } from 'vue';
import _IconMapDistance from './icon-map-distance.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMapDistance.name = getComponentsPrefix() + _IconMapDistance.name;

const IconMapDistance = Object.assign(_IconMapDistance, {
  install: (app: App) => {
    app.component(_IconMapDistance.name, _IconMapDistance);
  }
});

export default IconMapDistance;