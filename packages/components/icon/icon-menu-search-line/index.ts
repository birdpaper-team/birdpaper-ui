import type { App } from 'vue';
import _IconMenuSearchLine from './icon-menu-search-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMenuSearchLine.name = getComponentsPrefix() + _IconMenuSearchLine.name;

const IconMenuSearchLine = Object.assign(_IconMenuSearchLine, {
  install: (app: App) => {
    app.component(_IconMenuSearchLine.name, _IconMenuSearchLine);
  }
});

export default IconMenuSearchLine;