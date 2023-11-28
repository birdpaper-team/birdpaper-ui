import type { App } from 'vue';
import _IconLineChartLine from './icon-line-chart-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLineChartLine.name = getComponentsPrefix() + _IconLineChartLine.name;

const IconLineChartLine = Object.assign(_IconLineChartLine, {
  install: (app: App) => {
    app.component(_IconLineChartLine.name, _IconLineChartLine);
  }
});

export default IconLineChartLine;