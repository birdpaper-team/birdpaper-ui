import type { App } from 'vue';
import _IconChartStock from './icon-chart-stock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartStock.name = getComponentsPrefix() + _IconChartStock.name;

const IconChartStock = Object.assign(_IconChartStock, {
  install: (app: App) => {
    app.component(_IconChartStock.name, _IconChartStock);
  }
});

export default IconChartStock;