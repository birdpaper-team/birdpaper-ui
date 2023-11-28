import type { App } from 'vue';
import _IconDoubleDown from './icon-double-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDoubleDown.name = getComponentsPrefix() + _IconDoubleDown.name;

const IconDoubleDown = Object.assign(_IconDoubleDown, {
  install: (app: App) => {
    app.component(_IconDoubleDown.name, _IconDoubleDown);
  }
});

export default IconDoubleDown;