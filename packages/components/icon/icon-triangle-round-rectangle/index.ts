import type { App } from 'vue';
import _IconTriangleRoundRectangle from './icon-triangle-round-rectangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTriangleRoundRectangle.name = getComponentsPrefix() + _IconTriangleRoundRectangle.name;

const IconTriangleRoundRectangle = Object.assign(_IconTriangleRoundRectangle, {
  install: (app: App) => {
    app.component(_IconTriangleRoundRectangle.name, _IconTriangleRoundRectangle);
  }
});

export default IconTriangleRoundRectangle;