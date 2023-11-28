import type { App } from 'vue';
import _IconStackLight from './icon-stack-light.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStackLight.name = getComponentsPrefix() + _IconStackLight.name;

const IconStackLight = Object.assign(_IconStackLight, {
  install: (app: App) => {
    app.component(_IconStackLight.name, _IconStackLight);
  }
});

export default IconStackLight;