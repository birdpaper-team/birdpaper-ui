import type { App } from 'vue';
import _IconBubbleChartLine from './icon-bubble-chart-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBubbleChartLine.name = getComponentsPrefix() + _IconBubbleChartLine.name;

const IconBubbleChartLine = Object.assign(_IconBubbleChartLine, {
  install: (app: App) => {
    app.component(_IconBubbleChartLine.name, _IconBubbleChartLine);
  }
});

export default IconBubbleChartLine;