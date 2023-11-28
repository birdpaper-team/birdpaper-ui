import type { App } from 'vue';
import _IconLeaf from './icon-leaf.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeaf.name = getComponentsPrefix() + _IconLeaf.name;

const IconLeaf = Object.assign(_IconLeaf, {
  install: (app: App) => {
    app.component(_IconLeaf.name, _IconLeaf);
  }
});

export default IconLeaf;