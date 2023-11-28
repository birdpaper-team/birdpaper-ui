import type { App } from 'vue';
import _IconTerminationFile from './icon-termination-file.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTerminationFile.name = getComponentsPrefix() + _IconTerminationFile.name;

const IconTerminationFile = Object.assign(_IconTerminationFile, {
  install: (app: App) => {
    app.component(_IconTerminationFile.name, _IconTerminationFile);
  }
});

export default IconTerminationFile;