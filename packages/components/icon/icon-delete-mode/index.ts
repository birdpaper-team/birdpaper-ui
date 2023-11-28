import type { App } from 'vue';
import _IconDeleteMode from './icon-delete-mode.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteMode.name = getComponentsPrefix() + _IconDeleteMode.name;

const IconDeleteMode = Object.assign(_IconDeleteMode, {
  install: (app: App) => {
    app.component(_IconDeleteMode.name, _IconDeleteMode);
  }
});

export default IconDeleteMode;