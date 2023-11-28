import type { App } from 'vue';
import _IconAirBike from './icon-air-bike.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirBike.name = getComponentsPrefix() + _IconAirBike.name;

const IconAirBike = Object.assign(_IconAirBike, {
  install: (app: App) => {
    app.component(_IconAirBike.name, _IconAirBike);
  }
});

export default IconAirBike;