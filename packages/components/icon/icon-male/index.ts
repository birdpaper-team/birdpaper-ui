import type { App } from 'vue';
import _IconMale from './icon-male.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMale.name = getComponentsPrefix() + _IconMale.name;

const IconMale = Object.assign(_IconMale, {
  install: (app: App) => {
    app.component(_IconMale.name, _IconMale);
  }
});

export default IconMale;