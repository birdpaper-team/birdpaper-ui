import type { App } from 'vue';
import _IconMascara from './icon-mascara.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMascara.name = getComponentsPrefix() + _IconMascara.name;

const IconMascara = Object.assign(_IconMascara, {
  install: (app: App) => {
    app.component(_IconMascara.name, _IconMascara);
  }
});

export default IconMascara;