import type { App } from 'vue';
import _IconDonutChartLine from './icon-donut-chart-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDonutChartLine.name = getComponentsPrefix() + _IconDonutChartLine.name;

const IconDonutChartLine = Object.assign(_IconDonutChartLine, {
  install: (app: App) => {
    app.component(_IconDonutChartLine.name, _IconDonutChartLine);
  }
});

export default IconDonutChartLine;