import type { App } from 'vue';
import _IconCookingPot from './icon-cooking-pot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCookingPot.name = getComponentsPrefix() + _IconCookingPot.name;

const IconCookingPot = Object.assign(_IconCookingPot, {
  install: (app: App) => {
    app.component(_IconCookingPot.name, _IconCookingPot);
  }
});

export default IconCookingPot;