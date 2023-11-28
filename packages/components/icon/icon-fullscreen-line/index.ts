import type { App } from 'vue';
import _IconFullscreenLine from './icon-fullscreen-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullscreenLine.name = getComponentsPrefix() + _IconFullscreenLine.name;

const IconFullscreenLine = Object.assign(_IconFullscreenLine, {
  install: (app: App) => {
    app.component(_IconFullscreenLine.name, _IconFullscreenLine);
  }
});

export default IconFullscreenLine;