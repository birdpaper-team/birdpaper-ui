import type { App } from 'vue';
import _IconRing from './icon-ring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRing.name = getComponentsPrefix() + _IconRing.name;

const IconRing = Object.assign(_IconRing, {
  install: (app: App) => {
    app.component(_IconRing.name, _IconRing);
  }
});

export default IconRing;