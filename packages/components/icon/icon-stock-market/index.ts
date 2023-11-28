import type { App } from 'vue';
import _IconStockMarket from './icon-stock-market.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStockMarket.name = getComponentsPrefix() + _IconStockMarket.name;

const IconStockMarket = Object.assign(_IconStockMarket, {
  install: (app: App) => {
    app.component(_IconStockMarket.name, _IconStockMarket);
  }
});

export default IconStockMarket;