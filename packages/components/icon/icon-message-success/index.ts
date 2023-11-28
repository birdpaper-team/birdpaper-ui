import type { App } from 'vue';
import _IconMessageSuccess from './icon-message-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageSuccess.name = getComponentsPrefix() + _IconMessageSuccess.name;

const IconMessageSuccess = Object.assign(_IconMessageSuccess, {
  install: (app: App) => {
    app.component(_IconMessageSuccess.name, _IconMessageSuccess);
  }
});

export default IconMessageSuccess;