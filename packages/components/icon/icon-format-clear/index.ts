import type { App } from 'vue';
import _IconFormatClear from './icon-format-clear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFormatClear.name = getComponentsPrefix() + _IconFormatClear.name;

const IconFormatClear = Object.assign(_IconFormatClear, {
  install: (app: App) => {
    app.component(_IconFormatClear.name, _IconFormatClear);
  }
});

export default IconFormatClear;