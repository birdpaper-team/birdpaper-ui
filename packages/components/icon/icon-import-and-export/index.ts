import type { App } from 'vue';
import _IconImportAndExport from './icon-import-and-export.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconImportAndExport.name = getComponentsPrefix() + _IconImportAndExport.name;

const IconImportAndExport = Object.assign(_IconImportAndExport, {
  install: (app: App) => {
    app.component(_IconImportAndExport.name, _IconImportAndExport);
  }
});

export default IconImportAndExport;