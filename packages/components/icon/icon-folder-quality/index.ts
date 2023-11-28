import type { App } from 'vue';
import _IconFolderQuality from './icon-folder-quality.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderQuality.name = getComponentsPrefix() + _IconFolderQuality.name;

const IconFolderQuality = Object.assign(_IconFolderQuality, {
  install: (app: App) => {
    app.component(_IconFolderQuality.name, _IconFolderQuality);
  }
});

export default IconFolderQuality;