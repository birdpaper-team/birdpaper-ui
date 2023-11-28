import type { App } from 'vue';
import _IconPot from './icon-pot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPot.name = getComponentsPrefix() + _IconPot.name;

const IconPot = Object.assign(_IconPot, {
  install: (app: App) => {
    app.component(_IconPot.name, _IconPot);
  }
});

export default IconPot;