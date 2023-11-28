import type { App } from 'vue';
import _IconLineChartLine from './icon-line-chart-line.vue';

const IconLineChartLine = Object.assign(_IconLineChartLine, {
  install: (app: App) => {
    app.component(_IconLineChartLine.name, _IconLineChartLine);
  }
});

export default IconLineChartLine;