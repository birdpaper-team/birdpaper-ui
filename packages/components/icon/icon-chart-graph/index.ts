import type { App } from 'vue';
import _IconChartGraph from './icon-chart-graph.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartGraph.name = getComponentsPrefix() + _IconChartGraph.name;

const IconChartGraph = Object.assign(_IconChartGraph, {
  install: (app: App) => {
    app.component(_IconChartGraph.name, _IconChartGraph);
  }
});

export default IconChartGraph;