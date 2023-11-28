import type { App } from 'vue';
import _IconLensAlignment from './icon-lens-alignment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLensAlignment.name = getComponentsPrefix() + _IconLensAlignment.name;

const IconLensAlignment = Object.assign(_IconLensAlignment, {
  install: (app: App) => {
    app.component(_IconLensAlignment.name, _IconLensAlignment);
  }
});

export default IconLensAlignment;