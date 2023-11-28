import type { App } from 'vue';
import _IconEmailSearch from './icon-email-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailSearch.name = getComponentsPrefix() + _IconEmailSearch.name;

const IconEmailSearch = Object.assign(_IconEmailSearch, {
  install: (app: App) => {
    app.component(_IconEmailSearch.name, _IconEmailSearch);
  }
});

export default IconEmailSearch;