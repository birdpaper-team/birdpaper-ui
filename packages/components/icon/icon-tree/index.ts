import type { App } from 'vue';
import _IconTree from './icon-tree.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTree.name = getComponentsPrefix() + _IconTree.name;

const IconTree = Object.assign(_IconTree, {
  install: (app: App) => {
    app.component(_IconTree.name, _IconTree);
  }
});

export default IconTree;