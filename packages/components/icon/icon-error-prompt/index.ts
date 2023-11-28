import type { App } from 'vue';
import _IconErrorPrompt from './icon-error-prompt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconErrorPrompt.name = getComponentsPrefix() + _IconErrorPrompt.name;

const IconErrorPrompt = Object.assign(_IconErrorPrompt, {
  install: (app: App) => {
    app.component(_IconErrorPrompt.name, _IconErrorPrompt);
  }
});

export default IconErrorPrompt;