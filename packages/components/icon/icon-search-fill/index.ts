import type { App } from 'vue';
import _IconSearchFill from './icon-search-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSearchFill.name = getComponentsPrefix() + _IconSearchFill.name;

const IconSearchFill = Object.assign(_IconSearchFill, {
  install: (app: App) => {
    app.component(_IconSearchFill.name, _IconSearchFill);
  }
});

export default IconSearchFill;