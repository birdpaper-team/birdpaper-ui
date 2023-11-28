import type { App } from 'vue';
import _IconGameTwo from './icon-game-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGameTwo.name = getComponentsPrefix() + _IconGameTwo.name;

const IconGameTwo = Object.assign(_IconGameTwo, {
  install: (app: App) => {
    app.component(_IconGameTwo.name, _IconGameTwo);
  }
});

export default IconGameTwo;