import type { App } from 'vue';
import _IconSorcererHat from './icon-sorcerer-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSorcererHat.name = getComponentsPrefix() + _IconSorcererHat.name;

const IconSorcererHat = Object.assign(_IconSorcererHat, {
  install: (app: App) => {
    app.component(_IconSorcererHat.name, _IconSorcererHat);
  }
});

export default IconSorcererHat;