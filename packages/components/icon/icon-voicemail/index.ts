import type { App } from 'vue';
import _IconVoicemail from './icon-voicemail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVoicemail.name = getComponentsPrefix() + _IconVoicemail.name;

const IconVoicemail = Object.assign(_IconVoicemail, {
  install: (app: App) => {
    app.component(_IconVoicemail.name, _IconVoicemail);
  }
});

export default IconVoicemail;