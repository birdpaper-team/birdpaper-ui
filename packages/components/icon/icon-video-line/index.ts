import type { App } from 'vue';
import _IconVideoLine from './icon-video-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideoLine.name = getComponentsPrefix() + _IconVideoLine.name;

const IconVideoLine = Object.assign(_IconVideoLine, {
  install: (app: App) => {
    app.component(_IconVideoLine.name, _IconVideoLine);
  }
});

export default IconVideoLine;