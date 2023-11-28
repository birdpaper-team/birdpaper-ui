import type { App } from 'vue';
import _IconUTurnRight from './icon-u-turn-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUTurnRight.name = getComponentsPrefix() + _IconUTurnRight.name;

const IconUTurnRight = Object.assign(_IconUTurnRight, {
  install: (app: App) => {
    app.component(_IconUTurnRight.name, _IconUTurnRight);
  }
});

export default IconUTurnRight;