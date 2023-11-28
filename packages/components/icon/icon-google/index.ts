import type { App } from 'vue';
import _IconGoogle from './icon-google.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoogle.name = getComponentsPrefix() + _IconGoogle.name;

const IconGoogle = Object.assign(_IconGoogle, {
  install: (app: App) => {
    app.component(_IconGoogle.name, _IconGoogle);
  }
});

export default IconGoogle;