import type { App } from 'vue';
import _IconLeft from './icon-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeft.name = getComponentsPrefix() + _IconLeft.name;

const IconLeft = Object.assign(_IconLeft, {
  install: (app: App) => {
    app.component(_IconLeft.name, _IconLeft);
  }
});

export default IconLeft;