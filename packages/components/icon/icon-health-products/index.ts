import type { App } from 'vue';
import _IconHealthProducts from './icon-health-products.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHealthProducts.name = getComponentsPrefix() + _IconHealthProducts.name;

const IconHealthProducts = Object.assign(_IconHealthProducts, {
  install: (app: App) => {
    app.component(_IconHealthProducts.name, _IconHealthProducts);
  }
});

export default IconHealthProducts;