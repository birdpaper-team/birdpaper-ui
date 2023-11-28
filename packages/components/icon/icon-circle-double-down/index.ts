import type { App } from 'vue';
import _IconCircleDoubleDown from './icon-circle-double-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleDoubleDown.name = getComponentsPrefix() + _IconCircleDoubleDown.name;

const IconCircleDoubleDown = Object.assign(_IconCircleDoubleDown, {
  install: (app: App) => {
    app.component(_IconCircleDoubleDown.name, _IconCircleDoubleDown);
  }
});

export default IconCircleDoubleDown;