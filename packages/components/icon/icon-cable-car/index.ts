import type { App } from 'vue';
import _IconCableCar from './icon-cable-car.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCableCar.name = getComponentsPrefix() + _IconCableCar.name;

const IconCableCar = Object.assign(_IconCableCar, {
  install: (app: App) => {
    app.component(_IconCableCar.name, _IconCableCar);
  }
});

export default IconCableCar;