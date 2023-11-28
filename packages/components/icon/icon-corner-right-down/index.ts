import type { App } from 'vue';
import _IconCornerRightDown from './icon-corner-right-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCornerRightDown.name = getComponentsPrefix() + _IconCornerRightDown.name;

const IconCornerRightDown = Object.assign(_IconCornerRightDown, {
  install: (app: App) => {
    app.component(_IconCornerRightDown.name, _IconCornerRightDown);
  }
});

export default IconCornerRightDown;