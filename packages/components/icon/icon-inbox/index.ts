import type { App } from 'vue';
import _IconInbox from './icon-inbox.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInbox.name = getComponentsPrefix() + _IconInbox.name;

const IconInbox = Object.assign(_IconInbox, {
  install: (app: App) => {
    app.component(_IconInbox.name, _IconInbox);
  }
});

export default IconInbox;