import type { App } from 'vue';
import _IconBubbleChartLine from './icon-bubble-chart-line.vue';

const IconBubbleChartLine = Object.assign(_IconBubbleChartLine, {
  install: (app: App) => {
    app.component(_IconBubbleChartLine.name, _IconBubbleChartLine);
  }
});

export default IconBubbleChartLine;