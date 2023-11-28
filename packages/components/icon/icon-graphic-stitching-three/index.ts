import type { App } from 'vue';
import _IconGraphicStitchingThree from './icon-graphic-stitching-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGraphicStitchingThree.name = getComponentsPrefix() + _IconGraphicStitchingThree.name;

const IconGraphicStitchingThree = Object.assign(_IconGraphicStitchingThree, {
  install: (app: App) => {
    app.component(_IconGraphicStitchingThree.name, _IconGraphicStitchingThree);
  }
});

export default IconGraphicStitchingThree;