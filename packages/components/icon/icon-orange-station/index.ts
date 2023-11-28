import type { App } from 'vue';
import _IconOrangeStation from './icon-orange-station.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrangeStation.name = getComponentsPrefix() + _IconOrangeStation.name;

const IconOrangeStation = Object.assign(_IconOrangeStation, {
  install: (app: App) => {
    app.component(_IconOrangeStation.name, _IconOrangeStation);
  }
});

export default IconOrangeStation;