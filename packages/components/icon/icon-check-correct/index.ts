import type { App } from 'vue';
import _IconCheckCorrect from './icon-check-correct.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckCorrect.name = getComponentsPrefix() + _IconCheckCorrect.name;

const IconCheckCorrect = Object.assign(_IconCheckCorrect, {
  install: (app: App) => {
    app.component(_IconCheckCorrect.name, _IconCheckCorrect);
  }
});

export default IconCheckCorrect;