import type { App } from 'vue';
import _IconIndentRight from './icon-indent-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIndentRight.name = getComponentsPrefix() + _IconIndentRight.name;

const IconIndentRight = Object.assign(_IconIndentRight, {
  install: (app: App) => {
    app.component(_IconIndentRight.name, _IconIndentRight);
  }
});

export default IconIndentRight;