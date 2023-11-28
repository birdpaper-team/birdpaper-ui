import type { App } from 'vue';
import _IconBarCode from './icon-bar-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBarCode.name = getComponentsPrefix() + _IconBarCode.name;

const IconBarCode = Object.assign(_IconBarCode, {
  install: (app: App) => {
    app.component(_IconBarCode.name, _IconBarCode);
  }
});

export default IconBarCode;