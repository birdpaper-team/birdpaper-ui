import type { App } from 'vue';
import _IconChartPieOne from './icon-chart-pie-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartPieOne.name = getComponentsPrefix() + _IconChartPieOne.name;

const IconChartPieOne = Object.assign(_IconChartPieOne, {
  install: (app: App) => {
    app.component(_IconChartPieOne.name, _IconChartPieOne);
  }
});

export default IconChartPieOne;