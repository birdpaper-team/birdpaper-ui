import type { App } from 'vue';
import _IconInboxOut from './icon-inbox-out.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxOut.name = getComponentsPrefix() + _IconInboxOut.name;

const IconInboxOut = Object.assign(_IconInboxOut, {
  install: (app: App) => {
    app.component(_IconInboxOut.name, _IconInboxOut);
  }
});

export default IconInboxOut;