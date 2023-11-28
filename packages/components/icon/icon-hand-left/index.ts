import type { App } from 'vue';
import _IconHandLeft from './icon-hand-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHandLeft.name = getComponentsPrefix() + _IconHandLeft.name;

const IconHandLeft = Object.assign(_IconHandLeft, {
  install: (app: App) => {
    app.component(_IconHandLeft.name, _IconHandLeft);
  }
});

export default IconHandLeft;