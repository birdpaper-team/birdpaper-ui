import type { App } from 'vue';
import _IconWaterpoloOne from './icon-waterpolo-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaterpoloOne.name = getComponentsPrefix() + _IconWaterpoloOne.name;

const IconWaterpoloOne = Object.assign(_IconWaterpoloOne, {
  install: (app: App) => {
    app.component(_IconWaterpoloOne.name, _IconWaterpoloOne);
  }
});

export default IconWaterpoloOne;