import type { App } from 'vue';
import _IconFolderPlus from './icon-folder-plus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderPlus.name = getComponentsPrefix() + _IconFolderPlus.name;

const IconFolderPlus = Object.assign(_IconFolderPlus, {
  install: (app: App) => {
    app.component(_IconFolderPlus.name, _IconFolderPlus);
  }
});

export default IconFolderPlus;