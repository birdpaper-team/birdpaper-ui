import type { App } from 'vue';
import _IconInboxR from './icon-inbox-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxR.name = getComponentsPrefix() + _IconInboxR.name;

const IconInboxR = Object.assign(_IconInboxR, {
  install: (app: App) => {
    app.component(_IconInboxR.name, _IconInboxR);
  }
});

export default IconInboxR;