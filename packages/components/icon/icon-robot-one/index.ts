import type { App } from 'vue';
import _IconRobotOne from './icon-robot-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRobotOne.name = getComponentsPrefix() + _IconRobotOne.name;

const IconRobotOne = Object.assign(_IconRobotOne, {
  install: (app: App) => {
    app.component(_IconRobotOne.name, _IconRobotOne);
  }
});

export default IconRobotOne;