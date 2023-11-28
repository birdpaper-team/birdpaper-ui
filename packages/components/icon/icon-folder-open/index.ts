import type { App } from 'vue';
import _IconFolderOpen from './icon-folder-open.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderOpen.name = getComponentsPrefix() + _IconFolderOpen.name;

const IconFolderOpen = Object.assign(_IconFolderOpen, {
  install: (app: App) => {
    app.component(_IconFolderOpen.name, _IconFolderOpen);
  }
});

export default IconFolderOpen;