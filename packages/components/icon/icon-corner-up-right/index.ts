import type { App } from 'vue';
import _IconCornerUpRight from './icon-corner-up-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerUpRight.name = getComponentsPrefix() + _IconCornerUpRight.name;

const IconCornerUpRight = Object.assign(_IconCornerUpRight, {
  install: (app: App) => {
    app.component(_IconCornerUpRight.name, _IconCornerUpRight);
  }
});

export default IconCornerUpRight;