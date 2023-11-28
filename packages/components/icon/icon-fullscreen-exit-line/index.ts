import type { App } from 'vue';
import _IconFullscreenExitLine from './icon-fullscreen-exit-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFullscreenExitLine.name = getComponentsPrefix() + _IconFullscreenExitLine.name;

const IconFullscreenExitLine = Object.assign(_IconFullscreenExitLine, {
  install: (app: App) => {
    app.component(_IconFullscreenExitLine.name, _IconFullscreenExitLine);
  }
});

export default IconFullscreenExitLine;