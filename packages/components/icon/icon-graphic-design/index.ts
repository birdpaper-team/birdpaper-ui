import type { App } from 'vue';
import _IconGraphicDesign from './icon-graphic-design.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGraphicDesign.name = getComponentsPrefix() + _IconGraphicDesign.name;

const IconGraphicDesign = Object.assign(_IconGraphicDesign, {
  install: (app: App) => {
    app.component(_IconGraphicDesign.name, _IconGraphicDesign);
  }
});

export default IconGraphicDesign;