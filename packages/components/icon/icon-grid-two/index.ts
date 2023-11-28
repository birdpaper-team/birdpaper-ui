import type { App } from 'vue';
import _IconGridTwo from './icon-grid-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGridTwo.name = getComponentsPrefix() + _IconGridTwo.name;

const IconGridTwo = Object.assign(_IconGridTwo, {
  install: (app: App) => {
    app.component(_IconGridTwo.name, _IconGridTwo);
  }
});

export default IconGridTwo;