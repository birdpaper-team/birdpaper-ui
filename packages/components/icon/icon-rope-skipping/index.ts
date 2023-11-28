import type { App } from 'vue';
import _IconRopeSkipping from './icon-rope-skipping.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRopeSkipping.name = getComponentsPrefix() + _IconRopeSkipping.name;

const IconRopeSkipping = Object.assign(_IconRopeSkipping, {
  install: (app: App) => {
    app.component(_IconRopeSkipping.name, _IconRopeSkipping);
  }
});

export default IconRopeSkipping;