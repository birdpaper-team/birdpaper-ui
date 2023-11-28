import type { App } from 'vue';
import _IconShoppingCart from './icon-shopping-cart.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingCart.name = getComponentsPrefix() + _IconShoppingCart.name;

const IconShoppingCart = Object.assign(_IconShoppingCart, {
  install: (app: App) => {
    app.component(_IconShoppingCart.name, _IconShoppingCart);
  }
});

export default IconShoppingCart;