import type { App } from 'vue';
import _IconRectangularCircularSeparation from './icon-rectangular-circular-separation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRectangularCircularSeparation.name = getComponentsPrefix() + _IconRectangularCircularSeparation.name;

const IconRectangularCircularSeparation = Object.assign(_IconRectangularCircularSeparation, {
  install: (app: App) => {
    app.component(_IconRectangularCircularSeparation.name, _IconRectangularCircularSeparation);
  }
});

export default IconRectangularCircularSeparation;