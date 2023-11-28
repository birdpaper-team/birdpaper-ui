import type { App } from 'vue';
import _IconSmartOptimization from './icon-smart-optimization.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSmartOptimization.name = getComponentsPrefix() + _IconSmartOptimization.name;

const IconSmartOptimization = Object.assign(_IconSmartOptimization, {
  install: (app: App) => {
    app.component(_IconSmartOptimization.name, _IconSmartOptimization);
  }
});

export default IconSmartOptimization;