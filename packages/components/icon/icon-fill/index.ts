import type { App } from 'vue';
import _IconFill from './icon-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFill.name = getComponentsPrefix() + _IconFill.name;

const IconFill = Object.assign(_IconFill, {
  install: (app: App) => {
    app.component(_IconFill.name, _IconFill);
  }
});

export default IconFill;