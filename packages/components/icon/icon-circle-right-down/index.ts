import type { App } from 'vue';
import _IconCircleRightDown from './icon-circle-right-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleRightDown.name = getComponentsPrefix() + _IconCircleRightDown.name;

const IconCircleRightDown = Object.assign(_IconCircleRightDown, {
  install: (app: App) => {
    app.component(_IconCircleRightDown.name, _IconCircleRightDown);
  }
});

export default IconCircleRightDown;