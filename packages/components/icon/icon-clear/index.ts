import type { App } from 'vue';
import _IconClear from './icon-clear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClear.name = getComponentsPrefix() + _IconClear.name;

const IconClear = Object.assign(_IconClear, {
  install: (app: App) => {
    app.component(_IconClear.name, _IconClear);
  }
});

export default IconClear;