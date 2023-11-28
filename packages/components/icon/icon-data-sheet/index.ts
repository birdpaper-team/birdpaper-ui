import type { App } from 'vue';
import _IconDataSheet from './icon-data-sheet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataSheet.name = getComponentsPrefix() + _IconDataSheet.name;

const IconDataSheet = Object.assign(_IconDataSheet, {
  install: (app: App) => {
    app.component(_IconDataSheet.name, _IconDataSheet);
  }
});

export default IconDataSheet;