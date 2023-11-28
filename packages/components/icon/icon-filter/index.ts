import type { App } from 'vue';
import _IconFilter from './icon-filter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFilter.name = getComponentsPrefix() + _IconFilter.name;

const IconFilter = Object.assign(_IconFilter, {
  install: (app: App) => {
    app.component(_IconFilter.name, _IconFilter);
  }
});

export default IconFilter;