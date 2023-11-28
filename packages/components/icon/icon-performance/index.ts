import type { App } from 'vue';
import _IconPerformance from './icon-performance.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPerformance.name = getComponentsPrefix() + _IconPerformance.name;

const IconPerformance = Object.assign(_IconPerformance, {
  install: (app: App) => {
    app.component(_IconPerformance.name, _IconPerformance);
  }
});

export default IconPerformance;