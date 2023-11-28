import type { App } from 'vue';
import _IconEndTimeSort from './icon-end-time-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEndTimeSort.name = getComponentsPrefix() + _IconEndTimeSort.name;

const IconEndTimeSort = Object.assign(_IconEndTimeSort, {
  install: (app: App) => {
    app.component(_IconEndTimeSort.name, _IconEndTimeSort);
  }
});

export default IconEndTimeSort;