import type { App } from 'vue';
import _IconChess from './icon-chess.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChess.name = getComponentsPrefix() + _IconChess.name;

const IconChess = Object.assign(_IconChess, {
  install: (app: App) => {
    app.component(_IconChess.name, _IconChess);
  }
});

export default IconChess;