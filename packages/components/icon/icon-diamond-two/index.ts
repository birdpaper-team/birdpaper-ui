import type { App } from 'vue';
import _IconDiamondTwo from './icon-diamond-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamondTwo.name = getComponentsPrefix() + _IconDiamondTwo.name;

const IconDiamondTwo = Object.assign(_IconDiamondTwo, {
  install: (app: App) => {
    app.component(_IconDiamondTwo.name, _IconDiamondTwo);
  }
});

export default IconDiamondTwo;