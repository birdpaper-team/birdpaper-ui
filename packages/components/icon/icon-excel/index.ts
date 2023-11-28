import type { App } from 'vue';
import _IconExcel from './icon-excel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExcel.name = getComponentsPrefix() + _IconExcel.name;

const IconExcel = Object.assign(_IconExcel, {
  install: (app: App) => {
    app.component(_IconExcel.name, _IconExcel);
  }
});

export default IconExcel;