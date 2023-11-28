import type { App } from 'vue';
import _IconCornerDownLeft from './icon-corner-down-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerDownLeft.name = getComponentsPrefix() + _IconCornerDownLeft.name;

const IconCornerDownLeft = Object.assign(_IconCornerDownLeft, {
  install: (app: App) => {
    app.component(_IconCornerDownLeft.name, _IconCornerDownLeft);
  }
});

export default IconCornerDownLeft;