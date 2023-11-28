import type { App } from 'vue';
import _IconCircleLeftUp from './icon-circle-left-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCircleLeftUp.name = getComponentsPrefix() + _IconCircleLeftUp.name;

const IconCircleLeftUp = Object.assign(_IconCircleLeftUp, {
  install: (app: App) => {
    app.component(_IconCircleLeftUp.name, _IconCircleLeftUp);
  }
});

export default IconCircleLeftUp;