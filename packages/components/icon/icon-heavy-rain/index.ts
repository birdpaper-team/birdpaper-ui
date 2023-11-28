import type { App } from 'vue';
import _IconHeavyRain from './icon-heavy-rain.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeavyRain.name = getComponentsPrefix() + _IconHeavyRain.name;

const IconHeavyRain = Object.assign(_IconHeavyRain, {
  install: (app: App) => {
    app.component(_IconHeavyRain.name, _IconHeavyRain);
  }
});

export default IconHeavyRain;