import type { App } from 'vue';
import _IconClickToFold from './icon-click-to-fold.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClickToFold.name = getComponentsPrefix() + _IconClickToFold.name;

const IconClickToFold = Object.assign(_IconClickToFold, {
  install: (app: App) => {
    app.component(_IconClickToFold.name, _IconClickToFold);
  }
});

export default IconClickToFold;