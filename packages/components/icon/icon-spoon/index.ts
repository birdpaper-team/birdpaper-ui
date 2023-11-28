import type { App } from 'vue';
import _IconSpoon from './icon-spoon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpoon.name = getComponentsPrefix() + _IconSpoon.name;

const IconSpoon = Object.assign(_IconSpoon, {
  install: (app: App) => {
    app.component(_IconSpoon.name, _IconSpoon);
  }
});

export default IconSpoon;