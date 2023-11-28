import type { App } from 'vue';
import _IconEngineeringVehicle from './icon-engineering-vehicle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEngineeringVehicle.name = getComponentsPrefix() + _IconEngineeringVehicle.name;

const IconEngineeringVehicle = Object.assign(_IconEngineeringVehicle, {
  install: (app: App) => {
    app.component(_IconEngineeringVehicle.name, _IconEngineeringVehicle);
  }
});

export default IconEngineeringVehicle;