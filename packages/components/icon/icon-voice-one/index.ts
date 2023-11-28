import type { App } from 'vue';
import _IconVoiceOne from './icon-voice-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVoiceOne.name = getComponentsPrefix() + _IconVoiceOne.name;

const IconVoiceOne = Object.assign(_IconVoiceOne, {
  install: (app: App) => {
    app.component(_IconVoiceOne.name, _IconVoiceOne);
  }
});

export default IconVoiceOne;