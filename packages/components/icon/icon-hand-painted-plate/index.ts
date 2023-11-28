import type { App } from 'vue';
import _IconHandPaintedPlate from './icon-hand-painted-plate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandPaintedPlate.name = getComponentsPrefix() + _IconHandPaintedPlate.name;

const IconHandPaintedPlate = Object.assign(_IconHandPaintedPlate, {
  install: (app: App) => {
    app.component(_IconHandPaintedPlate.name, _IconHandPaintedPlate);
  }
});

export default IconHandPaintedPlate;