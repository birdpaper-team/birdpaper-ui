import type { App } from 'vue';
import _IconThermometerOne from './icon-thermometer-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThermometerOne.name = getComponentsPrefix() + _IconThermometerOne.name;

const IconThermometerOne = Object.assign(_IconThermometerOne, {
  install: (app: App) => {
    app.component(_IconThermometerOne.name, _IconThermometerOne);
  }
});

export default IconThermometerOne;