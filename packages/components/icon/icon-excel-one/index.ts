import type { App } from 'vue';
import _IconExcelOne from './icon-excel-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExcelOne.name = getComponentsPrefix() + _IconExcelOne.name;

const IconExcelOne = Object.assign(_IconExcelOne, {
  install: (app: App) => {
    app.component(_IconExcelOne.name, _IconExcelOne);
  }
});

export default IconExcelOne;