import type { App } from 'vue';
import _IconMultiCircular from './icon-multi-circular.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiCircular.name = getComponentsPrefix() + _IconMultiCircular.name;

const IconMultiCircular = Object.assign(_IconMultiCircular, {
  install: (app: App) => {
    app.component(_IconMultiCircular.name, _IconMultiCircular);
  }
});

export default IconMultiCircular;