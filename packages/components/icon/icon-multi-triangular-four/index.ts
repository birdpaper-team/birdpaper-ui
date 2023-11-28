import type { App } from 'vue';
import _IconMultiTriangularFour from './icon-multi-triangular-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiTriangularFour.name = getComponentsPrefix() + _IconMultiTriangularFour.name;

const IconMultiTriangularFour = Object.assign(_IconMultiTriangularFour, {
  install: (app: App) => {
    app.component(_IconMultiTriangularFour.name, _IconMultiTriangularFour);
  }
});

export default IconMultiTriangularFour;