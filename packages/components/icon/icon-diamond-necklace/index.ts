import type { App } from 'vue';
import _IconDiamondNecklace from './icon-diamond-necklace.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamondNecklace.name = getComponentsPrefix() + _IconDiamondNecklace.name;

const IconDiamondNecklace = Object.assign(_IconDiamondNecklace, {
  install: (app: App) => {
    app.component(_IconDiamondNecklace.name, _IconDiamondNecklace);
  }
});

export default IconDiamondNecklace;