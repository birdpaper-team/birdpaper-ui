import type { App } from 'vue';
import _IconGridNine from './icon-grid-nine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGridNine.name = getComponentsPrefix() + _IconGridNine.name;

const IconGridNine = Object.assign(_IconGridNine, {
  install: (app: App) => {
    app.component(_IconGridNine.name, _IconGridNine);
  }
});

export default IconGridNine;