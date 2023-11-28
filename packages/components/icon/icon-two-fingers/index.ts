import type { App } from 'vue';
import _IconTwoFingers from './icon-two-fingers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoFingers.name = getComponentsPrefix() + _IconTwoFingers.name;

const IconTwoFingers = Object.assign(_IconTwoFingers, {
  install: (app: App) => {
    app.component(_IconTwoFingers.name, _IconTwoFingers);
  }
});

export default IconTwoFingers;