import type { App } from 'vue';
import _IconCircleDoubleRight from './icon-circle-double-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleDoubleRight.name = getComponentsPrefix() + _IconCircleDoubleRight.name;

const IconCircleDoubleRight = Object.assign(_IconCircleDoubleRight, {
  install: (app: App) => {
    app.component(_IconCircleDoubleRight.name, _IconCircleDoubleRight);
  }
});

export default IconCircleDoubleRight;