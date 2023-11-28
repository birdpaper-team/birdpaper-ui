import type { App } from 'vue';
import _IconParabola from './icon-parabola.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParabola.name = getComponentsPrefix() + _IconParabola.name;

const IconParabola = Object.assign(_IconParabola, {
  install: (app: App) => {
    app.component(_IconParabola.name, _IconParabola);
  }
});

export default IconParabola;