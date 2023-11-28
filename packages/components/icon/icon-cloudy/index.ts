import type { App } from 'vue';
import _IconCloudy from './icon-cloudy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloudy.name = getComponentsPrefix() + _IconCloudy.name;

const IconCloudy = Object.assign(_IconCloudy, {
  install: (app: App) => {
    app.component(_IconCloudy.name, _IconCloudy);
  }
});

export default IconCloudy;