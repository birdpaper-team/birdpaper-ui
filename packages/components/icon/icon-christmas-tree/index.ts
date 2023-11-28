import type { App } from 'vue';
import _IconChristmasTree from './icon-christmas-tree.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChristmasTree.name = getComponentsPrefix() + _IconChristmasTree.name;

const IconChristmasTree = Object.assign(_IconChristmasTree, {
  install: (app: App) => {
    app.component(_IconChristmasTree.name, _IconChristmasTree);
  }
});

export default IconChristmasTree;