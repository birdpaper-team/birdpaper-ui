import type { App } from 'vue';
import _IconShoppingCartDel from './icon-shopping-cart-del.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingCartDel.name = getComponentsPrefix() + _IconShoppingCartDel.name;

const IconShoppingCartDel = Object.assign(_IconShoppingCartDel, {
  install: (app: App) => {
    app.component(_IconShoppingCartDel.name, _IconShoppingCartDel);
  }
});

export default IconShoppingCartDel;