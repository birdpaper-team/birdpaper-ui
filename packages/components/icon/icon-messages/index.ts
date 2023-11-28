import type { App } from 'vue';
import _IconMessages from './icon-messages.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessages.name = getComponentsPrefix() + _IconMessages.name;

const IconMessages = Object.assign(_IconMessages, {
  install: (app: App) => {
    app.component(_IconMessages.name, _IconMessages);
  }
});

export default IconMessages;