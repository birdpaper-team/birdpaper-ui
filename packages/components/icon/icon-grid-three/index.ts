import type { App } from 'vue';
import _IconGridThree from './icon-grid-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGridThree.name = getComponentsPrefix() + _IconGridThree.name;

const IconGridThree = Object.assign(_IconGridThree, {
  install: (app: App) => {
    app.component(_IconGridThree.name, _IconGridThree);
  }
});

export default IconGridThree;