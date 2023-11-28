import type { App } from 'vue';
import _IconDirectionAdjustmentThree from './icon-direction-adjustment-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDirectionAdjustmentThree.name = getComponentsPrefix() + _IconDirectionAdjustmentThree.name;

const IconDirectionAdjustmentThree = Object.assign(_IconDirectionAdjustmentThree, {
  install: (app: App) => {
    app.component(_IconDirectionAdjustmentThree.name, _IconDirectionAdjustmentThree);
  }
});

export default IconDirectionAdjustmentThree;