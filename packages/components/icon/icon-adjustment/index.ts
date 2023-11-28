import type { App } from 'vue';
import _IconAdjustment from './icon-adjustment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAdjustment.name = getComponentsPrefix() + _IconAdjustment.name;

const IconAdjustment = Object.assign(_IconAdjustment, {
  install: (app: App) => {
    app.component(_IconAdjustment.name, _IconAdjustment);
  }
});

export default IconAdjustment;