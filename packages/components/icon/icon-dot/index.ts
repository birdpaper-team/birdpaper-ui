import type { App } from 'vue';
import _IconDot from './icon-dot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDot.name = getComponentsPrefix() + _IconDot.name;

const IconDot = Object.assign(_IconDot, {
  install: (app: App) => {
    app.component(_IconDot.name, _IconDot);
  }
});

export default IconDot;