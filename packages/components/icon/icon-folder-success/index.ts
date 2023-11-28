import type { App } from 'vue';
import _IconFolderSuccess from './icon-folder-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSuccess.name = getComponentsPrefix() + _IconFolderSuccess.name;

const IconFolderSuccess = Object.assign(_IconFolderSuccess, {
  install: (app: App) => {
    app.component(_IconFolderSuccess.name, _IconFolderSuccess);
  }
});

export default IconFolderSuccess;