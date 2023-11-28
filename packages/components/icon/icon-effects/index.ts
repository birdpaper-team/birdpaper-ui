import type { App } from 'vue';
import _IconEffects from './icon-effects.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEffects.name = getComponentsPrefix() + _IconEffects.name;

const IconEffects = Object.assign(_IconEffects, {
  install: (app: App) => {
    app.component(_IconEffects.name, _IconEffects);
  }
});

export default IconEffects;