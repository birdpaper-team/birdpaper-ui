import type { App } from 'vue';
import _IconSinusoid from './icon-sinusoid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSinusoid.name = getComponentsPrefix() + _IconSinusoid.name;

const IconSinusoid = Object.assign(_IconSinusoid, {
  install: (app: App) => {
    app.component(_IconSinusoid.name, _IconSinusoid);
  }
});

export default IconSinusoid;