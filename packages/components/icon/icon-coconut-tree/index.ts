import type { App } from 'vue';
import _IconCoconutTree from './icon-coconut-tree.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCoconutTree.name = getComponentsPrefix() + _IconCoconutTree.name;

const IconCoconutTree = Object.assign(_IconCoconutTree, {
  install: (app: App) => {
    app.component(_IconCoconutTree.name, _IconCoconutTree);
  }
});

export default IconCoconutTree;