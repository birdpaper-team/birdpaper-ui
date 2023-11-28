import type { App } from 'vue';
import _IconExpandTextInput from './icon-expand-text-input.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpandTextInput.name = getComponentsPrefix() + _IconExpandTextInput.name;

const IconExpandTextInput = Object.assign(_IconExpandTextInput, {
  install: (app: App) => {
    app.component(_IconExpandTextInput.name, _IconExpandTextInput);
  }
});

export default IconExpandTextInput;