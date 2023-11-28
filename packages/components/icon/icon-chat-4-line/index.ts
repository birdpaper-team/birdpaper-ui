import type { App } from 'vue';
import _IconChat4Line from './icon-chat-4-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChat4Line.name = getComponentsPrefix() + _IconChat4Line.name;

const IconChat4Line = Object.assign(_IconChat4Line, {
  install: (app: App) => {
    app.component(_IconChat4Line.name, _IconChat4Line);
  }
});

export default IconChat4Line;