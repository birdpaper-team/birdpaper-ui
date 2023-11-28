import type { App } from 'vue';
import _IconShop from './icon-shop.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShop.name = getComponentsPrefix() + _IconShop.name;

const IconShop = Object.assign(_IconShop, {
  install: (app: App) => {
    app.component(_IconShop.name, _IconShop);
  }
});

export default IconShop;