import type { App } from 'vue';
import _IconGameConsole from './icon-game-console.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGameConsole.name = getComponentsPrefix() + _IconGameConsole.name;

const IconGameConsole = Object.assign(_IconGameConsole, {
  install: (app: App) => {
    app.component(_IconGameConsole.name, _IconGameConsole);
  }
});

export default IconGameConsole;