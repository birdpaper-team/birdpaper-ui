import type { App } from 'vue';
import _IconMarket from './icon-market.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMarket.name = getComponentsPrefix() + _IconMarket.name;

const IconMarket = Object.assign(_IconMarket, {
  install: (app: App) => {
    app.component(_IconMarket.name, _IconMarket);
  }
});

export default IconMarket;