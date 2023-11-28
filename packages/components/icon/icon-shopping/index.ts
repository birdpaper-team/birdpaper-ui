import type { App } from 'vue';
import _IconShopping from './icon-shopping.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShopping.name = getComponentsPrefix() + _IconShopping.name;

const IconShopping = Object.assign(_IconShopping, {
  install: (app: App) => {
    app.component(_IconShopping.name, _IconShopping);
  }
});

export default IconShopping;