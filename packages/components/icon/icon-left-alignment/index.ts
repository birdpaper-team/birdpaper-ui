import type { App } from 'vue';
import _IconLeftAlignment from './icon-left-alignment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftAlignment.name = getComponentsPrefix() + _IconLeftAlignment.name;

const IconLeftAlignment = Object.assign(_IconLeftAlignment, {
  install: (app: App) => {
    app.component(_IconLeftAlignment.name, _IconLeftAlignment);
  }
});

export default IconLeftAlignment;