import type { App } from 'vue';
import _IconNewDianziqian from './icon-new-dianziqian.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewDianziqian.name = getComponentsPrefix() + _IconNewDianziqian.name;

const IconNewDianziqian = Object.assign(_IconNewDianziqian, {
  install: (app: App) => {
    app.component(_IconNewDianziqian.name, _IconNewDianziqian);
  }
});

export default IconNewDianziqian;