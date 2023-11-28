import type { App } from 'vue';
import _IconPhoneOutgoingOne from './icon-phone-outgoing-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneOutgoingOne.name = getComponentsPrefix() + _IconPhoneOutgoingOne.name;

const IconPhoneOutgoingOne = Object.assign(_IconPhoneOutgoingOne, {
  install: (app: App) => {
    app.component(_IconPhoneOutgoingOne.name, _IconPhoneOutgoingOne);
  }
});

export default IconPhoneOutgoingOne;