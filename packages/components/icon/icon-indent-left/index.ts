import type { App } from 'vue';
import _IconIndentLeft from './icon-indent-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIndentLeft.name = getComponentsPrefix() + _IconIndentLeft.name;

const IconIndentLeft = Object.assign(_IconIndentLeft, {
  install: (app: App) => {
    app.component(_IconIndentLeft.name, _IconIndentLeft);
  }
});

export default IconIndentLeft;