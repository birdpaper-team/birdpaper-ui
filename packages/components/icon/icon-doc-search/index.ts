import type { App } from 'vue';
import _IconDocSearch from './icon-doc-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDocSearch.name = getComponentsPrefix() + _IconDocSearch.name;

const IconDocSearch = Object.assign(_IconDocSearch, {
  install: (app: App) => {
    app.component(_IconDocSearch.name, _IconDocSearch);
  }
});

export default IconDocSearch;