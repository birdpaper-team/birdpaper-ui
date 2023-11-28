import type { App } from 'vue';
import _IconCar from './icon-car.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCar.name = getComponentsPrefix() + _IconCar.name;

const IconCar = Object.assign(_IconCar, {
  install: (app: App) => {
    app.component(_IconCar.name, _IconCar);
  }
});

export default IconCar;