import type { App } from 'vue';
import _IconTextMessage from './icon-text-message.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextMessage.name = getComponentsPrefix() + _IconTextMessage.name;

const IconTextMessage = Object.assign(_IconTextMessage, {
  install: (app: App) => {
    app.component(_IconTextMessage.name, _IconTextMessage);
  }
});

export default IconTextMessage;