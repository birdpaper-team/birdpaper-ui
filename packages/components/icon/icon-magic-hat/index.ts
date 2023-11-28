import type { App } from 'vue';
import _IconMagicHat from './icon-magic-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMagicHat.name = getComponentsPrefix() + _IconMagicHat.name;

const IconMagicHat = Object.assign(_IconMagicHat, {
  install: (app: App) => {
    app.component(_IconMagicHat.name, _IconMagicHat);
  }
});

export default IconMagicHat;