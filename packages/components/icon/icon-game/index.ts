import type { App } from 'vue';
import _IconGame from './icon-game.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGame.name = getComponentsPrefix() + _IconGame.name;

const IconGame = Object.assign(_IconGame, {
  install: (app: App) => {
    app.component(_IconGame.name, _IconGame);
  }
});

export default IconGame;