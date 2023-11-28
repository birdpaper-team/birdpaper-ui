import type { App } from 'vue';
import _IconMoveIn from './icon-move-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMoveIn.name = getComponentsPrefix() + _IconMoveIn.name;

const IconMoveIn = Object.assign(_IconMoveIn, {
  install: (app: App) => {
    app.component(_IconMoveIn.name, _IconMoveIn);
  }
});

export default IconMoveIn;