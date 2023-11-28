import type { App } from 'vue';
import _IconVoiceInput from './icon-voice-input.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVoiceInput.name = getComponentsPrefix() + _IconVoiceInput.name;

const IconVoiceInput = Object.assign(_IconVoiceInput, {
  install: (app: App) => {
    app.component(_IconVoiceInput.name, _IconVoiceInput);
  }
});

export default IconVoiceInput;