import type { App } from 'vue';
import _IconRadar from './icon-radar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadar.name = getComponentsPrefix() + _IconRadar.name;

const IconRadar = Object.assign(_IconRadar, {
  install: (app: App) => {
    app.component(_IconRadar.name, _IconRadar);
  }
});

export default IconRadar;