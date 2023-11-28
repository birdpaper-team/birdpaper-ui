import type { App } from 'vue';
import _IconFileFocus from './icon-file-focus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileFocus.name = getComponentsPrefix() + _IconFileFocus.name;

const IconFileFocus = Object.assign(_IconFileFocus, {
  install: (app: App) => {
    app.component(_IconFileFocus.name, _IconFileFocus);
  }
});

export default IconFileFocus;