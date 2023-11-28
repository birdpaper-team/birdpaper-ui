import type { App } from 'vue';
import _IconLeo from './icon-leo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeo.name = getComponentsPrefix() + _IconLeo.name;

const IconLeo = Object.assign(_IconLeo, {
  install: (app: App) => {
    app.component(_IconLeo.name, _IconLeo);
  }
});

export default IconLeo;