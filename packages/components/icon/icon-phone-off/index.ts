import type { App } from 'vue';
import _IconPhoneOff from './icon-phone-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneOff.name = getComponentsPrefix() + _IconPhoneOff.name;

const IconPhoneOff = Object.assign(_IconPhoneOff, {
  install: (app: App) => {
    app.component(_IconPhoneOff.name, _IconPhoneOff);
  }
});

export default IconPhoneOff;