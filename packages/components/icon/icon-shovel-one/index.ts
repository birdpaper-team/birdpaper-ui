import type { App } from 'vue';
import _IconShovelOne from './icon-shovel-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShovelOne.name = getComponentsPrefix() + _IconShovelOne.name;

const IconShovelOne = Object.assign(_IconShovelOne, {
  install: (app: App) => {
    app.component(_IconShovelOne.name, _IconShovelOne);
  }
});

export default IconShovelOne;