import type { App } from 'vue';
import _IconShoppingCartOne from './icon-shopping-cart-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingCartOne.name = getComponentsPrefix() + _IconShoppingCartOne.name;

const IconShoppingCartOne = Object.assign(_IconShoppingCartOne, {
  install: (app: App) => {
    app.component(_IconShoppingCartOne.name, _IconShoppingCartOne);
  }
});

export default IconShoppingCartOne;