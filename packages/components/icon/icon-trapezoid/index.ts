import type { App } from 'vue';
import _IconTrapezoid from './icon-trapezoid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrapezoid.name = getComponentsPrefix() + _IconTrapezoid.name;

const IconTrapezoid = Object.assign(_IconTrapezoid, {
  install: (app: App) => {
    app.component(_IconTrapezoid.name, _IconTrapezoid);
  }
});

export default IconTrapezoid;