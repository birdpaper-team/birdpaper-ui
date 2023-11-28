import type { App } from 'vue';
import _IconChat3Line from './icon-chat-3-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChat3Line.name = getComponentsPrefix() + _IconChat3Line.name;

const IconChat3Line = Object.assign(_IconChat3Line, {
  install: (app: App) => {
    app.component(_IconChat3Line.name, _IconChat3Line);
  }
});

export default IconChat3Line;