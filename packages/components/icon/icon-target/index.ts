import type { App } from 'vue';
import _IconTarget from './icon-target.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTarget.name = getComponentsPrefix() + _IconTarget.name;

const IconTarget = Object.assign(_IconTarget, {
  install: (app: App) => {
    app.component(_IconTarget.name, _IconTarget);
  }
});

export default IconTarget;