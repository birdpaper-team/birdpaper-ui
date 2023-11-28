import type { App } from 'vue';
import _IconAirplay from './icon-airplay.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirplay.name = getComponentsPrefix() + _IconAirplay.name;

const IconAirplay = Object.assign(_IconAirplay, {
  install: (app: App) => {
    app.component(_IconAirplay.name, _IconAirplay);
  }
});

export default IconAirplay;