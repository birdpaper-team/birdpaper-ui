import type { App } from 'vue';
import _IconCodeBrackets from './icon-code-brackets.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCodeBrackets.name = getComponentsPrefix() + _IconCodeBrackets.name;

const IconCodeBrackets = Object.assign(_IconCodeBrackets, {
  install: (app: App) => {
    app.component(_IconCodeBrackets.name, _IconCodeBrackets);
  }
});

export default IconCodeBrackets;