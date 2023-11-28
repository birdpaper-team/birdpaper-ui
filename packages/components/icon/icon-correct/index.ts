import type { App } from 'vue';
import _IconCorrect from './icon-correct.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCorrect.name = getComponentsPrefix() + _IconCorrect.name;

const IconCorrect = Object.assign(_IconCorrect, {
  install: (app: App) => {
    app.component(_IconCorrect.name, _IconCorrect);
  }
});

export default IconCorrect;