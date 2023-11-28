import type { App } from 'vue';
import _IconMultiRectangle from './icon-multi-rectangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMultiRectangle.name = getComponentsPrefix() + _IconMultiRectangle.name;

const IconMultiRectangle = Object.assign(_IconMultiRectangle, {
  install: (app: App) => {
    app.component(_IconMultiRectangle.name, _IconMultiRectangle);
  }
});

export default IconMultiRectangle;