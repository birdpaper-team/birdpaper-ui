import type { App } from 'vue';
import _IconColorFilter from './icon-color-filter.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconColorFilter.name = getComponentsPrefix() + _IconColorFilter.name;

const IconColorFilter = Object.assign(_IconColorFilter, {
  install: (app: App) => {
    app.component(_IconColorFilter.name, _IconColorFilter);
  }
});

export default IconColorFilter;