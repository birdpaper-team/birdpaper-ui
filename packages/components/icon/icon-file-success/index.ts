import type { App } from 'vue';
import _IconFileSuccess from './icon-file-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSuccess.name = getComponentsPrefix() + _IconFileSuccess.name;

const IconFileSuccess = Object.assign(_IconFileSuccess, {
  install: (app: App) => {
    app.component(_IconFileSuccess.name, _IconFileSuccess);
  }
});

export default IconFileSuccess;