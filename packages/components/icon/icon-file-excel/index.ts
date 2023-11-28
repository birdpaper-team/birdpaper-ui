import type { App } from 'vue';
import _IconFileExcel from './icon-file-excel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileExcel.name = getComponentsPrefix() + _IconFileExcel.name;

const IconFileExcel = Object.assign(_IconFileExcel, {
  install: (app: App) => {
    app.component(_IconFileExcel.name, _IconFileExcel);
  }
});

export default IconFileExcel;