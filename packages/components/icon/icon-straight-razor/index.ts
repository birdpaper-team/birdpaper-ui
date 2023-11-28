import type { App } from 'vue';
import _IconStraightRazor from './icon-straight-razor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStraightRazor.name = getComponentsPrefix() + _IconStraightRazor.name;

const IconStraightRazor = Object.assign(_IconStraightRazor, {
  install: (app: App) => {
    app.component(_IconStraightRazor.name, _IconStraightRazor);
  }
});

export default IconStraightRazor;