import type { App } from 'vue';
import _IconRoad from './icon-road.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoad.name = getComponentsPrefix() + _IconRoad.name;

const IconRoad = Object.assign(_IconRoad, {
  install: (app: App) => {
    app.component(_IconRoad.name, _IconRoad);
  }
});

export default IconRoad;