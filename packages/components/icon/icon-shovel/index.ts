import type { App } from 'vue';
import _IconShovel from './icon-shovel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShovel.name = getComponentsPrefix() + _IconShovel.name;

const IconShovel = Object.assign(_IconShovel, {
  install: (app: App) => {
    app.component(_IconShovel.name, _IconShovel);
  }
});

export default IconShovel;