import type { App } from 'vue';
import _IconRightSquare from './icon-right-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRightSquare.name = getComponentsPrefix() + _IconRightSquare.name;

const IconRightSquare = Object.assign(_IconRightSquare, {
  install: (app: App) => {
    app.component(_IconRightSquare.name, _IconRightSquare);
  }
});

export default IconRightSquare;