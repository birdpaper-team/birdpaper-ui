import type { App } from 'vue';
import _IconTowerOfBabel from './icon-tower-of-babel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTowerOfBabel.name = getComponentsPrefix() + _IconTowerOfBabel.name;

const IconTowerOfBabel = Object.assign(_IconTowerOfBabel, {
  install: (app: App) => {
    app.component(_IconTowerOfBabel.name, _IconTowerOfBabel);
  }
});

export default IconTowerOfBabel;