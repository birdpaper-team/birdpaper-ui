import type { App } from 'vue';
import _IconRidingLine from './icon-riding-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRidingLine.name = getComponentsPrefix() + _IconRidingLine.name;

const IconRidingLine = Object.assign(_IconRidingLine, {
  install: (app: App) => {
    app.component(_IconRidingLine.name, _IconRidingLine);
  }
});

export default IconRidingLine;