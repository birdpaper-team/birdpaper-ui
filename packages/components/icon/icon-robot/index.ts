import type { App } from 'vue';
import _IconRobot from './icon-robot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRobot.name = getComponentsPrefix() + _IconRobot.name;

const IconRobot = Object.assign(_IconRobot, {
  install: (app: App) => {
    app.component(_IconRobot.name, _IconRobot);
  }
});

export default IconRobot;