import type { App } from 'vue';
import _IconLeftSquare from './icon-left-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftSquare.name = getComponentsPrefix() + _IconLeftSquare.name;

const IconLeftSquare = Object.assign(_IconLeftSquare, {
  install: (app: App) => {
    app.component(_IconLeftSquare.name, _IconLeftSquare);
  }
});

export default IconLeftSquare;