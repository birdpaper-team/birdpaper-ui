import type { App } from 'vue';
import _IconDirectionAdjustment from './icon-direction-adjustment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDirectionAdjustment.name = getComponentsPrefix() + _IconDirectionAdjustment.name;

const IconDirectionAdjustment = Object.assign(_IconDirectionAdjustment, {
  install: (app: App) => {
    app.component(_IconDirectionAdjustment.name, _IconDirectionAdjustment);
  }
});

export default IconDirectionAdjustment;