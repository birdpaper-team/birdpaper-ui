import type { App } from 'vue';
import _IconFolderLock from './icon-folder-lock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderLock.name = getComponentsPrefix() + _IconFolderLock.name;

const IconFolderLock = Object.assign(_IconFolderLock, {
  install: (app: App) => {
    app.component(_IconFolderLock.name, _IconFolderLock);
  }
});

export default IconFolderLock;