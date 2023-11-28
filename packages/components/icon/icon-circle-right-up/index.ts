import type { App } from 'vue';
import _IconCircleRightUp from './icon-circle-right-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleRightUp.name = getComponentsPrefix() + _IconCircleRightUp.name;

const IconCircleRightUp = Object.assign(_IconCircleRightUp, {
  install: (app: App) => {
    app.component(_IconCircleRightUp.name, _IconCircleRightUp);
  }
});

export default IconCircleRightUp;