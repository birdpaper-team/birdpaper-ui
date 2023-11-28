import type { App } from 'vue';
import _IconSeal from './icon-seal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSeal.name = getComponentsPrefix() + _IconSeal.name;

const IconSeal = Object.assign(_IconSeal, {
  install: (app: App) => {
    app.component(_IconSeal.name, _IconSeal);
  }
});

export default IconSeal;