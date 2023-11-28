import type { App } from 'vue';
import _IconTowerOfPisa from './icon-tower-of-pisa.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTowerOfPisa.name = getComponentsPrefix() + _IconTowerOfPisa.name;

const IconTowerOfPisa = Object.assign(_IconTowerOfPisa, {
  install: (app: App) => {
    app.component(_IconTowerOfPisa.name, _IconTowerOfPisa);
  }
});

export default IconTowerOfPisa;