import type { App } from 'vue';
import _IconCornerDownRight from './icon-corner-down-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerDownRight.name = getComponentsPrefix() + _IconCornerDownRight.name;

const IconCornerDownRight = Object.assign(_IconCornerDownRight, {
  install: (app: App) => {
    app.component(_IconCornerDownRight.name, _IconCornerDownRight);
  }
});

export default IconCornerDownRight;