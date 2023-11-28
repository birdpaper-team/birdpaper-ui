import type { App } from 'vue';
import _IconChefHat from './icon-chef-hat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChefHat.name = getComponentsPrefix() + _IconChefHat.name;

const IconChefHat = Object.assign(_IconChefHat, {
  install: (app: App) => {
    app.component(_IconChefHat.name, _IconChefHat);
  }
});

export default IconChefHat;