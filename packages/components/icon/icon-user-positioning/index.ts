import type { App } from 'vue';
import _IconUserPositioning from './icon-user-positioning.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUserPositioning.name = getComponentsPrefix() + _IconUserPositioning.name;

const IconUserPositioning = Object.assign(_IconUserPositioning, {
  install: (app: App) => {
    app.component(_IconUserPositioning.name, _IconUserPositioning);
  }
});

export default IconUserPositioning;