import type { App } from 'vue';
import _IconDiamonds from './icon-diamonds.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiamonds.name = getComponentsPrefix() + _IconDiamonds.name;

const IconDiamonds = Object.assign(_IconDiamonds, {
  install: (app: App) => {
    app.component(_IconDiamonds.name, _IconDiamonds);
  }
});

export default IconDiamonds;