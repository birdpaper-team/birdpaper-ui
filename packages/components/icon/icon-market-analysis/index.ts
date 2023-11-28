import type { App } from 'vue';
import _IconMarketAnalysis from './icon-market-analysis.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMarketAnalysis.name = getComponentsPrefix() + _IconMarketAnalysis.name;

const IconMarketAnalysis = Object.assign(_IconMarketAnalysis, {
  install: (app: App) => {
    app.component(_IconMarketAnalysis.name, _IconMarketAnalysis);
  }
});

export default IconMarketAnalysis;