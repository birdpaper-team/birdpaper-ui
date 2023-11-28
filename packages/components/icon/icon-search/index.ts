import type { App } from 'vue';
import _IconSearch from './icon-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSearch.name = getComponentsPrefix() + _IconSearch.name;

const IconSearch = Object.assign(_IconSearch, {
  install: (app: App) => {
    app.component(_IconSearch.name, _IconSearch);
  }
});

export default IconSearch;