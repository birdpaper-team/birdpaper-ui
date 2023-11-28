import type { App } from 'vue';
import _IconChartHistogramOne from './icon-chart-histogram-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartHistogramOne.name = getComponentsPrefix() + _IconChartHistogramOne.name;

const IconChartHistogramOne = Object.assign(_IconChartHistogramOne, {
  install: (app: App) => {
    app.component(_IconChartHistogramOne.name, _IconChartHistogramOne);
  }
});

export default IconChartHistogramOne;