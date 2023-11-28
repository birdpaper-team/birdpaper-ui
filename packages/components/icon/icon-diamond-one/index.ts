import type { App } from 'vue';
import _IconDiamondOne from './icon-diamond-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamondOne.name = getComponentsPrefix() + _IconDiamondOne.name;

const IconDiamondOne = Object.assign(_IconDiamondOne, {
  install: (app: App) => {
    app.component(_IconDiamondOne.name, _IconDiamondOne);
  }
});

export default IconDiamondOne;