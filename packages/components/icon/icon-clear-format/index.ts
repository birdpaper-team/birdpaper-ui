import type { App } from 'vue';
import _IconClearFormat from './icon-clear-format.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClearFormat.name = getComponentsPrefix() + _IconClearFormat.name;

const IconClearFormat = Object.assign(_IconClearFormat, {
  install: (app: App) => {
    app.component(_IconClearFormat.name, _IconClearFormat);
  }
});

export default IconClearFormat;