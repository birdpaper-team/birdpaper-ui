import type { App } from 'vue';
import _IconRectangleX from './icon-rectangle-x.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangleX.name = getComponentsPrefix() + _IconRectangleX.name;

const IconRectangleX = Object.assign(_IconRectangleX, {
  install: (app: App) => {
    app.component(_IconRectangleX.name, _IconRectangleX);
  }
});

export default IconRectangleX;