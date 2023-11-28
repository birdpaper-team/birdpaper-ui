import type { App } from 'vue';
import _IconAviation from './icon-aviation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAviation.name = getComponentsPrefix() + _IconAviation.name;

const IconAviation = Object.assign(_IconAviation, {
  install: (app: App) => {
    app.component(_IconAviation.name, _IconAviation);
  }
});

export default IconAviation;