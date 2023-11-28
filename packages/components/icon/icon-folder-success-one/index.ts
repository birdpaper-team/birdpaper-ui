import type { App } from 'vue';
import _IconFolderSuccessOne from './icon-folder-success-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderSuccessOne.name = getComponentsPrefix() + _IconFolderSuccessOne.name;

const IconFolderSuccessOne = Object.assign(_IconFolderSuccessOne, {
  install: (app: App) => {
    app.component(_IconFolderSuccessOne.name, _IconFolderSuccessOne);
  }
});

export default IconFolderSuccessOne;