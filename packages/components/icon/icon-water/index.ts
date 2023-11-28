import type { App } from 'vue';
import _IconWater from './icon-water.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWater.name = getComponentsPrefix() + _IconWater.name;

const IconWater = Object.assign(_IconWater, {
  install: (app: App) => {
    app.component(_IconWater.name, _IconWater);
  }
});

export default IconWater;