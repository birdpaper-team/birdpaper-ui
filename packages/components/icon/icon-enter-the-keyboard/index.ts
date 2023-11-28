import type { App } from 'vue';
import _IconEnterTheKeyboard from './icon-enter-the-keyboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEnterTheKeyboard.name = getComponentsPrefix() + _IconEnterTheKeyboard.name;

const IconEnterTheKeyboard = Object.assign(_IconEnterTheKeyboard, {
  install: (app: App) => {
    app.component(_IconEnterTheKeyboard.name, _IconEnterTheKeyboard);
  }
});

export default IconEnterTheKeyboard;