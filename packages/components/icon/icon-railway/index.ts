import type { App } from 'vue';
import _IconRailway from './icon-railway.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRailway.name = getComponentsPrefix() + _IconRailway.name;

const IconRailway = Object.assign(_IconRailway, {
  install: (app: App) => {
    app.component(_IconRailway.name, _IconRailway);
  }
});

export default IconRailway;