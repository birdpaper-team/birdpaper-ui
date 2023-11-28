import type { App } from 'vue';
import _IconUTurnLeft from './icon-u-turn-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUTurnLeft.name = getComponentsPrefix() + _IconUTurnLeft.name;

const IconUTurnLeft = Object.assign(_IconUTurnLeft, {
  install: (app: App) => {
    app.component(_IconUTurnLeft.name, _IconUTurnLeft);
  }
});

export default IconUTurnLeft;