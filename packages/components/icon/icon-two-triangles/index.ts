import type { App } from 'vue';
import _IconTwoTriangles from './icon-two-triangles.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoTriangles.name = getComponentsPrefix() + _IconTwoTriangles.name;

const IconTwoTriangles = Object.assign(_IconTwoTriangles, {
  install: (app: App) => {
    app.component(_IconTwoTriangles.name, _IconTwoTriangles);
  }
});

export default IconTwoTriangles;