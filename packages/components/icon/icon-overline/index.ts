import type { App } from 'vue';
import _IconOverline from './icon-overline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOverline.name = getComponentsPrefix() + _IconOverline.name;

const IconOverline = Object.assign(_IconOverline, {
  install: (app: App) => {
    app.component(_IconOverline.name, _IconOverline);
  }
});

export default IconOverline;