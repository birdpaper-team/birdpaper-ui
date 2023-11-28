import type { App } from 'vue';
import _IconExport from './icon-export.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExport.name = getComponentsPrefix() + _IconExport.name;

const IconExport = Object.assign(_IconExport, {
  install: (app: App) => {
    app.component(_IconExport.name, _IconExport);
  }
});

export default IconExport;