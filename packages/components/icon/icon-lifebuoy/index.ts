import type { App } from 'vue';
import _IconLifebuoy from './icon-lifebuoy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLifebuoy.name = getComponentsPrefix() + _IconLifebuoy.name;

const IconLifebuoy = Object.assign(_IconLifebuoy, {
  install: (app: App) => {
    app.component(_IconLifebuoy.name, _IconLifebuoy);
  }
});

export default IconLifebuoy;