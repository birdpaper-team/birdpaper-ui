import type { App } from 'vue';
import _IconSix from './icon-six.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSix.name = getComponentsPrefix() + _IconSix.name;

const IconSix = Object.assign(_IconSix, {
  install: (app: App) => {
    app.component(_IconSix.name, _IconSix);
  }
});

export default IconSix;