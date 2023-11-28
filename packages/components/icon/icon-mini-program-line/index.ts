import type { App } from 'vue';
import _IconMiniProgramLine from './icon-mini-program-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMiniProgramLine.name = getComponentsPrefix() + _IconMiniProgramLine.name;

const IconMiniProgramLine = Object.assign(_IconMiniProgramLine, {
  install: (app: App) => {
    app.component(_IconMiniProgramLine.name, _IconMiniProgramLine);
  }
});

export default IconMiniProgramLine;