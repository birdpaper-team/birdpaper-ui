import type { App } from 'vue';
import _IconCrossRing from './icon-cross-ring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrossRing.name = getComponentsPrefix() + _IconCrossRing.name;

const IconCrossRing = Object.assign(_IconCrossRing, {
  install: (app: App) => {
    app.component(_IconCrossRing.name, _IconCrossRing);
  }
});

export default IconCrossRing;