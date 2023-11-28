import type { App } from 'vue';
import _IconWaves from './icon-waves.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaves.name = getComponentsPrefix() + _IconWaves.name;

const IconWaves = Object.assign(_IconWaves, {
  install: (app: App) => {
    app.component(_IconWaves.name, _IconWaves);
  }
});

export default IconWaves;