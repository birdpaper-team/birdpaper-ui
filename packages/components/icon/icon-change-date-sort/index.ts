import type { App } from 'vue';
import _IconChangeDateSort from './icon-change-date-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChangeDateSort.name = getComponentsPrefix() + _IconChangeDateSort.name;

const IconChangeDateSort = Object.assign(_IconChangeDateSort, {
  install: (app: App) => {
    app.component(_IconChangeDateSort.name, _IconChangeDateSort);
  }
});

export default IconChangeDateSort;