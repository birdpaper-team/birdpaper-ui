import type { App } from 'vue';
import _IconChessOne from './icon-chess-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChessOne.name = getComponentsPrefix() + _IconChessOne.name;

const IconChessOne = Object.assign(_IconChessOne, {
  install: (app: App) => {
    app.component(_IconChessOne.name, _IconChessOne);
  }
});

export default IconChessOne;