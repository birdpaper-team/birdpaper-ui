import type { App } from 'vue';
import _IconInboxSuccess from './icon-inbox-success.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxSuccess.name = getComponentsPrefix() + _IconInboxSuccess.name;

const IconInboxSuccess = Object.assign(_IconInboxSuccess, {
  install: (app: App) => {
    app.component(_IconInboxSuccess.name, _IconInboxSuccess);
  }
});

export default IconInboxSuccess;