import type { App } from 'vue';
import _IconMilk from './icon-milk.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMilk.name = getComponentsPrefix() + _IconMilk.name;

const IconMilk = Object.assign(_IconMilk, {
  install: (app: App) => {
    app.component(_IconMilk.name, _IconMilk);
  }
});

export default IconMilk;