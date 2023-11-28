import type { App } from 'vue';
import _IconCommunication from './icon-communication.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCommunication.name = getComponentsPrefix() + _IconCommunication.name;

const IconCommunication = Object.assign(_IconCommunication, {
  install: (app: App) => {
    app.component(_IconCommunication.name, _IconCommunication);
  }
});

export default IconCommunication;