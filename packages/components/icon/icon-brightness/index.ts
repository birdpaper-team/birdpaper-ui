import type { App } from 'vue';
import _IconBrightness from './icon-brightness.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrightness.name = getComponentsPrefix() + _IconBrightness.name;

const IconBrightness = Object.assign(_IconBrightness, {
  install: (app: App) => {
    app.component(_IconBrightness.name, _IconBrightness);
  }
});

export default IconBrightness;