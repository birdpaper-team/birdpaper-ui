import type { App } from 'vue';
import _IconIntersection from './icon-intersection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIntersection.name = getComponentsPrefix() + _IconIntersection.name;

const IconIntersection = Object.assign(_IconIntersection, {
  install: (app: App) => {
    app.component(_IconIntersection.name, _IconIntersection);
  }
});

export default IconIntersection;