import type { App } from 'vue';
import _IconSwimsuit from './icon-swimsuit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwimsuit.name = getComponentsPrefix() + _IconSwimsuit.name;

const IconSwimsuit = Object.assign(_IconSwimsuit, {
  install: (app: App) => {
    app.component(_IconSwimsuit.name, _IconSwimsuit);
  }
});

export default IconSwimsuit;