import type { App } from 'vue';
import _IconNetworkTree from './icon-network-tree.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNetworkTree.name = getComponentsPrefix() + _IconNetworkTree.name;

const IconNetworkTree = Object.assign(_IconNetworkTree, {
  install: (app: App) => {
    app.component(_IconNetworkTree.name, _IconNetworkTree);
  }
});

export default IconNetworkTree;