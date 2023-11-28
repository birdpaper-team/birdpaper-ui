import type { App } from 'vue';
import _IconStrawHat from './icon-straw-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStrawHat.name = getComponentsPrefix() + _IconStrawHat.name;

const IconStrawHat = Object.assign(_IconStrawHat, {
  install: (app: App) => {
    app.component(_IconStrawHat.name, _IconStrawHat);
  }
});

export default IconStrawHat;