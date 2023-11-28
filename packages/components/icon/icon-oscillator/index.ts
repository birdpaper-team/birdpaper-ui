import type { App } from 'vue';
import _IconOscillator from './icon-oscillator.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOscillator.name = getComponentsPrefix() + _IconOscillator.name;

const IconOscillator = Object.assign(_IconOscillator, {
  install: (app: App) => {
    app.component(_IconOscillator.name, _IconOscillator);
  }
});

export default IconOscillator;