import type { App } from 'vue';
import _IconGraphicStitching from './icon-graphic-stitching.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGraphicStitching.name = getComponentsPrefix() + _IconGraphicStitching.name;

const IconGraphicStitching = Object.assign(_IconGraphicStitching, {
  install: (app: App) => {
    app.component(_IconGraphicStitching.name, _IconGraphicStitching);
  }
});

export default IconGraphicStitching;