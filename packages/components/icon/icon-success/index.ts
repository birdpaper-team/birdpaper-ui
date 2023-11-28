import type { App } from 'vue';
import _IconSuccess from './icon-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSuccess.name = getComponentsPrefix() + _IconSuccess.name;

const IconSuccess = Object.assign(_IconSuccess, {
  install: (app: App) => {
    app.component(_IconSuccess.name, _IconSuccess);
  }
});

export default IconSuccess;