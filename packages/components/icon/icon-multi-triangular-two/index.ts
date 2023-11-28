import type { App } from 'vue';
import _IconMultiTriangularTwo from './icon-multi-triangular-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiTriangularTwo.name = getComponentsPrefix() + _IconMultiTriangularTwo.name;

const IconMultiTriangularTwo = Object.assign(_IconMultiTriangularTwo, {
  install: (app: App) => {
    app.component(_IconMultiTriangularTwo.name, _IconMultiTriangularTwo);
  }
});

export default IconMultiTriangularTwo;