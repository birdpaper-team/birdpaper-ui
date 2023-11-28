import type { App } from 'vue';
import _IconMenuFoldOne from './icon-menu-fold-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMenuFoldOne.name = getComponentsPrefix() + _IconMenuFoldOne.name;

const IconMenuFoldOne = Object.assign(_IconMenuFoldOne, {
  install: (app: App) => {
    app.component(_IconMenuFoldOne.name, _IconMenuFoldOne);
  }
});

export default IconMenuFoldOne;