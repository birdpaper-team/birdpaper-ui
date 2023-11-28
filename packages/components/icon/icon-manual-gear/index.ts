import type { App } from 'vue';
import _IconManualGear from './icon-manual-gear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconManualGear.name = getComponentsPrefix() + _IconManualGear.name;

const IconManualGear = Object.assign(_IconManualGear, {
  install: (app: App) => {
    app.component(_IconManualGear.name, _IconManualGear);
  }
});

export default IconManualGear;