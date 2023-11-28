import type { App } from 'vue';
import _IconGemini from './icon-gemini.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGemini.name = getComponentsPrefix() + _IconGemini.name;

const IconGemini = Object.assign(_IconGemini, {
  install: (app: App) => {
    app.component(_IconGemini.name, _IconGemini);
  }
});

export default IconGemini;