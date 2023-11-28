import type { App } from 'vue';
import _IconDianziqian from './icon-dianziqian.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDianziqian.name = getComponentsPrefix() + _IconDianziqian.name;

const IconDianziqian = Object.assign(_IconDianziqian, {
  install: (app: App) => {
    app.component(_IconDianziqian.name, _IconDianziqian);
  }
});

export default IconDianziqian;