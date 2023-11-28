import type { App } from 'vue';
import _IconArchiveDrawerLine from './icon-archive-drawer-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArchiveDrawerLine.name = getComponentsPrefix() + _IconArchiveDrawerLine.name;

const IconArchiveDrawerLine = Object.assign(_IconArchiveDrawerLine, {
  install: (app: App) => {
    app.component(_IconArchiveDrawerLine.name, _IconArchiveDrawerLine);
  }
});

export default IconArchiveDrawerLine;