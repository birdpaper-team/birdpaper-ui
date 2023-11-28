import type { App } from 'vue';
import _IconTriangle from './icon-triangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTriangle.name = getComponentsPrefix() + _IconTriangle.name;

const IconTriangle = Object.assign(_IconTriangle, {
  install: (app: App) => {
    app.component(_IconTriangle.name, _IconTriangle);
  }
});

export default IconTriangle;