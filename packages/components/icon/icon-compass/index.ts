import type { App } from 'vue';
import _IconCompass from './icon-compass.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCompass.name = getComponentsPrefix() + _IconCompass.name;

const IconCompass = Object.assign(_IconCompass, {
  install: (app: App) => {
    app.component(_IconCompass.name, _IconCompass);
  }
});

export default IconCompass;