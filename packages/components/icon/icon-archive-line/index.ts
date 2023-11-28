import type { App } from 'vue';
import _IconArchiveLine from './icon-archive-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArchiveLine.name = getComponentsPrefix() + _IconArchiveLine.name;

const IconArchiveLine = Object.assign(_IconArchiveLine, {
  install: (app: App) => {
    app.component(_IconArchiveLine.name, _IconArchiveLine);
  }
});

export default IconArchiveLine;