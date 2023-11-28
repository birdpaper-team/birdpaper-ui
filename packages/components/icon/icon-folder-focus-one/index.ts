import type { App } from 'vue';
import _IconFolderFocusOne from './icon-folder-focus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderFocusOne.name = getComponentsPrefix() + _IconFolderFocusOne.name;

const IconFolderFocusOne = Object.assign(_IconFolderFocusOne, {
  install: (app: App) => {
    app.component(_IconFolderFocusOne.name, _IconFolderFocusOne);
  }
});

export default IconFolderFocusOne;