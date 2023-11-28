import type { App } from 'vue';
import _IconImageFiles from './icon-image-files.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconImageFiles.name = getComponentsPrefix() + _IconImageFiles.name;

const IconImageFiles = Object.assign(_IconImageFiles, {
  install: (app: App) => {
    app.component(_IconImageFiles.name, _IconImageFiles);
  }
});

export default IconImageFiles;