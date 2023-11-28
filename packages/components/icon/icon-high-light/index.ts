import type { App } from 'vue';
import _IconHighLight from './icon-high-light.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHighLight.name = getComponentsPrefix() + _IconHighLight.name;

const IconHighLight = Object.assign(_IconHighLight, {
  install: (app: App) => {
    app.component(_IconHighLight.name, _IconHighLight);
  }
});

export default IconHighLight;