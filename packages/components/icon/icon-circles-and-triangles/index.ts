import type { App } from 'vue';
import _IconCirclesAndTriangles from './icon-circles-and-triangles.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCirclesAndTriangles.name = getComponentsPrefix() + _IconCirclesAndTriangles.name;

const IconCirclesAndTriangles = Object.assign(_IconCirclesAndTriangles, {
  install: (app: App) => {
    app.component(_IconCirclesAndTriangles.name, _IconCirclesAndTriangles);
  }
});

export default IconCirclesAndTriangles;