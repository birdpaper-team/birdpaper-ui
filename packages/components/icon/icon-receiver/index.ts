import type { App } from 'vue';
import _IconReceiver from './icon-receiver.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReceiver.name = getComponentsPrefix() + _IconReceiver.name;

const IconReceiver = Object.assign(_IconReceiver, {
  install: (app: App) => {
    app.component(_IconReceiver.name, _IconReceiver);
  }
});

export default IconReceiver;