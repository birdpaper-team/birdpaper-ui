import type { App } from 'vue';
import _IconShoppingMall from './icon-shopping-mall.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShoppingMall.name = getComponentsPrefix() + _IconShoppingMall.name;

const IconShoppingMall = Object.assign(_IconShoppingMall, {
  install: (app: App) => {
    app.component(_IconShoppingMall.name, _IconShoppingMall);
  }
});

export default IconShoppingMall;