import type { App } from 'vue';
import _IconDiamondRing from './icon-diamond-ring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamondRing.name = getComponentsPrefix() + _IconDiamondRing.name;

const IconDiamondRing = Object.assign(_IconDiamondRing, {
  install: (app: App) => {
    app.component(_IconDiamondRing.name, _IconDiamondRing);
  }
});

export default IconDiamondRing;