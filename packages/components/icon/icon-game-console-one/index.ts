import type { App } from 'vue';
import _IconGameConsoleOne from './icon-game-console-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGameConsoleOne.name = getComponentsPrefix() + _IconGameConsoleOne.name;

const IconGameConsoleOne = Object.assign(_IconGameConsoleOne, {
  install: (app: App) => {
    app.component(_IconGameConsoleOne.name, _IconGameConsoleOne);
  }
});

export default IconGameConsoleOne;