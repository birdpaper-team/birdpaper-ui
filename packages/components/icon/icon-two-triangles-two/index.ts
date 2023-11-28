import type { App } from 'vue';
import _IconTwoTrianglesTwo from './icon-two-triangles-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoTrianglesTwo.name = getComponentsPrefix() + _IconTwoTrianglesTwo.name;

const IconTwoTrianglesTwo = Object.assign(_IconTwoTrianglesTwo, {
  install: (app: App) => {
    app.component(_IconTwoTrianglesTwo.name, _IconTwoTrianglesTwo);
  }
});

export default IconTwoTrianglesTwo;