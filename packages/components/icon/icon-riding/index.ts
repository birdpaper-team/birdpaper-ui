import type { App } from 'vue';
import _IconRiding from './icon-riding.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRiding.name = getComponentsPrefix() + _IconRiding.name;

const IconRiding = Object.assign(_IconRiding, {
  install: (app: App) => {
    app.component(_IconRiding.name, _IconRiding);
  }
});

export default IconRiding;