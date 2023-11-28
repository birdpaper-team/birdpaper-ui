import type { App } from 'vue';
import _IconWaterRate from './icon-water-rate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaterRate.name = getComponentsPrefix() + _IconWaterRate.name;

const IconWaterRate = Object.assign(_IconWaterRate, {
  install: (app: App) => {
    app.component(_IconWaterRate.name, _IconWaterRate);
  }
});

export default IconWaterRate;