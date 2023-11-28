import type { App } from 'vue';
import _IconCreationDateSort from './icon-creation-date-sort.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCreationDateSort.name = getComponentsPrefix() + _IconCreationDateSort.name;

const IconCreationDateSort = Object.assign(_IconCreationDateSort, {
  install: (app: App) => {
    app.component(_IconCreationDateSort.name, _IconCreationDateSort);
  }
});

export default IconCreationDateSort;