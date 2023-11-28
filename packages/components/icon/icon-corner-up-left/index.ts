import type { App } from 'vue';
import _IconCornerUpLeft from './icon-corner-up-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerUpLeft.name = getComponentsPrefix() + _IconCornerUpLeft.name;

const IconCornerUpLeft = Object.assign(_IconCornerUpLeft, {
  install: (app: App) => {
    app.component(_IconCornerUpLeft.name, _IconCornerUpLeft);
  }
});

export default IconCornerUpLeft;