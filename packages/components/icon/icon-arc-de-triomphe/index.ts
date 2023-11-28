import type { App } from 'vue';
import _IconArcDeTriomphe from './icon-arc-de-triomphe.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArcDeTriomphe.name = getComponentsPrefix() + _IconArcDeTriomphe.name;

const IconArcDeTriomphe = Object.assign(_IconArcDeTriomphe, {
  install: (app: App) => {
    app.component(_IconArcDeTriomphe.name, _IconArcDeTriomphe);
  }
});

export default IconArcDeTriomphe;