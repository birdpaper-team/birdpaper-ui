import type { App } from 'vue';
import _IconFlightAirflow from './icon-flight-airflow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlightAirflow.name = getComponentsPrefix() + _IconFlightAirflow.name;

const IconFlightAirflow = Object.assign(_IconFlightAirflow, {
  install: (app: App) => {
    app.component(_IconFlightAirflow.name, _IconFlightAirflow);
  }
});

export default IconFlightAirflow;