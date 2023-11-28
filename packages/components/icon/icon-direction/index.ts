import type { App } from 'vue';
import _IconDirection from './icon-direction.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDirection.name = getComponentsPrefix() + _IconDirection.name;

const IconDirection = Object.assign(_IconDirection, {
  install: (app: App) => {
    app.component(_IconDirection.name, _IconDirection);
  }
});

export default IconDirection;