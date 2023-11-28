import type { App } from 'vue';
import _IconRelationalGraph from './icon-relational-graph.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRelationalGraph.name = getComponentsPrefix() + _IconRelationalGraph.name;

const IconRelationalGraph = Object.assign(_IconRelationalGraph, {
  install: (app: App) => {
    app.component(_IconRelationalGraph.name, _IconRelationalGraph);
  }
});

export default IconRelationalGraph;