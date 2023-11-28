import type { App } from 'vue';
import _IconFolderProtection from './icon-folder-protection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderProtection.name = getComponentsPrefix() + _IconFolderProtection.name;

const IconFolderProtection = Object.assign(_IconFolderProtection, {
  install: (app: App) => {
    app.component(_IconFolderProtection.name, _IconFolderProtection);
  }
});

export default IconFolderProtection;