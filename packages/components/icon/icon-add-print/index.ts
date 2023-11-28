import type { App } from 'vue';
import _IconAddPrint from './icon-add-print.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddPrint.name = getComponentsPrefix() + _IconAddPrint.name;

const IconAddPrint = Object.assign(_IconAddPrint, {
  install: (app: App) => {
    app.component(_IconAddPrint.name, _IconAddPrint);
  }
});

export default IconAddPrint;