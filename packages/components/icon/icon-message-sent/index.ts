import type { App } from 'vue';
import _IconMessageSent from './icon-message-sent.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageSent.name = getComponentsPrefix() + _IconMessageSent.name;

const IconMessageSent = Object.assign(_IconMessageSent, {
  install: (app: App) => {
    app.component(_IconMessageSent.name, _IconMessageSent);
  }
});

export default IconMessageSent;