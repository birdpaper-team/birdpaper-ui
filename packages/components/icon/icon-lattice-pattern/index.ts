import type { App } from 'vue';
import _IconLatticePattern from './icon-lattice-pattern.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLatticePattern.name = getComponentsPrefix() + _IconLatticePattern.name;

const IconLatticePattern = Object.assign(_IconLatticePattern, {
  install: (app: App) => {
    app.component(_IconLatticePattern.name, _IconLatticePattern);
  }
});

export default IconLatticePattern;