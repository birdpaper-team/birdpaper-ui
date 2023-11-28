import type { App } from 'vue';
import _IconCodeSLine from './icon-code-s-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCodeSLine.name = getComponentsPrefix() + _IconCodeSLine.name;

const IconCodeSLine = Object.assign(_IconCodeSLine, {
  install: (app: App) => {
    app.component(_IconCodeSLine.name, _IconCodeSLine);
  }
});

export default IconCodeSLine;