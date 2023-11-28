import type { App } from 'vue';
import _IconAlignCenter from './icon-align-center.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignCenter.name = getComponentsPrefix() + _IconAlignCenter.name;

const IconAlignCenter = Object.assign(_IconAlignCenter, {
  install: (app: App) => {
    app.component(_IconAlignCenter.name, _IconAlignCenter);
  }
});

export default IconAlignCenter;