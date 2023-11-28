import type { App } from 'vue';
import _IconMessageSearch from './icon-message-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageSearch.name = getComponentsPrefix() + _IconMessageSearch.name;

const IconMessageSearch = Object.assign(_IconMessageSearch, {
  install: (app: App) => {
    app.component(_IconMessageSearch.name, _IconMessageSearch);
  }
});

export default IconMessageSearch;