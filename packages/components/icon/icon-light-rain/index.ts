import type { App } from 'vue';
import _IconLightRain from './icon-light-rain.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLightRain.name = getComponentsPrefix() + _IconLightRain.name;

const IconLightRain = Object.assign(_IconLightRain, {
  install: (app: App) => {
    app.component(_IconLightRain.name, _IconLightRain);
  }
});

export default IconLightRain;