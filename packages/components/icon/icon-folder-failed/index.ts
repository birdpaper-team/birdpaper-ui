import type { App } from 'vue';
import _IconFolderFailed from './icon-folder-failed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderFailed.name = getComponentsPrefix() + _IconFolderFailed.name;

const IconFolderFailed = Object.assign(_IconFolderFailed, {
  install: (app: App) => {
    app.component(_IconFolderFailed.name, _IconFolderFailed);
  }
});

export default IconFolderFailed;