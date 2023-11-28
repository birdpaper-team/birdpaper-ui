import type { App } from 'vue';
import _IconIndustrialScales from './icon-industrial-scales.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIndustrialScales.name = getComponentsPrefix() + _IconIndustrialScales.name;

const IconIndustrialScales = Object.assign(_IconIndustrialScales, {
  install: (app: App) => {
    app.component(_IconIndustrialScales.name, _IconIndustrialScales);
  }
});

export default IconIndustrialScales;