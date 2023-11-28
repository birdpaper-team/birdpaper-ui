import type { App } from 'vue';
import _IconWatermelon from './icon-watermelon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWatermelon.name = getComponentsPrefix() + _IconWatermelon.name;

const IconWatermelon = Object.assign(_IconWatermelon, {
  install: (app: App) => {
    app.component(_IconWatermelon.name, _IconWatermelon);
  }
});

export default IconWatermelon;