import type { App } from 'vue';
import _IconFolderCode from './icon-folder-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderCode.name = getComponentsPrefix() + _IconFolderCode.name;

const IconFolderCode = Object.assign(_IconFolderCode, {
  install: (app: App) => {
    app.component(_IconFolderCode.name, _IconFolderCode);
  }
});

export default IconFolderCode;