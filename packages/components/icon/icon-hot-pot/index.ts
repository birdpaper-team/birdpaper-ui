import type { App } from 'vue';
import _IconHotPot from './icon-hot-pot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHotPot.name = getComponentsPrefix() + _IconHotPot.name;

const IconHotPot = Object.assign(_IconHotPot, {
  install: (app: App) => {
    app.component(_IconHotPot.name, _IconHotPot);
  }
});

export default IconHotPot;