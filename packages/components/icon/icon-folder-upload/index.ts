import type { App } from 'vue';
import _IconFolderUpload from './icon-folder-upload.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderUpload.name = getComponentsPrefix() + _IconFolderUpload.name;

const IconFolderUpload = Object.assign(_IconFolderUpload, {
  install: (app: App) => {
    app.component(_IconFolderUpload.name, _IconFolderUpload);
  }
});

export default IconFolderUpload;