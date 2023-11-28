import type { App } from 'vue';
import _IconTableFile from './icon-table-file.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTableFile.name = getComponentsPrefix() + _IconTableFile.name;

const IconTableFile = Object.assign(_IconTableFile, {
  install: (app: App) => {
    app.component(_IconTableFile.name, _IconTableFile);
  }
});

export default IconTableFile;