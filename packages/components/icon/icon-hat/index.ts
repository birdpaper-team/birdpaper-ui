import type { App } from 'vue';
import _IconHat from './icon-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHat.name = getComponentsPrefix() + _IconHat.name;

const IconHat = Object.assign(_IconHat, {
  install: (app: App) => {
    app.component(_IconHat.name, _IconHat);
  }
});

export default IconHat;