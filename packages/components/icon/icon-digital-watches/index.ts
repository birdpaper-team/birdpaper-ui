import type { App } from 'vue';
import _IconDigitalWatches from './icon-digital-watches.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDigitalWatches.name = getComponentsPrefix() + _IconDigitalWatches.name;

const IconDigitalWatches = Object.assign(_IconDigitalWatches, {
  install: (app: App) => {
    app.component(_IconDigitalWatches.name, _IconDigitalWatches);
  }
});

export default IconDigitalWatches;