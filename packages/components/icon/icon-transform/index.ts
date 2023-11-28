import type { App } from 'vue';
import _IconTransform from './icon-transform.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransform.name = getComponentsPrefix() + _IconTransform.name;

const IconTransform = Object.assign(_IconTransform, {
  install: (app: App) => {
    app.component(_IconTransform.name, _IconTransform);
  }
});

export default IconTransform;