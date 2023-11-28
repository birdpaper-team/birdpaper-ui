import type { App } from 'vue';
import _IconGraphicStitchingFour from './icon-graphic-stitching-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGraphicStitchingFour.name = getComponentsPrefix() + _IconGraphicStitchingFour.name;

const IconGraphicStitchingFour = Object.assign(_IconGraphicStitchingFour, {
  install: (app: App) => {
    app.component(_IconGraphicStitchingFour.name, _IconGraphicStitchingFour);
  }
});

export default IconGraphicStitchingFour;