import type { App } from 'vue';
import _IconChefHatOne from './icon-chef-hat-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChefHatOne.name = getComponentsPrefix() + _IconChefHatOne.name;

const IconChefHatOne = Object.assign(_IconChefHatOne, {
  install: (app: App) => {
    app.component(_IconChefHatOne.name, _IconChefHatOne);
  }
});

export default IconChefHatOne;