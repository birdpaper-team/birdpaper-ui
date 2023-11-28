import type { App } from 'vue';
import _IconMagic from './icon-magic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMagic.name = getComponentsPrefix() + _IconMagic.name;

const IconMagic = Object.assign(_IconMagic, {
  install: (app: App) => {
    app.component(_IconMagic.name, _IconMagic);
  }
});

export default IconMagic;