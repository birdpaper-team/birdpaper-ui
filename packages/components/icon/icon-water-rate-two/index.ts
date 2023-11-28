import type { App } from 'vue';
import _IconWaterRateTwo from './icon-water-rate-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaterRateTwo.name = getComponentsPrefix() + _IconWaterRateTwo.name;

const IconWaterRateTwo = Object.assign(_IconWaterRateTwo, {
  install: (app: App) => {
    app.component(_IconWaterRateTwo.name, _IconWaterRateTwo);
  }
});

export default IconWaterRateTwo;