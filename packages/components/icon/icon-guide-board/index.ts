import type { App } from 'vue';
import _IconGuideBoard from './icon-guide-board.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGuideBoard.name = getComponentsPrefix() + _IconGuideBoard.name;

const IconGuideBoard = Object.assign(_IconGuideBoard, {
  install: (app: App) => {
    app.component(_IconGuideBoard.name, _IconGuideBoard);
  }
});

export default IconGuideBoard;