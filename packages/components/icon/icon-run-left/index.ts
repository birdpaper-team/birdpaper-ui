import type { App } from 'vue';
import _IconRunLeft from './icon-run-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRunLeft.name = getComponentsPrefix() + _IconRunLeft.name;

const IconRunLeft = Object.assign(_IconRunLeft, {
  install: (app: App) => {
    app.component(_IconRunLeft.name, _IconRunLeft);
  }
});

export default IconRunLeft;