import type { App } from 'vue';
import _IconOptimize from './icon-optimize.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOptimize.name = getComponentsPrefix() + _IconOptimize.name;

const IconOptimize = Object.assign(_IconOptimize, {
  install: (app: App) => {
    app.component(_IconOptimize.name, _IconOptimize);
  }
});

export default IconOptimize;