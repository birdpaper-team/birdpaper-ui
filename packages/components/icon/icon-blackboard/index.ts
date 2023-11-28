import type { App } from 'vue';
import _IconBlackboard from './icon-blackboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlackboard.name = getComponentsPrefix() + _IconBlackboard.name;

const IconBlackboard = Object.assign(_IconBlackboard, {
  install: (app: App) => {
    app.component(_IconBlackboard.name, _IconBlackboard);
  }
});

export default IconBlackboard;