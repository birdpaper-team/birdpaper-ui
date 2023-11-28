import type { App } from 'vue';
import _IconMessage2Line from './icon-message-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessage2Line.name = getComponentsPrefix() + _IconMessage2Line.name;

const IconMessage2Line = Object.assign(_IconMessage2Line, {
  install: (app: App) => {
    app.component(_IconMessage2Line.name, _IconMessage2Line);
  }
});

export default IconMessage2Line;