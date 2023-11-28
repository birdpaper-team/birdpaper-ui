import type { App } from 'vue';
import _IconFolderSearch from './icon-folder-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSearch.name = getComponentsPrefix() + _IconFolderSearch.name;

const IconFolderSearch = Object.assign(_IconFolderSearch, {
  install: (app: App) => {
    app.component(_IconFolderSearch.name, _IconFolderSearch);
  }
});

export default IconFolderSearch;