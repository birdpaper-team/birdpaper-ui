import type { App } from 'vue';
import _IconToRight from './icon-to-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToRight.name = getComponentsPrefix() + _IconToRight.name;

const IconToRight = Object.assign(_IconToRight, {
  install: (app: App) => {
    app.component(_IconToRight.name, _IconToRight);
  }
});

export default IconToRight;