import type { App } from 'vue';
import _IconWaterLevel from './icon-water-level.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaterLevel.name = getComponentsPrefix() + _IconWaterLevel.name;

const IconWaterLevel = Object.assign(_IconWaterLevel, {
  install: (app: App) => {
    app.component(_IconWaterLevel.name, _IconWaterLevel);
  }
});

export default IconWaterLevel;