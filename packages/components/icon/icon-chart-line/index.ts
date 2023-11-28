import type { App } from 'vue';
import _IconChartLine from './icon-chart-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartLine.name = getComponentsPrefix() + _IconChartLine.name;

const IconChartLine = Object.assign(_IconChartLine, {
  install: (app: App) => {
    app.component(_IconChartLine.name, _IconChartLine);
  }
});

export default IconChartLine;