import type { App } from 'vue';
import _IconPhoneIncomingOne from './icon-phone-incoming-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneIncomingOne.name = getComponentsPrefix() + _IconPhoneIncomingOne.name;

const IconPhoneIncomingOne = Object.assign(_IconPhoneIncomingOne, {
  install: (app: App) => {
    app.component(_IconPhoneIncomingOne.name, _IconPhoneIncomingOne);
  }
});

export default IconPhoneIncomingOne;