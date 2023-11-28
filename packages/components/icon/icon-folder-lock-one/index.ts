import type { App } from 'vue';
import _IconFolderLockOne from './icon-folder-lock-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderLockOne.name = getComponentsPrefix() + _IconFolderLockOne.name;

const IconFolderLockOne = Object.assign(_IconFolderLockOne, {
  install: (app: App) => {
    app.component(_IconFolderLockOne.name, _IconFolderLockOne);
  }
});

export default IconFolderLockOne;