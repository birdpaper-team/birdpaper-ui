import type { App } from 'vue';
import _IconOceanengine from './icon-oceanengine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOceanengine.name = getComponentsPrefix() + _IconOceanengine.name;

const IconOceanengine = Object.assign(_IconOceanengine, {
  install: (app: App) => {
    app.component(_IconOceanengine.name, _IconOceanengine);
  }
});

export default IconOceanengine;