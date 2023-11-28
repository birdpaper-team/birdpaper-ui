import type { App } from 'vue';
import _IconNaturalMode from './icon-natural-mode.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNaturalMode.name = getComponentsPrefix() + _IconNaturalMode.name;

const IconNaturalMode = Object.assign(_IconNaturalMode, {
  install: (app: App) => {
    app.component(_IconNaturalMode.name, _IconNaturalMode);
  }
});

export default IconNaturalMode;