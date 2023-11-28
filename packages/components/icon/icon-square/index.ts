import type { App } from 'vue';
import _IconSquare from './icon-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSquare.name = getComponentsPrefix() + _IconSquare.name;

const IconSquare = Object.assign(_IconSquare, {
  install: (app: App) => {
    app.component(_IconSquare.name, _IconSquare);
  }
});

export default IconSquare;