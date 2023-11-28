import type { App } from 'vue';
import _IconInvalidFiles from './icon-invalid-files.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInvalidFiles.name = getComponentsPrefix() + _IconInvalidFiles.name;

const IconInvalidFiles = Object.assign(_IconInvalidFiles, {
  install: (app: App) => {
    app.component(_IconInvalidFiles.name, _IconInvalidFiles);
  }
});

export default IconInvalidFiles;