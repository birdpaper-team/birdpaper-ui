import type { App } from 'vue';
import _IconFontSearch from './icon-font-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFontSearch.name = getComponentsPrefix() + _IconFontSearch.name;

const IconFontSearch = Object.assign(_IconFontSearch, {
  install: (app: App) => {
    app.component(_IconFontSearch.name, _IconFontSearch);
  }
});

export default IconFontSearch;