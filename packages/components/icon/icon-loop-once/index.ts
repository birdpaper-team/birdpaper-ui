import type { App } from 'vue';
import _IconLoopOnce from './icon-loop-once.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoopOnce.name = getComponentsPrefix() + _IconLoopOnce.name;

const IconLoopOnce = Object.assign(_IconLoopOnce, {
  install: (app: App) => {
    app.component(_IconLoopOnce.name, _IconLoopOnce);
  }
});

export default IconLoopOnce;