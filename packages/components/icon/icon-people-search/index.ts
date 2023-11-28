import type { App } from 'vue';
import _IconPeopleSearch from './icon-people-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleSearch.name = getComponentsPrefix() + _IconPeopleSearch.name;

const IconPeopleSearch = Object.assign(_IconPeopleSearch, {
  install: (app: App) => {
    app.component(_IconPeopleSearch.name, _IconPeopleSearch);
  }
});

export default IconPeopleSearch;