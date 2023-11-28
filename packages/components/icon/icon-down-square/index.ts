import type { App } from 'vue';
import _IconDownSquare from './icon-down-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownSquare.name = getComponentsPrefix() + _IconDownSquare.name;

const IconDownSquare = Object.assign(_IconDownSquare, {
  install: (app: App) => {
    app.component(_IconDownSquare.name, _IconDownSquare);
  }
});

export default IconDownSquare;