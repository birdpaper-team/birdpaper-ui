import type { App } from 'vue';
import _IconFolderDownload from './icon-folder-download.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderDownload.name = getComponentsPrefix() + _IconFolderDownload.name;

const IconFolderDownload = Object.assign(_IconFolderDownload, {
  install: (app: App) => {
    app.component(_IconFolderDownload.name, _IconFolderDownload);
  }
});

export default IconFolderDownload;