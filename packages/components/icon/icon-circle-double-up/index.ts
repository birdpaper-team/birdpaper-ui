import type { App } from 'vue';
import _IconCircleDoubleUp from './icon-circle-double-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleDoubleUp.name = getComponentsPrefix() + _IconCircleDoubleUp.name;

const IconCircleDoubleUp = Object.assign(_IconCircleDoubleUp, {
  install: (app: App) => {
    app.component(_IconCircleDoubleUp.name, _IconCircleDoubleUp);
  }
});

export default IconCircleDoubleUp;