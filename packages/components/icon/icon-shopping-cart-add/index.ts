import type { App } from 'vue';
import _IconShoppingCartAdd from './icon-shopping-cart-add.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingCartAdd.name = getComponentsPrefix() + _IconShoppingCartAdd.name;

const IconShoppingCartAdd = Object.assign(_IconShoppingCartAdd, {
  install: (app: App) => {
    app.component(_IconShoppingCartAdd.name, _IconShoppingCartAdd);
  }
});

export default IconShoppingCartAdd;