import type { App } from 'vue';
import _IconBarChartBoxLine from './icon-bar-chart-box-line.vue';

const IconBarChartBoxLine = Object.assign(_IconBarChartBoxLine, {
  install: (app: App) => {
    app.component(_IconBarChartBoxLine.name, _IconBarChartBoxLine);
  }
});

export default IconBarChartBoxLine;