import type { App } from 'vue';
import _IconMenuFold from './icon-menu-fold.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMenuFold.name = getComponentsPrefix() + _IconMenuFold.name;

const IconMenuFold = Object.assign(_IconMenuFold, {
  install: (app: App) => {
    app.component(_IconMenuFold.name, _IconMenuFold);
  }
});

export default IconMenuFold;