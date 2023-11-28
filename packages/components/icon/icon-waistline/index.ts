import type { App } from 'vue';
import _IconWaistline from './icon-waistline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWaistline.name = getComponentsPrefix() + _IconWaistline.name;

const IconWaistline = Object.assign(_IconWaistline, {
  install: (app: App) => {
    app.component(_IconWaistline.name, _IconWaistline);
  }
});

export default IconWaistline;