import type { App } from 'vue';
import _IconPlayListAddLine from './icon-play-list-add-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayListAddLine.name = getComponentsPrefix() + _IconPlayListAddLine.name;

const IconPlayListAddLine = Object.assign(_IconPlayListAddLine, {
  install: (app: App) => {
    app.component(_IconPlayListAddLine.name, _IconPlayListAddLine);
  }
});

export default IconPlayListAddLine;