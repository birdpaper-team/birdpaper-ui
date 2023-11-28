import type { App } from 'vue';
import _IconMultiTriangular from './icon-multi-triangular.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiTriangular.name = getComponentsPrefix() + _IconMultiTriangular.name;

const IconMultiTriangular = Object.assign(_IconMultiTriangular, {
  install: (app: App) => {
    app.component(_IconMultiTriangular.name, _IconMultiTriangular);
  }
});

export default IconMultiTriangular;