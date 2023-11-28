import type { App } from 'vue';
import _IconMove from './icon-move.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMove.name = getComponentsPrefix() + _IconMove.name;

const IconMove = Object.assign(_IconMove, {
  install: (app: App) => {
    app.component(_IconMove.name, _IconMove);
  }
});

export default IconMove;