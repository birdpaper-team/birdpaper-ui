import type { App } from 'vue';
import _IconInboxIn from './icon-inbox-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxIn.name = getComponentsPrefix() + _IconInboxIn.name;

const IconInboxIn = Object.assign(_IconInboxIn, {
  install: (app: App) => {
    app.component(_IconInboxIn.name, _IconInboxIn);
  }
});

export default IconInboxIn;