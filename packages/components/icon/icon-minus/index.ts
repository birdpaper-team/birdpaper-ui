import type { App } from 'vue';
import _IconMinus from './icon-minus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMinus.name = getComponentsPrefix() + _IconMinus.name;

const IconMinus = Object.assign(_IconMinus, {
  install: (app: App) => {
    app.component(_IconMinus.name, _IconMinus);
  }
});

export default IconMinus;