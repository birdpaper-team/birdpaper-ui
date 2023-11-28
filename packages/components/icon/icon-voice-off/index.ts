import type { App } from 'vue';
import _IconVoiceOff from './icon-voice-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVoiceOff.name = getComponentsPrefix() + _IconVoiceOff.name;

const IconVoiceOff = Object.assign(_IconVoiceOff, {
  install: (app: App) => {
    app.component(_IconVoiceOff.name, _IconVoiceOff);
  }
});

export default IconVoiceOff;