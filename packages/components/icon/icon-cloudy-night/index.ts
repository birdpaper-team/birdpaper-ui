import type { App } from 'vue';
import _IconCloudyNight from './icon-cloudy-night.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloudyNight.name = getComponentsPrefix() + _IconCloudyNight.name;

const IconCloudyNight = Object.assign(_IconCloudyNight, {
  install: (app: App) => {
    app.component(_IconCloudyNight.name, _IconCloudyNight);
  }
});

export default IconCloudyNight;