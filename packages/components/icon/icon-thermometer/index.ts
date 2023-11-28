import type { App } from 'vue';
import _IconThermometer from './icon-thermometer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThermometer.name = getComponentsPrefix() + _IconThermometer.name;

const IconThermometer = Object.assign(_IconThermometer, {
  install: (app: App) => {
    app.component(_IconThermometer.name, _IconThermometer);
  }
});

export default IconThermometer;