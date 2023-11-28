import type { App } from 'vue';
import _IconChoppingBoard from './icon-chopping-board.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChoppingBoard.name = getComponentsPrefix() + _IconChoppingBoard.name;

const IconChoppingBoard = Object.assign(_IconChoppingBoard, {
  install: (app: App) => {
    app.component(_IconChoppingBoard.name, _IconChoppingBoard);
  }
});

export default IconChoppingBoard;