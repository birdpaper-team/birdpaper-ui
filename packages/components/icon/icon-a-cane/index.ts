import type { App } from 'vue';
import _IconACane from './icon-a-cane.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconACane.name = getComponentsPrefix() + _IconACane.name;

const IconACane = Object.assign(_IconACane, {
  install: (app: App) => {
    app.component(_IconACane.name, _IconACane);
  }
});

export default IconACane;