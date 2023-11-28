import type { App } from 'vue';
import _IconBuy from './icon-buy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBuy.name = getComponentsPrefix() + _IconBuy.name;

const IconBuy = Object.assign(_IconBuy, {
  install: (app: App) => {
    app.component(_IconBuy.name, _IconBuy);
  }
});

export default IconBuy;