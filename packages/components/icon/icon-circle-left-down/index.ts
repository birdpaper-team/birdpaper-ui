import type { App } from 'vue';
import _IconCircleLeftDown from './icon-circle-left-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleLeftDown.name = getComponentsPrefix() + _IconCircleLeftDown.name;

const IconCircleLeftDown = Object.assign(_IconCircleLeftDown, {
  install: (app: App) => {
    app.component(_IconCircleLeftDown.name, _IconCircleLeftDown);
  }
});

export default IconCircleLeftDown;