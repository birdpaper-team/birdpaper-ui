import type { App } from 'vue';
import _IconTurnAround from './icon-turn-around.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTurnAround.name = getComponentsPrefix() + _IconTurnAround.name;

const IconTurnAround = Object.assign(_IconTurnAround, {
  install: (app: App) => {
    app.component(_IconTurnAround.name, _IconTurnAround);
  }
});

export default IconTurnAround;