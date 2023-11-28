import type { App } from 'vue';
import _IconTraditionalChineseMedicine from './icon-traditional-chinese-medicine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTraditionalChineseMedicine.name = getComponentsPrefix() + _IconTraditionalChineseMedicine.name;

const IconTraditionalChineseMedicine = Object.assign(_IconTraditionalChineseMedicine, {
  install: (app: App) => {
    app.component(_IconTraditionalChineseMedicine.name, _IconTraditionalChineseMedicine);
  }
});

export default IconTraditionalChineseMedicine;