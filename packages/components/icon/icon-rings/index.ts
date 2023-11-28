import type { App } from 'vue';
import _IconRings from './icon-rings.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRings.name = getComponentsPrefix() + _IconRings.name;

const IconRings = Object.assign(_IconRings, {
  install: (app: App) => {
    app.component(_IconRings.name, _IconRings);
  }
});

export default IconRings;