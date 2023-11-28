import type { App } from 'vue';
import _IconDirectionAdjustmentTwo from './icon-direction-adjustment-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDirectionAdjustmentTwo.name = getComponentsPrefix() + _IconDirectionAdjustmentTwo.name;

const IconDirectionAdjustmentTwo = Object.assign(_IconDirectionAdjustmentTwo, {
  install: (app: App) => {
    app.component(_IconDirectionAdjustmentTwo.name, _IconDirectionAdjustmentTwo);
  }
});

export default IconDirectionAdjustmentTwo;