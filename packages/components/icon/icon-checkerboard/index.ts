import type { App } from 'vue';
import _IconCheckerboard from './icon-checkerboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckerboard.name = getComponentsPrefix() + _IconCheckerboard.name;

const IconCheckerboard = Object.assign(_IconCheckerboard, {
  install: (app: App) => {
    app.component(_IconCheckerboard.name, _IconCheckerboard);
  }
});

export default IconCheckerboard;