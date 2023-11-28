import type { App } from 'vue';
import _IconLight from './icon-light.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLight.name = getComponentsPrefix() + _IconLight.name;

const IconLight = Object.assign(_IconLight, {
  install: (app: App) => {
    app.component(_IconLight.name, _IconLight);
  }
});

export default IconLight;