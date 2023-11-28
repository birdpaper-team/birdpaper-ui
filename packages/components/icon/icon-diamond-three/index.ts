import type { App } from 'vue';
import _IconDiamondThree from './icon-diamond-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamondThree.name = getComponentsPrefix() + _IconDiamondThree.name;

const IconDiamondThree = Object.assign(_IconDiamondThree, {
  install: (app: App) => {
    app.component(_IconDiamondThree.name, _IconDiamondThree);
  }
});

export default IconDiamondThree;