import type { App } from 'vue';
import _IconComponents from './icon-components.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconComponents.name = getComponentsPrefix() + _IconComponents.name;

const IconComponents = Object.assign(_IconComponents, {
  install: (app: App) => {
    app.component(_IconComponents.name, _IconComponents);
  }
});

export default IconComponents;