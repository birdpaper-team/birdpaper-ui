import type { App } from 'vue';
import _IconNeedle from './icon-needle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNeedle.name = getComponentsPrefix() + _IconNeedle.name;

const IconNeedle = Object.assign(_IconNeedle, {
  install: (app: App) => {
    app.component(_IconNeedle.name, _IconNeedle);
  }
});

export default IconNeedle;