import type { App } from 'vue';
import _IconPhoneIncoming from './icon-phone-incoming.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneIncoming.name = getComponentsPrefix() + _IconPhoneIncoming.name;

const IconPhoneIncoming = Object.assign(_IconPhoneIncoming, {
  install: (app: App) => {
    app.component(_IconPhoneIncoming.name, _IconPhoneIncoming);
  }
});

export default IconPhoneIncoming;