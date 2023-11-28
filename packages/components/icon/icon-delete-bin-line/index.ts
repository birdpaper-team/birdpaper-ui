import type { App } from 'vue';
import _IconDeleteBinLine from './icon-delete-bin-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeleteBinLine.name = getComponentsPrefix() + _IconDeleteBinLine.name;

const IconDeleteBinLine = Object.assign(_IconDeleteBinLine, {
  install: (app: App) => {
    app.component(_IconDeleteBinLine.name, _IconDeleteBinLine);
  }
});

export default IconDeleteBinLine;