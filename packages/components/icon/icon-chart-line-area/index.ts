import type { App } from 'vue';
import _IconChartLineArea from './icon-chart-line-area.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartLineArea.name = getComponentsPrefix() + _IconChartLineArea.name;

const IconChartLineArea = Object.assign(_IconChartLineArea, {
  install: (app: App) => {
    app.component(_IconChartLineArea.name, _IconChartLineArea);
  }
});

export default IconChartLineArea;