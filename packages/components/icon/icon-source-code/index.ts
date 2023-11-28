import type { App } from 'vue';
import _IconSourceCode from './icon-source-code.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSourceCode.name = getComponentsPrefix() + _IconSourceCode.name;

const IconSourceCode = Object.assign(_IconSourceCode, {
  install: (app: App) => {
    app.component(_IconSourceCode.name, _IconSourceCode);
  }
});

export default IconSourceCode;