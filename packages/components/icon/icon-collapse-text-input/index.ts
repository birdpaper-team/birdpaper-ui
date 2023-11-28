import type { App } from 'vue';
import _IconCollapseTextInput from './icon-collapse-text-input.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCollapseTextInput.name = getComponentsPrefix() + _IconCollapseTextInput.name;

const IconCollapseTextInput = Object.assign(_IconCollapseTextInput, {
  install: (app: App) => {
    app.component(_IconCollapseTextInput.name, _IconCollapseTextInput);
  }
});

export default IconCollapseTextInput;