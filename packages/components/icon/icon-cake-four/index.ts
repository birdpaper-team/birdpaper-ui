import type { App } from 'vue';
import _IconCakeFour from './icon-cake-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCakeFour.name = getComponentsPrefix() + _IconCakeFour.name;

const IconCakeFour = Object.assign(_IconCakeFour, {
  install: (app: App) => {
    app.component(_IconCakeFour.name, _IconCakeFour);
  }
});

export default IconCakeFour;