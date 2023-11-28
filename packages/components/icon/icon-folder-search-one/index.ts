import type { App } from 'vue';
import _IconFolderSearchOne from './icon-folder-search-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSearchOne.name = getComponentsPrefix() + _IconFolderSearchOne.name;

const IconFolderSearchOne = Object.assign(_IconFolderSearchOne, {
  install: (app: App) => {
    app.component(_IconFolderSearchOne.name, _IconFolderSearchOne);
  }
});

export default IconFolderSearchOne;