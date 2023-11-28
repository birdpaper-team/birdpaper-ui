import type { App } from 'vue';
import _IconFileCode from './icon-file-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileCode.name = getComponentsPrefix() + _IconFileCode.name;

const IconFileCode = Object.assign(_IconFileCode, {
  install: (app: App) => {
    app.component(_IconFileCode.name, _IconFileCode);
  }
});

export default IconFileCode;