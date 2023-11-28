import type { App } from 'vue';
import _IconChat2Line from './icon-chat-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChat2Line.name = getComponentsPrefix() + _IconChat2Line.name;

const IconChat2Line = Object.assign(_IconChat2Line, {
  install: (app: App) => {
    app.component(_IconChat2Line.name, _IconChat2Line);
  }
});

export default IconChat2Line;