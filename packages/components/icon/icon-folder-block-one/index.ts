import type { App } from 'vue';
import _IconFolderBlockOne from './icon-folder-block-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderBlockOne.name = getComponentsPrefix() + _IconFolderBlockOne.name;

const IconFolderBlockOne = Object.assign(_IconFolderBlockOne, {
  install: (app: App) => {
    app.component(_IconFolderBlockOne.name, _IconFolderBlockOne);
  }
});

export default IconFolderBlockOne;