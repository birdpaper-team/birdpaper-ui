import type { App } from 'vue';
import _IconRectangleTear from './icon-rectangle-tear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangleTear.name = getComponentsPrefix() + _IconRectangleTear.name;

const IconRectangleTear = Object.assign(_IconRectangleTear, {
  install: (app: App) => {
    app.component(_IconRectangleTear.name, _IconRectangleTear);
  }
});

export default IconRectangleTear;