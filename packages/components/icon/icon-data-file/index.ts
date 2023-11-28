import type { App } from 'vue';
import _IconDataFile from './icon-data-file.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataFile.name = getComponentsPrefix() + _IconDataFile.name;

const IconDataFile = Object.assign(_IconDataFile, {
  install: (app: App) => {
    app.component(_IconDataFile.name, _IconDataFile);
  }
});

export default IconDataFile;