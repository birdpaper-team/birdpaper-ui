import type { App } from 'vue';
import _IconSort from './icon-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSort.name = getComponentsPrefix() + _IconSort.name;

const IconSort = Object.assign(_IconSort, {
  install: (app: App) => {
    app.component(_IconSort.name, _IconSort);
  }
});

export default IconSort;