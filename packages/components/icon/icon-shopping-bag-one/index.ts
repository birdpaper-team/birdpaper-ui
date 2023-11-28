import type { App } from 'vue';
import _IconShoppingBagOne from './icon-shopping-bag-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingBagOne.name = getComponentsPrefix() + _IconShoppingBagOne.name;

const IconShoppingBagOne = Object.assign(_IconShoppingBagOne, {
  install: (app: App) => {
    app.component(_IconShoppingBagOne.name, _IconShoppingBagOne);
  }
});

export default IconShoppingBagOne;