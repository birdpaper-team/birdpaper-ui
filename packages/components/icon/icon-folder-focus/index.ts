import type { App } from 'vue';
import _IconFolderFocus from './icon-folder-focus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderFocus.name = getComponentsPrefix() + _IconFolderFocus.name;

const IconFolderFocus = Object.assign(_IconFolderFocus, {
  install: (app: App) => {
    app.component(_IconFolderFocus.name, _IconFolderFocus);
  }
});

export default IconFolderFocus;