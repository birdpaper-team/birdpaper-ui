import type { App } from 'vue';
import _IconElectricWave from './icon-electric-wave.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElectricWave.name = getComponentsPrefix() + _IconElectricWave.name;

const IconElectricWave = Object.assign(_IconElectricWave, {
  install: (app: App) => {
    app.component(_IconElectricWave.name, _IconElectricWave);
  }
});

export default IconElectricWave;