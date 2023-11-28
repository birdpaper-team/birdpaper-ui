import type { App } from 'vue';
import _IconAnchorSqure from './icon-anchor-squre.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnchorSqure.name = getComponentsPrefix() + _IconAnchorSqure.name;

const IconAnchorSqure = Object.assign(_IconAnchorSqure, {
  install: (app: App) => {
    app.component(_IconAnchorSqure.name, _IconAnchorSqure);
  }
});

export default IconAnchorSqure;