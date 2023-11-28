import type { App } from 'vue';
import _IconRepositioning from './icon-repositioning.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRepositioning.name = getComponentsPrefix() + _IconRepositioning.name;

const IconRepositioning = Object.assign(_IconRepositioning, {
  install: (app: App) => {
    app.component(_IconRepositioning.name, _IconRepositioning);
  }
});

export default IconRepositioning;