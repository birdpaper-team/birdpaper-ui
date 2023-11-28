import type { App } from 'vue';
import _IconHourglass from './icon-hourglass.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHourglass.name = getComponentsPrefix() + _IconHourglass.name;

const IconHourglass = Object.assign(_IconHourglass, {
  install: (app: App) => {
    app.component(_IconHourglass.name, _IconHourglass);
  }
});

export default IconHourglass;