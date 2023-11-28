import type { App } from 'vue';
import _IconFileSearch from './icon-file-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSearch.name = getComponentsPrefix() + _IconFileSearch.name;

const IconFileSearch = Object.assign(_IconFileSearch, {
  install: (app: App) => {
    app.component(_IconFileSearch.name, _IconFileSearch);
  }
});

export default IconFileSearch;