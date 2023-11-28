import type { App } from 'vue';
import _IconRectangleSmall from './icon-rectangle-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangleSmall.name = getComponentsPrefix() + _IconRectangleSmall.name;

const IconRectangleSmall = Object.assign(_IconRectangleSmall, {
  install: (app: App) => {
    app.component(_IconRectangleSmall.name, _IconRectangleSmall);
  }
});

export default IconRectangleSmall;