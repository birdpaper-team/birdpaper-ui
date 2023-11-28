import type { App } from 'vue';
import _IconHeavyWind from './icon-heavy-wind.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeavyWind.name = getComponentsPrefix() + _IconHeavyWind.name;

const IconHeavyWind = Object.assign(_IconHeavyWind, {
  install: (app: App) => {
    app.component(_IconHeavyWind.name, _IconHeavyWind);
  }
});

export default IconHeavyWind;