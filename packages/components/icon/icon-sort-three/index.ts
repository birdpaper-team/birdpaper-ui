import type { App } from 'vue';
import _IconSortThree from './icon-sort-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSortThree.name = getComponentsPrefix() + _IconSortThree.name;

const IconSortThree = Object.assign(_IconSortThree, {
  install: (app: App) => {
    app.component(_IconSortThree.name, _IconSortThree);
  }
});

export default IconSortThree;