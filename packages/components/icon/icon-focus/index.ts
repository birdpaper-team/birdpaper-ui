import type { App } from 'vue';
import _IconFocus from './icon-focus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFocus.name = getComponentsPrefix() + _IconFocus.name;

const IconFocus = Object.assign(_IconFocus, {
  install: (app: App) => {
    app.component(_IconFocus.name, _IconFocus);
  }
});

export default IconFocus;