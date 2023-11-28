import type { App } from 'vue';
import _IconCircleDoubleLeft from './icon-circle-double-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleDoubleLeft.name = getComponentsPrefix() + _IconCircleDoubleLeft.name;

const IconCircleDoubleLeft = Object.assign(_IconCircleDoubleLeft, {
  install: (app: App) => {
    app.component(_IconCircleDoubleLeft.name, _IconCircleDoubleLeft);
  }
});

export default IconCircleDoubleLeft;