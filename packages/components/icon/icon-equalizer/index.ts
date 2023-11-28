import type { App } from 'vue';
import _IconEqualizer from './icon-equalizer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEqualizer.name = getComponentsPrefix() + _IconEqualizer.name;

const IconEqualizer = Object.assign(_IconEqualizer, {
  install: (app: App) => {
    app.component(_IconEqualizer.name, _IconEqualizer);
  }
});

export default IconEqualizer;