import type { App } from 'vue';
import _IconRectangle from './icon-rectangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangle.name = getComponentsPrefix() + _IconRectangle.name;

const IconRectangle = Object.assign(_IconRectangle, {
  install: (app: App) => {
    app.component(_IconRectangle.name, _IconRectangle);
  }
});

export default IconRectangle;