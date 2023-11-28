import type { App } from 'vue';
import _IconPhoneVideoCall from './icon-phone-video-call.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneVideoCall.name = getComponentsPrefix() + _IconPhoneVideoCall.name;

const IconPhoneVideoCall = Object.assign(_IconPhoneVideoCall, {
  install: (app: App) => {
    app.component(_IconPhoneVideoCall.name, _IconPhoneVideoCall);
  }
});

export default IconPhoneVideoCall;