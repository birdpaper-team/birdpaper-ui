import type { App } from 'vue';
import _IconUpSquare from './icon-up-square.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpSquare.name = getComponentsPrefix() + _IconUpSquare.name;

const IconUpSquare = Object.assign(_IconUpSquare, {
  install: (app: App) => {
    app.component(_IconUpSquare.name, _IconUpSquare);
  }
});

export default IconUpSquare;